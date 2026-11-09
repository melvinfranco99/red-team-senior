/* Contenido del curso Red Team Senior: niveles, módulos, tests, glosario y chuleta */
window.NIVELES = [
  { id: "Estrategia Red Team", color: "basico", desc: "Qué significa ser senior, emulación de adversarios, MITRE ATT&CK, inteligencia de amenazas y marcos regulados (TIBER-EU, DORA)." },
  { id: "Acceso inicial", color: "intermedio", desc: "OSINT de la organización, ingeniería social y phishing moderno (MFA), y desarrollo de payloads de acceso inicial." },
  { id: "Evasión y C2", color: "recon", desc: "Infraestructura de mando y control, frameworks C2, evasión de AV/EDR, ejecución sigilosa y OPSEC del operador." },
  { id: "Active Directory", color: "profesional", desc: "Dominios y Kerberos, enumeración con BloodHound, ataques Kerberos, ADCS, DCSync y dominación del dominio." },
  { id: "Cloud y movimiento", color: "avanzado", desc: "Movimiento lateral y persistencia, nube híbrida (Entra ID / Azure), AWS y exfiltración de datos con OPSEC." },
  { id: "Liderazgo y entrevista", color: "entrevista", desc: "Informe ejecutivo, debrief, purple team, gestión del equipo, mentoría y la entrevista técnica senior." }
];

