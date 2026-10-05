---
target: curso-iniciacion.html
total_score: 20
max_score: 32
na_heuristics: 7,10
p0_count: 0
p1_count: 3
target_identity: "file:/home/claude/balance_training/curso-iniciacion.html"
target_fingerprint: "sha256:eb688fa1e171c15d31beb8fc48cad06818a1ee2ab0081ab7fc824ea97a11dac5"
target_path: /home/claude/balance_training/curso-iniciacion.html
timestamp: 2026-10-05T21-01-49Z
slug: curso-iniciacion-html
---
Method: dual-agent (A: adc7513ab7f9b6ce4 · B: a19348138ecae13cf)

## Design Health Score — curso-iniciacion.html (plantilla de las 14 landings)

| # | Heurística | Puntaje | Problema clave |
|---|---|---|---|
| 1 | Visibilidad del estado | 3 | Nada indica en qué escalón de la Pirámide está el curso |
| 2 | Coincidencia con el mundo real | 2 | "★" como dato; filas de Inscripción invertidas (etiqueta/valor); pide "próximas fechas" para un curso grabado |
| 3 | Control y libertad | 3 | Breadcrumb, volver al catálogo y FAQ plegable funcionan |
| 4 | Consistencia | 2 | "Quiero inscribirme" lleva a una consulta; menú en verde fuera de paleta; herradura dibujada en vez del logo oficial |
| 5 | Prevención de errores | 3 | WhatsApp con mensaje prearmado; el botón flotante no lo tiene |
| 6 | Reconocer en vez de recordar | 3 | "Nivel ★" supone que el visitante ya conoce la Pirámide |
| 7 | Flexibilidad | n/a | Página de persuasión, sin flujos de experto |
| 8 | Estética y minimalismo | 2 | Los mismos 3 datos se repiten 5 veces; las secciones del medio pesan igual |
| 9 | Recuperación de errores | 2 | Slug inválido muestra Iniciación sin aviso; portada rota deja un hueco vacío |
| 10 | Ayuda | n/a | Resuelto con FAQ y WhatsApp |
| **Total** | | **20/32** | **Aceptable (62 %)** |

## Veredicto de especificidad
Paleta, portadas y voseo están en marca, pero la estructura es intercambiable con cualquier landing de curso. Faltan los diferenciales de PRODUCT.md: Pirámide Formativa (reducida a una estrella), Andrea (ausente), Relinchos (ausente) y los testimonios reales (ausentes). Detector: 2 hallazgos en el código (side-tab en la cita, transición de max-height en el FAQ) y 19 en el navegador (6 etiquetas sobre títulos, 4 transiciones de layout, 3 brillos dorados sobre oscuro, 2 textos de 10 px en el logo, 2 sombras anchas con borde fino, 1 borde de acento sobre esquina redondeada, 1 línea de ~97 caracteres). Sin desborde horizontal en 390 px. Contrastes reales que fallan AA: "Academia ecuestre" en 10 px y la línea © del footer (4,01:1).

## Problemas prioritarios
1. [P1] El camino de inscripción contradice el modelo de negocio: los cursos grabados se compran online, pero todos los CTA llevan a "Consultar por WhatsApp" y "próximas fechas". Arreglo: campo enroll checkout/consulta; CTA "Inscribirme ahora" y bloque de modalidad y acceso. Comando: clarify + harden.
2. [P1] No hay confianza ni autoridad en el momento de decidir: faltan Andrea, sus 35 años, Relinchos y los testimonios confirmados. Arreglo: franja "Quién te acompaña" con retrato y frase, y un testimonio en la tarjeta de Inscripción. Comando: delight.
3. [P1] La Pirámide Formativa no se ve: "Nivel ★" no le dice nada a quien llega por primera vez. Arreglo: mini-pirámide reutilizable con el escalón actual resaltado y "Tu próximo escalón". Comando: bolder + layout.
4. [P2] Contenido repetido 5 veces y filas de Inscripción con etiqueta y valor invertidos; el primer párrafo de "¿De qué se trata?" arranca con "También…". Arreglo: datos con pares etiqueta/valor, sacar las repeticiones, reescribir la apertura. Comando: distill.
5. [P2] En el celular la barra fija ocupa ~140 px y el botón flotante de WhatsApp se le encima. Además: sin :focus-visible, FAQ sin aria-expanded, footer con 4,01:1, texto de 10 px en el logo. Comando: adapt + polish.

## Alertas por persona
- Jordan (primera vez): no entiende "Nivel ★"; no sabe si es grabado o en vivo, cuánto dura el acceso ni si necesita caballo.
- Casey (celular): hero de ~1100 px con la portada al final; 17 % de la pantalla es barra fija; "Quiero inscribirme" no inscribe.
- Riley (casos borde): slug malo muestra Iniciación; páginas sin portada dejan media columna vacía; títulos largos ocupan 3 líneas en la barra fija; FAQ con max-height 400 puede cortar textos largos.
- Valeria (aficionada con dos caballos, cansada del "picoteo" de Instagram): no ve una persona real, ni un orden, ni historias de alumnos que le prueben que esto es un método coherente.

## Observaciones menores
Footer dice ".com" en vez de ".com.ar" y le falta ®; logo dibujado aunque existen assets/logo-*.png; foto de fondo genérica de Unsplash; 5.ª tarjeta de "Obtener" sola en su fila; 7 tarjetas de programa con títulos cortos (convendría lista compacta); breadcrumb sin aria-current.

## Preguntas
- Si Iniciación es la puerta de la Pirámide, ¿no debería la página construirse alrededor de "dónde estás y qué sigue"?
- ¿Por qué la persona que es el método no aparece en la página de su propio curso?
- Una plantilla atiende tres modelos de conversión (comprar, consultar, entrevista previa): ¿no conviene tener tres variantes explícitas de inscripción?
