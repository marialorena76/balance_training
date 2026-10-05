---
target: curso-iniciacion.html
total_score: 26
max_score: 36
na_heuristics: 7
p0_count: 0
p1_count: 3
target_identity: "file:/home/claude/balance_training/curso-iniciacion.html"
target_fingerprint: "sha256:b4a784246d8920b3257a376728fe8aaca2e4055b71a49303f1d49e57e6356bfc"
target_path: /home/claude/balance_training/curso-iniciacion.html
timestamp: 2026-10-05T21-20-50Z
slug: curso-iniciacion-html
---
Method: dual-agent (A: a3a90500ce02ed2c4 · B: aaaf83671ab415bab)

## Design Health Score — curso-iniciacion.html (2.ª crítica)

| # | Heurística | Puntaje | Problema clave |
|---|---|---|---|
| 1 | Visibilidad del estado | 3 | Breadcrumb, "Cursos" activo y "Estás acá" en la Pirámide |
| 2 | Lenguaje del usuario | 3 | Voseo y términos de Andrea; "Master Classes" y las estrellas no se explican donde aparecen |
| 3 | Control y libertad | 3 | Breadcrumb y salidas al catálogo |
| 4 | Consistencia | 2 | Una misma acción con cinco nombres; "Inscribirme" del menú saca de la página |
| 5 | Prevención de errores | 3 | WhatsApp y mail con el curso precargado |
| 6 | Reconocer en vez de recordar | 3 | Ficha repetida en la tarjeta de decisión |
| 7 | Flexibilidad | n/a | Página de persuasión de una visita |
| 8 | Estética y minimalismo | 3 | Calma y calidez; datos del hero repetidos en la ficha; mucha interfaz fija en celular |
| 9 | Recuperación de errores | 3 | Página "No encontramos esta capacitación" y respaldos de imagen |
| 10 | Ayuda | 3 | FAQ más "¿me orientan?"; abre por defecto la pregunta de precio, que solo dice "escribinos" |
| **Total** | | **26/36** | **Bueno (72 %)** — comparable con la 1.ª crítica (sin la 10): 23/32 vs 20/32 |

## Veredicto de especificidad
Mucho más propia en contenido: portada oficial, foto real de Andrea, su frase, Pirámide con "Estás acá" y WhatsApp con el curso. La estructura sigue siendo la de cualquier landing de curso, y la Pirámide (la idea más distintiva) aparece en su versión más débil: escalones en blanco, sin nombres ni links. Relinchos no aparece. Detector: 0 hallazgos en el código; 5 en el navegador (3 sombras en botones dorados marcadas como brillo, falso positivo; 2 sombras anchas con borde fino en portada y tarjeta). Contraste real que falla: números 01–07 del programa (2,61:1), estrellas de la Pirámide (2,98:1) y anillo de foco dorado sobre fondos claros (2,09:1). Sin desbordes, FAQ con aria-expanded correcto, foco visible presente.

## Problemas prioritarios
1. [P1] Una acción, cinco nombres, y el CTA del menú saca de la página ("Inscribirme" va al catálogo). Arreglo: en las landings el botón del menú lleva a #inscripcion; un solo verbo "Consultar inscripción". Comando: clarify.
2. [P1] Interfaz fija apilada en el celular: menú + barra + botón flotante ≈ 23 % de la pantalla; el flotante tapa el "+" del FAQ, el ítem 07 y el testimonio. Arreglo: ocultar el flotante mientras está la barra (o integrarlo) y padding inferior en main. Comando: adapt.
3. [P1] La Pirámide se ve como estrellas sin nombre: muestra ★★★★★★ (Nivel 2, sin textos) y salta de ★★★★★ a ★★★ sin ★★★★; estrellas con contraste 2,98:1 y aria-label ignorado. Arreglo: nombre de cada escalón con link, Nivel 2 "Próximamente", preguntar a Andrea por el ★★★★, contraste y etiqueta accesible en el li. Comando: bolder.
4. [P2] Formato poco claro para quien llega por primera vez: no dice si es grabado o en vivo ni cuándo empieza. Arreglo: preguntarle a Andrea y sumarlo a la ficha; mientras, FAQ "¿Es en vivo o grabado?" y abrir por defecto "¿me orientan?". Comando: clarify.
5. [P2] Contraste dorado sobre claro (números del programa, estrellas, anillo de foco) y números de estilo antiguo de Raleway (teléfono y +4 horas "saltan"). Arreglo: oscurecer el dorado de texto, foco marrón sobre claro, font-variant-numeric lining-nums. Comando: typeset + polish.

## Alertas por persona
- Jordan: "Master Classes" es jerga; no sabe si es grabado o en vivo; no sabe qué pasa después de "Consultar inscripción".
- Casey: el botón flotante tapa toggles y texto; tres controles fijos; título truncado en la barra.
- Riley: falta el escalón ★★★★; ★★★★★★ apunta a nada; en Asesorías las tarjetas sin portada repiten el título; en Mentorías una sola tarjeta estirada; FAQ con un solo ítem abierto.
- Profesional en formación: no le dice si puede saltar a ★★ (las páginas ★★ dicen "no excluyente"); el único testimonio es de una aficionada.

## Observaciones menores
Menú sin aria-label, hamburguesa sin aria-expanded, sin "saltar al contenido"; H1 fuera de main; la foto de fondo del hero casi no se ve (0,38 bajo gradiente 0,97); datos del hero repetidos en la ficha; testimonio asignado por índice.

## Preguntas
- Si la Pirámide es la tesis del producto, ¿por qué está al final y vacía? ¿Y una mini-pirámide rotulada junto a la portada?
- Todo termina en una charla con Andrea: ¿decir quién responde, en cuánto tiempo y qué pasa después convierte el WhatsApp en una ventaja?
- En el curso de entrada, ¿"Ver todas las capacitaciones" no devuelve al visitante al picoteo que justamente sufre?