window.MODULOS = [
/* ═══════════════════ ESTRATEGIA RED TEAM ═══════════════════ */
{
  id: 1, video: "01", nivel: "Estrategia Red Team", lab: "killchain", min: 24,
  titulo: "De Junior a Senior: el cambio de rol",
  resumen: "Qué se espera de un senior: criterio, autonomía, OPSEC, liderazgo técnico y responsabilidad sobre el engagement, no solo lanzar herramientas.",
  objetivos: ["Entender qué diferencia a un senior de un junior en Red Team", "Conocer las fases de un engagement de Red Team de principio a fin", "Interiorizar la mentalidad de sigilo (OPSEC) y de impacto de negocio", "Saber qué responsabilidades nuevas asume un senior"],
  secciones: [
    { h: "1. La analogía del cirujano", html: `<p>Un junior es como un <strong>residente</strong>: sabe usar el bisturí y seguir el procedimiento. Un <strong>senior</strong> es el cirujano jefe: decide <em>si hay que operar, cómo, cuándo parar</em> y responde del resultado ante el paciente.</p>
      <div class="grid3">
        <div class="mini-card"><span class="tag c">Junior</span><h4>Ejecuta</h4><p>Lanza herramientas, valida hallazgos, documenta. Trabaja <strong>dentro</strong> de un plan que le dan.</p></div>
        <div class="mini-card"><span class="tag i">Senior</span><h4>Decide</h4><p>Diseña el ataque, elige el riesgo asumible, improvisa cuando algo falla y protege al cliente y al equipo.</p></div>
        <div class="mini-card"><span class="tag d">Lead</span><h4>Responde</h4><p>Define objetivos con el cliente, lidera a otros operadores y responde del impacto y de la ética.</p></div>
      </div>
      <p>En la entrevista senior no te preguntan <em>"¿qué hace nmap -sV?"</em>, sino <em>"¿cómo plantearías una operación de 4 semanas contra un banco sin que lo detecten?"</em>. Se evalúa <strong>criterio</strong>, no memoria.</p>` },
    { h: "2. Las cinco competencias de un senior", html: `<table class="tbl"><tr><th>Competencia</th><th>Qué significa en el día a día</th></tr>
      <tr><td><strong>Criterio técnico</strong></td><td>Elegir la técnica de menor ruido que logre el objetivo, no la más vistosa.</td></tr>
      <tr><td><strong>OPSEC</strong></td><td>Operar sin ser detectado: cada acción deja huella; el senior la minimiza y la anticipa.</td></tr>
      <tr><td><strong>Autonomía</strong></td><td>Desbloquearse solo: si un exploit falla, buscar la siguiente vía sin parar la operación.</td></tr>
      <tr><td><strong>Comunicación</strong></td><td>Traducir un hallazgo técnico a impacto de negocio para un comité de dirección.</td></tr>
      <tr><td><strong>Liderazgo</strong></td><td>Repartir el trabajo del equipo, revisar a los juniors y sostener la calidad del informe.</td></tr></table>
      <div class="callout">El salto de junior a senior es, sobre todo, pasar de <strong>"¿funciona?"</strong> a <strong>"¿funciona, es sigiloso, es ético y aporta valor al cliente?"</strong>.</div>` },
    { h: "3. Anatomía de un engagement de Red Team", html: `<p>Una operación de Red Team no es un escaneo: es una <strong>campaña</strong> de semanas que imita a un atacante real. Estas son sus fases:</p>
      <div class="flow">
        <div class="fstep"><b>1 · Scoping</b><span>Objetivos (crown jewels), reglas (ROE), amenaza a emular</span></div>
        <div class="fstep"><b>2 · Recon</b><span>OSINT de personas, tecnología y superficie</span></div>
        <div class="fstep"><b>3 · Acceso inicial</b><span>Phishing, exposición externa, físico</span></div>
        <div class="fstep"><b>4 · Establecer C2</b><span>Beacon, persistencia, infraestructura</span></div>
        <div class="fstep"><b>5 · Post-explotación</b><span>Escalada, AD, movimiento lateral</span></div>
        <div class="fstep"><b>6 · Objetivo (actions on objective)</b><span>Alcanzar las crown jewels, demostrar impacto</span></div>
        <div class="fstep"><b>7 · Informe y debrief</b><span>Narrativa, remediación, purple team</span></div>
      </div>
      <p class="muted">Compáralo con el <strong>pentest</strong>: amplio pero superficial ("encuentra todos los fallos de esta app"). El Red Team es estrecho y profundo ("llega a la base de datos de clientes como lo haría el grupo APT que nos preocupa, y veamos si el Blue Team lo detecta").</p>` },
    { h: "4. La mentalidad OPSEC", html: `<p><strong>OPSEC</strong> (Operational Security) es la obsesión del senior: <em>asumir que te observan</em> y no dar pistas. Un junior lanza un <code>nmap -T4</code> ruidoso; un senior sabe que eso enciende todas las alarmas.</p>
      <table class="tbl"><tr><th>Acción ruidosa (junior)</th><th>Alternativa sigilosa (senior)</th></tr>
      <tr><td>Escaneo masivo con Nmap <code>-T4 -p-</code></td><td>Enumeración selectiva, lenta y desde el propio host comprometido</td></tr>
      <tr><td>Volcar toda la memoria con Mimikatz en disco</td><td>Técnicas en memoria, cargar solo lo necesario, evitar tocar disco</td></tr>
      <tr><td>Beacon que llama cada segundo</td><td>Sleep largo con <em>jitter</em> para imitar tráfico humano/normal</td></tr>
      <tr><td>Usar la cuenta de admin en horario raro</td><td>Operar en horario laboral, con cuentas y rutas esperables</td></tr></table>
      <div class="callout tip">💡 Regla de oro: <strong>"cada paquete que envías puede delatarte"</strong>. El senior piensa como el defensor <em>antes</em> de actuar.</div>` },
    { h: "5. Responsabilidades nuevas", html: `<p>Al llegar a senior heredas decisiones que antes tomaban por ti:</p>
      <ul>
        <li><strong>Gestión del riesgo del cliente:</strong> no derribar un sistema de producción crítico por un exploit agresivo.</li>
        <li><strong>Trazabilidad:</strong> registrar cada acción (qué, cuándo, desde dónde) para el informe y para que el Blue Team pueda reconstruirlo.</li>
        <li><strong>"Deconfliction":</strong> si el cliente detecta algo raro, poder confirmar en minutos si fuiste tú o un atacante real.</li>
        <li><strong>Mentoría:</strong> revisar el trabajo de los juniors y elevar la calidad del equipo.</li>
        <li><strong>Ética y legalidad:</strong> mantenerse dentro del alcance aunque aparezca una puerta tentadora fuera de él.</li>
      </ul>
      <div class="callout">Un senior malo es peligroso: puede tumbar producción, filtrar datos o quemar la confianza del cliente. Por eso el puesto exige <strong>madurez</strong>, no solo técnica.</div>` }
  ],
  claves: ["Senior = criterio + OPSEC + autonomía + comunicación + liderazgo", "Red Team = campaña profunda y sigilosa, no un escaneo", "OPSEC: asume que te observan y minimiza la huella", "Responsabilidad: riesgo del cliente, trazabilidad y ética"],
  entrevista: ["¿Qué diferencia un Red Team de un pentest?", "¿Cómo plantearías una operación de varias semanas sin ser detectado?", "¿Qué es OPSEC y dame un ejemplo concreto?", "Cuéntame una decisión difícil que tomaras para proteger a un cliente"],
  quiz: [
    { q: "¿Qué distingue mejor a un senior de Red Team de un junior?", op: ["Conoce más comandos de memoria", "Tiene criterio, OPSEC y responde del impacto", "Usa herramientas más caras", "Escanea más rápido"], ok: 1, exp: "El salto es de ejecución a criterio: sigilo, decisión, comunicación y responsabilidad." },
    { q: "La diferencia clave entre Red Team y pentest es…", op: ["El Red Team es más barato", "El pentest es ilegal", "El Red Team es profundo y sigiloso emulando a un adversario; el pentest es amplio", "Son lo mismo"], ok: 2, exp: "Pentest = amplio y superficial; Red Team = estrecho, profundo y centrado en objetivos y detección." },
    { q: "¿Qué es OPSEC en Red Team?", op: ["Un sistema operativo", "Operar minimizando tu huella asumiendo que te observan", "Un tipo de exploit", "El informe final"], ok: 1, exp: "OPSEC es la seguridad operacional: no dar pistas al defensor." },
    { q: "¿Para qué sirve la 'deconfliction' con el cliente?", op: ["Para facturar más", "Para confirmar rápido si una actividad sospechosa fue el Red Team o un atacante real", "Para escanear puertos", "Para crackear hashes"], ok: 1, exp: "Permite al Blue Team distinguir el ejercicio de una intrusión real." },
    { q: "¿Cuál de estas es la fase final de un engagement?", op: ["Scoping", "Acceso inicial", "Informe y debrief", "Reconocimiento"], ok: 2, exp: "Tras lograr el objetivo, el valor se entrega en el informe y el debrief (incluido el purple team)." }
  ]
},
{
  id: 2, video: "02", nivel: "Estrategia Red Team", lab: "attack", min: 26,
  titulo: "Emulación de adversarios y MITRE ATT&CK",
  resumen: "Imitar a un grupo atacante concreto y hablar el idioma común de la industria: tácticas, técnicas y procedimientos (TTP) catalogados en ATT&CK.",
  objetivos: ["Entender qué es emular a un adversario y por qué aporta valor", "Dominar la matriz MITRE ATT&CK: tácticas vs técnicas", "Diferenciar TTP, IOC y la 'pirámide del dolor'", "Mapear una operación a ATT&CK para el informe y el purple team"],
  secciones: [
    { h: "1. ¿Qué es emular a un adversario?", html: `<p>En vez de "atacar como sea", el Red Team senior <strong>imita a un atacante real concreto</strong>: por ejemplo, el grupo que suele atacar a la banca. Es como un simulacro de incendio que reproduce <em>exactamente</em> cómo empezaría un fuego real en ese edificio.</p>
      <div class="callout">La pregunta no es <em>"¿tenemos vulnerabilidades?"</em> sino <strong>"si nos ataca el grupo X, que usa estas técnicas, ¿lo pararíamos?"</strong>. Eso es <strong>Threat-Led / adversary emulation</strong>.</div>
      <p>El insumo viene de la <strong>inteligencia de amenazas</strong> (threat intel): informes que describen cómo opera cada grupo. El senior traduce ese informe a un plan de ataque realista.</p>` },
    { h: "2. La matriz ATT&CK: el mapa común", html: `<p><strong>MITRE ATT&CK</strong> es un catálogo gigante de todo lo que hacen los atacantes reales, organizado como una tabla. Es el <em>idioma común</em> entre Red Team y Blue Team.</p>
      <table class="tbl"><tr><th>Concepto</th><th>Qué es</th><th>Ejemplo</th></tr>
      <tr><td><strong>Táctica</strong></td><td>El <em>porqué</em>: el objetivo del atacante en esa fase (las columnas)</td><td>Acceso inicial, Persistencia, Exfiltración</td></tr>
      <tr><td><strong>Técnica</strong></td><td>El <em>cómo</em>: la forma de lograr la táctica</td><td>T1566 Phishing, T1055 Process Injection</td></tr>
      <tr><td><strong>Subtécnica</strong></td><td>Una variante concreta de la técnica</td><td>T1566.001 Spearphishing con adjunto</td></tr>
      <tr><td><strong>Procedimiento</strong></td><td>La implementación específica que usa un grupo o herramienta</td><td>"APT29 usa un HTA malicioso"</td></tr></table>
      <div class="callout tip">💡 Regla mnemotécnica: <strong>Táctica = objetivo</strong> (el "qué quiero"), <strong>Técnica = método</strong> (el "cómo lo hago"). Las 14 tácticas van de <em>Reconnaissance</em> a <em>Impact</em>.</div>` },
    { h: "3. Las 14 tácticas, en orden", html: `<p>Las columnas de la matriz forman, más o menos, la línea temporal de un ataque:</p>
      <div class="flow">
        <div class="fstep"><b>Recon · Resource Dev</b><span>Preparar el ataque</span></div>
        <div class="fstep"><b>Initial Access</b><span>Entrar (phishing…)</span></div>
        <div class="fstep"><b>Execution · Persistence · Priv Esc</b><span>Ejecutar, quedarse, subir privilegios</span></div>
        <div class="fstep"><b>Defense Evasion · Cred Access</b><span>No ser visto, robar credenciales</span></div>
        <div class="fstep"><b>Discovery · Lateral Movement</b><span>Mirar alrededor y moverse</span></div>
        <div class="fstep"><b>Collection · C2 · Exfiltration · Impact</b><span>Recoger, controlar, sacar datos, dañar</span></div>
      </div>
      <p>Si te sabes esta secuencia, puedes situar <strong>cualquier</strong> técnica que te mencionen y hablar con propiedad en la entrevista.</p>` },
    { h: "4. TTP, IOC y la pirámide del dolor", html: `<p>No todos los rastros de un atacante cuestan lo mismo de cambiar. La <strong>pirámide del dolor</strong> (David Bianco) lo ordena de abajo (fácil de cambiar para el atacante = poco útil para el defensor) a arriba:</p>
      <table class="tbl"><tr><th>Nivel</th><th>Indicador</th><th>¿Duele al atacante cambiarlo?</th></tr>
      <tr><td>Fácil</td><td>Hash de un fichero</td><td>Trivial: recompila y cambia</td></tr>
      <tr><td>↓</td><td>IP / dominio</td><td>Fácil: levanta otra infraestructura</td></tr>
      <tr><td>↓</td><td>Artefactos de red/host</td><td>Molesto</td></tr>
      <tr><td>↑</td><td>Herramientas</td><td>Difícil: tiene que reentrenar</td></tr>
      <tr><td>Máximo</td><td><strong>TTP</strong> (su forma de operar)</td><td>Durísimo: cambiar su metodología</td></tr></table>
      <div class="callout">Por eso un buen Red Team emula <strong>TTP</strong>, no IOC sueltos: ayuda al Blue Team a detectar <em>comportamientos</em>, que es lo que de verdad frena a un adversario.</div>` },
    { h: "5. Mapear la operación a ATT&CK", html: `<p>Durante y después de la operación, el senior etiqueta cada acción con su técnica ATT&CK. Esto convierte el informe en algo accionable y es la base del <strong>purple team</strong>:</p>
      <div class="term"><div class="bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><b>mapa ATT&CK de la operación</b></div><pre><span class="c">Initial Access</span>   → T1566.001  Spearphishing adjunto
<span class="c">Execution</span>        → T1059.001  PowerShell
<span class="c">Defense Evasion</span>  → T1055     Process Injection
<span class="c">Cred Access</span>      → T1558.003  Kerberoasting
<span class="c">Lateral Movement</span> → T1021.002  SMB / Admin Shares
<span class="c">Exfiltration</span>     → T1041     Exfil sobre canal C2</pre></div>
      <p>Con este mapa, el cliente ve <strong>exactamente qué detectó y qué no</strong>, técnica a técnica. Herramientas como <strong>ATT&CK Navigator</strong> lo pintan como un mapa de calor.</p>` }
  ],
  claves: ["Emulación = imitar a un adversario real guiado por threat intel", "ATT&CK: Táctica (porqué) → Técnica (cómo) → Procedimiento", "14 tácticas de Reconnaissance a Impact", "Pirámide del dolor: los TTP son lo que más duele detectar", "Mapea la operación a ATT&CK para informe y purple team"],
  entrevista: ["¿Qué es MITRE ATT&CK y para qué lo usas?", "Diferencia entre táctica y técnica, con un ejemplo", "¿Qué es la emulación de adversarios y de dónde sale el plan?", "¿Qué es la pirámide del dolor?"],
  quiz: [
    { q: "En ATT&CK, una 'táctica' representa…", op: ["La herramienta concreta", "El objetivo del atacante en esa fase (el porqué)", "La IP del C2", "El hash del malware"], ok: 1, exp: "La táctica es el porqué (columna); la técnica es el cómo." },
    { q: "La emulación de adversarios consiste en…", op: ["Atacar al azar", "Imitar los TTP de un grupo atacante real guiado por inteligencia de amenazas", "Solo escanear puertos", "Comprar exploits"], ok: 1, exp: "Se reproduce cómo opera una amenaza concreta y relevante para el cliente." },
    { q: "Según la pirámide del dolor, ¿qué es lo más difícil de cambiar para un atacante?", op: ["El hash de un fichero", "Una dirección IP", "Sus TTP (su forma de operar)", "Un dominio"], ok: 2, exp: "Los TTP están en la cima: cambiar la metodología es lo que más le cuesta." },
    { q: "T1566.001 (Spearphishing adjunto) es un ejemplo de…", op: ["Una táctica", "Una subtécnica", "Un IOC", "Un framework C2"], ok: 1, exp: "El sufijo .001 indica una subtécnica dentro de T1566 Phishing." },
    { q: "¿Para qué sirve mapear la operación a ATT&CK?", op: ["Para facturar", "Para que el cliente vea técnica a técnica qué detectó y qué no (base del purple team)", "Para cifrar el C2", "Para nada útil"], ok: 1, exp: "Convierte el informe en un mapa de cobertura de detección accionable." }
  ]
},
{
  id: 3, video: "03", nivel: "Estrategia Red Team", lab: null, min: 24,
  titulo: "Inteligencia de amenazas y marcos regulados",
  resumen: "De dónde sale el 'a quién imitamos', y los marcos que rigen los ejercicios en banca y sectores críticos: TIBER-EU, DORA, CBEST y la gestión del alcance senior.",
  objetivos: ["Entender qué es CTI (Cyber Threat Intelligence) y sus niveles", "Conocer TIBER-EU, DORA y CBEST y por qué importan en España/UE", "Saber quién es quién en un ejercicio dirigido por inteligencia (White/Red/Blue Cell)", "Dominar el scoping senior: crown jewels, flags y reglas de enfrentamiento"],
  secciones: [
    { h: "1. Inteligencia de amenazas (CTI)", html: `<p>La <strong>CTI</strong> responde a: <em>¿quién nos atacaría, por qué y cómo?</em>. Es la materia prima de la emulación. Se organiza en tres niveles, como la información en una empresa:</p>
      <div class="grid3">
        <div class="mini-card"><span class="tag c">Estratégica</span><h4>Dirección</h4><p>Tendencias y motivaciones. "A la banca la atacan grupos con motivación económica y algún estado".</p></div>
        <div class="mini-card"><span class="tag i">Operacional</span><h4>Campañas</h4><p>Qué grupos están activos y contra quién. Alimenta el <em>Threat Intelligence Report</em> del ejercicio.</p></div>
        <div class="mini-card"><span class="tag d">Táctica</span><h4>TTP e IOC</h4><p>Técnicas concretas, dominios, hashes. Lo que el Red Team reproduce y el Blue Team detecta.</p></div>
      </div>
      <div class="callout">El senior lee un informe de CTI y lo convierte en un <strong>plan de ataque</strong>: "este grupo entra por phishing con ISO, usa Cobalt Strike y Kerberoasting; lo reproducimos".</div>` },
    { h: "2. Los marcos regulados: por qué existen", html: `<p>En banca y sectores críticos no vale "hazme un Red Team a ojo". Los reguladores crearon marcos para que el ejercicio sea <strong>realista, seguro y comparable</strong>:</p>
      <table class="tbl"><tr><th>Marco</th><th>Ámbito</th><th>Idea clave</th></tr>
      <tr><td><strong>TIBER-EU</strong></td><td>Banco Central Europeo (UE)</td><td>Red Teaming dirigido por inteligencia sobre sistemas en <em>producción</em>, con proveedores de TI y RT acreditados.</td></tr>
      <tr><td><strong>DORA</strong></td><td>Regulación UE (2025)</td><td>Obliga a entidades financieras a hacer <em>TLPT</em> (Threat-Led Penetration Testing), alineado con TIBER.</td></tr>
      <tr><td><strong>CBEST</strong></td><td>Reino Unido (Banco de Inglaterra)</td><td>El pionero: mismo espíritu, dirigido por inteligencia.</td></tr>
      <tr><td><strong>CORIE / iCAST…</strong></td><td>Australia / Hong Kong…</td><td>Equivalentes nacionales.</td></tr></table>
      <div class="callout tip">💡 Para Telefónica Tech (clientes de banca y grandes empresas), mencionar <strong>TIBER-EU y DORA</strong> demuestra que entiendes el contexto real del trabajo en Europa.</div>` },
    { h: "3. Quién es quién en un ejercicio TIBER", html: `<p>Un ejercicio dirigido por inteligencia tiene roles muy definidos. Es clave entenderlos porque explican por qué el Red Team es tan sigiloso:</p>
      <table class="tbl"><tr><th>Célula</th><th>Rol</th></tr>
      <tr><td><strong>White Cell / Control Team</strong></td><td>Un grupo <em>pequeño y secreto</em> del cliente que sabe del ejercicio y lo supervisa.</td></tr>
      <tr><td><strong>Blue Team</strong></td><td>Los defensores: <strong>NO saben</strong> que es un ejercicio. Por eso la prueba es realista.</td></tr>
      <tr><td><strong>Red Team</strong></td><td>Vosotros: proveedor externo que ejecuta el ataque emulando la amenaza.</td></tr>
      <tr><td><strong>Threat Intel provider</strong></td><td>Proveedor que elabora el informe de amenazas que guía el escenario.</td></tr></table>
      <div class="callout">Que el Blue Team <strong>no sepa</strong> nada es la razón por la que la OPSEC importa tanto: si te detectan, el ejercicio mide exactamente eso. Y por eso existe el canal de <strong>deconfliction</strong> con la White Cell.</div>` },
    { h: "4. Scoping senior: crown jewels y flags", html: `<p>El senior participa en definir el alcance <em>con</em> el cliente. No se trata de "toda la empresa", sino de objetivos concretos:</p>
      <ul>
        <li><strong>Crown jewels:</strong> los activos que de verdad importan (la base de datos de clientes, el sistema de pagos SWIFT, el repositorio de código).</li>
        <li><strong>Flags / escenarios:</strong> objetivos medibles. "¿Puede un atacante iniciar una transferencia?" "¿Puede leer el correo del CEO?".</li>
        <li><strong>ROE (Rules of Engagement):</strong> horarios, técnicas prohibidas (p. ej. DoS), sistemas intocables, ventanas de ataque.</li>
        <li><strong>Legal authorization:</strong> el mandato firmado. Sin papel, no hay operación.</li>
      </ul>
      <div class="callout">Un buen flag se redacta en lenguaje de <strong>negocio</strong>, no técnico: el comité entiende "mover dinero", no "RCE en el host de pagos".</div>` },
    { h: "5. Legacy, riesgo y seguridad del ejercicio", html: `<p>Operar en <strong>producción</strong> (como exige TIBER) es delicado. El senior gestiona ese riesgo:</p>
      <ul>
        <li><strong>No romper el negocio:</strong> nada de exploits que puedan tumbar un servicio en producción sin acordarlo.</li>
        <li><strong>Trazabilidad total:</strong> log de cada acción con marca de tiempo, para el debrief y la deconfliction.</li>
        <li><strong>Plan de retirada:</strong> cómo eliminar el malware, los beacons y la persistencia al terminar (<em>clean-up</em>).</li>
        <li><strong>Datos del cliente:</strong> si durante la exfiltración accedes a datos reales, se tratan con máxima confidencialidad y se minimiza su manejo.</li>
      </ul>
      <div class="callout tip">💡 En la entrevista, demostrar que piensas en <strong>el riesgo del cliente y la limpieza posterior</strong> te diferencia de alguien que solo sabe hackear.</div>` }
  ],
  claves: ["CTI responde: ¿quién, por qué y cómo nos atacaría? (estratégica/operacional/táctica)", "TIBER-EU y DORA rigen el Red Teaming en banca/UE sobre producción", "Blue Team no sabe del ejercicio → OPSEC y deconfliction con la White Cell", "Scoping senior: crown jewels, flags en lenguaje de negocio y ROE", "Operar en producción exige no romper nada, trazar y limpiar al final"],
  entrevista: ["¿Qué es TIBER-EU y cómo se relaciona con DORA?", "¿Qué célula del cliente conoce el ejercicio y cuál no?", "¿Qué son las 'crown jewels' y cómo defines un buen objetivo?", "¿Cómo gestionas el riesgo de operar en producción?"],
  quiz: [
    { q: "TIBER-EU es un marco para…", op: ["Escanear puertos", "Red Teaming dirigido por inteligencia sobre producción, impulsado por el BCE", "Crackear hashes", "Diseñar webs"], ok: 1, exp: "Es el framework europeo de pruebas dirigidas por amenazas, ligado ahora a DORA." },
    { q: "En un ejercicio TIBER, ¿quién normalmente NO sabe que es una prueba?", op: ["La White Cell", "El Blue Team (defensores)", "El Red Team", "El regulador"], ok: 1, exp: "El Blue Team no está avisado, para que la detección se mida de forma realista." },
    { q: "Las 'crown jewels' son…", op: ["Las herramientas del Red Team", "Los activos críticos que el ejercicio intenta alcanzar", "Los logs del Blue Team", "Un tipo de exploit"], ok: 1, exp: "Son los activos que de verdad importan al negocio y definen los objetivos." },
    { q: "DORA obliga a las entidades financieras de la UE a…", op: ["Usar solo software libre", "Realizar pruebas de penetración dirigidas por amenazas (TLPT)", "Prohibir el Red Team", "Publicar sus contraseñas"], ok: 1, exp: "DORA exige TLPT alineado con el enfoque TIBER." },
    { q: "La 'deconfliction' con la White Cell sirve para…", op: ["Facturar", "Confirmar si una actividad sospechosa fue el Red Team o un atacante real", "Escanear", "Cifrar datos"], ok: 1, exp: "Permite distinguir el ejercicio de una intrusión genuina sin alertar al Blue Team." }
  ]
},
/* ═══════════════════ ACCESO INICIAL ═══════════════════ */
{
  id: 4, video: "04", nivel: "Acceso inicial", lab: null, min: 24,
  titulo: "OSINT avanzado de la organización",
  resumen: "Construir el mapa del objetivo sin tocarlo: personas, tecnología, superficie externa y datos filtrados. El recon que alimenta el phishing y el acceso inicial.",
  objetivos: ["Diferenciar recon pasivo de activo y por qué el senior prioriza lo pasivo", "Recopilar personas, correos y tecnología de una organización", "Descubrir la superficie externa (subdominios, cloud, assets expuestos)", "Aprovechar datos de brechas (breach data) de forma ética y legal"],
  secciones: [
    { h: "1. Pasivo vs activo: el senior empieza invisible", html: `<p>El reconocimiento tiene dos modos, y el orden importa por OPSEC:</p>
      <table class="tbl"><tr><th>Modo</th><th>Qué hace</th><th>Huella</th></tr>
      <tr><td><strong>Pasivo</strong></td><td>Consultar fuentes públicas sin tocar al objetivo (Google, LinkedIn, certificados, DNS público)</td><td>Casi nula: el objetivo no se entera</td></tr>
      <tr><td><strong>Activo</strong></td><td>Interactuar con los sistemas (resolver, escanear, pedir páginas)</td><td>Deja rastro en sus logs</td></tr></table>
      <div class="callout">El senior exprime el recon <strong>pasivo</strong> al máximo antes de tocar nada. Cuanto más sepas sin interactuar, menos ruido harás después.</div>` },
    { h: "2. Personas: el eslabón de entrada", html: `<p>La mayoría de intrusiones reales empiezan por una <strong>persona</strong> (phishing). Por eso se perfila a la plantilla:</p>
      <table class="tbl"><tr><th>Fuente</th><th>Qué obtienes</th></tr>
      <tr><td>LinkedIn</td><td>Organigrama, roles, tecnologías que usan (en ofertas de empleo), nombres</td></tr>
      <tr><td>Patrón de correo</td><td><code>nombre.apellido@empresa.com</code> deducido y validado</td></tr>
      <tr><td><code>theHarvester</code>, Hunter.io</td><td>Correos y subdominios publicados</td></tr>
      <tr><td>Metadatos de documentos</td><td>Usuarios, software y rutas internas en PDFs/Office públicos</td></tr></table>
      <div class="callout tip">💡 Las <strong>ofertas de empleo</strong> son oro: "buscamos admin de CrowdStrike y Azure AD" te dice qué EDR e identidad usan <em>antes</em> de entrar.</div>` },
    { h: "3. Superficie externa y cloud", html: `<p>Hay que dibujar <strong>todo lo expuesto a Internet</strong>, incluido el <em>shadow IT</em> que la empresa olvidó:</p>
      <div class="term"><div class="bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><b>fuentes de superficie (pasivas)</b></div><pre><span class="c"># subdominios desde logs de certificados (CT)</span>
crt.sh  ·  subfinder  ·  amass (modo pasivo)
<span class="c"># buscadores de dispositivos/servicios expuestos</span>
Shodan  ·  Censys  ·  FOFA
<span class="c"># rangos, ASN y cloud</span>
whois / ASN  ·  buckets S3 / blobs Azure públicos</pre></div>
      <p>Con esto construyes el inventario: dominios, IPs, servicios, paneles de login, VPN, portales de correo (OWA), y activos en la nube. Cada uno es una posible vía.</p>` },
    { h: "4. Breach data: credenciales ya filtradas", html: `<p>Millones de credenciales se filtran cada año. Un atacante real las usa, y el Red Team también (dentro del alcance y la ley):</p>
      <ul>
        <li><strong>Have I Been Pwned:</strong> saber si un dominio/correo aparece en brechas conocidas.</li>
        <li><strong>Combolists / dumps:</strong> pares usuario:contraseña filtrados que pueden seguir siendo válidos.</li>
        <li><strong>Password spraying con contexto:</strong> probar una contraseña filtrada o típica (<code>Empresa2025!</code>) contra muchos usuarios, despacio, para no bloquear cuentas.</li>
      </ul>
      <div class="callout">La gente <strong>reutiliza contraseñas</strong>. Una filtrada de otro servicio suele abrir el correo corporativo. Por eso el MFA es tan importante (y por eso lo atacaremos en el módulo de phishing).</div>` },
    { h: "5. Del recon al plan de ataque", html: `<p>El recon no es acumular datos, es <strong>decidir la vía de entrada</strong>. El senior sintetiza:</p>
      <div class="flow">
        <div class="fstep"><b>Personas</b><span>¿A quién hago phishing?</span></div>
        <div class="fstep"><b>Tecnología</b><span>¿Qué EDR/correo/identidad usan?</span></div>
        <div class="fstep"><b>Superficie</b><span>¿Hay un portal/VPN atacable?</span></div>
        <div class="fstep"><b>Credenciales</b><span>¿Tengo logins filtrados que probar?</span></div>
        <div class="fstep"><b>Decisión</b><span>La vía de menor riesgo que funcione</span></div>
      </div>
      <div class="callout tip">💡 En la entrevista: "¿por dónde empezarías contra una empresa?" → respuesta senior: <strong>OSINT pasivo de personas y superficie, cruzado con breach data, para elegir la vía de acceso inicial más silenciosa</strong>.</div>` }
  ],
  claves: ["Exprime el recon pasivo antes de hacer ruido activo", "Personas (LinkedIn, patrón de correo, metadatos) alimentan el phishing", "Superficie externa: subdominios (crt.sh), Shodan/Censys, cloud y shadow IT", "Breach data: credenciales filtradas + spraying con contexto", "El recon termina en una decisión: la vía de entrada más sigilosa"],
  entrevista: ["Diferencia entre recon pasivo y activo y por qué importa el orden", "¿Cómo descubrirías los subdominios de una empresa sin tocarla?", "¿Qué es el password spraying y cómo evitas bloquear cuentas?", "¿Por qué son útiles las ofertas de empleo en el OSINT?"],
  quiz: [
    { q: "¿Por qué el senior prioriza el recon pasivo?", op: ["Es más caro", "No deja rastro en el objetivo: menos ruido antes de atacar", "Es ilegal el activo", "Da peor información"], ok: 1, exp: "El pasivo no toca al objetivo, así que no alerta ni ensucia logs." },
    { q: "crt.sh y los Certificate Transparency logs sirven para…", op: ["Crackear hashes", "Descubrir subdominios a partir de certificados emitidos", "Enviar correos", "Inyectar SQL"], ok: 1, exp: "Los certificados públicos revelan nombres de host, útiles para mapear la superficie." },
    { q: "El password spraying consiste en…", op: ["Probar muchas contraseñas contra un usuario", "Probar una o pocas contraseñas comunes contra muchos usuarios, despacio", "Cifrar contraseñas", "Robar cookies"], ok: 1, exp: "Pocas contraseñas contra muchas cuentas evita el bloqueo por intentos." },
    { q: "¿Por qué son valiosas las ofertas de empleo en OSINT?", op: ["Dan contraseñas", "Revelan qué tecnologías (EDR, cloud, identidad) usa la empresa", "Son un exploit", "Contienen malware"], ok: 1, exp: "Delatan el stack tecnológico antes de interactuar con la empresa." },
    { q: "El 'breach data' se usa para…", op: ["Diseñar logos", "Aprovechar credenciales ya filtradas (que la gente reutiliza)", "Medir CVSS", "Nada en Red Team"], ok: 1, exp: "Las credenciales filtradas suelen seguir siendo válidas por la reutilización." }
  ]
},
{
  id: 5, video: "05", nivel: "Acceso inicial", lab: null, min: 26,
  titulo: "Ingeniería social y phishing moderno",
  resumen: "El acceso inicial más realista: pretexto, infraestructura de phishing y cómo los atacantes saltan el MFA con proxies como Evilginx. Con uso estrictamente autorizado.",
  objetivos: ["Entender la ingeniería social como explotación de la confianza humana", "Montar una campaña de phishing creíble (pretexto, dominio, envío)", "Comprender el robo de sesión y el bypass de MFA (AiTM / Evilginx)", "Conocer vectores alternativos: vishing, QR, dispositivos y acceso físico"],
  secciones: [
    { h: "1. Hackear a la persona, no a la máquina", html: `<p>La <strong>ingeniería social</strong> explota la confianza, la prisa y la autoridad, no un fallo de software. Es la vía de entrada nº1 en ataques reales porque <em>siempre</em> funciona en alguien.</p>
      <table class="tbl"><tr><th>Palanca psicológica</th><th>Ejemplo en un correo</th></tr>
      <tr><td>Autoridad</td><td>"Soy del departamento de TI / tu director"</td></tr>
      <tr><td>Urgencia</td><td>"Tu cuenta se bloqueará en 2 horas"</td></tr>
      <tr><td>Miedo</td><td>"Actividad sospechosa detectada"</td></tr>
      <tr><td>Curiosidad / recompensa</td><td>"Revisa tu nómina / tu premio"</td></tr></table>
      <div class="callout">El senior diseña un <strong>pretexto</strong> coherente con el OSINT: si sabes que usan Microsoft 365, el cebo imita una alerta de Microsoft, no de un banco cualquiera.</div>` },
    { h: "2. Anatomía de una campaña de phishing", html: `<p>Montar phishing creíble tiene varias piezas, y cada una puede delatar o salvar la campaña:</p>
      <div class="flow">
        <div class="fstep"><b>1 · Dominio</b><span>Parecido y "envejecido", con buena reputación</span></div>
        <div class="fstep"><b>2 · Correo auténtico</b><span>SPF, DKIM y DMARC bien puestos para no caer en spam</span></div>
        <div class="fstep"><b>3 · Pretexto + cebo</b><span>Mensaje creíble con enlace o adjunto</span></div>
        <div class="fstep"><b>4 · Landing</b><span>Página que captura credenciales o entrega el payload</span></div>
        <div class="fstep"><b>5 · Seguimiento</b><span>Quién abrió, pinchó, introdujo datos</span></div>
      </div>
      <p class="muted">Herramientas típicas: <strong>GoPhish</strong> (gestión de la campaña), <strong>evilginx</strong> (proxy de credenciales/MFA). Siempre con <strong>autorización explícita</strong> del cliente.</p>` },
    { h: "3. El gran salto: robar la sesión y el MFA", html: `<p>Hace años bastaba con capturar usuario y contraseña. Hoy casi todo tiene <strong>MFA</strong>. Los atacantes lo esquivan robando la <strong>sesión ya autenticada</strong>, no la contraseña:</p>
      <div class="anatomy">
        <p><strong>Ataque AiTM (Adversary-in-the-Middle) con Evilginx:</strong></p>
        <div class="term"><div class="bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><b>flujo AiTM</b></div><pre><span class="o">Víctima</span> → página falsa (proxy) → <span class="o">Microsoft real</span>
   1) escribe usuario + contraseña  → el proxy los reenvía
   2) Microsoft pide el MFA          → la víctima lo aprueba
   3) Microsoft devuelve una <span class="hl">cookie de sesión</span>
   4) el proxy <span class="hl">roba la cookie</span> → el atacante ya está dentro</pre></div>
      </div>
      <div class="callout">La cookie de sesión equivale a estar <em>ya logueado con MFA pasado</em>. Por eso el MFA clásico (SMS, app) <strong>no detiene</strong> este ataque. Lo que sí ayuda: llaves <strong>FIDO2/passkeys</strong> (resistentes a phishing) y acceso condicional.</div>` },
    { h: "4. Vectores más allá del correo", html: `<table class="tbl"><tr><th>Vector</th><th>En qué consiste</th></tr>
      <tr><td><strong>Vishing</strong></td><td>Llamada telefónica suplantando a TI/soporte para que la víctima actúe (muy efectivo).</td></tr>
      <tr><td><strong>Smishing / QR (quishing)</strong></td><td>SMS o códigos QR que llevan a la landing maliciosa, saltándose filtros de correo.</td></tr>
      <tr><td><strong>MFA fatigue</strong></td><td>Spamear notificaciones push hasta que la víctima aprueba "para que paren".</td></tr>
      <tr><td><strong>USB drop / BadUSB</strong></td><td>Dejar memorias que, al conectarse, ejecutan un payload.</td></tr>
      <tr><td><strong>Acceso físico / tailgating</strong></td><td>Colarse tras un empleado, implantar un dispositivo en la red interna.</td></tr></table>
      <div class="callout tip">💡 El <strong>MFA fatigue</strong> y el <strong>vishing</strong> han protagonizado brechas célebres recientes: demuestran que el humano sigue siendo la vía más fiable.</div>` },
    { h: "5. Ética, autorización y cuidado humano", html: `<p>La ingeniería social toca a personas reales. El senior la ejecuta con especial cuidado:</p>
      <ul>
        <li><strong>Autorización escrita y explícita</strong> para la ingeniería social (no siempre está en el alcance por defecto).</li>
        <li><strong>Sin daño reputacional ni emocional</strong> gratuito: nada de cebos crueles (despidos falsos, emergencias familiares).</li>
        <li><strong>Datos capturados</strong> tratados con máxima confidencialidad y borrados tras el informe.</li>
        <li>El objetivo es <strong>medir y mejorar</strong>, no humillar a los empleados que "piquen".</li>
      </ul>
      <div class="callout">En el informe, el phishing se reporta como <strong>métrica y oportunidad de formación</strong>, nunca señalando a personas concretas.</div>` }
  ],
  claves: ["La ingeniería social explota confianza, urgencia y autoridad", "Campaña: dominio + correo autenticado (SPF/DKIM/DMARC) + pretexto + landing", "AiTM (Evilginx) roba la cookie de sesión y salta el MFA clásico", "FIDO2/passkeys y acceso condicional son la defensa fuerte", "Autorización explícita, sin daño humano y confidencialidad de los datos"],
  entrevista: ["¿Cómo salta un atacante el MFA hoy en día?", "¿Qué es un ataque Adversary-in-the-Middle?", "¿Qué defensa es resistente al phishing y por qué?", "¿Qué cuidados éticos tiene la ingeniería social en un ejercicio?"],
  quiz: [
    { q: "Un ataque AiTM (Evilginx) permite al atacante…", op: ["Crackear el hash del MFA", "Robar la cookie de sesión ya autenticada, saltándose el MFA", "Apagar el servidor", "Cifrar el correo"], ok: 1, exp: "Hace de proxy y captura la sesión tras pasar el MFA; no necesita la contraseña después." },
    { q: "¿Qué defensa resiste mejor el phishing moderno?", op: ["MFA por SMS", "FIDO2 / passkeys (resistentes a phishing)", "Contraseñas más largas", "Antivirus"], ok: 1, exp: "Las llaves FIDO2 están ligadas al dominio real y no se dejan interceptar por un proxy." },
    { q: "El 'MFA fatigue' consiste en…", op: ["Romper el token por fuerza bruta", "Enviar muchas notificaciones push hasta que la víctima aprueba", "Un fallo de SPF", "Un exploit de kernel"], ok: 1, exp: "Se abusa del cansancio del usuario ante el bombardeo de aprobaciones." },
    { q: "SPF, DKIM y DMARC se cuidan en una campaña para…", op: ["Cifrar el payload", "Que los correos parezcan legítimos y no caigan en spam", "Escalar privilegios", "Evadir el EDR"], ok: 1, exp: "Una buena reputación de correo mejora la entregabilidad del phishing." },
    { q: "¿Cómo se reporta el phishing en el informe?", op: ["Señalando a los empleados que picaron", "Como métrica agregada y oportunidad de formación, sin humillar a personas", "No se reporta", "Publicándolo"], ok: 1, exp: "El objetivo es medir y mejorar, no culpar a individuos." }
  ]
},
{
  id: 6, video: "06", nivel: "Acceso inicial", lab: null, min: 26,
  titulo: "Desarrollo de payloads y ejecución inicial",
  resumen: "Qué entregas tras el clic: loaders, maldocs, LNK/ISO, shellcode y la cadena que lleva de un fichero a un beacon, esquivando las defensas de entrada.",
  objetivos: ["Entender la cadena: entrega → ejecución → loader → C2", "Conocer los formatos de acceso inicial modernos (ISO/LNK/HTA, maldocs)", "Comprender qué es shellcode, un loader y el 'staging'", "Saber por qué el senior prioriza payloads que evadan las defensas de entrada"],
  secciones: [
    { h: "1. La cadena de acceso inicial", html: `<p>Un payload de acceso inicial no es un solo fichero mágico: es una <strong>cadena</strong> en la que cada eslabón esquiva un control:</p>
      <div class="flow">
        <div class="fstep"><b>Entrega</b><span>El fichero llega (correo, enlace, USB)</span></div>
        <div class="fstep"><b>Ejecución</b><span>La víctima lo abre y se ejecuta código</span></div>
        <div class="fstep"><b>Loader / dropper</b><span>Trae y prepara el payload real, evadiendo defensas</span></div>
        <div class="fstep"><b>Shellcode</b><span>Código que se inyecta en memoria</span></div>
        <div class="fstep"><b>Beacon / C2</b><span>El equipo llama a casa: ya hay control</span></div>
      </div>
      <div class="callout">El senior piensa en cada eslabón: ¿pasa el filtro de correo? ¿lo bloquea SmartScreen? ¿lo pilla el EDR al ejecutar? Diseñar esto <strong>es</strong> el arte del acceso inicial.</div>` },
    { h: "2. Formatos de entrega modernos", html: `<p>Microsoft fue cerrando los clásicos (macros bloqueadas por defecto), así que los formatos evolucionaron:</p>
      <table class="tbl"><tr><th>Formato</th><th>Truco</th><th>Estado</th></tr>
      <tr><td><strong>Macro Office (VBA)</strong></td><td>Documento que ejecuta código al abrir</td><td>Muy vigilado; macros de Internet bloqueadas por defecto</td></tr>
      <tr><td><strong>ISO / IMG</strong></td><td>Contenedor que evita la marca "Mark-of-the-Web" (MotW)</td><td>Popular; Microsoft ya lo endurece</td></tr>
      <tr><td><strong>LNK (acceso directo)</strong></td><td>Un "acceso directo" que en realidad lanza un comando</td><td>Muy usado actualmente</td></tr>
      <tr><td><strong>HTA / JS / CHM</strong></td><td>Formatos que ejecutan script</td><td>Clásicos, aún útiles</td></tr>
      <tr><td><strong>Instaladores troyanizados</strong></td><td>App legítima + payload</td><td>Efectivo con buen pretexto</td></tr></table>
      <div class="callout tip">💡 <strong>Mark-of-the-Web (MotW)</strong>: Windows marca los ficheros bajados de Internet para tratarlos con recelo. Muchos trucos de entrega buscan <em>no heredar</em> esa marca (por eso triunfaron las ISO).</div>` },
    { h: "3. Shellcode, loaders y staging", html: `<p>Tres términos que un senior separa con soltura:</p>
      <table class="tbl"><tr><th>Término</th><th>Qué es</th><th>Analogía</th></tr>
      <tr><td><strong>Shellcode</strong></td><td>Código máquina compacto que, al ejecutarse en memoria, da control (p. ej. un beacon)</td><td>La carga explosiva</td></tr>
      <tr><td><strong>Loader</strong></td><td>Programa que coloca y ejecuta el shellcode evadiendo defensas</td><td>El mecanismo que la coloca</td></tr>
      <tr><td><strong>Stager</strong></td><td>Loader minúsculo que descarga el payload grande ("staged")</td><td>El cable que trae el resto</td></tr>
      <tr><td><strong>Stageless</strong></td><td>Todo el payload va de una vez (más grande, menos llamadas de red)</td><td>Todo en un paquete</td></tr></table>
      <div class="callout">Decisión senior: <strong>staged</strong> (sigiloso en la entrega, pero una llamada extra que puede detectarse) vs <strong>stageless</strong> (una sola pieza, menos ruido de red). Se elige según el entorno.</div>` },
    { h: "4. Por qué un loader evade (a alto nivel)", html: `<p>Un buen loader no "oculta un virus": cambia <em>cómo</em> se ejecuta para no parecerse a lo que el EDR vigila. Técnicas conceptuales (se detallan en el nivel de evasión):</p>
      <ul>
        <li><strong>Ejecución en memoria:</strong> no escribir el payload en disco, donde el antivirus lo escanea.</li>
        <li><strong>Cifrado/ofuscación:</strong> el payload va cifrado y solo se descifra en el momento, para que la firma estática no coincida.</li>
        <li><strong>Living-off-the-land (LOLBAS):</strong> usar binarios legítimos de Windows (<code>rundll32</code>, <code>mshta</code>) en vez de un .exe sospechoso.</li>
        <li><strong>Evadir AMSI/ETW:</strong> silenciar los "micrófonos" que Windows usa para inspeccionar scripts (lo verás en el nivel 3).</li>
      </ul>
      <div class="callout">El payload exitoso es el que <strong>no destaca</strong>: parece una tarea normal del sistema. La creatividad está en mezclarse, no en "ser más fuerte".</div>` },
    { h: "5. El ciclo de pruebas del operador", html: `<p>Antes de disparar contra el cliente, el senior <strong>prueba su payload en un laboratorio idéntico</strong>:</p>
      <div class="flow">
        <div class="fstep"><b>Construir</b><span>Loader + shellcode + pretexto</span></div>
        <div class="fstep"><b>Probar vs defensas</b><span>Mismo EDR/AV que el cliente, en lab propio</span></div>
        <div class="fstep"><b>Ajustar</b><span>Si lo detecta, cambiar técnica</span></div>
        <div class="fstep"><b>Validar OPSEC</b><span>¿Qué logs genera? ¿qué vería el Blue Team?</span></div>
      </div>
      <div class="callout tip">💡 Nunca quemes un payload sin probar: si saltan las alarmas en el primer correo, pierdes el factor sorpresa de toda la operación. En la entrevista, demostrar este <strong>rigor previo</strong> es muy valorado.</div>
      <p class="muted">⚠️ Todo el desarrollo de payloads se realiza y prueba exclusivamente en laboratorios propios y engagements autorizados por escrito.</p>` }
  ],
  claves: ["Acceso inicial = cadena: entrega → ejecución → loader → shellcode → C2", "Formatos modernos: ISO/LNK/HTA y maldocs (esquivar MotW)", "Shellcode (carga) vs loader (lo coloca) vs stager (lo descarga)", "Un loader evade cambiando el 'cómo' (memoria, cifrado, LOLBAS, AMSI)", "Probar el payload contra las mismas defensas del cliente antes de usarlo"],
  entrevista: ["Explica la cadena de un acceso inicial de principio a fin", "Diferencia entre shellcode, loader y stager", "¿Qué es Mark-of-the-Web y por qué importa?", "¿Qué significa 'living off the land' (LOLBAS)?"],
  quiz: [
    { q: "En la cadena de acceso inicial, el 'loader' se encarga de…", op: ["Enviar el correo", "Colocar y ejecutar el shellcode evadiendo defensas", "Cifrar el disco de la víctima", "Escanear puertos"], ok: 1, exp: "El loader prepara y lanza el payload real sin que lo detecten." },
    { q: "¿Por qué triunfaron las ISO/IMG como entrega?", op: ["Son más pequeñas", "Evitaban heredar la marca Mark-of-the-Web, reduciendo el recelo de Windows", "Cifran mejor", "Son legales"], ok: 1, exp: "El contenedor evitaba la MotW y los avisos asociados." },
    { q: "'Living off the land' (LOLBAS) significa…", op: ["Vivir sin Internet", "Abusar de binarios legítimos del propio Windows para ejecutar sin levantar sospechas", "Un tipo de shellcode", "Cultivar tu propio C2"], ok: 1, exp: "Usar herramientas nativas (rundll32, mshta…) se confunde con actividad normal." },
    { q: "Un payload 'stageless' se caracteriza por…", op: ["Descargar el resto en varios pasos", "Ir todo en una sola pieza, con menos llamadas de red", "No funcionar", "Ser siempre detectado"], ok: 1, exp: "Stageless = payload completo de una vez; staged descarga por partes." },
    { q: "Antes de usar un payload contra el cliente, el senior…", op: ["Lo lanza directamente", "Lo prueba en un laboratorio con las mismas defensas (EDR/AV) del cliente", "Lo publica en GitHub", "Lo envía al Blue Team"], ok: 1, exp: "Probarlo evita quemar la operación en el primer intento." }
  ]
},
/* ═══════════════════ EVASIÓN Y C2 ═══════════════════ */
{
  id: 7, video: "07", nivel: "Evasión y C2", lab: "c2", min: 26,
  titulo: "Infraestructura de Command & Control",
  resumen: "La 'red de carreteras' por la que el equipo comprometido habla contigo: team server, redirectores, dominios con reputación, domain fronting y OPSEC de la infra.",
  objetivos: ["Entender qué es el C2 y por qué necesita infraestructura, no solo una IP", "Conocer el papel de redirectores y por qué protegen al operador", "Comprender categorización de dominios, HTTPS y domain fronting", "Saber diseñar una infraestructura resiliente y sigilosa"],
  secciones: [
    { h: "1. ¿Qué es el C2 y por qué tanta infraestructura?", html: `<p><strong>Command & Control (C2)</strong> es el canal por el que el equipo comprometido recibe órdenes y devuelve resultados. El programa en la víctima es el <strong>agente/beacon</strong>; el servidor del operador es el <strong>team server</strong>.</p>
      <div class="callout">Si conectaras el beacon <em>directo</em> a tu servidor, el Blue Team vería tu IP, la bloquearía y tu operación muere. Por eso se construye una <strong>infraestructura por capas</strong>: para ocultar y proteger al operador.</div>
      <p>Piensa en un jefe mafioso que nunca llama directamente: usa intermediarios y teléfonos de prepago. Si cae uno, él sigue a salvo.</p>` },
    { h: "2. Redirectores: los intermediarios", html: `<p>Un <strong>redirector</strong> es un servidor intermedio que reenvía el tráfico del beacon hacia el team server, ocultándolo:</p>
      <div class="term"><div class="bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><b>cadena C2 por capas</b></div><pre><span class="o">Beacon</span> → <span class="hl">Redirector(es)</span> → <span class="ok2">Team Server</span>
          (IP/dominio público)   (oculto, nunca expuesto)

  · Si el Blue Team quema el redirector, levantas otro
  · El team server (y tú) nunca aparecen directamente
  · Filtran tráfico: solo pasa el que cumple tu perfil</pre></div>
      <table class="tbl"><tr><th>Tipo</th><th>Función</th></tr>
      <tr><td>Redirector de tráfico (HTTP/S)</td><td>Reenvía el C2 y descarta curiosos/escáneres</td></tr>
      <tr><td>Redirector de correo/phishing</td><td>Separa la infra de envío de la de C2</td></tr>
      <tr><td>Reglas de filtrado (mod_rewrite/Nginx)</td><td>Solo deja pasar el User-Agent/URI/perfil esperado</td></tr></table>` },
    { h: "3. Reputación de dominios y HTTPS", html: `<p>El tráfico C2 debe <strong>mezclarse con lo normal</strong>. Un dominio recién creado y feo levanta sospechas; uno con buena reputación pasa desapercibido:</p>
      <ul>
        <li><strong>Dominios envejecidos y categorizados:</strong> que parezcan de una temática legítima (noticias, salud) y lleven tiempo registrados.</li>
        <li><strong>HTTPS siempre:</strong> cifra el contenido del C2 para que el defensor no lo lea; un certificado válido da apariencia normal.</li>
        <li><strong>Imitar tráfico real:</strong> que las peticiones parezcan de un navegador o de una app legítima (actualizaciones, telemetría).</li>
      </ul>
      <div class="callout tip">💡 Muchos defensores bloquean "categorías no clasificadas". Tener el dominio <strong>categorizado</strong> como algo inocuo evita ese bloqueo automático.</div>` },
    { h: "4. Domain fronting y canales alternativos", html: `<p>Técnicas para esconder a dónde va realmente el tráfico:</p>
      <table class="tbl"><tr><th>Técnica</th><th>Idea</th></tr>
      <tr><td><strong>Domain fronting</strong></td><td>El tráfico aparenta ir a un dominio grande y confiable (CDN), pero internamente se redirige a tu C2. Difícil de bloquear sin romper el CDN.</td></tr>
      <tr><td><strong>C2 sobre servicios legítimos</strong></td><td>Usar Slack, Teams, GitHub, Dropbox o DNS como canal: el tráfico se funde con el normal.</td></tr>
      <tr><td><strong>DNS tunneling</strong></td><td>Sacar datos en consultas DNS cuando todo lo demás está filtrado (lento pero resistente).</td></tr></table>
      <div class="callout">Idea clave senior: el mejor canal C2 es el que el defensor <strong>no puede bloquear sin romper algo que la empresa necesita</strong>.</div>` },
    { h: "5. Diseño resiliente y OPSEC de la infra", html: `<p>Una operación de semanas necesita infraestructura que <strong>sobreviva</strong> a que le quemen piezas:</p>
      <ul>
        <li><strong>Separar funciones:</strong> infra de phishing ≠ infra de C2 a largo plazo ≠ canal de emergencia. Si cae una, las otras siguen.</li>
        <li><strong>Redundancia:</strong> varios redirectores y dominios listos para rotar.</li>
        <li><strong>Automatización (IaC):</strong> levantar toda la infra con scripts (Terraform/Ansible) para rehacerla rápido.</li>
        <li><strong>Higiene:</strong> nada en la infra enlaza contigo ni con el cliente; se destruye y limpia al terminar.</li>
      </ul>
      <div class="callout tip">💡 En la entrevista: "¿cómo montarías el C2 de una operación larga?" → <strong>capas con redirectores, dominios categorizados sobre HTTPS, canales que se funden con el tráfico legítimo y redundancia para rotar si queman piezas</strong>.</div>` }
  ],
  claves: ["C2 = canal beacon ↔ team server; nunca conectes directo", "Redirectores ocultan y protegen al operador; se rotan si los queman", "Dominios envejecidos/categorizados + HTTPS para mezclarse", "Domain fronting y C2 sobre servicios legítimos esquivan bloqueos", "Infra separada por funciones, redundante y automatizada (IaC)"],
  entrevista: ["¿Qué es un redirector y por qué lo usas?", "¿Cómo haces que el tráfico C2 pase desapercibido?", "¿Qué es el domain fronting?", "¿Cómo diseñarías una infraestructura resiliente para 4 semanas?"],
  quiz: [
    { q: "El 'team server' en una infra C2 es…", op: ["El equipo de la víctima", "El servidor del operador, que se mantiene oculto tras redirectores", "Un redirector público", "El EDR"], ok: 1, exp: "Es el servidor de control; nunca se expone directamente." },
    { q: "¿Para qué sirve un redirector?", op: ["Cifrar el disco", "Reenviar el tráfico C2 ocultando y protegiendo el team server", "Crackear Kerberos", "Enviar spam"], ok: 1, exp: "Actúa de intermediario: si lo queman, el servidor real sigue a salvo." },
    { q: "Usar dominios envejecidos y categorizados busca…", op: ["Ahorrar dinero", "Que el tráfico C2 se mezcle con lo legítimo y evite bloqueos por reputación", "Ir más rápido", "Evadir Kerberos"], ok: 1, exp: "La buena reputación evita el bloqueo automático de dominios sospechosos." },
    { q: "El domain fronting consiste en…", op: ["Comprar muchos dominios", "Aparentar tráfico hacia un CDN confiable que internamente va a tu C2", "Un ataque a DNS", "Robar certificados"], ok: 1, exp: "Oculta el destino real tras un servicio grande difícil de bloquear." },
    { q: "¿Por qué se separan la infra de phishing y la de C2?", op: ["Por estética", "Para que quemar una no tumbe la otra (resiliencia y OPSEC)", "Es obligatorio por ley", "Para ir más lento"], ok: 1, exp: "La compartimentación evita perder toda la operación de golpe." }
  ]
},
{
  id: 8, video: "08", nivel: "Evasión y C2", lab: null, min: 24,
  titulo: "Frameworks C2: beacons y perfiles",
  resumen: "Las herramientas que orquestan el control (Cobalt Strike, Sliver, Mythic), el concepto de beacon con sleep y jitter, y los malleable profiles que disfrazan el tráfico.",
  objetivos: ["Conocer los principales frameworks C2 y sus diferencias", "Entender el beacon: sleep, jitter y check-in", "Comprender los malleable profiles (dar forma al tráfico)", "Saber elegir un C2 según OPSEC y detección"],
  secciones: [
    { h: "1. El framework C2: el puesto de mando", html: `<p>Un <strong>framework C2</strong> es el software que gestiona todos los equipos comprometidos desde un panel: lanza comandos, recibe resultados, gestiona sesiones y payloads. Es el "centro de operaciones" del Red Team.</p>
      <table class="tbl"><tr><th>Framework</th><th>Rasgos</th></tr>
      <tr><td><strong>Cobalt Strike</strong></td><td>El estándar comercial; su agente es <em>Beacon</em>. Muy maduro, muy vigilado por los EDR.</td></tr>
      <tr><td><strong>Sliver</strong></td><td>Open source (BishopFox), moderno, multiplataforma, popular como alternativa.</td></tr>
      <tr><td><strong>Mythic</strong></td><td>Open source y modular: agentes intercambiables, muy flexible para OPSEC.</td></tr>
      <tr><td><strong>Havoc / Brute Ratel…</strong></td><td>Otras opciones centradas en evasión moderna.</td></tr></table>
      <div class="callout">Como son tan usados, los EDR aprenden a detectar sus patrones por defecto. El trabajo del senior es <strong>personalizarlos</strong> para que no "suenen" a lo conocido.</div>` },
    { h: "2. El beacon: llamadas a casa discretas", html: `<p>El <strong>beacon</strong> (faro) no mantiene una conexión abierta todo el tiempo (eso sería muy visible). En vez de eso, <em>duerme</em> y de vez en cuando "llama a casa" a por órdenes:</p>
      <div class="term"><div class="bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><b>comportamiento del beacon</b></div><pre><span class="c">sleep</span>  = 60s     → espera 60s entre cada check-in
<span class="c">jitter</span> = 30%     → varía ±30% para no ser un patrón exacto
   ...duerme...  → check-in → ¿órdenes? → ejecuta → duerme...</pre></div>
      <p>Un <strong>sleep largo con jitter</strong> imita el tráfico humano/normal y dificulta que el defensor detecte el patrón regular ("beaconing"). Un sleep de 1 segundo es un cartel de neón.</p>
      <div class="callout tip">💡 Trade-off senior: sleep corto = más interactivo pero más detectable; sleep largo = sigiloso pero lento. Se ajusta según la fase de la operación.</div>` },
    { h: "3. Malleable profiles: disfrazar el tráfico", html: `<p>Un <strong>malleable C2 profile</strong> es un fichero que define <em>exactamente cómo se ve</em> el tráfico del beacon: cabeceras, URIs, User-Agent, dónde se esconden los datos. Permite que el C2 <strong>se disfrace</strong> de algo normal.</p>
      <div class="term"><div class="bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><b>idea de un perfil (simplificado)</b></div><pre><span class="c"># el beacon finge ser tráfico de una app de música</span>
http-get {
  set uri "/api/v1/tracks";
  client { header "User-Agent" "Spotify/1.2"; }
  server { header "Content-Type" "application/json"; }
}</pre></div>
      <p>Con un perfil así, el tráfico C2 parece una app corriente. El defensor ve "peticiones a una API de música", no un beacon. Es una de las piezas <strong>clave de OPSEC</strong>.</p>` },
    { h: "4. Listeners, pivoting y P2P", html: `<table class="tbl"><tr><th>Concepto</th><th>Qué es</th></tr>
      <tr><td><strong>Listener</strong></td><td>El "oído" del C2 que espera conexiones de beacons (HTTP, HTTPS, DNS, SMB…).</td></tr>
      <tr><td><strong>Beacon P2P (SMB/TCP)</strong></td><td>Beacons que hablan <em>entre ellos</em> dentro de la red interna, encadenándose, para que solo uno salga a Internet.</td></tr>
      <tr><td><strong>Pivoting</strong></td><td>Usar un equipo comprometido como puente hacia redes internas no accesibles directamente.</td></tr></table>
      <div class="callout">Los <strong>beacons P2P</strong> son muy OPSEC: en una red con 500 equipos, que solo uno hable con Internet y el resto se comuniquen internamente levanta mucha menos sospecha.</div>` },
    { h: "5. Elegir y endurecer el C2", html: `<p>La elección del C2 es una decisión de criterio, no de moda:</p>
      <ul>
        <li><strong>¿Qué detecta el cliente?</strong> Si su EDR caza Cobalt Strike por defecto, personalízalo con un perfil propio o usa otro framework.</li>
        <li><strong>Perfil a medida:</strong> cambiar indicadores por defecto (nombres de pipe, User-Agent, URIs) que los EDR tienen fichados.</li>
        <li><strong>Sleep/jitter acordes a la fase:</strong> lento para persistir, más rápido solo cuando operas activamente.</li>
        <li><strong>Canal de respaldo:</strong> un segundo beacon "durmiente" con sleep larguísimo por si queman el principal.</li>
      </ul>
      <div class="callout tip">💡 En la entrevista: menciona que <strong>personalizas el perfil y ajustas sleep/jitter</strong>; demuestra que entiendes el gato y el ratón con el EDR, no solo "uso Cobalt Strike".</div>` }
  ],
  claves: ["Frameworks: Cobalt Strike (Beacon), Sliver, Mythic, Havoc…", "Beacon: duerme (sleep) con jitter y hace check-in; evita el patrón regular", "Malleable profile: disfraza el tráfico C2 de algo legítimo", "Beacons P2P (SMB/TCP) y pivoting reducen salidas a Internet", "Personaliza indicadores por defecto que el EDR tiene fichados"],
  entrevista: ["¿Qué es un beacon y qué hacen el sleep y el jitter?", "¿Para qué sirve un malleable C2 profile?", "¿Por qué personalizarías un framework C2 conocido?", "¿Qué ventaja OPSEC dan los beacons P2P?"],
  quiz: [
    { q: "El 'jitter' de un beacon sirve para…", op: ["Cifrar el payload", "Variar el intervalo de check-in y romper el patrón regular (beaconing)", "Escalar privilegios", "Acelerar la exfiltración"], ok: 1, exp: "El jitter evita un patrón exacto, que sería fácil de detectar." },
    { q: "Un malleable C2 profile permite…", op: ["Crackear hashes", "Definir cómo se ve el tráfico del beacon para disfrazarlo de algo legítimo", "Apagar el EDR", "Escanear puertos"], ok: 1, exp: "Da forma a cabeceras/URIs para mezclarse con tráfico normal." },
    { q: "¿Por qué personalizar un C2 conocido como Cobalt Strike?", op: ["Por estética", "Porque los EDR detectan sus indicadores por defecto; personalizarlo evade", "Para ir más lento", "Es obligatorio"], ok: 1, exp: "Cambiar los indicadores fichados por defecto reduce la detección." },
    { q: "Un beacon P2P sobre SMB sirve para…", op: ["Salir todos a Internet", "Encadenar beacons internos para que solo uno hable con Internet", "Cifrar correos", "Hacer phishing"], ok: 1, exp: "Reduce las salidas a Internet y, con ello, la visibilidad." },
    { q: "Un 'listener' en un C2 es…", op: ["Un antivirus", "El componente que espera las conexiones entrantes de los beacons", "Un exploit", "Un redirector"], ok: 1, exp: "El listener recibe los check-ins de los beacons por su protocolo (HTTP/DNS/SMB…)." }
  ]
},
{
  id: 9, video: "09", nivel: "Evasión y C2", lab: "evasion", min: 28,
  titulo: "Evasión de AV y EDR",
  resumen: "Cómo ve un EDR lo que ocurre en un equipo y las técnicas para no ser visto: AMSI, ETW, hooks en userland, y por qué el senior piensa en comportamiento, no en firmas.",
  objetivos: ["Entender la diferencia entre AV clásico y EDR moderno", "Conocer qué 'micrófonos' usa Windows: AMSI y ETW", "Comprender el hooking en userland y el unhooking", "Interiorizar que la evasión moderna es sobre comportamiento, no solo firmas"],
  secciones: [
    { h: "1. AV vs EDR: de la lista negra al vigilante", html: `<p>Entender al defensor es el primer paso para evadirlo:</p>
      <table class="tbl"><tr><th></th><th>Antivirus (AV) clásico</th><th>EDR moderno</th></tr>
      <tr><td>Cómo detecta</td><td>Firmas: "¿este fichero coincide con un virus conocido?"</td><td>Comportamiento: "¿esta secuencia de acciones parece un ataque?"</td></tr>
      <tr><td>Analogía</td><td>Portero con lista de caras fichadas</td><td>Detective que observa <em>conductas</em> sospechosas</td></tr>
      <tr><td>Evasión</td><td>Cambiar el fichero (ofuscar) basta a menudo</td><td>No basta: hay que cambiar <em>el comportamiento</em></td></tr></table>
      <div class="callout">Por eso el senior no piensa "¿cómo oculto mi .exe?" sino <strong>"¿qué secuencia de acciones no delatará un patrón malicioso?"</strong>. La evasión moderna es de <strong>conducta</strong>.</div>` },
    { h: "2. AMSI: el micrófono de los scripts", html: `<p><strong>AMSI</strong> (Antimalware Scan Interface) es un "micrófono" que Windows coloca en PowerShell, VBA y .NET para que el antivirus <em>escuche</em> lo que se va a ejecutar, aunque venga cifrado u ofuscado.</p>
      <div class="term"><div class="bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><b>por qué AMSI complica la vida</b></div><pre><span class="c"># Antes: ofuscabas el script y el AV no lo leía</span>
<span class="c"># Ahora: justo antes de ejecutar, AMSI lo entrega</span>
<span class="c">#        descifrado al antivirus para que lo escanee</span></pre></div>
      <p>La evasión consiste en <strong>silenciar ese micrófono</strong> (AMSI bypass): hacer que la función que escanea devuelva siempre "limpio". Es un juego del gato y el ratón: Microsoft lo endurece, los atacantes buscan nuevas vías.</p>
      <div class="callout tip">💡 Conceptual: no necesitas memorizar un bypass concreto (caducan). Sí entender <strong>qué hace AMSI y por qué hay que neutralizarlo</strong> para ejecutar scripts sin ser visto.</div>` },
    { h: "3. ETW: el registro de eventos", html: `<p><strong>ETW</strong> (Event Tracing for Windows) es el sistema interno de telemetría de Windows. Muchos EDR "escuchan" ETW para ver qué hace cada proceso (p. ej. carga de .NET, llamadas sospechosas).</p>
      <ul>
        <li>Si AMSI es el micrófono de <em>lo que vas a ejecutar</em>, ETW es la <strong>cámara de seguridad</strong> de <em>lo que ya está pasando</em>.</li>
        <li>Técnicas de evasión buscan <strong>cegar ETW</strong> (ETW patching) para que el EDR deje de recibir esa telemetría.</li>
        <li>Igual que con AMSI, es un pulso constante: Microsoft protege ETW, los operadores buscan huecos.</li>
      </ul>
      <div class="callout">Entender AMSI + ETW explica <em>cómo</em> un EDR "ve" un equipo. Cegar estos sensores es gran parte de la evasión moderna en Windows.</div>` },
    { h: "4. Hooks en userland y unhooking", html: `<p>Muchos EDR se "enganchan" (<strong>hooking</strong>) a las funciones que usan los programas para pedir cosas a Windows (crear procesos, inyectar memoria). Así interceptan y analizan cada llamada sospechosa.</p>
      <div class="flow">
        <div class="fstep"><b>Hooking</b><span>El EDR intercepta llamadas clave en memoria del proceso</span></div>
        <div class="fstep"><b>El ataque pasa por ahí</b><span>Si llamas "normal", el EDR te ve</span></div>
        <div class="fstep"><b>Unhooking</b><span>Restaurar las funciones originales para esquivar el hook</span></div>
        <div class="fstep"><b>Direct/indirect syscalls</b><span>Hablar con el kernel saltándose la capa enganchada</span></div>
      </div>
      <div class="callout tip">💡 Idea senior para la entrevista: los EDR vigilan sobre todo en <strong>userland</strong>; técnicas como <em>unhooking</em> o <em>syscalls directas</em> buscan comunicarse con el sistema <strong>sin pasar por los puntos que el EDR observa</strong>.</div>` },
    { h: "5. La filosofía: mezclarse, no 'ser invisible'", html: `<p>La evasión perfecta y permanente no existe. El objetivo realista del senior es <strong>no generar el patrón que dispara la alerta</strong>:</p>
      <ul>
        <li><strong>Preferir lo legítimo (LOLBAS):</strong> una acción con un binario de Windows levanta menos que un .exe raro.</li>
        <li><strong>Minimizar acciones "ruidosas":</strong> inyecciones, volcados de LSASS y escaneos son lo más vigilado; hazlos solo si hace falta y con cuidado.</li>
        <li><strong>Pensar como el detector:</strong> ¿qué regla saltaría con esto? Si no lo sabes, pruébalo en tu lab con el mismo EDR.</li>
        <li><strong>Aceptar que pueden detectarte:</strong> por eso existe la trazabilidad y la deconfliction. Detectar <em>también</em> es un resultado valioso del ejercicio.</li>
      </ul>
      <div class="callout">⚠️ Todas estas técnicas se practican en laboratorios propios y engagements autorizados. Su fin es <strong>medir y mejorar la detección</strong> del cliente.</div>` }
  ],
  claves: ["AV = firmas; EDR = comportamiento. La evasión moderna es de conducta", "AMSI = micrófono de scripts; hay que silenciarlo para ejecutar sin ser visto", "ETW = telemetría que el EDR escucha; cegarla es evasión", "Hooks en userland: unhooking y syscalls directas los esquivan", "Mejor mezclarse (LOLBAS) y minimizar acciones ruidosas que buscar 'invisibilidad'"],
  entrevista: ["Diferencia entre un AV clásico y un EDR", "¿Qué es AMSI y por qué hay que neutralizarlo?", "¿Qué es el hooking en userland y cómo se evade?", "¿Por qué dices que la evasión moderna es sobre comportamiento?"],
  quiz: [
    { q: "La diferencia principal entre AV clásico y EDR es…", op: ["El precio", "El AV detecta por firmas; el EDR detecta por comportamiento", "El EDR es más antiguo", "No hay diferencia"], ok: 1, exp: "El EDR observa secuencias de acciones, no solo firmas de ficheros." },
    { q: "AMSI es…", op: ["Un exploit", "Una interfaz que deja al AV escanear scripts justo antes de ejecutarse, aunque vengan ofuscados", "Un framework C2", "Un tipo de hash"], ok: 1, exp: "AMSI entrega el contenido descifrado al motor antimalware para su análisis." },
    { q: "'Cegar ETW' busca…", op: ["Acelerar Windows", "Que el EDR deje de recibir la telemetría que usa para detectar", "Cifrar el disco", "Crackear Kerberos"], ok: 1, exp: "ETW alimenta a muchos EDR; interrumpirlo reduce su visibilidad." },
    { q: "El 'unhooking' consiste en…", op: ["Colgar el teléfono", "Restaurar las funciones originales de Windows para esquivar los hooks del EDR", "Un ataque DNS", "Enviar phishing"], ok: 1, exp: "Deshace la interceptación que el EDR coloca en userland." },
    { q: "La filosofía de evasión senior es…", op: ["Ser totalmente invisible siempre", "No generar el patrón que dispara la alerta: mezclarse y minimizar lo ruidoso", "Apagar el EDR por fuerza bruta", "Ignorar al defensor"], ok: 1, exp: "La invisibilidad total no existe; el objetivo es no destacar." }
  ]
},
{
  id: 10, video: "10", nivel: "Evasión y C2", lab: null, min: 24,
  titulo: "Ejecución sigilosa y OPSEC del operador",
  resumen: "Las técnicas con las que el código corre sin levantar sospechas (process injection, LOLBAS) y la disciplina personal del operador para no cometer el error que delata la operación.",
  objetivos: ["Entender process injection y por qué es tan vigilada", "Conocer LOLBAS: vivir de lo que ya hay en el sistema", "Comprender la persistencia sigilosa", "Interiorizar la OPSEC diaria del operador (el eslabón humano del Red Team)"],
  secciones: [
    { h: "1. Process injection: esconderse en un proceso legítimo", html: `<p>La <strong>inyección de procesos</strong> consiste en meter tu código dentro de un proceso de confianza (p. ej. <code>explorer.exe</code>), como un polizón en un barco con bandera legal. Así tu actividad "pertenece" a algo que parece normal.</p>
      <table class="tbl"><tr><th>Técnica</th><th>Idea</th></tr>
      <tr><td>Classic injection</td><td>Reservar memoria en otro proceso y ejecutar ahí (muy fichada por los EDR)</td></tr>
      <tr><td>Process hollowing</td><td>Arrancar un proceso legítimo y "vaciarlo" para poner el tuyo dentro</td></tr>
      <tr><td>APC / thread hijacking</td><td>Secuestrar hilos existentes para ejecutar sin crear uno nuevo sospechoso</td></tr></table>
      <div class="callout">La inyección es potente pero <strong>muy vigilada</strong>: es de lo primero que un EDR busca. El senior la usa con criterio, no por defecto, y prefiere las variantes menos ruidosas.</div>` },
    { h: "2. LOLBAS: vivir de la tierra", html: `<p><strong>LOLBAS</strong> (Living Off the Land Binaries and Scripts) es abusar de binarios <em>legítimos y firmados por Microsoft</em> para hacer cosas maliciosas. Como un ladrón que usa las propias herramientas de la casa: nadie sospecha de ellas.</p>
      <table class="tbl"><tr><th>Binario legítimo</th><th>Abuso posible</th></tr>
      <tr><td><code>certutil</code></td><td>Descargar/decodificar ficheros</td></tr>
      <tr><td><code>rundll32</code> / <code>regsvr32</code></td><td>Ejecutar código desde DLL/scripts</td></tr>
      <tr><td><code>mshta</code></td><td>Ejecutar HTA/JScript</td></tr>
      <tr><td><code>bitsadmin</code></td><td>Transferir ficheros sigilosamente</td></tr></table>
      <div class="callout tip">💡 Ventaja clave: están firmados y son de confianza, así que pasan controles de allowlisting y levantan menos alarmas que un binario propio. Desventaja: su abuso también está cada vez más vigilado.</div>` },
    { h: "3. Persistencia sigilosa", html: `<p>La <strong>persistencia</strong> es mantener el acceso aunque el equipo se reinicie. El reto senior es hacerlo <em>sin</em> dejar una señal evidente:</p>
      <table class="tbl"><tr><th>Mecanismo</th><th>Nota OPSEC</th></tr>
      <tr><td>Tarea programada</td><td>Común y legítima; se camufla bien con un nombre creíble</td></tr>
      <tr><td>Clave Run del registro</td><td>Clásica y por ello muy monitorizada</td></tr>
      <tr><td>Servicio nuevo</td><td>Potente pero ruidoso: crear servicios se audita</td></tr>
      <tr><td>Abuso de apps legítimas</td><td>Secuestrar algo que ya arranca (más sigiloso)</td></tr></table>
      <div class="callout">Regla senior: <strong>cuanta más persistencia pones, más superficie de detección creas</strong>. A veces lo más OPSEC es no persistir y reentrar cuando haga falta.</div>` },
    { h: "4. La OPSEC del operador (el humano)", html: `<p>La mayoría de operaciones no caen por un EDR listo, sino por un <strong>error del operador</strong>. La disciplina personal es tan importante como la técnica:</p>
      <ul>
        <li><strong>No teclear comandos ruidosos por costumbre</strong> (<code>whoami /all</code>, <code>net group "Domain Admins"</code>) sin pensar si disparan alertas.</li>
        <li><strong>Pensar antes de actuar en cada host:</strong> ¿este equipo tiene EDR? ¿es de un VIP? ¿es un servidor de producción?</li>
        <li><strong>Registrar todo lo que haces</strong> (para el informe y la deconfliction).</li>
        <li><strong>No ir con prisa:</strong> la impaciencia (escaneos amplios, acciones en lote) es lo que más delata.</li>
      </ul>
      <div class="callout tip">💡 Frase para la entrevista: <strong>"La herramienta más peligrosa de la operación es el teclado del operador con prisa"</strong>. Demuestra madurez OPSEC.</div>` },
    { h: "5. El 'kill switch' y la limpieza", html: `<p>El senior siempre planea cómo <strong>parar y limpiar</strong>:</p>
      <ul>
        <li><strong>Inventario de artefactos:</strong> saber en todo momento qué beacons, persistencias y ficheros has dejado y dónde.</li>
        <li><strong>Clean-up:</strong> al terminar el ejercicio, eliminar payloads, persistencias y cuentas creadas.</li>
        <li><strong>Deconfliction a mano:</strong> poder responder al cliente "sí, eso de las 14:32 fuimos nosotros" al instante.</li>
        <li><strong>No dejar puertas abiertas:</strong> una persistencia olvidada es un riesgo real para el cliente.</li>
      </ul>
      <div class="callout">Dejar el entorno <strong>exactamente como estaba</strong> (salvo el conocimiento ganado) es parte del profesionalismo. Un Red Team que ensucia y olvida no vuelve a ser contratado.</div>` }
  ],
  claves: ["Process injection esconde tu código en un proceso legítimo (muy vigilada)", "LOLBAS: abusar de binarios firmados de Windows para no destacar", "Más persistencia = más superficie de detección; a veces mejor reentrar", "La OPSEC del operador (no ir con prisa, pensar por host) evita la mayoría de fallos", "Planifica siempre el clean-up y la deconfliction"],
  entrevista: ["¿Qué es process injection y por qué la vigila el EDR?", "¿Qué es LOLBAS y qué ventaja da?", "¿Cómo persistirías de forma sigilosa?", "¿Qué errores del operador delatan una operación?"],
  quiz: [
    { q: "Process injection consiste en…", op: ["Inyectar SQL", "Ejecutar tu código dentro de un proceso legítimo para camuflarte", "Un ataque de phishing", "Cifrar memoria"], ok: 1, exp: "Te 'escondes' dentro de un proceso de confianza como explorer.exe." },
    { q: "LOLBAS aprovecha…", op: ["Binarios propios del atacante", "Binarios legítimos y firmados de Windows para actuar sin levantar sospechas", "Exploits de kernel", "Hashes NTLM"], ok: 1, exp: "Usar herramientas nativas firmadas evade allowlisting y levanta menos alarmas." },
    { q: "Respecto a la persistencia, la regla senior dice…", op: ["Cuanta más, mejor", "Cuanta más persistencia pones, más superficie de detección creas", "Nunca se usa", "Es ilegal"], ok: 1, exp: "Cada mecanismo añadido es otra cosa que el defensor puede detectar." },
    { q: "La mayoría de operaciones caen por…", op: ["Un EDR perfecto", "Un error del operador (prisa, comandos ruidosos)", "Mala suerte", "El clima"], ok: 1, exp: "La disciplina humana (OPSEC del operador) es decisiva." },
    { q: "El 'clean-up' al final del ejercicio consiste en…", op: ["Borrar los logs del cliente", "Eliminar payloads, persistencias y cuentas creadas por el Red Team", "Apagar el EDR", "Publicar el informe"], ok: 1, exp: "Dejar el entorno como estaba es parte del profesionalismo y evita riesgos al cliente." }
  ]
},
/* ═══════════════════ ACTIVE DIRECTORY ═══════════════════ */
{
  id: 11, video: "11", nivel: "Active Directory", lab: null, min: 26,
  titulo: "Active Directory desde cero",
  resumen: "El cerebro de casi toda empresa: dominios, controladores de dominio, objetos, LDAP y Kerberos. Si entiendes esto, entiendes el 80% de una intrusión interna.",
  objetivos: ["Entender qué es Active Directory y por qué es el gran objetivo", "Conocer dominio, bosque, DC, OU y los objetos (usuarios, grupos, equipos)", "Comprender cómo funciona el login con Kerberos (tickets)", "Situar los grupos privilegiados clave (Domain Admins, etc.)"],
  secciones: [
    { h: "1. AD: el portero y la agenda de la empresa", html: `<p><strong>Active Directory (AD)</strong> es el sistema de Microsoft que gestiona <em>quién es quién</em> y <em>quién puede qué</em> en una red Windows. Es, a la vez, la <strong>agenda de contactos</strong> y el <strong>portero</strong> de toda la organización.</p>
      <div class="callout">Casi todas las empresas medianas y grandes usan AD. Por eso, en una intrusión interna, <strong>comprometer AD = comprometer la empresa</strong>. Es la "crown jewel" por excelencia.</div>
      <p>Cuando te logueas en el PC del trabajo con tu usuario, no se valida en tu equipo: lo valida AD a través de un <strong>controlador de dominio</strong>.</p>` },
    { h: "2. El vocabulario de AD", html: `<table class="tbl"><tr><th>Término</th><th>Qué es</th><th>Analogía</th></tr>
      <tr><td><strong>Dominio</strong></td><td>Un grupo de usuarios/equipos bajo una misma administración (<code>empresa.local</code>)</td><td>Un edificio con su conserjería</td></tr>
      <tr><td><strong>Bosque (forest)</strong></td><td>Conjunto de dominios relacionados; la frontera de seguridad real</td><td>El campus entero</td></tr>
      <tr><td><strong>Controlador de dominio (DC)</strong></td><td>El servidor que guarda la base de datos de AD y valida logins</td><td>La conserjería central</td></tr>
      <tr><td><strong>OU</strong></td><td>Carpeta organizativa para agrupar objetos y aplicar políticas</td><td>Las plantas del edificio</td></tr>
      <tr><td><strong>Objeto</strong></td><td>Usuario, grupo, equipo… cada entrada de la agenda</td><td>Cada ficha de contacto</td></tr>
      <tr><td><strong>GPO</strong></td><td>Group Policy: reglas que se aplican en masa a equipos/usuarios</td><td>El reglamento del edificio</td></tr></table>
      <div class="callout tip">💡 El <strong>bosque</strong>, no el dominio, es la frontera de seguridad. Comprometer un dominio puede llevar a comprometer todo el bosque a través de las <em>relaciones de confianza (trusts)</em>.</div>` },
    { h: "3. LDAP: cómo se consulta la agenda", html: `<p><strong>LDAP</strong> es el protocolo para <em>consultar</em> AD: "dame todos los usuarios", "¿quién está en Domain Admins?". Gran parte de la enumeración interna es, en el fondo, hacer preguntas LDAP.</p>
      <div class="term"><div class="bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><b>ejemplos de enumeración (conceptual)</b></div><pre><span class="c"># usuarios del dominio</span>
Get-ADUser -Filter *
<span class="c"># miembros de un grupo privilegiado</span>
Get-ADGroupMember "Domain Admins"
<span class="c"># equipos del dominio</span>
Get-ADComputer -Filter *</pre></div>
      <p>Lo potente (y peligroso) de AD es que <strong>cualquier usuario del dominio, por básico que sea, puede leer casi toda la estructura</strong>. Eso da al atacante un mapa completo nada más entrar.</p>` },
    { h: "4. Kerberos: el login con tickets", html: `<p>AD autentica sobre todo con <strong>Kerberos</strong>. La analogía perfecta es un <strong>parque de atracciones</strong>:</p>
      <div class="flow">
        <div class="fstep"><b>1 · Taquilla (AS)</b><span>Te identificas y te dan una pulsera: el TGT</span></div>
        <div class="fstep"><b>2 · TGT</b><span>"Ticket para pedir tickets": prueba que eres tú</span></div>
        <div class="fstep"><b>3 · Atracción (TGS)</b><span>Enseñas la pulsera y pides entrada a un servicio</span></div>
        <div class="fstep"><b>4 · Service Ticket</b><span>Con él accedes al servicio concreto (un servidor, un recurso)</span></div>
      </div>
      <p>El DC hace de taquilla (KDC). Entender esto es <strong>imprescindible</strong>, porque casi todos los ataques de AD abusan de alguna parte de este baile de tickets (lo verás en el módulo de ataques Kerberos).</p>` },
    { h: "5. Grupos y cuentas que todo atacante busca", html: `<table class="tbl"><tr><th>Grupo / cuenta</th><th>Poder</th></tr>
      <tr><td><strong>Domain Admins</strong></td><td>Control total del dominio. El gran premio.</td></tr>
      <tr><td><strong>Enterprise Admins</strong></td><td>Control de todo el bosque.</td></tr>
      <tr><td><strong>Administrators (local)</strong></td><td>Admin de un equipo concreto; vía hacia el dominio.</td></tr>
      <tr><td><strong>krbtgt</strong></td><td>La cuenta que firma todos los tickets Kerberos. Su hash = Golden Ticket.</td></tr>
      <tr><td><strong>Service accounts</strong></td><td>Cuentas de servicios, a menudo con privilegios y contraseñas débiles (Kerberoasting).</td></tr></table>
      <div class="callout">El objetivo típico de una intrusión interna es escalar de un usuario normal a <strong>Domain Admin</strong> (o al control de <code>krbtgt</code>), y desde ahí a las crown jewels. Los módulos siguientes muestran cómo.</div>` }
  ],
  claves: ["AD gestiona identidad y permisos; comprometerlo = comprometer la empresa", "Bosque > dominio > OU; el bosque es la frontera de seguridad real", "El DC (KDC) valida logins; LDAP consulta la estructura", "Kerberos: TGT (pulsera) → Service Ticket (entrada a un servicio)", "Objetivos: Domain/Enterprise Admins, krbtgt y service accounts"],
  entrevista: ["¿Qué es Active Directory y por qué es tan crítico?", "Explica el flujo de Kerberos con tickets", "¿Cuál es la frontera de seguridad: el dominio o el bosque?", "¿Por qué es peligrosa la cuenta krbtgt?"],
  quiz: [
    { q: "Un controlador de dominio (DC) es…", op: ["Un cortafuegos", "El servidor que guarda AD y valida los inicios de sesión", "Un antivirus", "Un switch de red"], ok: 1, exp: "El DC hospeda la base de datos de AD y actúa como KDC de Kerberos." },
    { q: "En Kerberos, el TGT es…", op: ["El ticket final a un servicio", "La 'pulsera' que prueba tu identidad y te permite pedir tickets de servicio", "Un hash NTLM", "Un exploit"], ok: 1, exp: "El TGT (Ticket Granting Ticket) se cambia luego por Service Tickets." },
    { q: "La frontera de seguridad real en AD es…", op: ["La OU", "El dominio", "El bosque (forest)", "La GPO"], ok: 2, exp: "El bosque es la frontera de seguridad; los dominios dentro confían entre sí." },
    { q: "¿Por qué cualquier usuario básico es útil para un atacante en AD?", op: ["Puede apagar el DC", "Puede leer casi toda la estructura del dominio vía LDAP (mapa completo)", "Es Domain Admin", "Controla krbtgt"], ok: 1, exp: "La lectura amplia por defecto da al atacante un mapa nada más entrar." },
    { q: "La cuenta krbtgt es peligrosa porque…", op: ["Es un usuario normal", "Firma todos los tickets Kerberos; su hash permite forjar Golden Tickets", "Es el antivirus", "No existe"], ok: 1, exp: "Con su hash se pueden crear tickets válidos para cualquier cosa (Golden Ticket)." }
  ]
},
{
  id: 12, video: "12", nivel: "Active Directory", lab: "bloodhound", min: 26,
  titulo: "Enumeración y rutas con BloodHound",
  resumen: "AD es un grafo de relaciones, y casi siempre hay un camino oculto de un usuario normal a Domain Admin. BloodHound lo dibuja; el senior sabe leerlo y explotarlo.",
  objetivos: ["Entender AD como un grafo de nodos y relaciones", "Conocer qué recoge un collector (SharpHound) y cómo", "Saber leer rutas de ataque y relaciones peligrosas (ACLs)", "Comprender el concepto de 'shortest path to Domain Admin'"],
  secciones: [
    { h: "1. AD es un grafo, no una lista", html: `<p>La gran idea: AD no es una lista de usuarios, es una <strong>red de relaciones</strong>. "Este usuario es admin local de ese equipo", "este grupo puede cambiar la contraseña de aquel otro". Esas relaciones encadenadas forman <strong>caminos</strong>.</p>
      <div class="callout">Casi siempre existe una <strong>ruta no evidente</strong> de un usuario cualquiera hasta Domain Admin, saltando por permisos mal configurados. A simple vista no se ve; como grafo, sí.</div>
      <p><strong>BloodHound</strong> es la herramienta que convierte AD en ese grafo visual y calcula los caminos más cortos al objetivo. Cambió para siempre el pentest de AD.</p>` },
    { h: "2. Nodos y aristas (relaciones)", html: `<table class="tbl"><tr><th>Nodos (cosas)</th><th>Aristas (relaciones)</th></tr>
      <tr><td>Usuarios</td><td><code>MemberOf</code> — pertenece a un grupo</td></tr>
      <tr><td>Grupos</td><td><code>AdminTo</code> — es admin local de un equipo</td></tr>
      <tr><td>Equipos</td><td><code>HasSession</code> — tiene una sesión iniciada ahí</td></tr>
      <tr><td>GPOs, OUs, dominios</td><td><code>GenericAll</code>, <code>WriteDACL</code>, <code>ForceChangePassword</code> — permisos peligrosos</td></tr></table>
      <div class="callout tip">💡 Las aristas de <strong>ACL</strong> (como <code>GenericAll</code> o <code>WriteDACL</code>) son oro: significan "tengo control sobre este objeto", y suelen ser el escalón oculto hacia el dominio.</div>` },
    { h: "3. Cómo se recogen los datos (SharpHound)", html: `<p>Un <strong>collector</strong> (SharpHound, o la versión para BloodHound CE) consulta AD y recoge toda esa información para dibujar el grafo:</p>
      <div class="term"><div class="bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><b>recogida (conceptual)</b></div><pre><span class="c"># recoge objetos, pertenencias, sesiones, ACLs…</span>
SharpHound -c All
<span class="c"># genera un .zip que se importa en BloodHound</span></pre></div>
      <p class="muted">⚠️ OPSEC: la recogida "All" puede ser <strong>ruidosa</strong> (muchas consultas, sesiones). El senior usa métodos selectivos y sigilosos (p. ej. solo lo necesario, sin tocar todas las sesiones) para no alertar.</p>` },
    { h: "4. Leer una ruta de ataque", html: `<p>BloodHound te enseña el camino. Saber leerlo es la habilidad clave:</p>
      <div class="term"><div class="bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><b>una ruta típica</b></div><pre><span class="o">PACO@empresa</span>
  │  MemberOf
  ▼
<span class="o">Grupo Soporte TI</span>
  │  ForceChangePassword
  ▼
<span class="o">ADMIN_BACKUP</span>
  │  AdminTo
  ▼
<span class="hl">SRV-FICHEROS</span>  →  aquí hay sesión de un Domain Admin
  │  (robo de credenciales en memoria)
  ▼
<span class="ok2">DOMAIN ADMINS</span></pre></div>
      <p>El senior lee esto como una <strong>escalera</strong>: "con Paco cambio la contraseña de ADMIN_BACKUP, que es admin de SRV-FICHEROS, donde hay una sesión de Domain Admin cuyas credenciales puedo robar". Paso a paso hasta el dominio.</p>` },
    { h: "5. Del grafo al plan (y a la defensa)", html: `<p>BloodHound no solo sirve para atacar; en el informe se vuelve una guía de <strong>remediación</strong>:</p>
      <ul>
        <li><strong>Para atacar:</strong> elegir el camino más corto y sigiloso hacia el objetivo.</li>
        <li><strong>Para defender:</strong> mostrar al cliente las relaciones peligrosas que hay que cortar (quitar admins locales innecesarios, arreglar ACLs).</li>
        <li><strong>Para priorizar:</strong> algunos nodos son "cuellos de botella": si los arreglas, cierras muchas rutas de golpe.</li>
      </ul>
      <div class="callout tip">💡 En la entrevista: "AD es un grafo; casi siempre hay un camino oculto a DA. Uso BloodHound para encontrar el más corto y, en el informe, para señalar qué relaciones cortar". Eso suena a senior.</div>` }
  ],
  claves: ["AD es un grafo de nodos (usuarios/grupos/equipos) y relaciones", "Las aristas de ACL (GenericAll, WriteDACL, ForceChangePassword) son el escalón oculto", "SharpHound recoge los datos; cuidado con el ruido de la recogida", "BloodHound calcula el camino más corto a Domain Admin", "El grafo también guía la remediación: cortar relaciones peligrosas"],
  entrevista: ["¿Por qué se dice que AD es un grafo?", "¿Qué es BloodHound y qué problema resuelve?", "Dame un ejemplo de relación peligrosa (ACL) en AD", "¿Cómo usarías BloodHound en el informe para el cliente?"],
  quiz: [
    { q: "La idea central de BloodHound es que AD…", op: ["Es una lista de contraseñas", "Es un grafo de relaciones con caminos ocultos hacia Domain Admin", "Es un antivirus", "No se puede enumerar"], ok: 1, exp: "Modela AD como grafo y calcula rutas de ataque entre nodos." },
    { q: "Una arista 'ForceChangePassword' significa que…", op: ["El objeto está cifrado", "Puedes cambiar la contraseña de otra cuenta (control sobre ella)", "Hay un exploit de kernel", "El DC está caído"], ok: 1, exp: "Es un permiso que te deja tomar el control de otra cuenta." },
    { q: "SharpHound es…", op: ["Un C2", "El collector que recoge los datos de AD para BloodHound", "Un antivirus", "Un exploit de Kerberos"], ok: 1, exp: "Recoge objetos, pertenencias, sesiones y ACLs y genera el dataset." },
    { q: "¿Por qué el senior cuida la recogida con SharpHound?", op: ["Es cara", "Puede ser ruidosa (muchas consultas/sesiones) y alertar al Blue Team", "No funciona", "Es ilegal"], ok: 1, exp: "La recogida masiva genera ruido; se hace selectiva y sigilosa por OPSEC." },
    { q: "Además de atacar, BloodHound sirve para…", op: ["Nada más", "Guiar la remediación: mostrar qué relaciones peligrosas cortar", "Enviar phishing", "Cifrar datos"], ok: 1, exp: "El grafo señala los cuellos de botella y ACLs a corregir." }
  ]
},
{
  id: 13, video: "13", nivel: "Active Directory", lab: "kerberos", min: 28,
  titulo: "Ataques Kerberos",
  resumen: "Kerberoasting, AS-REP roasting y abuso de delegación: cómo los atacantes convierten el baile de tickets de Kerberos en robo de credenciales y escalada.",
  objetivos: ["Entender Kerberoasting y por qué funciona", "Conocer AS-REP roasting y la preautenticación", "Comprender la delegación (unconstrained, constrained, RBCD) a alto nivel", "Saber qué defensa aplica a cada ataque (para el informe)"],
  secciones: [
    { h: "1. Por qué Kerberos es atacable", html: `<p>Kerberos es seguro por diseño, pero su funcionamiento deja <strong>rendijas</strong> que los atacantes explotan. La mayoría no 'rompen' Kerberos: <em>abusan de cómo entrega tickets</em>.</p>
      <div class="callout">Recuerda el parque de atracciones: TGT (pulsera) → Service Ticket (entrada a un servicio). Varios ataques consisten en <strong>pedir tickets de forma legítima</strong> y luego atacarlos offline, sin tocar nada "roto".</div>` },
    { h: "2. Kerberoasting: el ataque estrella", html: `<p>El más famoso y examinado. Se basa en una idea sencilla:</p>
      <div class="flow">
        <div class="fstep"><b>1</b><span>Las cuentas de servicio tienen un "SPN"</span></div>
        <div class="fstep"><b>2</b><span>Cualquier usuario puede pedir un Service Ticket para ese servicio</span></div>
        <div class="fstep"><b>3</b><span>Ese ticket va cifrado con el hash de la contraseña del servicio</span></div>
        <div class="fstep"><b>4</b><span>Lo crackeas offline: si la contraseña es débil, la recuperas</span></div>
      </div>
      <div class="term"><div class="bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><b>flujo (conceptual)</b></div><pre><span class="c"># pedir tickets de cuentas de servicio</span>
Rubeus kerberoast        <span class="c"># o GetUserSPNs (Impacket)</span>
<span class="c"># crackear offline, sin tocar el dominio</span>
hashcat -m 13100 hashes.txt rockyou.txt</pre></div>
      <p>Funciona porque muchas <strong>cuentas de servicio</strong> tienen contraseñas débiles y <em>no caducan</em>. Y lo mejor para el atacante: el crackeo es <strong>offline</strong>, no genera intentos de login fallidos.</p>
      <div class="callout tip">💡 Defensa (para el informe): contraseñas largas y aleatorias en cuentas de servicio (o <strong>gMSA</strong>, gestionadas por AD), y vigilar peticiones masivas de tickets.</div>` },
    { h: "3. AS-REP roasting", html: `<p>Variante que ataca cuentas con una mala configuración: <strong>preautenticación de Kerberos desactivada</strong>.</p>
      <ul>
        <li>Normalmente, para pedir el TGT debes probar primero que conoces la contraseña (preautenticación).</li>
        <li>Si una cuenta tiene esa protección <strong>desactivada</strong>, cualquiera puede pedir un dato cifrado con su contraseña… y crackearlo offline.</li>
        <li>No necesitas credenciales previas: solo el nombre de la cuenta vulnerable.</li>
      </ul>
      <div class="callout">Es menos común que Kerberoasting (requiere la mala config concreta), pero cuando aparece es <strong>acceso gratis</strong>. Defensa: no desactivar la preautenticación y usar contraseñas fuertes.</div>` },
    { h: "4. Abuso de delegación", html: `<p>La <strong>delegación</strong> permite que un servicio actúe <em>en nombre de</em> un usuario (p. ej. un servidor web que accede a una base de datos como tú). Mal configurada, es una vía de escalada potente:</p>
      <table class="tbl"><tr><th>Tipo</th><th>Riesgo (muy resumido)</th></tr>
      <tr><td><strong>Unconstrained</strong></td><td>El servidor guarda el TGT de quien se conecta: si logras que un admin se conecte, robas su TGT. Muy peligrosa.</td></tr>
      <tr><td><strong>Constrained</strong></td><td>Limitada a ciertos servicios, pero con trucos (S4U) puede abusarse.</td></tr>
      <tr><td><strong>RBCD</strong> (basada en recursos)</td><td>Si puedes escribir cierto atributo de un equipo, puedes hacerte pasar por cualquiera contra él.</td></tr></table>
      <div class="callout tip">💡 No necesitas memorizar cada variante para la entrevista; sí saber que <strong>la delegación mal configurada permite suplantar a otros usuarios</strong>, incluidos administradores.</div>` },
    { h: "5. Tras robar credenciales: a dónde lleva", html: `<p>Estos ataques entregan <strong>credenciales o tickets</strong>, que alimentan el resto de la intrusión:</p>
      <div class="flow">
        <div class="fstep"><b>Kerberoasting</b><span>Contraseña de una cuenta de servicio</span></div>
        <div class="fstep"><b>¿Es privilegiada?</b><span>A veces son admins locales o de dominio</span></div>
        <div class="fstep"><b>Reutilizar</b><span>Acceso a más equipos/servicios</span></div>
        <div class="fstep"><b>BloodHound</b><span>Ver qué abre esa cuenta y seguir el camino</span></div>
      </div>
      <div class="callout">La belleza (para el atacante) de Kerberoasting es que <strong>solo necesita un usuario de dominio cualquiera</strong> para empezar, y el crackeo es invisible. Por eso es de los primeros movimientos tras el acceso inicial.</div>` }
  ],
  claves: ["La mayoría de ataques Kerberos abusan de la entrega de tickets, no 'rompen' Kerberos", "Kerberoasting: pedir tickets de cuentas de servicio y crackearlos OFFLINE", "AS-REP roasting: cuentas sin preautenticación → crackeo sin credenciales previas", "Delegación mal configurada permite suplantar usuarios (incl. admins)", "Defensa: contraseñas fuertes/gMSA, preautenticación activa, revisar delegaciones"],
  entrevista: ["Explica Kerberoasting paso a paso y por qué es offline", "¿Qué es AS-REP roasting y qué mala config lo permite?", "¿Qué riesgo tiene la delegación sin restricciones?", "¿Qué defensa recomendarías contra Kerberoasting?"],
  quiz: [
    { q: "Kerberoasting funciona porque…", op: ["Rompe el cifrado de Kerberos", "Cualquier usuario puede pedir tickets de cuentas de servicio y crackearlos offline", "Apaga el DC", "Explota un 0-day del kernel"], ok: 1, exp: "El Service Ticket va cifrado con el hash de la cuenta de servicio y se ataca offline." },
    { q: "Una gran ventaja de Kerberoasting para el atacante es que…", op: ["Necesita ser Domain Admin", "El crackeo es offline y no genera logins fallidos", "Reinicia el dominio", "Avisa al Blue Team"], ok: 1, exp: "Al crackear offline no deja el rastro de intentos de autenticación." },
    { q: "AS-REP roasting es posible cuando una cuenta…", op: ["Es Domain Admin", "Tiene la preautenticación de Kerberos desactivada", "Está deshabilitada", "No tiene SPN"], ok: 1, exp: "Sin preautenticación se obtiene material cifrado con su contraseña para crackear." },
    { q: "La delegación 'unconstrained' es peligrosa porque…", op: ["Cifra el disco", "El servidor almacena el TGT de quien se conecta; si es un admin, se roba", "Borra logs", "No existe"], ok: 1, exp: "Permite capturar el TGT de usuarios privilegiados que se conecten." },
    { q: "Defensa recomendada contra Kerberoasting:", op: ["Apagar AD", "Contraseñas largas/aleatorias o gMSA en cuentas de servicio", "Usar MD5", "Desactivar Kerberos"], ok: 1, exp: "Contraseñas fuertes o cuentas gestionadas (gMSA) hacen inviable el crackeo." }
  ]
},
{
  id: 14, video: "14", nivel: "Active Directory", lab: null, min: 28,
  titulo: "Escalada a dominio: ADCS, DCSync y tickets",
  resumen: "Las técnicas que convierten un punto de apoyo en control total del dominio: certificados (ADCS/ESC), DCSync, Golden/Silver Ticket y persistencia de dominio.",
  objetivos: ["Entender el abuso de ADCS (plantillas de certificados, ESC)", "Comprender DCSync y por qué equivale a robar todas las contraseñas", "Conocer Golden y Silver Ticket (persistencia con Kerberos)", "Situar la cadena completa de dominación del dominio y su defensa"],
  secciones: [
    { h: "1. Del punto de apoyo al dominio completo", html: `<p>Tras el acceso inicial y algún robo de credenciales, el objetivo es <strong>controlar el dominio</strong> (Domain Admin o equivalente). Hay varias "autopistas" para lograrlo; estas son las más importantes hoy.</p>
      <div class="callout">Idea senior: muchas de estas técnicas no explotan un bug, sino <strong>configuraciones por defecto o permisos mal puestos</strong>. Por eso son tan comunes y tan reportadas en informes.</div>` },
    { h: "2. ADCS: certificados mal configurados (ESC)", html: `<p><strong>ADCS</strong> (Active Directory Certificate Services) es la entidad que emite certificados internos. Si una <strong>plantilla de certificado</strong> está mal configurada, un usuario normal puede pedir un certificado que le identifique como… <em>otro usuario, incluido un admin</em>.</p>
      <ul>
        <li>Las configuraciones peligrosas se catalogan como <strong>ESC1, ESC8…</strong> (las describió la investigación "Certified Pre-Owned").</li>
        <li>Herramientas: <strong>Certify</strong> y <strong>Certipy</strong> para encontrar y abusar de plantillas vulnerables.</li>
        <li>Un certificado robado permite autenticarse como la víctima de forma <strong>persistente</strong> (los certificados duran mucho).</li>
      </ul>
      <div class="callout tip">💡 ADCS es uno de los vectores más explotados de los últimos años porque estaba <strong>mal configurado por defecto</strong> en muchísimas empresas. Mencionar ESC1/Certipy demuestra que estás al día.</div>` },
    { h: "3. DCSync: pedir las contraseñas al DC", html: `<p><strong>DCSync</strong> es demoledor: si tienes ciertos permisos (los que tienen los DCs), puedes <em>pedirle</em> a un controlador de dominio que te <strong>replique las contraseñas</strong>, como si fueras otro DC.</p>
      <div class="term"><div class="bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><b>idea de DCSync</b></div><pre><span class="c"># "Oye DC, soy otro DC, mándame los hashes"</span>
mimikatz: lsadump::dcsync /user:krbtgt
<span class="c"># → obtienes el hash de krbtgt = control total</span></pre></div>
      <p>Obtener el hash de <strong>krbtgt</strong> vía DCSync es el premio gordo: con él se forjan Golden Tickets. DCSync no requiere entrar físicamente en el DC, solo tener el permiso adecuado (que se consigue al ser Domain Admin o por una ACL mal puesta).</p>` },
    { h: "4. Golden y Silver Ticket", html: `<table class="tbl"><tr><th>Ticket forjado</th><th>Qué es</th><th>Alcance</th></tr>
      <tr><td><strong>Golden Ticket</strong></td><td>Un TGT falso firmado con el hash de <code>krbtgt</code></td><td>Acceso como cualquiera a <em>todo</em> el dominio. Persistencia brutal.</td></tr>
      <tr><td><strong>Silver Ticket</strong></td><td>Un Service Ticket falso para un servicio concreto</td><td>Acceso a <em>ese</em> servicio, más sigiloso (no pasa por el DC)</td></tr></table>
      <div class="callout">Con un Golden Ticket, el atacante se mueve como Domain Admin aunque cambien las contraseñas de los admins. Por eso, tras un compromiso serio, la recomendación es <strong>rotar la contraseña de krbtgt dos veces</strong>.</div>` },
    { h: "5. La cadena completa y su defensa", html: `<p>Juntando todo el nivel, una cadena típica de dominación de dominio:</p>
      <div class="flow">
        <div class="fstep"><b>Acceso</b><span>Usuario de dominio (phishing)</span></div>
        <div class="fstep"><b>BloodHound</b><span>Encontrar la ruta</span></div>
        <div class="fstep"><b>Kerberoast / ADCS</b><span>Robar credenciales o certificados</span></div>
        <div class="fstep"><b>Escalar</b><span>Llegar a permisos de DCSync</span></div>
        <div class="fstep"><b>DCSync krbtgt</b><span>Control total</span></div>
        <div class="fstep"><b>Objetivo</b><span>Crown jewels demostradas</span></div>
      </div>
      <div class="callout tip">💡 Para el informe: Tier 0 / modelo de niveles administrativos, cuentas sin privilegios excesivos, plantillas ADCS revisadas, monitorización de DCSync, y rotación de krbtgt. El senior <strong>siempre</strong> cierra con remediación.</div>
      <p class="muted">⚠️ Todo esto se practica solo en laboratorios propios (GOAD, máquinas de HackTheBox/TryHackMe) o en engagements autorizados por escrito.</p>` }
  ],
  claves: ["ADCS mal configurado (ESC1/ESC8) permite pedir certificados de otros usuarios", "DCSync: pedir al DC que replique contraseñas (incl. krbtgt)", "Golden Ticket (TGT con hash de krbtgt) = control total y persistente", "Silver Ticket: ticket de servicio falso, más sigiloso", "Cadena: acceso → BloodHound → Kerberoast/ADCS → DCSync → dominio; cierra con remediación"],
  entrevista: ["¿Qué es DCSync y por qué es tan grave?", "¿Qué es un Golden Ticket y cómo se defiende uno?", "¿Qué es el abuso de ADCS (ESC) y con qué herramienta se detecta?", "Descríbeme una cadena completa de dominación de dominio"],
  quiz: [
    { q: "DCSync permite a un atacante…", op: ["Apagar el DC", "Pedir al DC que replique contraseñas (como krbtgt), fingiendo ser otro DC", "Enviar phishing", "Cifrar el dominio"], ok: 1, exp: "Abusa de la replicación de AD para obtener hashes sin tocar el DC físicamente." },
    { q: "Un Golden Ticket se forja con el hash de…", op: ["Un usuario normal", "La cuenta krbtgt", "El antivirus", "Un certificado web"], ok: 1, exp: "Con el hash de krbtgt se firma un TGT falso válido para todo el dominio." },
    { q: "El abuso de ADCS (ESC1, etc.) consiste en…", op: ["Romper TLS", "Aprovechar plantillas de certificado mal configuradas para suplantar a otros usuarios", "Un ataque DoS", "Crackear rockyou"], ok: 1, exp: "Una plantilla vulnerable deja pedir certificados que te identifican como un admin." },
    { q: "La diferencia de un Silver Ticket frente al Golden es que…", op: ["Es más potente", "Es un ticket de servicio concreto, más sigiloso (no pasa por el DC)", "Lo emite el antivirus", "No sirve para nada"], ok: 1, exp: "El Silver Ticket afecta a un servicio y evita el DC, siendo más discreto." },
    { q: "Tras un compromiso serio con krbtgt expuesto, se recomienda…", op: ["No hacer nada", "Rotar la contraseña de krbtgt (dos veces)", "Apagar la empresa", "Cambiar de antivirus"], ok: 1, exp: "Rotar krbtgt dos veces invalida los Golden Tickets forjados." }
  ]
},
/* ═══════════════════ CLOUD Y MOVIMIENTO ═══════════════════ */
{
  id: 15, video: "15", nivel: "Cloud y movimiento", lab: null, min: 26,
  titulo: "Movimiento lateral y persistencia",
  resumen: "Cómo saltar de un equipo a otro con las credenciales robadas (pass-the-hash, PsExec, WMI, WinRM), túneles y pivoting, y cómo mantener el acceso sin ser visto.",
  objetivos: ["Entender el movimiento lateral y las credenciales como 'llaves maestras'", "Conocer pass-the-hash/pass-the-ticket y las técnicas de ejecución remota", "Comprender pivoting y túneles para alcanzar redes internas", "Repasar la persistencia a nivel de dominio con criterio OPSEC"],
  secciones: [
    { h: "1. Moverse como un empleado más", html: `<p><strong>Movimiento lateral</strong> es saltar de un equipo comprometido a otro, acercándote a las crown jewels. La clave: con credenciales válidas, <em>no necesitas exploits</em>; usas los mismos mecanismos que un administrador legítimo.</p>
      <div class="callout">Esto es muy OPSEC: si te mueves con <code>WinRM</code> y una cuenta de admin real, pareces un administrador trabajando. El EDR ve "admin administra", no "ataque".</div>` },
    { h: "2. Pass-the-Hash y Pass-the-Ticket", html: `<p>En Windows, muchas veces <strong>no necesitas la contraseña en claro</strong>: basta con su hash o su ticket Kerberos.</p>
      <table class="tbl"><tr><th>Técnica</th><th>Idea</th></tr>
      <tr><td><strong>Pass-the-Hash (PtH)</strong></td><td>Autenticarte usando el hash NTLM directamente, sin conocer la contraseña.</td></tr>
      <tr><td><strong>Pass-the-Ticket (PtT)</strong></td><td>Reutilizar un ticket Kerberos robado de memoria para acceder a servicios.</td></tr>
      <tr><td><strong>Overpass-the-Hash</strong></td><td>Usar el hash para obtener un TGT Kerberos legítimo.</td></tr></table>
      <div class="callout tip">💡 De aquí la importancia de robar credenciales de memoria (p. ej. de LSASS): un hash o un ticket abren otras puertas sin crackear nada. Defensa: Credential Guard, LAPS y no dejar admins "sembrados" por todos los equipos.</div>` },
    { h: "3. Ejecución remota: las vías clásicas", html: `<p>Con credenciales válidas, hay varias formas de ejecutar en un equipo remoto. Cada una tiene distinto nivel de ruido:</p>
      <table class="tbl"><tr><th>Método</th><th>Puerto/base</th><th>OPSEC</th></tr>
      <tr><td><strong>PsExec</strong></td><td>SMB (445) + servicio</td><td>Ruidoso: crea un servicio, muy fichado</td></tr>
      <tr><td><strong>WMI</strong></td><td>WMI/RPC</td><td>Más sigiloso, muy usado</td></tr>
      <tr><td><strong>WinRM</strong></td><td>5985/5986</td><td>Legítimo para admins; se mezcla bien</td></tr>
      <tr><td><strong>DCOM / scheduled tasks</strong></td><td>Varios</td><td>Alternativas según el entorno</td></tr></table>
      <p class="muted">Herramientas típicas: la suite <strong>Impacket</strong> (psexec.py, wmiexec.py, smbexec.py), <code>evil-winrm</code>, o las utilidades del propio C2. El senior elige la <strong>menos ruidosa</strong> que funcione.</p>` },
    { h: "4. Pivoting y túneles", html: `<p>A menudo la red interesante (servidores, OT, bases de datos) <strong>no es accesible directamente</strong> desde tu punto de entrada. El <strong>pivoting</strong> usa un equipo comprometido como puente:</p>
      <div class="term"><div class="bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><b>pivoting (conceptual)</b></div><pre><span class="o">Tú</span> → <span class="hl">Equipo A (comprometido, con 2 redes)</span> → <span class="ok2">Red interna B</span>
   · SOCKS proxy a través del beacon
   · Port forwarding de un servicio concreto
   · Herramientas: Chisel, Ligolo-ng, el propio C2</pre></div>
      <p>Así alcanzas máquinas que "no te ven" a ti, tunelizando tu tráfico por el equipo puente. Es imprescindible para llegar a redes segmentadas.</p>` },
    { h: "5. Persistencia con criterio", html: `<p>Ya viste persistencia en el nivel de evasión; a nivel de dominio el abanico crece (Golden Ticket, certificados ADCS, cuentas sembradas). El mensaje senior es el mismo:</p>
      <ul>
        <li><strong>Usa la mínima persistencia necesaria.</strong> Cada mecanismo es detectable y debe limpiarse.</li>
        <li><strong>Prefiere lo que se funde con lo normal</strong> (un certificado válido, una cuenta esperable) frente a lo ruidoso.</li>
        <li><strong>Documenta cada persistencia</strong> para el clean-up y la deconfliction.</li>
        <li><strong>Piensa en el cliente:</strong> una persistencia olvidada es una puerta real para un atacante futuro.</li>
      </ul>
      <div class="callout">La madurez senior se nota aquí: no en "cuántas puertas traseras pongo", sino en <strong>moverme como un admin legítimo y dejar el sitio limpio</strong>.</div>` }
  ],
  claves: ["Movimiento lateral con credenciales válidas ≈ parecer un admin legítimo", "Pass-the-Hash/Ticket: autenticarte sin la contraseña en claro", "PsExec (ruidoso) < WMI < WinRM (se mezcla) en OPSEC", "Pivoting/túneles (Chisel, Ligolo) alcanzan redes segmentadas", "Persistencia mínima, sigilosa, documentada y limpiada al final"],
  entrevista: ["¿Qué es Pass-the-Hash y por qué no necesitas la contraseña?", "Diferencia de OPSEC entre PsExec y WinRM", "¿Qué es el pivoting y cuándo lo necesitas?", "¿Cómo decides cuánta persistencia dejar?"],
  quiz: [
    { q: "Pass-the-Hash permite…", op: ["Crackear la contraseña", "Autenticarte usando el hash NTLM sin conocer la contraseña en claro", "Apagar el EDR", "Cifrar SMB"], ok: 1, exp: "Windows acepta el hash como prueba de identidad en NTLM." },
    { q: "Entre estas vías de ejecución remota, la más ruidosa suele ser…", op: ["WinRM", "WMI", "PsExec (crea un servicio por SMB)", "DCOM"], ok: 2, exp: "PsExec crea un servicio, algo muy monitorizado por los EDR." },
    { q: "El pivoting sirve para…", op: ["Cifrar discos", "Usar un equipo comprometido como puente hacia redes no accesibles directamente", "Enviar correos", "Crackear Kerberos"], ok: 1, exp: "Tuneliza tu tráfico por un equipo con acceso a la red interna objetivo." },
    { q: "Moverse con WinRM y una cuenta de admin real es OPSEC porque…", op: ["Es ilegal", "Parece un administrador trabajando; el EDR no ve un ataque", "Es más lento", "Rompe el dominio"], ok: 1, exp: "Se mezcla con la administración legítima del entorno." },
    { q: "La regla senior sobre persistencia es…", op: ["Cuanta más, mejor", "La mínima necesaria, sigilosa, documentada y limpiada al final", "No documentarla", "Dejar servicios nuevos siempre"], ok: 1, exp: "Cada persistencia es detectable y un riesgo para el cliente si se olvida." }
  ]
},
{
  id: 16, video: "16", nivel: "Cloud y movimiento", lab: null, min: 26,
  titulo: "Nube híbrida: Entra ID y Microsoft 365",
  resumen: "Casi toda empresa es hoy híbrida (AD local + nube). Identidad en Entra ID (Azure AD), tokens y cookies, consentimiento de apps, y el puente peligroso entre lo local y la nube.",
  objetivos: ["Entender el modelo de identidad en la nube (Entra ID) frente a AD local", "Comprender tokens, PRT y por qué 'la identidad es el nuevo perímetro'", "Conocer ataques típicos: illicit consent, device code, abuso de roles", "Entender el puente híbrido (Azure AD Connect) y su riesgo"],
  secciones: [
    { h: "1. Del dominio local a la identidad en la nube", html: `<p>La empresa moderna ya no vive solo en su edificio (AD local): gran parte está en la <strong>nube</strong> (Microsoft 365, Azure). La identidad la gestiona <strong>Entra ID</strong> (antes Azure AD).</p>
      <table class="tbl"><tr><th></th><th>AD local</th><th>Entra ID (nube)</th></tr>
      <tr><td>Protocolo</td><td>Kerberos, NTLM, LDAP</td><td>OAuth2, SAML, OpenID (tokens)</td></tr>
      <tr><td>Acceso</td><td>Red interna</td><td>Internet (desde cualquier sitio)</td></tr>
      <tr><td>"Admin total"</td><td>Domain Admin</td><td>Global Administrator</td></tr></table>
      <div class="callout">Frase clave senior: <strong>"la identidad es el nuevo perímetro"</strong>. En la nube no hay "dentro" y "fuera"; lo que importa es quién tiene un token válido.</div>` },
    { h: "2. Tokens, cookies y PRT", html: `<p>En la nube no manejas tanto contraseñas como <strong>tokens</strong>: trozos de texto firmados que prueban que ya te autenticaste. Robar el token ≈ ser el usuario.</p>
      <ul>
        <li><strong>Access/refresh tokens (OAuth):</strong> dan acceso a servicios (correo, SharePoint) sin volver a loguearte.</li>
        <li><strong>PRT (Primary Refresh Token):</strong> en equipos unidos a Entra ID, una "superllave" que renueva tokens; robarla es muy potente.</li>
        <li><strong>Cookies de sesión:</strong> lo que roba el phishing AiTM del nivel 2 (Evilginx) para saltar el MFA.</li>
      </ul>
      <div class="callout tip">💡 Por eso el MFA no basta: si roban un token/cookie <em>posterior</em> al MFA, ya están dentro. La defensa fuerte combina passkeys + <strong>acceso condicional</strong> (dispositivo conforme, ubicación, riesgo).</div>` },
    { h: "3. Ataques típicos en la nube", html: `<table class="tbl"><tr><th>Ataque</th><th>Idea</th></tr>
      <tr><td><strong>Illicit consent grant</strong></td><td>Engañar al usuario para que apruebe una app maliciosa con permisos sobre su correo/datos (sin robar contraseña).</td></tr>
      <tr><td><strong>Device code phishing</strong></td><td>Abusar del flujo "device code" para que la víctima autorice tu sesión.</td></tr>
      <tr><td><strong>Abuso de roles / privilegios</strong></td><td>Escalar vía roles mal asignados (p. ej. de una app o un rol con demasiado poder).</td></tr>
      <tr><td><strong>Abuso de app registrations</strong></td><td>Service principals y secretos de aplicaciones con permisos excesivos.</td></tr></table>
      <div class="callout">Herramientas típicas de enumeración/ataque en la nube: <strong>ROADtools, AADInternals, GraphRunner, Pacu</strong> (AWS). Mencionarlas sitúa tu nivel.</div>` },
    { h: "4. El puente híbrido: el eslabón crítico", html: `<p>Lo más peligroso del entorno híbrido es <strong>el puente</strong> entre AD local y la nube, normalmente <strong>Azure AD Connect</strong>, que sincroniza identidades.</p>
      <div class="flow">
        <div class="fstep"><b>AD local</b><span>Domain Admin</span></div>
        <div class="fstep"><b>Azure AD Connect</b><span>Servidor que sincroniza; guarda credenciales potentes</span></div>
        <div class="fstep"><b>Entra ID</b><span>Nube</span></div>
      </div>
      <p>Comprometer el servidor de sincronización puede dar el salto <strong>de local a nube</strong> (o al revés). Es un objetivo de altísimo valor y debe estar tratado como <strong>Tier 0</strong>.</p>
      <div class="callout tip">💡 En la entrevista: entender que el riesgo híbrido no es "local" o "nube" por separado, sino <strong>el puente que los une</strong>, te distingue como senior.</div>` },
    { h: "5. Defensa y mentalidad cloud", html: `<p>En el informe, la seguridad de identidad cloud se resume en:</p>
      <ul>
        <li><strong>Acceso condicional</strong> bien diseñado (MFA fuerte, dispositivos conformes, bloqueo por riesgo).</li>
        <li><strong>Mínimo privilegio</strong> en roles (muy pocos Global Admins, cuentas de emergencia vigiladas).</li>
        <li><strong>Revisar consentimientos de apps</strong> y permisos de service principals.</li>
        <li><strong>Proteger el puente híbrido</strong> como un activo Tier 0.</li>
        <li><strong>Monitorizar inicios de sesión y tokens</strong> anómalos (imposible travel, apps nuevas).</li>
      </ul>
      <div class="callout">El Red Team cloud piensa en <strong>identidades y permisos</strong>, no en puertos. El "escaneo de red" de antaño se vuelve "¿quién puede asumir qué rol?".</div>` }
  ],
  claves: ["Entra ID (Azure AD) gestiona identidad cloud con tokens (OAuth/SAML)", "'La identidad es el nuevo perímetro': robar un token ≈ ser el usuario", "Ataques: illicit consent, device code phishing, abuso de roles/apps", "Azure AD Connect (puente híbrido) es un objetivo Tier 0 crítico", "Defensa: acceso condicional, mínimo privilegio y monitorización de tokens"],
  entrevista: ["¿Qué es Entra ID y en qué se diferencia de AD local?", "¿Por qué el MFA no siempre basta en la nube?", "¿Qué es un illicit consent grant?", "¿Por qué es crítico el servidor de Azure AD Connect?"],
  quiz: [
    { q: "'La identidad es el nuevo perímetro' significa que en la nube…", op: ["Importan los puertos abiertos", "Lo decisivo es quién tiene un token/identidad válidos, no estar 'dentro' o 'fuera'", "No hay seguridad", "Se usa solo Kerberos"], ok: 1, exp: "Sin red perimetral clásica, el control gira en torno a la identidad y los tokens." },
    { q: "Un PRT (Primary Refresh Token) es…", op: ["Un exploit", "Una 'superllave' que renueva tokens en equipos unidos a Entra ID; robarla es muy potente", "Un antivirus", "Un hash NTLM"], ok: 1, exp: "El PRT permite emitir tokens de acceso; su robo da acceso amplio." },
    { q: "Un 'illicit consent grant' consiste en…", op: ["Crackear contraseñas", "Lograr que el usuario apruebe una app maliciosa con permisos sobre sus datos", "Un ataque DoS", "Robar un certificado ADCS"], ok: 1, exp: "No roba credenciales: abusa del consentimiento de aplicaciones OAuth." },
    { q: "Azure AD Connect es crítico porque…", op: ["Es un antivirus", "Es el puente que sincroniza AD local y la nube; comprometerlo salta entre ambos", "No tiene permisos", "Solo guarda logs"], ok: 1, exp: "El servidor de sincronización maneja credenciales potentes entre local y nube." },
    { q: "La defensa fuerte de identidad cloud se apoya sobre todo en…", op: ["Más puertos cerrados", "Acceso condicional, mínimo privilegio y monitorización de tokens", "Desactivar el correo", "MD5"], ok: 1, exp: "El control de acceso basado en condiciones y el mínimo privilegio son la base." }
  ]
},
{
  id: 17, video: "17", nivel: "Cloud y movimiento", lab: null, min: 24,
  titulo: "AWS y exfiltración de datos",
  resumen: "Nociones de seguridad ofensiva en AWS (IAM, metadata, buckets) y cómo se demuestra el impacto final: exfiltrar datos de forma controlada, sigilosa y ética.",
  objetivos: ["Conocer el modelo IAM de AWS y los errores típicos", "Entender el abuso del endpoint de metadata (SSRF→credenciales)", "Comprender la exfiltración como prueba de impacto, con OPSEC", "Saber reportar el impacto en términos de negocio"],
  secciones: [
    { h: "1. AWS: todo gira en torno a IAM", html: `<p>En AWS, la seguridad es sobre todo <strong>IAM</strong> (Identity and Access Management): usuarios, roles y <em>políticas</em> que dicen quién puede hacer qué. Igual que en Entra ID, el juego es de <strong>identidades y permisos</strong>, no de puertos.</p>
      <table class="tbl"><tr><th>Concepto AWS</th><th>Qué es</th></tr>
      <tr><td><strong>IAM user / role</strong></td><td>Identidad humana o de servicio con permisos asignados</td></tr>
      <tr><td><strong>Policy</strong></td><td>Documento que concede/deniega acciones (p. ej. leer un bucket S3)</td></tr>
      <tr><td><strong>Access keys</strong></td><td>Credenciales programáticas (si se filtran, acceso directo)</td></tr>
      <tr><td><strong>S3 bucket</strong></td><td>Almacenamiento de objetos; mal configurado = datos públicos</td></tr></table>
      <div class="callout">Errores típicos: buckets S3 abiertos, <strong>claves de acceso filtradas</strong> en código/GitHub, y <strong>roles con permisos excesivos</strong> que permiten escalar (privilege escalation en IAM).</div>` },
    { h: "2. El endpoint de metadata (SSRF a la nube)", html: `<p>Una joya ofensiva en la nube: el <strong>endpoint de metadata</strong> (<code>169.254.169.254</code>). Una máquina en AWS puede preguntar ahí por sus propias credenciales temporales. Si logras una <strong>SSRF</strong> contra una app en la nube…</p>
      <div class="term"><div class="bar"><span class="dot r"></span><span class="dot y"></span><span class="dot g"></span><b>SSRF → credenciales de rol</b></div><pre><span class="c"># una SSRF hace que el servidor pida:</span>
http://169.254.169.254/latest/meta-data/iam/security-credentials/
<span class="c"># → devuelve credenciales temporales del rol de la instancia</span>
<span class="c"># → el atacante actúa como ese rol en AWS</span></pre></div>
      <p class="muted">Por eso la versión IMDSv2 (con token) mitiga este abuso: menciona que <strong>IMDSv2</strong> es la defensa recomendada. Herramientas de post-explotación cloud: <strong>Pacu</strong>.</p>` },
    { h: "3. Exfiltración: demostrar el impacto", html: `<p>Llegar a los datos no basta: el ejercicio demuestra el <strong>impacto</strong> sacándolos (o probando que se pueden sacar) de forma <em>controlada</em>. Esto corresponde a la táctica <em>Exfiltration</em> de ATT&CK.</p>
      <ul>
        <li><strong>Prueba de impacto, no robo masivo:</strong> a menudo basta con exfiltrar una <em>muestra mínima</em> o un fichero "canario" para demostrar que se podía.</li>
        <li><strong>Canales:</strong> por el propio C2, DNS, servicios cloud legítimos… lo que se funda con el tráfico normal.</li>
        <li><strong>OPSEC:</strong> sacar gigas de golpe dispara alarmas de DLP; el senior va despacio y con cabeza.</li>
      </ul>
      <div class="callout tip">💡 Pregunta de entrevista: "¿exfiltrarías toda la base de datos de clientes?" → Respuesta senior: <strong>no; demuestro el acceso con una muestra mínima acordada, evitando manejar datos reales sensibles más de lo necesario</strong>.</div>` },
    { h: "4. Ética y manejo de datos reales", html: `<p>La exfiltración toca datos reales de personas. El senior extrema el cuidado:</p>
      <ul>
        <li><strong>Mínima exposición:</strong> acceder a lo justo para probar el impacto, no más.</li>
        <li><strong>Datos sensibles:</strong> si aparecen datos personales/financieros reales, se manejan con máxima confidencialidad y se minimiza su descarga.</li>
        <li><strong>Acordado con la White Cell:</strong> qué se puede exfiltrar y cómo suele pactarse de antemano.</li>
        <li><strong>Destrucción:</strong> cualquier dato extraído se borra de forma segura tras el informe.</li>
      </ul>
      <div class="callout">Confundir "demostrar impacto" con "llevarse todo" es un error grave. El valor está en <strong>probar que se podía</strong>, no en el botín.</div>` },
    { h: "5. Reportar el impacto en lenguaje de negocio", html: `<p>El cierre de la cadena ofensiva es <strong>traducir el logro técnico a impacto</strong>, que es lo que entiende la dirección:</p>
      <table class="tbl"><tr><th>Logro técnico</th><th>Impacto de negocio (informe)</th></tr>
      <tr><td>Acceso a un bucket S3 con datos</td><td>"Un atacante podría exponer datos de 2M de clientes (riesgo GDPR, multas, reputación)"</td></tr>
      <tr><td>Rol IAM con permisos excesivos</td><td>"Se podría cifrar/borrar la infraestructura (ransomware, parada del negocio)"</td></tr>
      <tr><td>Domain Admin alcanzado</td><td>"Control total del entorno corporativo"</td></tr></table>
      <div class="callout tip">💡 Un senior no entrega "tengo RCE": entrega <strong>"demostramos que un atacante podría [consecuencia de negocio]"</strong>. Eso conecta con el nivel 6: el informe.</div>` }
  ],
  claves: ["AWS = identidades y permisos (IAM): buckets abiertos, keys filtradas, roles excesivos", "Metadata (169.254.169.254) + SSRF → credenciales de rol; defensa IMDSv2", "Exfiltración = prueba de impacto con muestra mínima, no robo masivo", "Datos reales: mínima exposición, confidencialidad y destrucción posterior", "Traduce siempre el logro técnico a impacto de negocio"],
  entrevista: ["¿Cómo se abusa del endpoint de metadata en la nube?", "¿Exfiltrarías toda la base de datos? Justifícalo", "¿Qué errores típicos de IAM has de buscar?", "¿Cómo reportas el impacto a la dirección?"],
  quiz: [
    { q: "En AWS, la seguridad gira sobre todo en torno a…", op: ["Los puertos", "IAM: usuarios, roles y políticas de permisos", "El antivirus", "Kerberos"], ok: 1, exp: "El control de identidades y permisos (IAM) es el centro de la seguridad en AWS." },
    { q: "Una SSRF contra el endpoint de metadata puede dar…", op: ["Un hash NTLM", "Credenciales temporales del rol de la instancia", "Un Golden Ticket", "Acceso físico"], ok: 1, exp: "El servidor pide sus propias credenciales de rol y el atacante las obtiene." },
    { q: "La defensa recomendada frente al abuso de metadata es…", op: ["Apagar AWS", "IMDSv2 (acceso a metadata con token)", "Usar MD5", "Más puertos abiertos"], ok: 1, exp: "IMDSv2 exige un token y mitiga la obtención de credenciales vía SSRF." },
    { q: "En un ejercicio, la exfiltración debe…", op: ["Llevarse todos los datos posibles", "Demostrar el impacto con una muestra mínima acordada y OPSEC", "Hacerse lo más rápido posible", "Publicar los datos"], ok: 1, exp: "El objetivo es probar que se podía, minimizando el manejo de datos reales." },
    { q: "El cierre senior de la cadena ofensiva es…", op: ["Decir 'tengo RCE'", "Traducir el logro técnico a impacto de negocio", "Borrar logs", "Dejar persistencia"], ok: 1, exp: "La dirección entiende consecuencias de negocio, no jerga técnica." }
  ]
},
/* ═══════════════════ LIDERAZGO Y ENTREVISTA ═══════════════════ */
{
  id: 18, video: "18", nivel: "Liderazgo y entrevista", lab: null, min: 26,
  titulo: "Informe ejecutivo, debrief y purple team",
  resumen: "El entregable que da valor a semanas de trabajo: contar la historia del ataque, traducir a impacto de negocio, priorizar la remediación y convertir el ejercicio en mejora real (purple team).",
  objetivos: ["Estructurar un informe de Red Team (ejecutivo + técnico)", "Contar la narrativa del ataque y traducirla a riesgo de negocio", "Priorizar hallazgos y recomendaciones accionables", "Entender el debrief y el purple team como entrega de valor"],
  secciones: [
    { h: "1. El informe es el producto", html: `<p>El cliente no paga por el hackeo: paga por el <strong>informe</strong>. Un acceso brillante mal explicado no vale nada; un hallazgo medio bien comunicado mejora la empresa. El senior dedica <em>tanto</em> esfuerzo a escribir como a atacar.</p>
      <div class="callout">Regla de oro: el informe lo leen <strong>dos públicos muy distintos</strong> — la dirección (quiere impacto y decisiones) y los técnicos (quieren el detalle para arreglarlo). El documento debe servir a ambos.</div>` },
    { h: "2. Estructura de un informe de Red Team", html: `<table class="tbl"><tr><th>Sección</th><th>Para quién / qué contiene</th></tr>
      <tr><td><strong>Resumen ejecutivo</strong></td><td>Dirección: qué se intentó, si se logró, impacto de negocio y 3-5 mensajes clave. Sin jerga.</td></tr>
      <tr><td><strong>Narrativa del ataque</strong></td><td>La "historia": cómo se entró y se llegó al objetivo, paso a paso, mapeado a ATT&CK.</td></tr>
      <tr><td><strong>Hallazgos técnicos</strong></td><td>Cada debilidad con evidencia (PoC), riesgo y cómo corregirla.</td></tr>
      <tr><td><strong>Análisis de detección</strong></td><td>Qué detectó el Blue Team y qué no (cobertura ATT&CK).</td></tr>
      <tr><td><strong>Recomendaciones</strong></td><td>Plan de remediación priorizado y accionable.</td></tr></table>
      <div class="callout tip">💡 La <strong>narrativa</strong> es lo que distingue un informe de Red Team de un pentest: no es una lista de bugs, es la <em>historia de cómo un atacante llegó a la crown jewel</em>.</div>` },
    { h: "3. Traducir a impacto de negocio", html: `<p>La habilidad senior más valorada: convertir lo técnico en consecuencias que la dirección entienda y pueda decidir sobre ellas.</p>
      <table class="tbl"><tr><th>En vez de…</th><th>Escribe…</th></tr>
      <tr><td>"Kerberoasting en 12 SPN"</td><td>"Credenciales de servicio débiles permitieron escalar hasta el control del dominio"</td></tr>
      <tr><td>"RCE en el portal X"</td><td>"Un atacante podría manipular transferencias de clientes"</td></tr>
      <tr><td>"Bucket S3 público"</td><td>"Exposición de datos de 2M de clientes: riesgo regulatorio (GDPR) y reputacional"</td></tr></table>
      <div class="callout">El comité no decide sobre "SPN" o "S3"; decide sobre <strong>dinero, clientes, cumplimiento y reputación</strong>. Habla su idioma.</div>` },
    { h: "4. Priorizar la remediación", html: `<p>Un informe con 50 recomendaciones sin orden abruma y no se ejecuta. El senior <strong>prioriza</strong>:</p>
      <ul>
        <li><strong>Quick wins:</strong> cosas de alto impacto y bajo coste (p. ej. arreglar una plantilla ADCS, rotar una contraseña de servicio).</li>
        <li><strong>Causas raíz, no síntomas:</strong> recomendar "modelo de administración por niveles (Tier 0)" en vez de parchear un equipo.</li>
        <li><strong>Mejoras de detección:</strong> no solo cerrar agujeros, también "deberíais haber detectado esto aquí".</li>
        <li><strong>Realismo:</strong> recomendaciones que la empresa <em>pueda</em> aplicar, con un orden sensato.</li>
      </ul>
      <div class="callout tip">💡 Frase senior: "No entrego 50 fallos; entrego 5 cambios que cierran el 80% de los caminos". Eso es pensar en la defensa, no solo en el ataque.</div>` },
    { h: "5. Debrief y purple team", html: `<p>El ejercicio termina con reuniones que convierten el informe en <strong>mejora real</strong>:</p>
      <div class="flow">
        <div class="fstep"><b>Debrief ejecutivo</b><span>Resumen y decisiones para la dirección</span></div>
        <div class="fstep"><b>Debrief técnico</b><span>Detalle con el Blue Team, timeline vs detección</span></div>
        <div class="fstep"><b>Purple team</b><span>Red y Blue juntos reproducen las técnicas para mejorar la detección</span></div>
        <div class="fstep"><b>Re-test</b><span>Verificar que la remediación funciona</span></div>
      </div>
      <p>El <strong>purple team</strong> es la joya: el Red Team reproduce cada técnica (mapeada a ATT&CK) y el Blue Team ajusta sus detecciones en directo. Así el cliente no solo tapa agujeros: <strong>aprende a ver al próximo atacante</strong>.</p>
      <div class="callout">La meta final de un buen Red Team no es "ganar", es que el cliente salga <strong>más fuerte</strong>. El senior se mide por eso.</div>` }
  ],
  claves: ["El informe es el producto: tanto esfuerzo escribir como atacar", "Dos públicos: dirección (impacto) y técnicos (detalle para arreglar)", "La narrativa (historia del ataque mapeada a ATT&CK) distingue al Red Team", "Traduce lo técnico a dinero, clientes, cumplimiento y reputación", "Prioriza causas raíz y cierra con debrief, purple team y re-test"],
  entrevista: ["¿Cómo estructuras un informe de Red Team?", "¿Cómo traduces un hallazgo técnico a impacto de negocio?", "¿Qué es un ejercicio purple team y qué aporta?", "Si tuvieras 50 hallazgos, ¿cómo los priorizarías?"],
  quiz: [
    { q: "¿Por qué se dice que 'el informe es el producto'?", op: ["Porque es lo único legal", "Porque el valor para el cliente está en comunicar hallazgos e impacto, no solo en hackear", "Porque nadie lo lee", "Porque sustituye al ataque"], ok: 1, exp: "El cliente paga por entender su riesgo y cómo mejorar, y eso vive en el informe." },
    { q: "La 'narrativa del ataque' en el informe es…", op: ["Una lista de CVEs", "La historia paso a paso de cómo se llegó al objetivo, mapeada a ATT&CK", "El resumen ejecutivo", "Los logs del EDR"], ok: 1, exp: "Contar el recorrido del atacante es lo que distingue un informe de Red Team." },
    { q: "Traducir a impacto de negocio significa…", op: ["Usar más jerga técnica", "Expresar el hallazgo en términos de dinero, clientes, cumplimiento y reputación", "Ocultar el riesgo", "Hablar solo con técnicos"], ok: 1, exp: "La dirección decide sobre consecuencias de negocio, no sobre jerga." },
    { q: "Un ejercicio purple team consiste en…", op: ["Atacar sin avisar", "Red y Blue trabajando juntos para reproducir técnicas y mejorar la detección", "Un informe más", "Solo escanear"], ok: 1, exp: "Es colaboración Red+Blue para elevar la capacidad de detección del cliente." },
    { q: "La mejor forma senior de priorizar 50 hallazgos es…", op: ["Listarlos sin orden", "Agrupar en pocas causas raíz y quick wins que cierren la mayoría de caminos", "Entregar solo el más grave", "No priorizar"], ok: 1, exp: "Pocos cambios de alto impacto son más accionables que 50 sueltos." }
  ]
},
{
  id: 19, video: "19", nivel: "Liderazgo y entrevista", lab: "entrevista", min: 28,
  titulo: "Liderazgo, equipo y la entrevista senior",
  resumen: "Lo que de verdad evalúan en un senior: liderar operaciones, mentorizar juniors, tu ruta de certificaciones y cómo responder a las preguntas difíciles con criterio y honestidad.",
  objetivos: ["Entender el rol de liderazgo técnico y la mentoría de un senior", "Conocer la gestión de un engagement y del equipo", "Orientar tu ruta de certificaciones senior (OSCP, CRTO, OSEP…)", "Prepararte para las preguntas de la entrevista senior (técnicas y de actitud)"],
  secciones: [
    { h: "1. Liderazgo técnico: del 'yo' al 'nosotros'", html: `<p>Un senior ya no solo hackea: <strong>hace que el equipo hackee mejor</strong>. El liderazgo técnico es:</p>
      <ul>
        <li><strong>Repartir el trabajo</strong> según fortalezas (uno en AD, otro en cloud, otro en el informe).</li>
        <li><strong>Desbloquear a otros:</strong> cuando un junior se atasca, orientarle sin hacerle el trabajo.</li>
        <li><strong>Sostener la calidad:</strong> revisar hallazgos, PoCs e informe antes de entregar.</li>
        <li><strong>Marcar el ritmo y la OPSEC</strong> de la operación y cuidar que nadie se salga del alcance.</li>
      </ul>
      <div class="callout">En la entrevista senior valoran que sepas <strong>multiplicar al equipo</strong>, no solo tu brillo individual. "¿Cómo ayudarías a un junior atascado?" es una pregunta muy habitual.</div>` },
    { h: "2. Mentoría y cultura", html: `<p>Mentorizar bien acelera a todo el equipo. Algunas claves:</p>
      <table class="tbl"><tr><th>Haz</th><th>Evita</th></tr>
      <tr><td>Enseñar el <em>porqué</em>, no solo el comando</td><td>Resolverlo tú y seguir</td></tr>
      <tr><td>Revisar con feedback concreto y amable</td><td>Criticar en público o humillar</td></tr>
      <tr><td>Fomentar el laboratorio y el aprendizaje continuo</td><td>Guardarte el conocimiento</td></tr>
      <tr><td>Dar OPSEC y ética como valores, no como normas sueltas</td><td>"Porque sí"</td></tr></table>
      <div class="callout tip">💡 La seguridad ofensiva cambia cada mes. Un buen senior crea una <strong>cultura de aprendizaje</strong>: comparte writeups, monta laboratorios internos y normaliza preguntar.</div>` },
    { h: "3. Gestión del engagement y el cliente", html: `<p>El senior es a menudo la cara ante el cliente y el responsable de que la operación salga bien y segura:</p>
      <ul>
        <li><strong>Antes:</strong> definir alcance, objetivos (crown jewels), ROE y autorización (ya visto en el nivel 1).</li>
        <li><strong>Durante:</strong> gestionar riesgo (no romper producción), mantener trazabilidad y el canal de deconfliction con la White Cell.</li>
        <li><strong>Después:</strong> informe, debrief, purple team, re-test y <em>clean-up</em>.</li>
        <li><strong>Siempre:</strong> comunicación clara y expectativas realistas (un Red Team no "aprueba/suspende"; mejora).</li>
      </ul>
      <div class="callout">Saber decir <strong>"esto está fuera del alcance, paremos y consultemos"</strong> es una señal de seniority, no de debilidad.</div>` },
    { h: "4. Tu ruta de certificaciones senior", html: `<p>La oferta valora certificaciones. Para un perfil que aspira a senior, una ruta coherente:</p>
      <table class="tbl"><tr><th>Certificación</th><th>Enfoque</th></tr>
      <tr><td><strong>OSCP</strong> (OffSec)</td><td>La referencia de pentest práctico; base imprescindible.</td></tr>
      <tr><td><strong>CRTO</strong> (Zero-Point)</td><td>Red Team Ops con Cobalt Strike: C2, evasión y AD. Muy alineada con este puesto.</td></tr>
      <tr><td><strong>CRTL</strong></td><td>Red Team Lead: evasión avanzada y liderazgo.</td></tr>
      <tr><td><strong>OSEP</strong> (OffSec)</td><td>Evasión y pentest avanzado (anti-AV/EDR, pivoting).</td></tr>
      <tr><td><strong>PNPT / CRTP / OSWE…</strong></td><td>Metodología+informe / AD / web avanzada, según tu foco.</td></tr></table>
      <div class="callout tip">💡 En la entrevista, explica una <strong>ruta con criterio</strong>: "tengo OSCP como base, preparo CRTO por su foco en Red Team Ops y AD, con vistas a OSEP para evasión". Suena a plan, no a coleccionar siglas.</div>` },
    { h: "5. La entrevista senior: cómo responder", html: `<p>En una entrevista senior se evalúan tres cosas: <strong>profundidad técnica, criterio y madurez</strong>. Consejos:</p>
      <ul>
        <li><strong>Piensa en voz alta:</strong> ante un "¿cómo atacarías X?", estructura (recon → acceso → escalada → objetivo) en vez de soltar una herramienta.</li>
        <li><strong>Usa STAR</strong> para experiencias: Situación, Tarea, Acción (tú, con detalle), Resultado.</li>
        <li><strong>Honestidad:</strong> si no sabes algo, dilo y explica cómo lo averiguarías. Mentir se nota y se penaliza.</li>
        <li><strong>Menciona OPSEC, ética e impacto</strong> sin que te lo pregunten: es lo que distingue a un senior.</li>
        <li><strong>Ten preparadas tus "batallitas"</strong> (un CTF difícil, un AD comprometido en lab, un informe del que estés orgulloso).</li>
      </ul>
      <div class="callout">Practica en el <strong>simulador de entrevista</strong> (laboratorio de este módulo): preguntas senior reales, con tiempo y respuesta modelo. Responde en voz alta.</div>
      <p class="muted">⚠️ Recuerda: todo lo aprendido es para uso legal y ético en entornos autorizados. La madurez profesional es parte del puesto.</p>` }
  ],
  claves: ["Senior = multiplicar al equipo: repartir, desbloquear, revisar calidad y OPSEC", "Mentoría: enseñar el porqué y crear cultura de aprendizaje", "Gestión del engagement: alcance, riesgo, trazabilidad, deconfliction y clean-up", "Ruta de certs con criterio: OSCP base → CRTO/OSEP → CRTL", "Entrevista: piensa en voz alta, STAR, honestidad y menciona OPSEC/ética/impacto"],
  entrevista: ["¿Cómo ayudarías a un junior atascado en una operación?", "¿Qué harías si un compañero quiere salirse del alcance?", "¿Qué certificaciones tienes o preparas y por qué?", "Cuéntame tu mejor engagement o reto técnico (STAR)", "¿Cómo gestionas el riesgo de operar en producción?"],
  quiz: [
    { q: "El liderazgo técnico de un senior consiste sobre todo en…", op: ["Hackear más rápido que nadie", "Hacer que el equipo trabaje mejor: repartir, desbloquear y sostener la calidad", "Trabajar solo", "Evitar el informe"], ok: 1, exp: "El senior multiplica al equipo, no solo brilla individualmente." },
    { q: "Ante '¿cómo atacarías esta empresa?', lo mejor es…", op: ["Nombrar una herramienta", "Pensar en voz alta y estructurar (recon → acceso → escalada → objetivo)", "Decir que es imposible", "Callar"], ok: 1, exp: "Se evalúa el criterio y la metodología, no una herramienta suelta." },
    { q: "Una certificación muy alineada con Red Team Ops (C2, evasión, AD) es…", op: ["Una de ofimática", "CRTO", "Un carné de conducir", "Ninguna"], ok: 1, exp: "CRTO se centra en operaciones de Red Team con C2, evasión y Active Directory." },
    { q: "Si un compañero propone salirse del alcance, un senior…", op: ["Le sigue para no quedar mal", "Para, lo documenta y lo consulta con el responsable del engagement", "Lo hace en secreto", "Ignora el alcance"], ok: 1, exp: "Mantener la ética y el alcance es señal de seniority." },
    { q: "Si en la entrevista no sabes algo, lo mejor es…", op: ["Inventarte una respuesta", "Reconocerlo y explicar cómo lo averiguarías", "Cambiar de tema", "Enfadarte"], ok: 1, exp: "La honestidad y el método de aprendizaje se valoran más que fingir." }
  ]
}
];
