# Red Team Senior · Curso para la entrevista

Curso web gratuito, de cero a nivel **Senior**, para preparar la entrevista de **Técnico Senior de Red Team / pentesting avanzado**. Sin dependencias ni build: HTML, CSS y JavaScript estáticos.

🔗 **Web:** https://melvinfranco99.github.io/red-team-senior/

## Contenido
- **19 módulos** en 6 niveles: Estrategia Red Team · Acceso inicial · Evasión y C2 · Active Directory · Cloud y movimiento · Liderazgo y entrevista.
- **19 vídeos narrados** con capítulos, subtítulos y transcripción.
- **7 laboratorios interactivos** (ordenar el engagement, mapear ATT&CK, diseñar C2, evasión, rutas BloodHound, ataques de AD y simulador de entrevista senior).
- **95 preguntas** de test por módulo + **examen final** de 30 aleatorias.
- **Chuleta** de comandos/herramientas y **glosario** de 122 términos.
- Progreso guardado en el navegador (localStorage).

## Temario (resumen)
Emulación de adversarios y MITRE ATT&CK · inteligencia de amenazas, TIBER-EU/DORA · OSINT · ingeniería social y phishing MFA (AiTM) · desarrollo de payloads · infraestructura y frameworks C2 · evasión de AV/EDR (AMSI, ETW, hooks) · OPSEC · Active Directory, Kerberos, BloodHound, ADCS, DCSync · movimiento lateral · nube híbrida (Entra ID, AWS) · exfiltración · informe ejecutivo, purple team y liderazgo.

## Estructura
```
index.html
assets/css/style.css
assets/js/{curso,datos,videos-data,labs,app}.js
videos/video01..19.{mp4,vtt,jpg}
produccion/            # pipeline de generación de vídeos
```

## Regenerar los vídeos
```bash
python3 produccion/generar_videos.py [id ...]   # requiere ffmpeg, edge-tts y Pillow
```

## Aviso legal y ético
Todo el contenido es con fines **formativos** y para uso **legal y ético** en entornos autorizados (Red Team con mandato escrito, pentesting, CTF, laboratorios propios). Atacar sistemas sin autorización es delito. No está afiliado a ninguna empresa.
