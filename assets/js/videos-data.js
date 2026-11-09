window.VIDEOS = [
 {
  "id": "01",
  "titulo": "De Junior a Senior: el cambio de rol",
  "subtitulo": "Criterio, OPSEC, autonomía, comunicación y liderazgo",
  "nivel": "Estrategia Red Team",
  "modulo": 1,
  "duracion": 239.2,
  "palabras": 607,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 20.1,
    "titulo": "Junior ejecuta, senior decide"
   },
   {
    "t": 58.4,
    "titulo": "Las cinco competencias senior"
   },
   {
    "t": 105.8,
    "titulo": "Un engagement de Red Team"
   },
   {
    "t": 152.0,
    "titulo": "La mentalidad OPSEC"
   },
   {
    "t": 191.5,
    "titulo": "Nuevas responsabilidades"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "Bienvenido al curso de Red Team Senior. En este primer vídeo verás qué cambia de verdad al dar el salto a senior. No es saber más comandos, sino tener criterio, sigilo y responsabilidad. Veremos las fases de una operación de Red Team completa y la mentalidad de seguridad operacional que lo guía todo."
   },
   {
    "titulo": "Junior ejecuta, senior decide",
    "texto": "Empecemos por la diferencia esencial. Un junior es como un médico residente: sabe usar el bisturí y seguir el procedimiento que le marcan. Un senior es el cirujano jefe: decide si hay que operar, cómo, cuándo parar, y responde del resultado. En Red Team, el junior ejecuta herramientas dentro de un plan que le dan; el senior diseña el ataque, elige qué riesgo asumir e improvisa cuando algo falla. Por eso, en una entrevista senior, no te preguntan qué hace un comando, sino cómo plantearías una operación de semanas sin que te detecten. Se evalúa criterio, no memoria."
   },
   {
    "titulo": "Las cinco competencias senior",
    "texto": "Un senior destaca en cinco competencias. Primera, criterio técnico: elegir la técnica de menor ruido que logre el objetivo, no la más vistosa. Segunda, seguridad operacional, lo que llamamos opsec: operar sin ser detectado, porque cada acción deja huella. Tercera, autonomía: si un exploit falla, buscar la siguiente vía sin parar la operación. Cuarta, comunicación: traducir un hallazgo técnico a impacto de negocio para un comité de dirección. Y quinta, liderazgo: repartir el trabajo, revisar a los juniors y sostener la calidad. El salto de junior a senior es pasar de preguntarte si algo funciona, a preguntarte si funciona, es sigiloso, es ético y aporta valor al cliente."
   },
   {
    "titulo": "Un engagement de Red Team",
    "texto": "Una operación de Red Team no es un escaneo: es una campaña de semanas que imita a un atacante real. Empieza por el scoping, donde se definen los objetivos, las reglas y a qué amenaza se va a imitar. Sigue el reconocimiento, con inteligencia de fuentes abiertas sobre las personas y la superficie expuesta. Luego el acceso inicial, normalmente por phishing. Después se establece el mando y control, se escala privilegios y se mueve por la red. Y se cierra alcanzando las joyas de la corona y entregando el informe. Compáralo con un pentest, que es amplio pero superficial. El Red Team es estrecho y profundo: llega hasta el objetivo como lo haría un adversario concreto, y además mide si el equipo defensor lo detecta."
   },
   {
    "titulo": "La mentalidad OPSEC",
    "texto": "La seguridad operacional es la obsesión del senior: asumir que te observan y no dar pistas. Un junior lanza un escaneo masivo y rápido que enciende todas las alarmas. Un senior sabe que eso lo delata, así que enumera despacio, de forma selectiva y desde el propio equipo ya comprometido. En vez de volcar toda la memoria a disco, trabaja en memoria y toca lo mínimo. En vez de un beacon que llama cada segundo, usa esperas largas con variación aleatoria para parecer tráfico normal. La regla de oro es que cada paquete que envías puede delatarte. El senior piensa como el defensor antes de actuar."
   },
   {
    "titulo": "Nuevas responsabilidades",
    "texto": "Al llegar a senior heredas decisiones que antes tomaban por ti. Gestionas el riesgo del cliente: no derribas un sistema de producción crítico por un exploit agresivo. Mantienes trazabilidad: registras cada acción, con qué y cuándo, para el informe y para que el equipo defensor pueda reconstruirla. Habilitas la llamada deconfliction: si el cliente detecta algo raro, poder confirmar en minutos si fuiste tú o un atacante real. Mentorizas a los juniors y, sobre todo, te mantienes dentro del alcance aunque aparezca una puerta tentadora fuera de él. Un senior malo es peligroso: puede tumbar producción o quemar la confianza del cliente. Por eso el puesto exige madurez, no solo técnica. Vamos a la emulación de adversarios."
   }
  ]
 },
 {
  "id": "02",
  "titulo": "Emulación de adversarios y MITRE ATT&CK",
  "subtitulo": "Imitar a un atacante real y hablar el idioma común: tácticas, técnicas y TTP",
  "nivel": "Estrategia Red Team",
  "modulo": 2,
  "duracion": 227.3,
  "palabras": 568,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 18.3,
    "titulo": "Emular a un adversario"
   },
   {
    "t": 56.5,
    "titulo": "La matriz ATT&CK"
   },
   {
    "t": 97.0,
    "titulo": "Las 14 tácticas, en orden"
   },
   {
    "t": 139.2,
    "titulo": "La pirámide del dolor"
   },
   {
    "t": 186.2,
    "titulo": "Mapear la operación"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo aprenderás a imitar a un adversario concreto en vez de atacar al azar, y a hablar el idioma común de toda la industria: el framework MITRE Attack. Verás la diferencia entre táctica y técnica, la pirámide del dolor, y cómo mapear tu operación para el informe y el purple team."
   },
   {
    "titulo": "Emular a un adversario",
    "texto": "En vez de atacar como sea, el Red Team senior imita a un atacante real concreto: por ejemplo, el grupo que suele atacar a la banca. Es como un simulacro de incendio que reproduce exactamente cómo empezaría un fuego real en ese edificio. El insumo viene de la inteligencia de amenazas: informes que describen cómo opera cada grupo. El senior traduce ese informe a un plan de ataque realista. Así, la pregunta deja de ser si tenemos vulnerabilidades, y pasa a ser: si nos ataca este grupo concreto, que usa estas técnicas, lo pararíamos. Eso es la emulación de adversarios."
   },
   {
    "titulo": "La matriz ATT&CK",
    "texto": "MITRE Attack es un catálogo gigante de todo lo que hacen los atacantes reales, organizado como una tabla. Es el idioma común entre el equipo de ataque y el de defensa. Hay dos conceptos que debes separar muy bien. La táctica es el porqué: el objetivo del atacante en esa fase, como acceso inicial, persistencia o exfiltración; son las columnas. La técnica es el cómo: la forma concreta de lograr esa táctica, como phishing o inyección de procesos. Y dentro de una técnica hay subtécnicas, que son variantes concretas. La regla para recordarlo: táctica es el qué quiero, técnica es el cómo lo hago."
   },
   {
    "titulo": "Las 14 tácticas, en orden",
    "texto": "Las columnas de la matriz forman, más o menos, la línea temporal de un ataque. Primero el atacante prepara: reconocimiento y desarrollo de recursos. Luego entra: acceso inicial y ejecución. Después se afianza: persistencia y escalada de privilegios. A continuación se oculta y roba credenciales: evasión de defensas y acceso a credenciales. Entonces mira alrededor y se mueve: descubrimiento y movimiento lateral. Y remata: recolección, mando y control, exfiltración e impacto. Si te sabes esta secuencia, puedes situar cualquier técnica que te mencionen y hablar con propiedad en la entrevista."
   },
   {
    "titulo": "La pirámide del dolor",
    "texto": "No todos los rastros de un atacante cuestan lo mismo de cambiar. La pirámide del dolor los ordena de abajo, lo fácil de cambiar y poco útil para el defensor, a arriba, lo difícil y muy útil. En la base está el hash de un fichero: el atacante recompila y lo cambia en segundos. Encima, las direcciones IP y los dominios: levanta otra infraestructura y listo. Más arriba, sus herramientas: cambiarlas ya le cuesta. Y en la cima, sus tácticas, técnicas y procedimientos, es decir, su forma de operar: cambiar eso es durísimo. Por eso un buen Red Team emula el comportamiento, los TTP, y no indicadores sueltos: ayuda al defensor a detectar conductas, que es lo que de verdad frena a un adversario."
   },
   {
    "titulo": "Mapear la operación",
    "texto": "Durante y después de la operación, el senior etiqueta cada acción con su técnica de Attack. Por ejemplo: el acceso inicial fue spearphishing con adjunto; la ejecución, PowerShell; la evasión, inyección de procesos; el robo de credenciales, Kerberoasting. Con este mapa, el cliente ve exactamente qué detectó y qué no, técnica a técnica. Eso convierte el informe en algo accionable y es la base del ejercicio de purple team. Herramientas como el Attack Navigator lo pintan como un mapa de calor de cobertura. Dominar este lenguaje es, hoy, parte del trabajo. Pasemos a la inteligencia de amenazas."
   }
  ]
 },
 {
  "id": "03",
  "titulo": "Inteligencia de amenazas y marcos regulados",
  "subtitulo": "CTI, TIBER-EU, DORA y el scoping senior",
  "nivel": "Estrategia Red Team",
  "modulo": 3,
  "duracion": 239.2,
  "palabras": 620,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 15.8,
    "titulo": "Inteligencia de amenazas"
   },
   {
    "t": 60.2,
    "titulo": "Marcos regulados"
   },
   {
    "t": 103.3,
    "titulo": "Quién es quién"
   },
   {
    "t": 147.6,
    "titulo": "Scoping senior"
   },
   {
    "t": 194.4,
    "titulo": "Operar en producción"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo verás de dónde sale el a quién imitamos, y los marcos que rigen los ejercicios en banca y sectores críticos en Europa: TIBER y DORA. También quién es quién en un ejercicio dirigido por inteligencia y cómo se define un buen alcance."
   },
   {
    "titulo": "Inteligencia de amenazas",
    "texto": "La inteligencia de amenazas responde a tres preguntas: quién nos atacaría, por qué y cómo. Es la materia prima de la emulación. Se organiza en tres niveles, como la información en una empresa. La estratégica habla de tendencias y motivaciones: a la banca la atacan grupos con motivación económica y algún estado. La operacional dice qué grupos están activos y contra quién. Y la táctica baja al detalle: las técnicas concretas, los dominios y los hashes que el Red Team reproduce y el defensor detecta. El senior lee un informe de inteligencia y lo convierte en un plan de ataque: este grupo entra por phishing, usa este framework de mando y control y hace Kerberoasting; pues lo reproducimos."
   },
   {
    "titulo": "Marcos regulados",
    "texto": "En banca y sectores críticos no vale hacer un Red Team a ojo. Los reguladores crearon marcos para que el ejercicio sea realista, seguro y comparable. El más importante en Europa es TIBER, impulsado por el Banco Central Europeo: Red Teaming dirigido por inteligencia sobre sistemas en producción, con proveedores acreditados. La regulación DORA, en vigor en la Unión Europea, obliga a las entidades financieras a hacer este tipo de pruebas dirigidas por amenazas, alineadas con TIBER. En el Reino Unido existe CBEST, que fue el pionero. Para trabajar en una consultora con clientes de banca, mencionar TIBER y DORA demuestra que entiendes el contexto real del trabajo en Europa."
   },
   {
    "titulo": "Quién es quién",
    "texto": "Un ejercicio dirigido por inteligencia tiene roles muy definidos. La célula blanca, o equipo de control, es un grupo pequeño y secreto del cliente que sabe del ejercicio y lo supervisa. El equipo de defensa, el blue team, no sabe que es un ejercicio; por eso la prueba es realista. El equipo rojo sois vosotros, el proveedor externo que ejecuta el ataque emulando la amenaza. Y hay un proveedor de inteligencia que elabora el informe de amenazas que guía el escenario. Que el equipo defensor no sepa nada es la razón por la que la seguridad operacional importa tanto: si te detectan, el ejercicio mide exactamente eso. Y por eso existe el canal de deconfliction con la célula blanca."
   },
   {
    "titulo": "Scoping senior",
    "texto": "El senior participa en definir el alcance junto al cliente. No se trata de toda la empresa, sino de objetivos concretos. Las joyas de la corona son los activos que de verdad importan: la base de datos de clientes, el sistema de pagos, el repositorio de código. Los flags, o escenarios, son objetivos medibles: puede un atacante iniciar una transferencia, puede leer el correo del director general. Las reglas de enfrentamiento fijan horarios, técnicas prohibidas y sistemas intocables. Y, por encima de todo, la autorización firmada: sin papel, no hay operación. Un buen objetivo se redacta en lenguaje de negocio, no técnico: el comité entiende mover dinero, no un fallo en el host de pagos."
   },
   {
    "titulo": "Operar en producción",
    "texto": "Operar en producción, como exige TIBER, es delicado, y el senior gestiona ese riesgo. No se lanzan exploits que puedan tumbar un servicio sin acordarlo. Se mantiene trazabilidad total, con marca de tiempo en cada acción, para el debrief y la deconfliction. Se planea la retirada: cómo eliminar el malware, los beacons y la persistencia al terminar, lo que llamamos limpieza. Y si durante la exfiltración accedes a datos reales, se tratan con máxima confidencialidad y se minimiza su manejo. En la entrevista, demostrar que piensas en el riesgo del cliente y en la limpieza posterior te diferencia de alguien que solo sabe hackear. Con esto cerramos la estrategia; pasamos al acceso inicial."
   }
  ]
 },
 {
  "id": "04",
  "titulo": "OSINT avanzado de la organización",
  "subtitulo": "Personas, tecnología, superficie externa y datos filtrados",
  "nivel": "Acceso inicial",
  "modulo": 4,
  "duracion": 239.8,
  "palabras": 579,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 18.3,
    "titulo": "Pasivo antes que activo"
   },
   {
    "t": 56.0,
    "titulo": "Perfilar a las personas"
   },
   {
    "t": 101.7,
    "titulo": "Superficie externa y nube"
   },
   {
    "t": 146.0,
    "titulo": "Datos ya filtrados"
   },
   {
    "t": 193.4,
    "titulo": "Del recon a la decisión"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo construirás el mapa del objetivo sin tocarlo. Verás por qué el senior prioriza el reconocimiento pasivo, cómo se perfila a las personas y la tecnología, cómo se descubre la superficie externa y cómo se aprovechan las credenciales ya filtradas, siempre de forma legal."
   },
   {
    "titulo": "Pasivo antes que activo",
    "texto": "El reconocimiento tiene dos modos, y el orden importa por seguridad operacional. El modo pasivo consiste en consultar fuentes públicas sin tocar al objetivo: buscadores, redes profesionales, certificados, registros de dominios. Su huella es casi nula, el objetivo no se entera. El modo activo interactúa con los sistemas, resolviendo nombres o pidiendo páginas, y deja rastro en sus logs. El senior exprime el reconocimiento pasivo al máximo antes de tocar nada. Cuanto más sepas sin interactuar, menos ruido harás después, y más silenciosa será toda la operación."
   },
   {
    "titulo": "Perfilar a las personas",
    "texto": "La mayoría de intrusiones reales empiezan por una persona, mediante phishing. Por eso se perfila a la plantilla. Las redes profesionales dan el organigrama, los roles y hasta las tecnologías que usan, porque aparecen en sus ofertas de empleo. De ahí deduces el patrón de correo, normalmente nombre punto apellido arroba empresa. Herramientas como the harvester o hunter recopilan correos y subdominios publicados. Y los metadatos de documentos públicos, como pedefés y ficheros de ofimática, filtran usuarios, software y rutas internas. Un truco: las ofertas de empleo son oro, porque si buscan un administrador de cierto antivirus avanzado y de cierta nube, ya sabes qué defensas tienen antes de entrar."
   },
   {
    "titulo": "Superficie externa y nube",
    "texto": "Hay que dibujar todo lo expuesto a Internet, incluido el shadow IT, esos activos que la empresa olvidó. Los subdominios se descubren de forma pasiva en los registros de transparencia de certificados: cada certificado emitido revela nombres de host. Buscadores como shodan y censys muestran dispositivos y servicios expuestos sin tocarlos. Los registros de dominios y los números de sistema autónomo te dan los rangos de red. Y hay que buscar los activos en la nube, como almacenamiento público mal configurado. Con todo esto construyes el inventario: dominios, direcciones, servicios, paneles de acceso, redes privadas virtuales y portales de correo. Cada uno es una posible vía de entrada."
   },
   {
    "titulo": "Datos ya filtrados",
    "texto": "Millones de credenciales se filtran cada año, y un atacante real las usa. El Red Team también, dentro del alcance y la ley. Servicios de búsqueda te dicen si un dominio aparece en brechas conocidas, y existen listas de pares usuario y contraseña filtrados que pueden seguir siendo válidos. ¿Por qué funcionan? Porque la gente reutiliza contraseñas: una filtrada de otro servicio suele abrir el correo corporativo. Una técnica clave es el password spraying: probar una sola contraseña típica, como el nombre de la empresa seguido del año, contra muchísimos usuarios, y hacerlo despacio para no bloquear ninguna cuenta. Esto, por cierto, explica por qué el doble factor es tan importante, y por eso lo atacaremos en el próximo vídeo."
   },
   {
    "titulo": "Del recon a la decisión",
    "texto": "El reconocimiento no es acumular datos, es decidir la vía de entrada. El senior sintetiza todo lo recogido en cuatro preguntas. A quién hago phishing, según las personas perfiladas. Qué defensas, qué correo y qué sistema de identidad usan, según la tecnología. Hay un portal o una red privada virtual atacable en la superficie. Y tengo credenciales filtradas que probar. Con eso elige la vía de acceso inicial más silenciosa que funcione. En la entrevista, ante la pregunta por dónde empezarías, la respuesta senior es: inteligencia pasiva de personas y superficie, cruzada con datos de brechas, para elegir el acceso inicial más sigiloso. Vamos con el phishing moderno."
   }
  ]
 },
 {
  "id": "05",
  "titulo": "Ingeniería social y phishing moderno",
  "subtitulo": "Pretexto, infraestructura y el salto del MFA con AiTM",
  "nivel": "Acceso inicial",
  "modulo": 5,
  "duracion": 233.8,
  "palabras": 584,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 20.0,
    "titulo": "Hackear a la persona"
   },
   {
    "t": 60.4,
    "titulo": "Anatomía de la campaña"
   },
   {
    "t": 105.6,
    "titulo": "El salto del MFA"
   },
   {
    "t": 149.3,
    "titulo": "Más vectores y la defensa fuerte"
   },
   {
    "t": 188.8,
    "titulo": "Ética y cuidado humano"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo verás el acceso inicial más realista: la ingeniería social. Cómo se diseña una campaña de phishing creíble, y lo más importante hoy, cómo los atacantes saltan el doble factor robando la sesión con proxies tipo evilginx. Todo con autorización estricta y cuidado con las personas."
   },
   {
    "titulo": "Hackear a la persona",
    "texto": "La ingeniería social explota la confianza, la prisa y la autoridad, no un fallo de software. Es la vía de entrada número uno en ataques reales, porque siempre funciona en alguien. Las palancas psicológicas son conocidas: la autoridad, haciéndose pasar por el departamento de informática o por un directivo; la urgencia, avisando de que la cuenta se bloqueará en dos horas; el miedo, informando de actividad sospechosa; o la curiosidad, con una supuesta nómina o premio. El senior diseña un pretexto coherente con el reconocimiento: si sabes que la empresa usa un entorno de Microsoft, el cebo imita una alerta de Microsoft, no de un banco cualquiera."
   },
   {
    "titulo": "Anatomía de la campaña",
    "texto": "Montar phishing creíble tiene varias piezas, y cada una puede delatar o salvar la campaña. Primero, un dominio parecido al real, envejecido y con buena reputación. Segundo, un correo técnicamente bien autenticado, con los mecanismos de validación de correo bien puestos, para no caer en la carpeta de spam. Tercero, el pretexto y el cebo: un mensaje creíble con un enlace o un adjunto. Cuarto, la página de aterrizaje, que captura credenciales o entrega el payload. Y quinto, el seguimiento: quién abrió, quién pinchó, quién introdujo sus datos. Se usan herramientas de gestión de campañas, y siempre, siempre, con autorización explícita del cliente."
   },
   {
    "titulo": "El salto del MFA",
    "texto": "Hace años bastaba con capturar usuario y contraseña. Hoy casi todo tiene doble factor, así que los atacantes lo esquivan robando la sesión ya autenticada, no la contraseña. Es el ataque de adversario en el medio. Funciona así: la víctima llega a una página falsa que en realidad es un proxy. Escribe su usuario y contraseña, y el proxy los reenvía al servicio real. El servicio pide el doble factor, la víctima lo aprueba, y el servicio devuelve una cookie de sesión. Entonces el proxy roba esa cookie, que equivale a estar ya dentro con el doble factor superado. Por eso el doble factor clásico, por mensaje o por aplicación, no detiene este ataque."
   },
   {
    "titulo": "Más vectores y la defensa fuerte",
    "texto": "Hay vectores más allá del correo. El vishing es una llamada telefónica suplantando al soporte técnico, y es muy efectivo. El quishing usa códigos cu erre para llevar a la página maliciosa, saltándose los filtros de correo. La fatiga del doble factor consiste en enviar notificaciones push sin parar hasta que la víctima aprueba para que cesen. Y, como defensa, la clave: las llaves físicas tipo fido dos, o passkeys, son resistentes al phishing, porque están ligadas al dominio real y no se dejan interceptar por un proxy. Combinadas con el acceso condicional, son lo que de verdad frena al adversario en el acceso inicial."
   },
   {
    "titulo": "Ética y cuidado humano",
    "texto": "La ingeniería social toca a personas reales, así que el senior la ejecuta con especial cuidado. Requiere autorización escrita y explícita, porque no siempre está en el alcance por defecto. No se causa daño reputacional ni emocional gratuito: nada de cebos crueles, como despidos falsos o emergencias familiares. Los datos capturados se tratan con máxima confidencialidad y se borran tras el informe. Y el objetivo es medir y mejorar, no humillar a los empleados que piquen. En el informe, el phishing se reporta como una métrica y una oportunidad de formación, nunca señalando a personas concretas. Esa madurez es parte del profesionalismo. Pasemos al desarrollo de payloads."
   }
  ]
 },
 {
  "id": "06",
  "titulo": "Desarrollo de payloads y ejecución inicial",
  "subtitulo": "La cadena de entrega, loaders, shellcode y evasión de entrada",
  "nivel": "Acceso inicial",
  "modulo": 6,
  "duracion": 232.7,
  "palabras": 606,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 17.3,
    "titulo": "La cadena de acceso inicial"
   },
   {
    "t": 61.5,
    "titulo": "Formatos de entrega"
   },
   {
    "t": 102.9,
    "titulo": "Shellcode, loader y stager"
   },
   {
    "t": 145.0,
    "titulo": "Por qué un loader evade"
   },
   {
    "t": 190.3,
    "titulo": "El ciclo de pruebas"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo verás qué entregas tras el clic. La cadena que va de un fichero hasta un beacon, los formatos de entrega modernos, y la diferencia entre shellcode, loader y stager. Y por qué el senior prueba su payload antes de dispararlo contra el cliente."
   },
   {
    "titulo": "La cadena de acceso inicial",
    "texto": "Un payload de acceso inicial no es un solo fichero mágico: es una cadena en la que cada eslabón esquiva un control. Primero la entrega: el fichero llega por correo, enlace o memoria usb. Luego la ejecución: la víctima lo abre y se ejecuta código. Después el loader, que trae y prepara el payload real evadiendo defensas. Ese payload suele ser shellcode, un código que se inyecta en memoria. Y, finalmente, el beacon llama a casa: ya hay control. El senior piensa en cada eslabón: pasa el filtro de correo, lo bloquea la protección de Windows, lo detecta el antivirus al ejecutar. Diseñar esto es el arte del acceso inicial."
   },
   {
    "titulo": "Formatos de entrega",
    "texto": "Microsoft fue cerrando los clásicos, bloqueando las macros por defecto, así que los formatos evolucionaron. Las macros de ofimática ejecutan código al abrir el documento, pero hoy están muy vigiladas. Los contenedores como las imágenes iso triunfaron porque evitaban que el fichero heredara la marca de la web, esa etiqueta que Windows pone a lo descargado de Internet para tratarlo con recelo. Los accesos directos, los ficheros ele ene te, parecen un acceso normal pero en realidad lanzan un comando. Y los instaladores troyanizados mezclan una aplicación legítima con el payload. La clave de muchos de estos trucos es precisamente no heredar la marca de la web."
   },
   {
    "titulo": "Shellcode, loader y stager",
    "texto": "Tres términos que un senior separa con soltura. El shellcode es el código máquina compacto que, al ejecutarse en memoria, da control, por ejemplo levantando un beacon: sería la carga. El loader es el programa que coloca y ejecuta ese shellcode evadiendo defensas: sería el mecanismo que la coloca. El stager es un loader minúsculo que descarga el payload grande en varios pasos; lo contrario es un payload sin fases, que va todo de una vez, más grande pero con menos llamadas de red. La decisión senior es elegir entre uno sigiloso en la entrega pero con una llamada extra detectable, o uno de una sola pieza con menos ruido de red. Se elige según el entorno."
   },
   {
    "titulo": "Por qué un loader evade",
    "texto": "Un buen loader no oculta un virus: cambia cómo se ejecuta para no parecerse a lo que el antivirus vigila. A alto nivel, se apoya en varias ideas. La ejecución en memoria: no escribir el payload en disco, donde el antivirus lo escanea. El cifrado: el payload va cifrado y solo se descifra en el momento, para que la firma estática no coincida. El vivir de la tierra: usar binarios legítimos del propio Windows en vez de un ejecutable sospechoso. Y silenciar los sensores que Windows usa para inspeccionar scripts, que veremos en el nivel de evasión. El payload exitoso es el que no destaca: parece una tarea normal del sistema. La creatividad está en mezclarse, no en ser más fuerte."
   },
   {
    "titulo": "El ciclo de pruebas",
    "texto": "Antes de disparar contra el cliente, el senior prueba su payload en un laboratorio idéntico. Construye el loader, el shellcode y el pretexto. Lo prueba contra el mismo antivirus avanzado que usa el cliente, montado en su propio laboratorio. Si lo detecta, ajusta la técnica. Y valida la seguridad operacional: qué logs genera, qué vería el equipo defensor. Nunca quemes un payload sin probar: si saltan las alarmas en el primer correo, pierdes el factor sorpresa de toda la operación. En la entrevista, demostrar este rigor previo es muy valorado. Con esto cerramos el acceso inicial; pasamos a la evasión y el mando y control."
   }
  ]
 },
 {
  "id": "07",
  "titulo": "Infraestructura de Command and Control",
  "subtitulo": "Team server, redirectores, reputación de dominios y domain fronting",
  "nivel": "Evasión y C2",
  "modulo": 7,
  "duracion": 235.4,
  "palabras": 600,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 17.4,
    "titulo": "Qué es el C2"
   },
   {
    "t": 56.8,
    "titulo": "Redirectores"
   },
   {
    "t": 97.1,
    "titulo": "Reputación y HTTPS"
   },
   {
    "t": 140.7,
    "titulo": "Esconder el destino"
   },
   {
    "t": 185.3,
    "titulo": "Diseño resiliente"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo verás la red de carreteras por la que el equipo comprometido habla contigo: la infraestructura de mando y control. Por qué necesita capas, el papel de los redirectores, la reputación de los dominios y técnicas como el domain fronting para pasar desapercibido."
   },
   {
    "titulo": "Qué es el C2",
    "texto": "El mando y control, que abreviamos ce dos, es el canal por el que el equipo comprometido recibe órdenes y devuelve resultados. El programa en la víctima es el agente, o beacon; el servidor del operador es el team server. Aquí está la clave: si conectaras el beacon directamente a tu servidor, el equipo defensor vería tu dirección, la bloquearía, y tu operación muere. Por eso se construye una infraestructura por capas, para ocultar y proteger al operador. Piensa en un jefe mafioso que nunca llama directamente: usa intermediarios y teléfonos de prepago. Si cae uno, él sigue a salvo."
   },
   {
    "titulo": "Redirectores",
    "texto": "Un redirector es un servidor intermedio que reenvía el tráfico del beacon hacia el team server, ocultándolo. La cadena queda así: el beacon habla con uno o varios redirectores, y estos reenvían al team server, que permanece oculto y nunca se expone. Las ventajas son enormes. Si el equipo defensor quema un redirector, levantas otro y sigues. El servidor de control, y tú, nunca aparecéis directamente. Y los redirectores filtran el tráfico: con reglas adecuadas, solo dejan pasar el que cumple tu perfil, descartando curiosos y escáneres. Es la primera capa de protección del operador."
   },
   {
    "titulo": "Reputación y HTTPS",
    "texto": "El tráfico de mando y control debe mezclarse con lo normal. Un dominio recién creado y feo levanta sospechas; uno con buena reputación pasa desapercibido. Por eso se usan dominios envejecidos y categorizados, que parezcan de una temática legítima, como noticias o salud, y lleven tiempo registrados. Se usa siempre tráfico cifrado con certificado válido, lo que oculta el contenido del canal y da apariencia normal. Y se imita el tráfico real, para que las peticiones parezcan de un navegador o de una aplicación corriente. Muchos defensores bloquean las categorías no clasificadas, así que tener el dominio bien categorizado como algo inocuo evita ese bloqueo automático."
   },
   {
    "titulo": "Esconder el destino",
    "texto": "Hay técnicas para esconder a dónde va realmente el tráfico. El domain fronting hace que el tráfico aparente ir a un dominio grande y de confianza, una red de distribución de contenidos, pero internamente se redirige a tu canal de control; es difícil de bloquear sin romper ese servicio enorme. Otra opción es el mando y control sobre servicios legítimos, usando plataformas de mensajería o repositorios de código como canal, de modo que el tráfico se funde con el normal. Y el túnel por de ene ese permite sacar datos en consultas de resolución de nombres cuando todo lo demás está filtrado: es lento, pero muy resistente. La idea senior: el mejor canal es el que el defensor no puede bloquear sin romper algo que la empresa necesita."
   },
   {
    "titulo": "Diseño resiliente",
    "texto": "Una operación de semanas necesita infraestructura que sobreviva a que le quemen piezas. Se separan las funciones: la infraestructura de phishing no es la de mando y control a largo plazo, ni la del canal de emergencia; si cae una, las otras siguen. Se añade redundancia: varios redirectores y dominios listos para rotar. Se automatiza todo con código, usando infraestructura como código, para rehacerla rápido. Y se cuida la higiene: nada en la infraestructura te enlaza a ti ni al cliente, y se destruye al terminar. En la entrevista, ante cómo montarías el mando y control de una operación larga, la respuesta es: capas con redirectores, dominios categorizados sobre tráfico cifrado, canales que se funden con lo legítimo, y redundancia para rotar. Pasemos a los frameworks."
   }
  ]
 },
 {
  "id": "08",
  "titulo": "Frameworks C2: beacons y perfiles",
  "subtitulo": "Cobalt Strike, Sliver, Mythic, sleep y jitter, y malleable profiles",
  "nivel": "Evasión y C2",
  "modulo": 8,
  "duracion": 241.4,
  "palabras": 620,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 18.1,
    "titulo": "Los frameworks"
   },
   {
    "t": 65.1,
    "titulo": "El beacon: llamadas discretas"
   },
   {
    "t": 110.2,
    "titulo": "Malleable profiles"
   },
   {
    "t": 149.7,
    "titulo": "Listeners, P2P y pivoting"
   },
   {
    "t": 189.4,
    "titulo": "Elegir y endurecer"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo verás las herramientas que orquestan el control: los frameworks de mando y control. El concepto de beacon, con su sueño y su variación, y los perfiles maleables que disfrazan el tráfico. Y cómo elegir y endurecer un framework según la detección del cliente."
   },
   {
    "titulo": "Los frameworks",
    "texto": "Un framework de mando y control es el software que gestiona todos los equipos comprometidos desde un panel: lanza comandos, recibe resultados y gestiona sesiones y payloads. Es el centro de operaciones del Red Team. El estándar comercial es Cobalt Strike, cuyo agente se llama Beacon: muy maduro, pero también muy vigilado por los antivirus avanzados. Sliver es una alternativa de código abierto, moderna y multiplataforma. Mythic es también abierto y modular, con agentes intercambiables, muy flexible para la seguridad operacional. Y hay otros centrados en evasión. Como son tan usados, los defensores aprenden a detectar sus patrones por defecto, así que el trabajo del senior es personalizarlos para que no suenen a lo conocido."
   },
   {
    "titulo": "El beacon: llamadas discretas",
    "texto": "El beacon, que significa faro, no mantiene una conexión abierta todo el tiempo, porque eso sería muy visible. En vez de eso, duerme y de vez en cuando llama a casa a por órdenes. Dos parámetros lo definen. El sueño, o sleep, es el tiempo que espera entre cada contacto, por ejemplo sesenta segundos. Y la variación, o jitter, es un porcentaje aleatorio que se le suma o resta, para que no sea un patrón exacto. Un sueño largo con variación imita el tráfico humano y dificulta que el defensor detecte el patrón regular. El compromiso senior: sueño corto es más interactivo pero más detectable; sueño largo es sigiloso pero lento. Se ajusta según la fase de la operación."
   },
   {
    "titulo": "Malleable profiles",
    "texto": "Un perfil maleable es un fichero que define exactamente cómo se ve el tráfico del beacon: las cabeceras, las rutas, el identificador de navegador, y dónde se esconden los datos. Permite que el canal de control se disfrace de algo normal. Por ejemplo, puedes configurar que el beacon finja ser el tráfico de una aplicación de música, con peticiones a una supuesta interfaz de canciones. Con un perfil así, el defensor ve peticiones a una aplicación corriente, no un beacon. Es una de las piezas clave de la seguridad operacional: dos operaciones con el mismo framework pueden parecer completamente distintas según su perfil."
   },
   {
    "titulo": "Listeners, P2P y pivoting",
    "texto": "Tres conceptos para completar el cuadro. El listener, u oyente, es el componente del framework que espera las conexiones de los beacons, por el protocolo que sea. Los beacons entre pares, o pe dos pe, son beacons que hablan entre ellos dentro de la red interna, encadenándose, para que solo uno salga a Internet; en una red con quinientos equipos, que solo uno hable con el exterior y el resto se comuniquen internamente levanta muchísima menos sospecha. Y el pivoting consiste en usar un equipo comprometido como puente hacia redes internas que no son accesibles directamente. Los beacons entre pares son, por eso, muy buenos para la seguridad operacional."
   },
   {
    "titulo": "Elegir y endurecer",
    "texto": "La elección del framework es una decisión de criterio, no de moda. Primero, qué detecta el cliente: si su antivirus avanzado caza Cobalt Strike por defecto, lo personalizas con un perfil propio o usas otro framework. Segundo, un perfil a medida que cambie los indicadores por defecto, como nombres de tubería, identificador de navegador y rutas, que los defensores tienen fichados. Tercero, ajustar el sueño y la variación según la fase: lento para persistir, más rápido solo cuando operas activamente. Y cuarto, tener un canal de respaldo, un segundo beacon durmiente con un sueño larguísimo, por si queman el principal. En la entrevista, menciona que personalizas el perfil y ajustas estos parámetros: demuestra que entiendes el juego del gato y el ratón. Vamos con la evasión de antivirus."
   }
  ]
 },
 {
  "id": "09",
  "titulo": "Evasión de AV y EDR",
  "subtitulo": "Firmas frente a comportamiento, AMSI, ETW y hooks de userland",
  "nivel": "Evasión y C2",
  "modulo": 9,
  "duracion": 247.8,
  "palabras": 642,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 18.2,
    "titulo": "AV frente a EDR"
   },
   {
    "t": 61.8,
    "titulo": "AMSI, el micrófono"
   },
   {
    "t": 106.5,
    "titulo": "ETW, la cámara"
   },
   {
    "t": 149.7,
    "titulo": "Hooks y unhooking"
   },
   {
    "t": 197.8,
    "titulo": "Mezclarse, no ser invisible"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo entenderás cómo ve un antivirus avanzado lo que ocurre en un equipo, y las técnicas para no ser visto. La diferencia entre antivirus clásico y moderno, los sensores de Windows como amsi y la telemetría, el enganche en memoria, y por qué la evasión hoy va de comportamiento."
   },
   {
    "titulo": "AV frente a EDR",
    "texto": "Entender al defensor es el primer paso para evadirlo. El antivirus clásico detecta por firmas: se pregunta si este fichero coincide con un virus conocido; es un portero con una lista de caras fichadas. El antivirus moderno, el e de erre, detecta por comportamiento: se pregunta si esta secuencia de acciones parece un ataque; es un detective que observa conductas sospechosas. La diferencia cambia la evasión por completo. Contra el clásico, a menudo basta con ofuscar el fichero. Contra el moderno, eso no basta: hay que cambiar el comportamiento. Por eso el senior no piensa cómo oculto mi ejecutable, sino qué secuencia de acciones no delatará un patrón malicioso."
   },
   {
    "titulo": "AMSI, el micrófono",
    "texto": "Amsi, la interfaz de escaneo antimalware, es un micrófono que Windows coloca en sus motores de scripts para que el antivirus escuche lo que se va a ejecutar, aunque venga cifrado u ofuscado. Antes, ofuscabas un script y el antivirus no lo leía. Ahora, justo antes de ejecutar, amsi lo entrega descifrado al antivirus para que lo escanee. La evasión consiste en silenciar ese micrófono: hacer que la función que escanea devuelva siempre un resultado limpio. Es un juego del gato y el ratón: Microsoft lo endurece, los atacantes buscan nuevas vías. No necesitas memorizar un truco concreto, que caduca; sí entender qué hace amsi y por qué hay que neutralizarlo para ejecutar scripts sin ser visto."
   },
   {
    "titulo": "ETW, la cámara",
    "texto": "La telemetría de eventos de Windows, que se abrevia e te doble uve, es el sistema interno que registra qué hace cada proceso. Muchos antivirus modernos escuchan esa telemetría para ver, por ejemplo, cargas sospechosas o llamadas peligrosas. Si amsi es el micrófono de lo que vas a ejecutar, esta telemetría es la cámara de seguridad de lo que ya está pasando. Las técnicas de evasión buscan cegar esa telemetría para que el antivirus deje de recibirla. Igual que con amsi, es un pulso constante: Microsoft la protege, los operadores buscan huecos. Entender estos dos sensores explica cómo un antivirus moderno ve un equipo, y cegarlos es gran parte de la evasión en Windows."
   },
   {
    "titulo": "Hooks y unhooking",
    "texto": "Muchos antivirus modernos se enganchan a las funciones que usan los programas para pedir cosas a Windows, como crear procesos o inyectar memoria. Así interceptan y analizan cada llamada sospechosa; a esto se le llama enganche, o hooking, y ocurre en la zona de usuario. El problema para el atacante es que, si llamas de forma normal, el antivirus te ve. Dos soluciones. El desenganche, o unhooking: restaurar las funciones originales de Windows para esquivar la intercepción. Y las llamadas directas al sistema: hablar con el núcleo saltándose la capa enganchada. La idea senior para la entrevista es que los antivirus vigilan sobre todo en la zona de usuario, y estas técnicas buscan comunicarse con el sistema sin pasar por los puntos que el antivirus observa."
   },
   {
    "titulo": "Mezclarse, no ser invisible",
    "texto": "La evasión perfecta y permanente no existe. El objetivo realista del senior es no generar el patrón que dispara la alerta. Prefiere lo legítimo: una acción con un binario del propio Windows levanta menos que un ejecutable raro. Minimiza las acciones más ruidosas, como las inyecciones, los volcados de memoria de credenciales y los escaneos, que son lo más vigilado. Piensa como el detector: qué regla saltaría con esto; y si no lo sabes, pruébalo en tu laboratorio con el mismo antivirus. Y acepta que pueden detectarte: por eso existen la trazabilidad y la deconfliction, y detectar también es un resultado valioso del ejercicio. Todas estas técnicas se practican en laboratorios propios y autorizados, para medir y mejorar la detección. Vamos con la ejecución sigilosa."
   }
  ]
 },
 {
  "id": "10",
  "titulo": "Ejecución sigilosa y OPSEC del operador",
  "subtitulo": "Process injection, LOLBAS, persistencia y la disciplina humana",
  "nivel": "Evasión y C2",
  "modulo": 10,
  "duracion": 237.7,
  "palabras": 604,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 17.4,
    "titulo": "Process injection"
   },
   {
    "t": 62.5,
    "titulo": "LOLBAS: vivir de la tierra"
   },
   {
    "t": 104.6,
    "titulo": "Persistencia sigilosa"
   },
   {
    "t": 146.8,
    "titulo": "La OPSEC del operador"
   },
   {
    "t": 192.4,
    "titulo": "Kill switch y limpieza"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo verás las técnicas con las que el código corre sin levantar sospechas, como la inyección de procesos y el vivir de la tierra, la persistencia sigilosa, y lo más importante: la disciplina personal del operador, que es el eslabón que más veces delata una operación."
   },
   {
    "titulo": "Process injection",
    "texto": "La inyección de procesos consiste en meter tu código dentro de un proceso de confianza, como el explorador de Windows, igual que un polizón en un barco con bandera legal. Así tu actividad pertenece a algo que parece normal. Hay variantes. La inyección clásica reserva memoria en otro proceso y ejecuta ahí, pero está muy fichada. El vaciado de procesos arranca un proceso legítimo y lo vacía para poner el tuyo dentro. Y el secuestro de hilos aprovecha hilos existentes para ejecutar sin crear uno nuevo sospechoso. La inyección es potente pero muy vigilada: es de lo primero que un antivirus busca. El senior la usa con criterio, no por defecto, y prefiere las variantes menos ruidosas."
   },
   {
    "titulo": "LOLBAS: vivir de la tierra",
    "texto": "Vivir de la tierra, que en inglés se abrevia lolbas, es abusar de binarios legítimos y firmados por Microsoft para hacer cosas maliciosas. Es como un ladrón que usa las propias herramientas de la casa: nadie sospecha de ellas. Por ejemplo, una utilidad de certificados puede servir para descargar o decodificar ficheros; otras utilidades del sistema ejecutan código desde librerías o scripts; y hay herramientas de transferencia que mueven ficheros de forma sigilosa. La ventaja clave es que están firmados y son de confianza, así que pasan los controles de lista blanca y levantan menos alarmas que un binario propio. La desventaja es que su abuso también está cada vez más vigilado."
   },
   {
    "titulo": "Persistencia sigilosa",
    "texto": "La persistencia es mantener el acceso aunque el equipo se reinicie. El reto senior es hacerlo sin dejar una señal evidente. Una tarea programada es común y legítima, y se camufla bien con un nombre creíble. Una clave de arranque en el registro es la clásica, y por eso está muy monitorizada. Crear un servicio nuevo es potente, pero ruidoso, porque se audita. Y abusar de una aplicación legítima que ya arranca es más sigiloso. La regla senior es contundente: cuanta más persistencia pones, más superficie de detección creas. A veces lo más seguro, operacionalmente, es no persistir y volver a entrar cuando haga falta."
   },
   {
    "titulo": "La OPSEC del operador",
    "texto": "La mayoría de operaciones no caen por un antivirus listo, sino por un error del operador. La disciplina personal es tan importante como la técnica. No tecleas comandos ruidosos por costumbre, como pedir toda tu información de usuario o listar los administradores del dominio, sin pensar si disparan alertas. Piensas antes de actuar en cada equipo: tiene antivirus avanzado, es de un directivo, es un servidor de producción. Registras todo lo que haces, para el informe y la deconfliction. Y no vas con prisa: la impaciencia, con escaneos amplios y acciones en lote, es lo que más delata. Una frase para la entrevista: la herramienta más peligrosa de la operación es el teclado del operador con prisa."
   },
   {
    "titulo": "Kill switch y limpieza",
    "texto": "El senior siempre planea cómo parar y limpiar. Mantiene un inventario de los artefactos: qué beacons, persistencias y ficheros ha dejado y dónde. Al terminar el ejercicio hace la limpieza: eliminar payloads, persistencias y cuentas creadas. Está listo para la deconfliction a mano: poder responder al cliente, al instante, sí, eso de las catorce treinta y dos fuimos nosotros. Y no deja puertas abiertas, porque una persistencia olvidada es un riesgo real para el cliente. Dejar el entorno exactamente como estaba, salvo el conocimiento ganado, es parte del profesionalismo. Un Red Team que ensucia y olvida no vuelve a ser contratado. Pasamos a Active Directory."
   }
  ]
 },
 {
  "id": "11",
  "titulo": "Active Directory desde cero",
  "subtitulo": "Dominios, controladores, Kerberos y los grupos que todos buscan",
  "nivel": "Active Directory",
  "modulo": 11,
  "duracion": 238.9,
  "palabras": 614,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 19.2,
    "titulo": "El portero de la empresa"
   },
   {
    "t": 57.1,
    "titulo": "El vocabulario"
   },
   {
    "t": 105.4,
    "titulo": "LDAP: consultar la agenda"
   },
   {
    "t": 147.5,
    "titulo": "Kerberos: login con tickets"
   },
   {
    "t": 192.2,
    "titulo": "Lo que todos buscan"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo entenderás Active Directory, el cerebro de casi toda empresa. Si lo entiendes, entiendes el ochenta por ciento de una intrusión interna. Veremos el dominio, el controlador, la autenticación con Kerberos mediante tickets, y las cuentas que todo atacante persigue."
   },
   {
    "titulo": "El portero de la empresa",
    "texto": "Active Directory, que abreviaremos ade, es el sistema de Microsoft que gestiona quién es quién y quién puede qué en una red Windows. Es, a la vez, la agenda de contactos y el portero de toda la organización. Casi todas las empresas medianas y grandes lo usan. Por eso, en una intrusión interna, comprometer el directorio activo es comprometer la empresa: es la joya de la corona por excelencia. Un detalle importante: cuando te logueas en el ordenador del trabajo con tu usuario, no se valida en tu equipo, lo valida el directorio a través de un servidor especial llamado controlador de dominio."
   },
   {
    "titulo": "El vocabulario",
    "texto": "Veamos el vocabulario esencial. Un dominio es un grupo de usuarios y equipos bajo una misma administración: sería un edificio con su conserjería. Un bosque es el conjunto de dominios relacionados, y es la frontera de seguridad real: sería el campus entero. El controlador de dominio es el servidor que guarda la base de datos del directorio y valida los inicios de sesión: la conserjería central. Las unidades organizativas son carpetas para agrupar objetos, como las plantas del edificio. Y las políticas de grupo son reglas que se aplican en masa a equipos y usuarios: el reglamento del edificio. Recuerda: la frontera de seguridad no es el dominio, es el bosque, porque comprometer un dominio puede llevar a todo el bosque a través de las relaciones de confianza."
   },
   {
    "titulo": "LDAP: consultar la agenda",
    "texto": "El protocolo ele dap sirve para consultar el directorio: dame todos los usuarios, quién está en el grupo de administradores, qué equipos hay. Gran parte de la enumeración interna es, en el fondo, hacer estas preguntas. Y aquí está lo potente y peligroso: cualquier usuario del dominio, por básico que sea, puede leer casi toda la estructura. Eso le da al atacante un mapa completo nada más entrar. No necesitas ser administrador para enumerar usuarios, grupos y equipos: con una cuenta cualquiera obtenida en el acceso inicial, ya tienes el plano del edificio. Esta lectura amplia por defecto es una característica del diseño que el atacante aprovecha siempre."
   },
   {
    "titulo": "Kerberos: login con tickets",
    "texto": "El directorio autentica sobre todo con Kerberos, y la analogía perfecta es un parque de atracciones. Primero vas a la taquilla, te identificas, y te dan una pulsera: ese es el tique de concesión de tiques, el te ge te. Esa pulsera prueba que eres tú. Cuando quieres subir a una atracción, es decir, acceder a un servicio como un servidor o un recurso, enseñas la pulsera y te dan una entrada concreta para esa atracción: el tique de servicio. Con esa entrada accedes al servicio. El controlador de dominio hace de taquilla central. Entender este baile de tickets es imprescindible, porque casi todos los ataques de directorio abusan de alguna parte de él, como veremos enseguida."
   },
   {
    "titulo": "Lo que todos buscan",
    "texto": "Hay cuentas y grupos que todo atacante persigue. Los administradores de dominio tienen control total: son el gran premio. Los administradores de empresa controlan todo el bosque. La cuenta krbtgt es la que firma todos los tickets de Kerberos; su hash permite forjar tickets dorados, de los que hablaremos. Y las cuentas de servicio, que ejecutan los servicios, a menudo tienen privilegios y contraseñas débiles que no caducan, lo que las hace vulnerables al Kerberoasting. El objetivo típico de una intrusión interna es escalar de un usuario normal a administrador de dominio, o al control de la cuenta krbtgt, y desde ahí a las joyas de la corona. Los próximos vídeos muestran cómo. Vamos con BloodHound."
   }
  ]
 },
 {
  "id": "12",
  "titulo": "Enumeración y rutas con BloodHound",
  "subtitulo": "AD como grafo, SharpHound, relaciones de ACL y el camino más corto a DA",
  "nivel": "Active Directory",
  "modulo": 12,
  "duracion": 227.3,
  "palabras": 566,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 16.9,
    "titulo": "AD es un grafo"
   },
   {
    "t": 57.6,
    "titulo": "Nodos y relaciones"
   },
   {
    "t": 96.9,
    "titulo": "Recoger los datos"
   },
   {
    "t": 137.8,
    "titulo": "Leer una ruta"
   },
   {
    "t": 180.2,
    "titulo": "Del grafo a la defensa"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo descubrirás que Active Directory es un grafo de relaciones, y que casi siempre hay un camino oculto de un usuario normal a administrador de dominio. Bloodhound lo dibuja; el senior sabe leerlo y explotarlo, y también usarlo para la remediación."
   },
   {
    "titulo": "AD es un grafo",
    "texto": "La gran idea de este vídeo: el directorio activo no es una lista de usuarios, es una red de relaciones. Este usuario es administrador local de ese equipo; este grupo puede cambiar la contraseña de aquel otro. Esas relaciones encadenadas forman caminos. Y aquí está lo clave: casi siempre existe una ruta no evidente de un usuario cualquiera hasta administrador de dominio, saltando por permisos mal configurados. A simple vista no se ve; como grafo, sí. Bloodhound es la herramienta que convierte el directorio en ese grafo visual y calcula los caminos más cortos al objetivo. Cambió para siempre la auditoría de directorio activo."
   },
   {
    "titulo": "Nodos y relaciones",
    "texto": "El grafo tiene nodos, que son las cosas, y aristas, que son las relaciones. Los nodos son usuarios, grupos, equipos, políticas y dominios. Las aristas describen la relación: pertenece a un grupo, es administrador local de un equipo, tiene una sesión iniciada ahí. Las más valiosas para el atacante son las relaciones de permisos, como control total o la capacidad de modificar los permisos de un objeto. Esas relaciones significan tengo control sobre este objeto, y suelen ser el escalón oculto hacia el dominio. Saber reconocer una relación peligrosa en el grafo es la habilidad clave de este nivel."
   },
   {
    "titulo": "Recoger los datos",
    "texto": "Para dibujar el grafo, un recolector consulta el directorio y recoge toda la información. El recolector clásico, sharpaund, obtiene los objetos, las pertenencias a grupos, las sesiones y los permisos, y genera un fichero comprimido que se importa en bloodhound. Pero cuidado con la seguridad operacional: la recogida completa puede ser ruidosa, porque hace muchísimas consultas y toca muchas sesiones. El senior usa métodos selectivos y sigilosos, recogiendo solo lo necesario y evitando tocar todas las sesiones, para no alertar al equipo defensor. Enumerar es necesario, pero enumerar con prudencia es lo que distingue al operador senior."
   },
   {
    "titulo": "Leer una ruta",
    "texto": "Bloodhound te enseña el camino, y saber leerlo es la habilidad clave. Imagina esta ruta. Paco pertenece al grupo de soporte de informática. Ese grupo tiene permiso para cambiar la contraseña de una cuenta de administración de copias de seguridad. Esa cuenta es administradora local de un servidor de ficheros. Y en ese servidor hay una sesión iniciada de un administrador de dominio, cuyas credenciales se pueden robar de memoria. El senior lee esto como una escalera: con Paco cambio la contraseña de la cuenta de copias, que es administradora del servidor, donde robo las credenciales del administrador de dominio. Paso a paso hasta el control total."
   },
   {
    "titulo": "Del grafo a la defensa",
    "texto": "Bloodhound no solo sirve para atacar; en el informe se vuelve una guía de remediación. Para atacar, eliges el camino más corto y sigiloso hacia el objetivo. Para defender, le muestras al cliente las relaciones peligrosas que hay que cortar: quitar administradores locales innecesarios, arreglar permisos mal puestos. Y para priorizar, identificas los cuellos de botella: algunos nodos aparecen en muchísimas rutas, así que, si los arreglas, cierras muchos caminos de golpe. En la entrevista, una respuesta senior es: el directorio es un grafo, casi siempre hay un camino oculto a administrador de dominio, uso bloodhound para encontrar el más corto y, en el informe, para señalar qué relaciones cortar. Vamos con los ataques de Kerberos."
   }
  ]
 },
 {
  "id": "13",
  "titulo": "Ataques Kerberos",
  "subtitulo": "Kerberoasting, AS-REP roasting y abuso de delegación",
  "nivel": "Active Directory",
  "modulo": 13,
  "duracion": 242.5,
  "palabras": 599,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 18.2,
    "titulo": "Por qué es atacable"
   },
   {
    "t": 56.9,
    "titulo": "Kerberoasting"
   },
   {
    "t": 110.0,
    "titulo": "AS-REP roasting"
   },
   {
    "t": 152.3,
    "titulo": "Abuso de delegación"
   },
   {
    "t": 197.7,
    "titulo": "A dónde lleva"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo verás cómo los atacantes convierten el baile de tickets de Kerberos en robo de credenciales y escalada. El ataque estrella, el Kerberoasting; su primo el as repe roasting; y el abuso de delegación. Y, en cada caso, la defensa que recomendarás en el informe."
   },
   {
    "titulo": "Por qué es atacable",
    "texto": "Kerberos es seguro por diseño, pero su funcionamiento deja rendijas que los atacantes explotan. La mayoría de ataques no rompen Kerberos: abusan de cómo entrega los tickets. Recuerda el parque de atracciones: la pulsera de identidad y la entrada a cada servicio. Varios ataques consisten en pedir tickets de forma perfectamente legítima y luego atacarlos sin conexión, offline, sin tocar nada roto. Esto es importante para la seguridad operacional, porque atacar offline no genera ruido en el dominio. Entender esta idea, que se abusa del sistema en vez de romperlo, es la clave de todo el vídeo."
   },
   {
    "titulo": "Kerberoasting",
    "texto": "El ataque más famoso es el Kerberoasting. Se basa en una idea sencilla. Las cuentas de servicio tienen un identificador llamado ese pe ene. Cualquier usuario del dominio puede pedir una entrada de servicio para ese servicio. Esa entrada va cifrada con el hash de la contraseña de la cuenta de servicio. Así que la extraes y la crackeas sin conexión: si la contraseña es débil, la recuperas. Funciona porque muchas cuentas de servicio tienen contraseñas débiles que no caducan. Y lo mejor para el atacante: el crackeo es offline, no genera intentos de login fallidos, así que es invisible. Solo necesitas un usuario de dominio cualquiera para empezar. La defensa, para el informe: contraseñas largas y aleatorias, o cuentas gestionadas por el propio directorio, y vigilar peticiones masivas de tickets."
   },
   {
    "titulo": "AS-REP roasting",
    "texto": "Una variante ataca cuentas con una mala configuración concreta: la preautenticación de Kerberos desactivada. Normalmente, para pedir tu pulsera de identidad, debes probar primero que conoces la contraseña; eso es la preautenticación. Si una cuenta tiene esa protección desactivada, cualquiera puede pedir un dato cifrado con su contraseña, y crackearlo sin conexión. Lo llamativo es que no necesitas credenciales previas: solo el nombre de la cuenta vulnerable. Es menos común que el Kerberoasting, porque requiere esa mala configuración, pero cuando aparece es acceso gratis. La defensa es simple: no desactivar la preautenticación y usar contraseñas fuertes."
   },
   {
    "titulo": "Abuso de delegación",
    "texto": "La delegación permite que un servicio actúe en nombre de un usuario, por ejemplo un servidor web que accede a una base de datos como tú. Mal configurada, es una vía de escalada potente. La delegación sin restricciones hace que el servidor guarde la pulsera de identidad de quien se conecta: si logras que un administrador se conecte, le robas la pulsera; es muy peligrosa. La restringida está limitada a ciertos servicios, pero con trucos puede abusarse. Y la basada en recursos permite que, si puedes escribir cierto atributo de un equipo, te hagas pasar por cualquiera contra él. No necesitas memorizar cada variante; sí saber que la delegación mal configurada permite suplantar a otros usuarios, incluidos administradores."
   },
   {
    "titulo": "A dónde lleva",
    "texto": "Estos ataques entregan credenciales o tickets, que alimentan el resto de la intrusión. Tras un Kerberoasting exitoso, te preguntas si esa cuenta de servicio es privilegiada: a veces son administradoras locales o incluso de dominio. Reutilizas esa credencial para acceder a más equipos y servicios. Y vuelves a bloodhound para ver qué abre esa cuenta y seguir el camino. La belleza, para el atacante, del Kerberoasting es que solo necesita un usuario de dominio cualquiera para empezar, y el crackeo es invisible. Por eso es de los primeros movimientos tras el acceso inicial. Todo esto se practica solo en laboratorios propios o engagements autorizados. Vamos con la escalada a dominio."
   }
  ]
 },
 {
  "id": "14",
  "titulo": "Escalada a dominio: ADCS, DCSync y tickets",
  "subtitulo": "Certificados mal configurados, replicación de hashes y tickets forjados",
  "nivel": "Active Directory",
  "modulo": 14,
  "duracion": 239.9,
  "palabras": 600,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 17.7,
    "titulo": "Del apoyo al dominio"
   },
   {
    "t": 58.7,
    "titulo": "ADCS: certificados mal puestos"
   },
   {
    "t": 108.2,
    "titulo": "DCSync"
   },
   {
    "t": 153.2,
    "titulo": "Golden y Silver Ticket"
   },
   {
    "t": 193.1,
    "titulo": "La cadena y su defensa"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo juntamos las técnicas que convierten un punto de apoyo en control total del dominio: el abuso de los servicios de certificados, el ataque de sincronización que roba todas las contraseñas, y los tickets dorado y plateado. Y cerramos siempre con la remediación."
   },
   {
    "titulo": "Del apoyo al dominio",
    "texto": "Tras el acceso inicial y algún robo de credenciales, el objetivo es controlar el dominio, es decir, ser administrador de dominio o equivalente. Hay varias autopistas para lograrlo, y veremos las más importantes hoy. Una idea senior clave: muchas de estas técnicas no explotan un fallo de programación, sino configuraciones por defecto o permisos mal puestos. Por eso son tan comunes y tan reportadas en los informes. No hace falta un exploit sofisticado: basta con que alguien dejó una plantilla mal configurada o unos permisos de más. Esto, que parece un detalle, es a menudo la diferencia entre un apoyo y el control total."
   },
   {
    "titulo": "ADCS: certificados mal puestos",
    "texto": "Los servicios de certificados del directorio, que abreviamos a de ce ese, son la entidad que emite certificados internos. Si una plantilla de certificado está mal configurada, un usuario normal puede pedir un certificado que le identifique como otro usuario, incluido un administrador. Las configuraciones peligrosas se catalogan con códigos como e ese ce uno o e ese ce ocho, descritas en la investigación llamada certificado pre comprometido. La herramienta certipy encuentra y abusa de las plantillas vulnerables. Y lo grave es que un certificado robado permite autenticarse como la víctima de forma persistente, porque los certificados duran mucho tiempo. Este ha sido uno de los vectores más explotados de los últimos años, porque estaba mal configurado por defecto en muchísimas empresas."
   },
   {
    "titulo": "DCSync",
    "texto": "El ataque de sincronización de controlador, de ce sync, es demoledor. Si tienes ciertos permisos, los que tienen los controladores de dominio, puedes pedirle a un controlador que te replique las contraseñas, como si fueras otro controlador. Es decir, le dices: oye, soy otro controlador, mándame los hashes. Y obtienes, entre otros, el hash de la cuenta krbtgt, que es el premio gordo, porque con él se forjan tickets dorados. Lo peligroso es que este ataque no requiere entrar físicamente en el controlador: solo tener el permiso adecuado, que se consigue al ser administrador de dominio o por un permiso mal puesto. Es la forma más limpia de hacerse con las llaves del reino."
   },
   {
    "titulo": "Golden y Silver Ticket",
    "texto": "Con las credenciales robadas se pueden forjar tickets falsos. El ticket dorado es una pulsera de identidad falsa, firmada con el hash de la cuenta krbtgt: da acceso como cualquiera a todo el dominio, y es una persistencia brutal, porque funciona aunque cambien las contraseñas de los administradores. El ticket plateado es una entrada de servicio falsa para un servicio concreto: da acceso solo a ese servicio, pero es más sigiloso, porque no pasa por el controlador de dominio. Por eso, tras un compromiso serio, la recomendación es rotar la contraseña de la cuenta krbtgt dos veces, lo que invalida los tickets dorados forjados."
   },
   {
    "titulo": "La cadena y su defensa",
    "texto": "Juntando todo el nivel, una cadena típica de dominación de dominio sería: entras con un usuario de dominio por phishing; con bloodhound encuentras la ruta; robas credenciales o certificados con Kerberoasting o abuso de certificados; escalas hasta tener permisos de sincronización; haces el ataque de sincronización sobre la cuenta krbtgt, y ya tienes control total; y alcanzas las joyas de la corona. Pero el senior siempre cierra con remediación: modelo de administración por niveles, cuentas sin privilegios excesivos, plantillas de certificados revisadas, monitorización del ataque de sincronización, y rotación de la cuenta krbtgt. Todo esto se practica solo en laboratorios propios o engagements autorizados. Pasamos a la nube y el movimiento."
   }
  ]
 },
 {
  "id": "15",
  "titulo": "Movimiento lateral y persistencia",
  "subtitulo": "Pass-the-Hash, PsExec, WMI, WinRM, pivoting y persistencia con criterio",
  "nivel": "Cloud y movimiento",
  "modulo": 15,
  "duracion": 228.5,
  "palabras": 578,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 17.2,
    "titulo": "Moverse como un empleado"
   },
   {
    "t": 57.0,
    "titulo": "Reutilizar credenciales"
   },
   {
    "t": 102.3,
    "titulo": "Ejecución remota"
   },
   {
    "t": 142.8,
    "titulo": "Pivoting y túneles"
   },
   {
    "t": 183.4,
    "titulo": "Persistencia con criterio"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo verás cómo saltar de un equipo a otro con las credenciales robadas, parecer un administrador legítimo, tunelizar hacia redes internas, y mantener el acceso sin ser visto. El movimiento lateral es donde la operación avanza hacia las joyas de la corona."
   },
   {
    "titulo": "Moverse como un empleado",
    "texto": "El movimiento lateral es saltar de un equipo comprometido a otro, acercándote a las joyas de la corona. La clave es que, con credenciales válidas, no necesitas exploits: usas los mismos mecanismos que un administrador legítimo. Esto es muy bueno para la seguridad operacional. Si te mueves con una herramienta de administración remota y una cuenta de administrador real, pareces un administrador trabajando. El antivirus avanzado ve administrador administra, no ve un ataque. Esta es una diferencia fundamental de mentalidad: el senior prefiere mezclarse con la actividad legítima antes que lanzar un exploit ruidoso que lo delate."
   },
   {
    "titulo": "Reutilizar credenciales",
    "texto": "En Windows, muchas veces no necesitas la contraseña en claro: basta con su hash o su ticket de Kerberos. El paso del hash consiste en autenticarte usando el hash directamente, sin conocer la contraseña. El paso del ticket consiste en reutilizar un ticket de Kerberos robado de memoria para acceder a servicios. Y hay una variante que usa el hash para obtener una pulsera de identidad legítima. De aquí la importancia de robar credenciales de memoria, del proceso que las guarda: un hash o un ticket abren otras puertas sin crackear nada. La defensa, para el informe: tecnologías de aislamiento de credenciales, gestión de contraseñas de administrador local únicas, y no dejar administradores sembrados por todos los equipos."
   },
   {
    "titulo": "Ejecución remota",
    "texto": "Con credenciales válidas, hay varias formas de ejecutar en un equipo remoto, y cada una tiene distinto nivel de ruido. La herramienta clásica, pe ese exec, crea un servicio a través del protocolo de ficheros compartidos: es potente pero ruidosa, está muy fichada. La ejecución por instrumentación de Windows es más sigilosa y muy usada. Y la administración remota de Windows es un protocolo legítimo para administradores, así que se mezcla muy bien. Se usan suites como impacket, con sus distintas herramientas, o utilidades específicas de shell remota. El senior elige siempre la menos ruidosa que funcione, no la más cómoda."
   },
   {
    "titulo": "Pivoting y túneles",
    "texto": "A menudo la red interesante, con los servidores y las bases de datos, no es accesible directamente desde tu punto de entrada. El pivoting usa un equipo comprometido como puente. Si ese equipo está en dos redes, tunelizas tu tráfico a través de él para alcanzar la red interna. Se hace con un proxy a través del beacon, o reenviando el puerto de un servicio concreto. Herramientas típicas son chisel o ligolo. Así llegas a máquinas que no te ven a ti, porque tu tráfico sale del equipo puente, que sí tiene acceso. Es imprescindible para alcanzar redes segmentadas, que es justo donde las empresas suelen guardar lo más valioso."
   },
   {
    "titulo": "Persistencia con criterio",
    "texto": "A nivel de dominio, el abanico de persistencia crece: tickets dorados, certificados, cuentas sembradas. Pero el mensaje senior es el mismo. Usa la mínima persistencia necesaria, porque cada mecanismo es detectable y debe limpiarse. Prefiere lo que se funde con lo normal, como un certificado válido o una cuenta esperable, frente a lo ruidoso. Documenta cada persistencia para la limpieza y la deconfliction. Y piensa en el cliente: una persistencia olvidada es una puerta real para un atacante futuro. La madurez senior se nota aquí: no en cuántas puertas traseras pongo, sino en moverme como un administrador legítimo y dejar el sitio limpio. Vamos a la nube híbrida."
   }
  ]
 },
 {
  "id": "16",
  "titulo": "Nube híbrida: Entra ID y Microsoft 365",
  "subtitulo": "Identidad en la nube, tokens, consentimiento de apps y el puente híbrido",
  "nivel": "Cloud y movimiento",
  "modulo": 16,
  "duracion": 247.5,
  "palabras": 650,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 16.1,
    "titulo": "Local frente a nube"
   },
   {
    "t": 61.3,
    "titulo": "Tokens, cookies y PRT"
   },
   {
    "t": 107.5,
    "titulo": "Ataques en la nube"
   },
   {
    "t": 154.2,
    "titulo": "El puente híbrido"
   },
   {
    "t": 199.9,
    "titulo": "Defensa y mentalidad cloud"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo verás que casi toda empresa es hoy híbrida: directorio local más nube. Entenderás la identidad en la nube con Entra, por qué la identidad es el nuevo perímetro, los ataques típicos, y el puente peligroso entre lo local y la nube."
   },
   {
    "titulo": "Local frente a nube",
    "texto": "La empresa moderna ya no vive solo en su edificio, el directorio local: gran parte está en la nube, con el correo y los servicios en línea. Esa identidad la gestiona Entra, antes llamado Azure Active Directory. Las diferencias son grandes. El directorio local usa Kerberos y ele dap; la nube usa protocolos de tokens, como oauth y saml. El directorio local se accede desde la red interna; la nube, desde Internet, desde cualquier sitio. El administrador total en local es el administrador de dominio; en la nube es el administrador global. Una frase clave senior: la identidad es el nuevo perímetro. En la nube no hay dentro y fuera; lo que importa es quién tiene un token válido."
   },
   {
    "titulo": "Tokens, cookies y PRT",
    "texto": "En la nube no manejas tanto contraseñas como tokens: trozos de texto firmados que prueban que ya te autenticaste. Robar el token equivale a ser el usuario. Hay tokens de acceso y de actualización que dan entrada a servicios como el correo sin volver a loguearte. En los equipos unidos a la nube existe una superllave, el token primario de actualización, que renueva tokens; robarla es muy potente. Y las cookies de sesión son justo lo que roba el phishing de adversario en el medio que vimos. Por eso el doble factor no basta: si roban un token o una cookie posterior al doble factor, ya están dentro. La defensa fuerte combina llaves resistentes al phishing con el acceso condicional, que evalúa el dispositivo, la ubicación y el riesgo."
   },
   {
    "titulo": "Ataques en la nube",
    "texto": "Veamos ataques típicos. El consentimiento ilícito consiste en engañar al usuario para que apruebe una aplicación maliciosa con permisos sobre su correo y sus datos, sin robar la contraseña. El phishing de código de dispositivo abusa de un flujo legítimo de autenticación para que la víctima autorice tu sesión. El abuso de roles escala mediante roles mal asignados, por ejemplo un rol con demasiado poder. Y el abuso de registros de aplicaciones aprovecha identidades de aplicación con permisos excesivos y secretos mal guardados. Herramientas de enumeración y ataque en la nube son, por ejemplo, rodtuls, la suite de utilidades de directorio azul, o el ejecutor de grafo. Conocerlas por su nombre sitúa tu nivel."
   },
   {
    "titulo": "El puente híbrido",
    "texto": "Lo más peligroso del entorno híbrido es el puente entre el directorio local y la nube, normalmente el servicio de sincronización azure a de connect, que sincroniza las identidades. El flujo es: el directorio local, con su administrador de dominio; el servidor de sincronización, que guarda credenciales muy potentes; y la nube. Comprometer ese servidor de sincronización puede dar el salto de local a nube, o al revés. Es un objetivo de altísimo valor y debe tratarse como nivel cero, el más crítico. En la entrevista, entender que el riesgo híbrido no es local o nube por separado, sino el puente que los une, te distingue como senior. Es, muchas veces, el eslabón que conecta las dos mitades de un ataque moderno."
   },
   {
    "titulo": "Defensa y mentalidad cloud",
    "texto": "En el informe, la seguridad de identidad en la nube se resume en varias ideas. Acceso condicional bien diseñado, con doble factor fuerte, dispositivos conformes y bloqueo por riesgo. Mínimo privilegio en los roles, con muy pocos administradores globales y cuentas de emergencia vigiladas. Revisar los consentimientos de aplicaciones y los permisos de las identidades de aplicación. Proteger el puente híbrido como un activo de nivel cero. Y monitorizar inicios de sesión y tokens anómalos, como un viaje imposible entre dos países en minutos. El Red Team en la nube piensa en identidades y permisos, no en puertos: el escaneo de red de antaño se vuelve la pregunta quién puede asumir qué rol. Vamos con la nube de Amazon y la exfiltración."
   }
  ]
 },
 {
  "id": "17",
  "titulo": "AWS y exfiltración de datos",
  "subtitulo": "IAM, el endpoint de metadata, exfiltración ética e impacto de negocio",
  "nivel": "Cloud y movimiento",
  "modulo": 17,
  "duracion": 204.2,
  "palabras": 642,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 17.2,
    "titulo": "AWS gira en torno a IAM"
   },
   {
    "t": 63.3,
    "titulo": "El endpoint de metadata"
   },
   {
    "t": 107.1,
    "titulo": "Exfiltración: demostrar impacto"
   },
   {
    "t": 156.8,
    "titulo": "Ética con datos reales"
   },
   {
    "t": 159.4,
    "titulo": "Impacto de negocio"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo verás nociones de seguridad ofensiva en la nube de Amazon, con su modelo de permisos, el abuso del endpoint de metadata, y cómo se demuestra el impacto final: exfiltrar datos de forma controlada, sigilosa y ética, y reportarlo en lenguaje de negocio."
   },
   {
    "titulo": "AWS gira en torno a IAM",
    "texto": "En la nube de Amazon, la seguridad es sobre todo gestión de identidades y accesos, lo que llaman i a eme. Igual que en la nube de Microsoft, el juego es de identidades y permisos, no de puertos. Hay usuarios y roles, que son identidades humanas o de servicio con permisos asignados. Hay políticas, documentos que conceden o deniegan acciones, como leer un almacén de objetos. Hay claves de acceso, que son credenciales programáticas: si se filtran, dan acceso directo. Y hay almacenes de objetos que, mal configurados, exponen datos al público. Los errores típicos son: almacenes abiertos, claves filtradas en código o repositorios, y roles con permisos excesivos que permiten escalar."
   },
   {
    "titulo": "El endpoint de metadata",
    "texto": "Una joya ofensiva en la nube es el endpoint de metadatos, en una dirección interna especial. Una máquina en la nube puede preguntar ahí por sus propias credenciales temporales. El problema surge si logras una falsificación de petición del lado del servidor, una ese ese erre efe, contra una aplicación en la nube: haces que el servidor pregunte por ti a ese endpoint, y te devuelve las credenciales temporales del rol de la instancia. Con ellas, actúas como ese rol en la nube. Por eso la segunda versión de este servicio de metadatos, que exige un token, mitiga este abuso: menciona que esa versión con token es la defensa recomendada. Una herramienta de post-explotación en la nube de Amazon es paku."
   },
   {
    "titulo": "Exfiltración: demostrar impacto",
    "texto": "Llegar a los datos no basta: el ejercicio demuestra el impacto sacándolos, o probando que se pueden sacar, de forma controlada. Esto corresponde a la táctica de exfiltración del catálogo de técnicas. La idea clave es que es una prueba de impacto, no un robo masivo: a menudo basta con exfiltrar una muestra mínima, o un fichero señuelo, para demostrar que se podía. Los canales pueden ser el propio mando y control, la resolución de nombres, o servicios legítimos de la nube, lo que se funda con el tráfico normal. Y, por seguridad operacional, sacar muchos datos de golpe dispara las alarmas de prevención de fuga de datos; el senior va despacio y con cabeza. Ante la pregunta de si exfiltrarías toda la base de datos, la respuesta senior es no: demuestro el acceso con una muestra mínima acordada."
   },
   {
    "titulo": "Ética con datos reales",
    "texto": "La exfiltración toca datos reales de personas, así que el senior extrema el cuidado. Mínima exposición: acceder a lo justo para probar el impacto, no más. Si aparecen datos personales o financieros reales, se manejan con máxima confidencialidad y se minimiza su descarga. Qué se puede exfiltrar y cómo suele pactarse de antemano con la célula blanca. Y cualquier dato extraído se borra de forma segura tras el informe. Confundir demostrar impacto con llevarse todo es un error grave. El valor está en probar que se podía, no en el botín. Esta madurez con los datos del cliente es, de nuevo, lo que separa a un profesional de alguien que solo sabe entrar."
   },
   {
    "titulo": "Impacto de negocio",
    "texto": "El cierre de la cadena ofensiva es traducir el logro técnico a impacto, que es lo que entiende la dirección. El acceso a un almacén con datos se traduce como: un atacante podría exponer los datos de millones de clientes, con riesgo de multas y daño reputacional. Un rol con permisos excesivos se traduce como: se podría cifrar o borrar toda la infraestructura, provocando la parada del negocio. Y alcanzar administrador de dominio se traduce como: control total del entorno corporativo. Un senior no entrega tengo acceso técnico a esto; entrega demostramos que un atacante podría provocar esta consecuencia de negocio. Eso conecta directamente con el último nivel: el informe. Vamos allá."
   }
  ]
 },
 {
  "id": "18",
  "titulo": "Informe ejecutivo, debrief y purple team",
  "subtitulo": "La narrativa, el impacto de negocio, la remediación y el purple team",
  "nivel": "Liderazgo y entrevista",
  "modulo": 18,
  "duracion": 246.9,
  "palabras": 624,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 16.2,
    "titulo": "El informe es el producto"
   },
   {
    "t": 58.2,
    "titulo": "Estructura del informe"
   },
   {
    "t": 102.9,
    "titulo": "Traducir a negocio"
   },
   {
    "t": 146.9,
    "titulo": "Priorizar la remediación"
   },
   {
    "t": 195.2,
    "titulo": "Debrief y purple team"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este vídeo verás el entregable que da valor a semanas de trabajo: el informe. Cómo contar la historia del ataque, traducirla a impacto de negocio, priorizar la remediación, y convertir el ejercicio en mejora real mediante el purple team."
   },
   {
    "titulo": "El informe es el producto",
    "texto": "El cliente no paga por el hackeo: paga por el informe. Un acceso brillante mal explicado no vale nada; un hallazgo medio bien comunicado mejora la empresa. Por eso el senior dedica tanto esfuerzo a escribir como a atacar. La regla de oro es que el informe lo leen dos públicos muy distintos. La dirección quiere impacto y decisiones: qué se intentó, si se logró, y qué deben hacer. Los técnicos quieren el detalle para arreglarlo: qué falló exactamente y cómo corregirlo. El documento debe servir a ambos, y por eso tiene secciones pensadas para cada uno. Escribir bien no es un extra: es la mitad del trabajo de un senior."
   },
   {
    "titulo": "Estructura del informe",
    "texto": "Veamos la estructura. El resumen ejecutivo es para la dirección: qué se intentó, si se logró, el impacto de negocio y tres a cinco mensajes clave, sin jerga. La narrativa del ataque es la historia: cómo se entró y se llegó al objetivo, paso a paso, mapeada al catálogo de técnicas. Los hallazgos técnicos describen cada debilidad con su evidencia, su riesgo y cómo corregirla. El análisis de detección cuenta qué detectó el equipo defensor y qué no, con su cobertura. Y las recomendaciones son el plan de remediación priorizado. La narrativa es lo que distingue un informe de Red Team de un pentest: no es una lista de fallos, es la historia de cómo un atacante llegó a la joya de la corona."
   },
   {
    "titulo": "Traducir a negocio",
    "texto": "La habilidad senior más valorada es convertir lo técnico en consecuencias que la dirección entienda. En vez de escribir Kerberoasting en doce cuentas de servicio, escribes: credenciales de servicio débiles permitieron escalar hasta el control del dominio. En vez de ejecución remota de código en el portal, escribes: un atacante podría manipular transferencias de clientes. Y en vez de almacén de objetos público, escribes: exposición de datos de dos millones de clientes, con riesgo regulatorio y reputacional. El comité no decide sobre jerga técnica; decide sobre dinero, clientes, cumplimiento y reputación. Habla su idioma, y tus hallazgos se convertirán en decisiones y presupuesto."
   },
   {
    "titulo": "Priorizar la remediación",
    "texto": "Un informe con cincuenta recomendaciones sin orden abruma y no se ejecuta. El senior prioriza. Señala las victorias rápidas: cosas de alto impacto y bajo coste, como arreglar una plantilla de certificados o rotar una contraseña de servicio. Ataca las causas raíz, no los síntomas: recomendar un modelo de administración por niveles en vez de parchear un solo equipo. Incluye mejoras de detección, no solo cerrar agujeros: deberíais haber detectado esto aquí. Y es realista: recomendaciones que la empresa pueda aplicar de verdad, en un orden sensato. Una frase senior: no entrego cincuenta fallos, entrego cinco cambios que cierran el ochenta por ciento de los caminos. Eso es pensar en la defensa, no solo en el ataque."
   },
   {
    "titulo": "Debrief y purple team",
    "texto": "El ejercicio termina con reuniones que convierten el informe en mejora real. El debrief ejecutivo transmite el resumen y las decisiones a la dirección. El debrief técnico repasa el detalle con el equipo defensor, comparando la línea temporal del ataque con lo que detectaron. Luego viene la joya: el purple team, donde el equipo rojo y el azul trabajan juntos. El rojo reproduce cada técnica, mapeada al catálogo, y el azul ajusta sus detecciones en directo. Y, finalmente, un re-test verifica que la remediación funciona. Así el cliente no solo tapa agujeros: aprende a ver al próximo atacante. La meta final de un buen Red Team no es ganar, es que el cliente salga más fuerte. El senior se mide por eso. Vamos al último vídeo: liderazgo y entrevista."
   }
  ]
 },
 {
  "id": "19",
  "titulo": "Liderazgo, equipo y la entrevista senior",
  "subtitulo": "Liderar, mentorizar, tu ruta de certificaciones y cómo responder",
  "nivel": "Liderazgo y entrevista",
  "modulo": 19,
  "duracion": 255.9,
  "palabras": 629,
  "capitulos": [
   {
    "t": 0,
    "titulo": "Introducción"
   },
   {
    "t": 16.5,
    "titulo": "Del yo al nosotros"
   },
   {
    "t": 61.4,
    "titulo": "Mentoría y cultura"
   },
   {
    "t": 102.4,
    "titulo": "Gestión del engagement"
   },
   {
    "t": 149.6,
    "titulo": "Ruta de certificaciones"
   },
   {
    "t": 193.5,
    "titulo": "La entrevista senior"
   }
  ],
  "guion": [
   {
    "titulo": "Introducción",
    "texto": "En este último vídeo verás lo que de verdad evalúan en un senior: liderar operaciones, mentorizar juniors, tu ruta de certificaciones, y cómo responder a las preguntas difíciles de la entrevista con criterio y honestidad. Es el cierre del curso."
   },
   {
    "titulo": "Del yo al nosotros",
    "texto": "Un senior ya no solo hackea: hace que el equipo hackee mejor. El liderazgo técnico consiste en repartir el trabajo según las fortalezas, uno en directorio activo, otro en nube, otro en el informe. En desbloquear a otros: cuando un junior se atasca, orientarle sin hacerle el trabajo. En sostener la calidad: revisar hallazgos, pruebas de concepto e informe antes de entregar. Y en marcar el ritmo y la seguridad operacional de la operación, cuidando que nadie se salga del alcance. En la entrevista senior valoran que sepas multiplicar al equipo, no solo tu brillo individual. La pregunta cómo ayudarías a un junior atascado es muy habitual, y lo que buscan es que enseñes, no que resuelvas por él."
   },
   {
    "titulo": "Mentoría y cultura",
    "texto": "Mentorizar bien acelera a todo el equipo. Enseña el porqué, no solo el comando. Revisa con feedback concreto y amable, nunca criticando en público ni humillando. Fomenta el laboratorio y el aprendizaje continuo, en vez de guardarte el conocimiento. Y transmite la ética y la seguridad operacional como valores, no como normas sueltas que se cumplen porque sí. La seguridad ofensiva cambia cada mes, así que un buen senior crea una cultura de aprendizaje: comparte análisis de retos, monta laboratorios internos y normaliza preguntar. Un equipo que aprende junto es mucho más fuerte que una suma de individuos brillantes y aislados."
   },
   {
    "titulo": "Gestión del engagement",
    "texto": "El senior es, a menudo, la cara ante el cliente y el responsable de que la operación salga bien y segura. Antes, define el alcance, los objetivos, las reglas y la autorización. Durante, gestiona el riesgo para no romper producción, mantiene la trazabilidad y el canal de deconfliction con la célula blanca. Después, entrega el informe, el debrief, el purple team, el re-test y la limpieza. Y, siempre, comunica con claridad y expectativas realistas: un Red Team no aprueba ni suspende, mejora. Saber decir esto está fuera del alcance, paremos y consultemos, es una señal de seniority, no de debilidad. La responsabilidad sobre la operación y el cliente es parte inseparable del puesto."
   },
   {
    "titulo": "Ruta de certificaciones",
    "texto": "La oferta valora certificaciones. Para un perfil que aspira a senior, una ruta coherente sería: el oe ese ce pe como base imprescindible de pentest práctico; la certificación de operaciones de Red Team, muy alineada con este puesto por su foco en mando y control, evasión y directorio activo; la de líder de Red Team, para evasión avanzada y liderazgo; y la de experimentado en explotación, para evasión y pentest avanzado. Hay otras según tu foco, para directorio activo o para web avanzada. En la entrevista, explica una ruta con criterio: tengo la base, preparo la de Red Team Ops por su enfoque, con vistas a la de evasión. Eso suena a plan, no a coleccionar siglas."
   },
   {
    "titulo": "La entrevista senior",
    "texto": "En una entrevista senior se evalúan tres cosas: profundidad técnica, criterio y madurez. Algunos consejos. Piensa en voz alta: ante un cómo atacarías esto, estructura la respuesta, reconocimiento, acceso, escalada, objetivo, en vez de soltar una herramienta. Usa el método estrella para tus experiencias: situación, tarea, acción, y resultado, destacando qué hiciste tú. Sé honesto: si no sabes algo, dilo y explica cómo lo averiguarías; mentir se nota y se penaliza. Menciona la seguridad operacional, la ética y el impacto sin que te lo pregunten, porque es lo que distingue a un senior. Y ten preparadas tus batallitas: un reto difícil, un directorio comprometido en laboratorio, un informe del que estés orgulloso. Practica en el simulador de entrevista de este módulo, respondiendo en voz alta. Con esto terminas el curso. Mucha suerte: ya piensas como un Red Team senior."
   }
  ]
 }
];
