/* Laboratorios interactivos — Red Team Senior */
(function () {
  const $ = (s, r = document) => r.querySelector(s);
  const $$ = (s, r = document) => [...r.querySelectorAll(s)];
  const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
  const store = {
    get(k, d) { try { const v = localStorage.getItem("rts." + k); return v ? JSON.parse(v) : d; } catch (e) { return d; } },
    set(k, v) { try { localStorage.setItem("rts." + k, JSON.stringify(v)); } catch (e) {} }
  };
  const shuffle = (a) => { a = a.slice(); for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(Math.random() * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; } return a; };

  const LABS = {};

  /* Utilidad: laboratorio de clasificación (escenario → opción correcta) */
  function clasificador(el, { casos, opciones }) {
    let ok = 0, n = 0;
    el.innerHTML = `<div class="lab-score">Aciertos: <b class="sc">0</b> / ${casos.length}</div>` + casos.map((c, i) => `
      <div class="card cl-item" data-i="${i}"><p>${esc(c.txt)}</p>
      <div class="btns">${opciones.map((o) => `<button data-v="${esc(o.v)}" class="btn sm">${esc(o.l)}</button>`).join("")}</div>
      <p class="fb muted"></p></div>`).join("");
    $$(".cl-item", el).forEach((card) => card.addEventListener("click", (e) => {
      const b = e.target.closest("button"); if (!b || card.dataset.done) return;
      const c = casos[card.dataset.i]; card.dataset.done = 1; n++;
      const right = b.dataset.v === c.ok; if (right) ok++;
      $$("button", card).forEach((x) => { x.disabled = true; if (x.dataset.v === c.ok) x.classList.add("good"); });
      if (!right) b.classList.add("bad");
      $(".fb", card).innerHTML = (right ? "✅ " : "❌ ") + esc(c.exp);
      $(".sc", el).textContent = ok;
    }));
  }

  /* 1 · Ordenar las fases de un engagement de Red Team */
  LABS.killchain = {
    titulo: "Ordena el engagement", icono: "🧭", modulo: 1, nivel: "Estrategia Red Team",
    desc: "Arrastra/sube y baja las fases hasta reconstruir el orden de una operación de Red Team.",
    render(el) {
      const correcto = [
        ["Scoping", "Definir crown jewels, flags, ROE y autorización"],
        ["Reconocimiento (OSINT)", "Personas, tecnología, superficie y breach data"],
        ["Acceso inicial", "Phishing, exposición externa o acceso físico"],
        ["Establecer C2", "Beacon, infraestructura y persistencia mínima"],
        ["Post-explotación", "Escalada, Active Directory y movimiento lateral"],
        ["Objetivo (actions on objective)", "Alcanzar las crown jewels y demostrar impacto"],
        ["Informe y debrief", "Narrativa, remediación, purple team y clean-up"]
      ];
      let orden = shuffle(correcto.map((_, i) => i));
      const draw = () => {
        el.innerHTML = `<div class="card"><p class="muted">Ordena de la primera (arriba) a la última (abajo) fase.</p>
          <ol class="kc-list">${orden.map((idx, pos) => `<li class="kc-item"><div><b>${esc(correcto[idx][0])}</b><span>${esc(correcto[idx][1])}</span></div>
            <div class="kc-btns"><button class="btn xs" data-up="${pos}" ${pos === 0 ? "disabled" : ""}>↑</button><button class="btn xs" data-down="${pos}" ${pos === orden.length - 1 ? "disabled" : ""}>↓</button></div></li>`).join("")}</ol>
          <div class="btns"><button class="btn primary" id="kc-check">Comprobar orden</button><button class="btn ghost" id="kc-shuffle">🔀 Mezclar</button></div><p class="kc-res"></p></div>`;
        $$("[data-up]", el).forEach((b) => b.onclick = () => { const p = +b.dataset.up; [orden[p - 1], orden[p]] = [orden[p], orden[p - 1]]; draw(); });
        $$("[data-down]", el).forEach((b) => b.onclick = () => { const p = +b.dataset.down; [orden[p + 1], orden[p]] = [orden[p], orden[p + 1]]; draw(); });
        $("#kc-shuffle", el).onclick = () => { orden = shuffle(orden); draw(); };
        $("#kc-check", el).onclick = () => {
          const aciertos = orden.filter((idx, pos) => idx === pos).length;
          $$(".kc-item", el).forEach((li, pos) => { li.classList.remove("good", "bad"); li.classList.add(orden[pos] === pos ? "good" : "bad"); });
          $(".kc-res", el).innerHTML = aciertos === correcto.length ? "✅ <b>¡Orden perfecto!</b> Así fluye una operación de Red Team." : `Llevas <b>${aciertos}/${correcto.length}</b> en su sitio. Ajusta las rojas y vuelve a comprobar.`;
        };
      };
      draw();
    }
  };

  /* 2 · Mapear técnicas a tácticas de MITRE ATT&CK */
  LABS.attack = {
    titulo: "Mapea a MITRE ATT&CK", icono: "🎯", modulo: 2, nivel: "Estrategia Red Team",
    desc: "Lee la acción del atacante y elige a qué táctica de ATT&CK pertenece.",
    render(el) {
      clasificador(el, {
        opciones: [{ v: "ia", l: "Initial Access" }, { v: "exec", l: "Execution" }, { v: "pers", l: "Persistence" }, { v: "de", l: "Defense Evasion" }, { v: "cred", l: "Credential Access" }, { v: "lat", l: "Lateral Movement" }, { v: "exfil", l: "Exfiltration" }],
        casos: shuffle([
          { txt: "Envías un correo de spearphishing con un adjunto malicioso.", ok: "ia", exp: "Initial Access (T1566 Phishing)." },
          { txt: "Inyectas tu beacon dentro de explorer.exe para camuflarte.", ok: "de", exp: "Defense Evasion (T1055 Process Injection)." },
          { txt: "Pides tickets de cuentas de servicio y los crackeas offline.", ok: "cred", exp: "Credential Access (T1558.003 Kerberoasting)." },
          { txt: "Creas una tarea programada para sobrevivir a reinicios.", ok: "pers", exp: "Persistence (T1053 Scheduled Task)." },
          { txt: "Usas WinRM con una cuenta válida para ejecutar en otro servidor.", ok: "lat", exp: "Lateral Movement (T1021 Remote Services)." },
          { txt: "Lanzas un comando de PowerShell en el host comprometido.", ok: "exec", exp: "Execution (T1059.001 PowerShell)." },
          { txt: "Sacas una muestra de datos por el propio canal C2.", ok: "exfil", exp: "Exfiltration (T1041 Exfil over C2)." },
          { txt: "Cegas ETW para que el EDR deje de recibir telemetría.", ok: "de", exp: "Defense Evasion: interferir en las defensas." },
          { txt: "Reutilizas un ticket Kerberos robado de memoria (Pass-the-Ticket).", ok: "lat", exp: "Soporta el movimiento lateral con credenciales robadas." },
          { txt: "Haces DCSync para replicar el hash de krbtgt del DC.", ok: "cred", exp: "Credential Access: obtención de credenciales del dominio." }
        ])
      });
    }
  };

  /* 3 · Constructor de infraestructura / perfil C2 */
  LABS.c2 = {
    titulo: "Diseña tu infraestructura C2", icono: "📡", modulo: 7, nivel: "Evasión y C2",
    desc: "Activa opciones y observa cómo mejora (o empeora) la resiliencia y el sigilo de tu C2.",
    render(el) {
      const opts = [
        { k: "redir", f: "Redirectores delante del team server", good: 2, d: "Ocultan y protegen al operador; se rotan si los queman." },
        { k: "https", f: "HTTPS con certificado válido", good: 2, d: "Cifra el C2 y da apariencia normal." },
        { k: "cat", f: "Dominio envejecido y categorizado", good: 2, d: "Reputación: evita bloqueos automáticos." },
        { k: "profile", f: "Malleable profile a medida", good: 2, d: "Disfraza el tráfico del beacon de algo legítimo." },
        { k: "sleep", f: "Sleep largo con jitter", good: 2, d: "Rompe el patrón de beaconing; imita tráfico humano." },
        { k: "sep", f: "Separar infra de phishing y de C2", good: 1, d: "Compartimentación: quemar una no tumba la otra." },
        { k: "redun", f: "Redirectores y dominios de reserva", good: 1, d: "Redundancia para rotar sin perder la operación." },
        { k: "direct", f: "Beacon conectado directo a tu IP", good: -3, d: "☠️ El Blue Team ve tu IP y te quema al instante." },
        { k: "fast", f: "Check-in cada 1 segundo, sin jitter", good: -2, d: "☠️ Patrón regular y ruidoso: un cartel de neón." },
        { k: "newdom", f: "Dominio recién creado y sin categorizar", good: -1, d: "⚠️ Baja reputación: bloqueo automático probable." }
      ];
      el.innerHTML = `<div class="card">
        <div class="btns" style="flex-direction:column;align-items:flex-start;gap:6px">${opts.map((o) => `<label class="chk"><input type="checkbox" data-k="${o.k}"> ${esc(o.f)}</label>`).join("")}</div>
        <div class="cvss-out" style="margin-top:14px"><div class="score"><b id="c2-score">0</b><span id="c2-sev">Sin configurar</span></div></div>
        <div id="c2-expl"></div>
      </div>`;
      const upd = () => {
        const sel = opts.filter((o) => $(`input[data-k="${o.k}"]`, el).checked);
        const score = sel.reduce((a, o) => a + o.good, 0);
        const sev = score <= 0 ? ["🔴 Te queman enseguida", "crit"] : score < 5 ? ["🟠 Mejorable", "med"] : score < 9 ? ["🟡 Sólida", "high"] : ["🟢 Resiliente y sigilosa", "low"];
        $("#c2-score", el).textContent = score;
        $("#c2-sev", el).innerHTML = `<span class="sev ${sev[1]}">${sev[0]}</span>`;
        $("#c2-expl", el).innerHTML = sel.length ? "<ul>" + sel.map((o) => `<li>${o.good < 0 ? "❌" : "✅"} <b>${esc(o.f)}</b> — ${esc(o.d)}</li>`).join("") + "</ul>" : '<p class="muted">Marca opciones para diseñar tu infraestructura.</p>';
      };
      $$("input", el).forEach((i) => i.addEventListener("input", upd));
      upd();
    }
  };

  /* 4 · Clasificar técnicas de evasión de EDR */
  LABS.evasion = {
    titulo: "¿Qué evasión es?", icono: "🫥", modulo: 9, nivel: "Evasión y C2",
    desc: "Identifica el sensor o la técnica de evasión que describe cada situación.",
    render(el) {
      clasificador(el, {
        opciones: [{ v: "amsi", l: "AMSI" }, { v: "etw", l: "ETW" }, { v: "hook", l: "Unhooking" }, { v: "lol", l: "LOLBAS" }, { v: "inj", l: "Process injection" }],
        casos: shuffle([
          { txt: "Silencias el componente que escanea PowerShell justo antes de ejecutar.", ok: "amsi", exp: "AMSI: el 'micrófono' de los scripts." },
          { txt: "Interrumpes la telemetría que el EDR escucha sobre lo que ya ocurre.", ok: "etw", exp: "ETW: cegar el registro de eventos." },
          { txt: "Restauras las funciones originales de Windows para esquivar al EDR en memoria.", ok: "hook", exp: "Unhooking de los hooks de userland." },
          { txt: "Usas certutil para descargar un fichero en vez de un .exe propio.", ok: "lol", exp: "LOLBAS: abusar de binarios legítimos firmados." },
          { txt: "Metes tu código dentro de explorer.exe para camuflarte.", ok: "inj", exp: "Process injection en un proceso legítimo." },
          { txt: "Ejecutas un HTA con mshta.exe, firmado por Microsoft.", ok: "lol", exp: "LOLBAS: mshta es un binario nativo de confianza." },
          { txt: "Haces que la función que escanea scripts devuelva siempre 'limpio'.", ok: "amsi", exp: "AMSI bypass: neutralizar el escaneo." },
          { txt: "Arrancas un proceso legítimo y lo 'vacías' para alojar tu payload.", ok: "inj", exp: "Process hollowing, una variante de inyección." }
        ])
      });
    }
  };

  /* 5 · Leer una ruta de BloodHound */
  LABS.bloodhound = {
    titulo: "Lee la ruta de BloodHound", icono: "🐺", modulo: 12, nivel: "Active Directory",
    desc: "Ante cada relación del grafo, decide qué significa para la escalada.",
    render(el) {
      clasificador(el, {
        opciones: [{ v: "si", l: "Me da control / escala" }, { v: "no", l: "No ayuda directamente" }],
        casos: shuffle([
          { txt: "PACO -[ForceChangePassword]-> ADMIN_BACKUP", ok: "si", exp: "Puedes cambiarle la contraseña: control de esa cuenta." },
          { txt: "SOPORTE -[GenericAll]-> SRV-FICHEROS", ok: "si", exp: "GenericAll = control total del objeto." },
          { txt: "USUARIO -[MemberOf]-> Grupo 'Lectores de informes'", ok: "no", exp: "Pertenecer a un grupo sin privilegios no escala por sí solo." },
          { txt: "DEV01 -[AdminTo]-> SRV-WEB (donde hay sesión de un Domain Admin)", ok: "si", exp: "Admin local + sesión de DA = robo de credenciales hacia el dominio." },
          { txt: "GRUPO_TI -[WriteDACL]-> OU_Finanzas", ok: "si", exp: "WriteDACL permite concederte a ti mismo permisos: escala." },
          { txt: "ANA -[HasSession]-> su propio portátil", ok: "no", exp: "Tener sesión en tu propio equipo no aporta escalada." },
          { txt: "SVC_SQL -[MemberOf]-> Domain Admins", ok: "si", exp: "Si crackeas esa cuenta de servicio (Kerberoasting), eres DA." },
          { txt: "INVITADO -[CanRDP]-> Kiosco sin privilegios", ok: "no", exp: "RDP a un equipo sin valor no acerca al objetivo." }
        ])
      });
    }
  };

  /* 6 · Elegir el ataque Kerberos / AD correcto */
  LABS.kerberos = {
    titulo: "Elige el ataque de AD", icono: "🎫", modulo: 13, nivel: "Active Directory",
    desc: "Lee la situación y elige la técnica de Active Directory que corresponde.",
    render(el) {
      clasificador(el, {
        opciones: [{ v: "kroast", l: "Kerberoasting" }, { v: "asrep", l: "AS-REP roasting" }, { v: "dcsync", l: "DCSync" }, { v: "golden", l: "Golden Ticket" }, { v: "adcs", l: "ADCS (ESC)" }, { v: "pth", l: "Pass-the-Hash" }],
        casos: shuffle([
          { txt: "Con un usuario normal, pides tickets de cuentas de servicio y los crackeas offline.", ok: "kroast", exp: "Kerberoasting." },
          { txt: "Una cuenta tiene la preautenticación desactivada y obtienes material para crackear sin credenciales.", ok: "asrep", exp: "AS-REP roasting." },
          { txt: "Con permisos de replicación, pides al DC el hash de krbtgt.", ok: "dcsync", exp: "DCSync." },
          { txt: "Con el hash de krbtgt forjas un TGT válido para cualquier usuario.", ok: "golden", exp: "Golden Ticket." },
          { txt: "Una plantilla de certificado mal configurada te deja pedir un cert como un admin.", ok: "adcs", exp: "Abuso de ADCS (ESC)." },
          { txt: "Tienes el hash NTLM y te autenticas sin conocer la contraseña en claro.", ok: "pth", exp: "Pass-the-Hash." },
          { txt: "Certipy encuentra una plantilla vulnerable y pides un certificado de otro usuario.", ok: "adcs", exp: "ADCS: Certipy abusa de ESC." },
          { txt: "Quieres persistencia total aunque cambien las contraseñas de los admins.", ok: "golden", exp: "Golden Ticket (persistencia con krbtgt)." }
        ])
      });
    }
  };

  /* 7 · Simulador de entrevista técnica SENIOR */
  LABS.entrevista = {
    titulo: "Simulador de entrevista senior", icono: "🎤", modulo: 19, nivel: "Liderazgo y entrevista",
    desc: "Preguntas técnicas y de criterio de nivel senior. Responde en voz alta, controla el tiempo y compara con la respuesta modelo.",
    render(el) {
      const Q = [
        ["¿Qué diferencia un Red Team de un pentest?", "El pentest es amplio y superficial (encuentra todos los fallos de un sistema). El Red Team es profundo, sigiloso y dirigido por objetivos: emula a un adversario real para llegar a las crown jewels y, además, medir la detección y respuesta del Blue Team."],
        ["¿Qué es MITRE ATT&CK y cómo lo usas en un engagement?", "Es el catálogo común de TTP de adversarios. Lo uso para planificar la emulación (qué técnicas reproducir según la amenaza), para etiquetar cada acción durante la operación y, en el informe, para mostrar técnica a técnica qué detectó el cliente (base del purple team, con ATT&CK Navigator)."],
        ["Explícame Kerberoasting paso a paso.", "Cualquier usuario del dominio puede pedir un Service Ticket de una cuenta con SPN. Ese ticket va cifrado con el hash de la contraseña de la cuenta de servicio. Lo extraigo (Rubeus/GetUserSPNs) y lo crackeo offline con hashcat. Funciona por contraseñas de servicio débiles; es sigiloso porque el crackeo no genera logins fallidos. Defensa: contraseñas fuertes o gMSA."],
        ["¿Qué es DCSync y por qué es tan grave?", "Abusa de la replicación de AD: con permisos de DC, le pido al controlador que me replique hashes, incluido el de krbtgt. No necesito entrar en el DC físicamente. Con krbtgt puedo forjar Golden Tickets, logrando control total y persistente del dominio."],
        ["¿Cómo salta un atacante el MFA hoy?", "Con un ataque Adversary-in-the-Middle (p. ej. Evilginx): un proxy entre la víctima y el servicio real captura usuario, contraseña y, tras pasar el MFA, la cookie de sesión. Con esa cookie ya está autenticado. Defensa resistente: passkeys/FIDO2 y acceso condicional."],
        ["Diseña la infraestructura C2 de una operación de 4 semanas.", "Capas: team server oculto detrás de varios redirectores, sobre HTTPS con dominios envejecidos y categorizados. Malleable profile a medida y sleep largo con jitter para mezclarme. Separo la infra de phishing de la de C2, con redundancia para rotar si queman piezas, y lo levanto con IaC para rehacerlo rápido."],
        ["¿Cómo evade un operador un EDR moderno?", "El EDR detecta por comportamiento, no por firmas, así que cambio el 'cómo': prefiero LOLBAS, ejecuto en memoria, neutralizo sensores (AMSI y ETW), y uso unhooking o syscalls directas para esquivar los hooks de userland. Sobre todo, no genero el patrón que dispara la alerta y minimizo acciones ruidosas."],
        ["¿Qué es OPSEC y dame un ejemplo concreto de operador?", "Es operar minimizando mi huella asumiendo que me observan. Ejemplo: en vez de un whoami /all o un net group 'Domain Admins' por reflejo, pienso si ese comando dispara una regla; uso enumeración selectiva y sigilosa, y registro cada acción para la deconfliction."],
        ["¿Exfiltrarías toda la base de datos de clientes? Justifícalo.", "No. El objetivo es demostrar el impacto, no robar. Exfiltro una muestra mínima acordada con la White Cell o un fichero canario, minimizo el manejo de datos reales, lo hago despacio para no disparar DLP, y destruyo lo extraído tras el informe."],
        ["¿Cómo gestionas el riesgo de operar en producción (TIBER)?", "No lanzo exploits que puedan tumbar servicios sin acordarlo; mantengo trazabilidad total con marcas de tiempo; tengo canal de deconfliction con la White Cell; y planeo el clean-up para eliminar beacons, persistencias y cuentas al terminar. El negocio no puede pararse por el ejercicio."],
        ["¿Cómo traduces un hallazgo técnico a impacto de negocio?", "Cambio 'Kerberoasting en 12 SPN' por 'credenciales de servicio débiles permitieron tomar el control del dominio'. La dirección decide sobre dinero, clientes, cumplimiento y reputación, no sobre jerga. En el informe acompaño cada hallazgo de su consecuencia de negocio y su remediación priorizada."],
        ["¿Qué es un ejercicio purple team y qué aporta?", "Red y Blue trabajando juntos: reproduzco cada técnica (mapeada a ATT&CK) y el Blue ajusta sus detecciones en directo. Aporta que el cliente no solo tapa agujeros, sino que aprende a ver al próximo atacante. Es, para mí, donde está el mayor valor del ejercicio."],
        ["¿Cómo ayudarías a un junior atascado en una operación?", "Le enseño el porqué, no solo el comando: le ayudo a estructurar el problema (qué sé, qué me falta, qué opción es menos ruidosa) y le dejo intentarlo, revisando después con feedback concreto. Multiplicar al equipo es parte del rol senior."],
        ["Un compañero quiere tocar un sistema fuera del alcance. ¿Qué haces?", "Paro, lo documento y lo consulto con el responsable del engagement y la White Cell. Salirse del scope puede ser ilegal y romper la confianza del cliente, aunque técnicamente sea tentador. Saber decir 'paremos' es señal de seniority."],
        ["¿Qué certificaciones tienes o preparas y por qué?", "Explico una ruta con criterio: OSCP como base de pentest práctico, CRTO por su foco en Red Team Ops (C2, evasión y AD, muy alineado con este puesto) y, de cara al futuro, OSEP/CRTL para evasión avanzada y liderazgo. Busco validar práctica ofensiva y metodología, no coleccionar siglas."],
        ["Cuéntame tu mejor engagement o reto técnico (usa STAR).", "Estructura con STAR: Situación (el contexto y el objetivo), Tarea (tu responsabilidad concreta), Acción (qué hiciste tú, con herramientas y decisiones OPSEC) y Resultado (el impacto demostrado y lo aprendido). Sé concreto, honesto y destaca tu criterio, no solo la herramienta."]
      ];
      let pool = shuffle(Q), idx = 0, t = 0, timer = null;
      el.innerHTML = `<div class="card sim">
        <div class="sim-top"><span class="tag2" id="s-n"></span><span class="sim-time" id="s-t">0:00</span></div>
        <h3 id="s-q"></h3>
        <div class="btns"><button class="btn" id="s-start">▶ Responder</button><button class="btn ghost" id="s-rev">💡 Ver respuesta modelo</button><button class="btn primary" id="s-next">Siguiente →</button></div>
        <div id="s-ans" class="callout tip hidden"></div>
      </div>`;
      const fmt = (s) => `${Math.floor(s / 60)}:${String(s % 60).padStart(2, "0")}`;
      const stop = () => { clearInterval(timer); timer = null; };
      const show = () => {
        stop(); t = 0; $("#s-t", el).textContent = "0:00";
        $("#s-n", el).textContent = `Pregunta ${idx + 1} / ${pool.length}`;
        $("#s-q", el).textContent = pool[idx][0];
        $("#s-ans", el).classList.add("hidden"); $("#s-ans", el).innerHTML = "<b>Respuesta modelo:</b> " + esc(pool[idx][1]);
      };
      $("#s-start", el).onclick = () => { stop(); timer = setInterval(() => { t++; $("#s-t", el).textContent = fmt(t); }, 1000); };
      $("#s-rev", el).onclick = () => { $("#s-ans", el).classList.toggle("hidden"); };
      $("#s-next", el).onclick = () => { idx++; if (idx >= pool.length) { pool = shuffle(Q); idx = 0; } show(); };
      show();
    }
  };

  window.LABS = LABS;
  window.LAB_UTILS = { $, $$, esc, store, shuffle };
})();
