# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Prototipo actual: sitio estático con React + Babel vía CDN, publicado en GitHub Pages (`marialorena76.github.io/balance_training`). Destino final confirmado: **WordPress + Elementor** en `academia.balancetrainingacademy.com.ar`. Las páginas del prototipo se convierten a plantillas JSON de Elementor, así que el diseño tiene que ser trasladable a secciones y widgets de Elementor.

## Users

Balance Training Academy® es la academia online de Andrea Pigazzi, creadora del Método Balance Training®. Público confirmado en el brief de la clienta (28/04/2026):

- **Aficionados al caballo** que quieren mejorar sus competencias para crear vínculos de confianza con sus caballos, resolver los problemas que tienen, saber más sobre los caballos y prepararse para ser mejores jinetes y cuidadores.
- **Profesionales y personas que buscan profesionalizarse**, que necesitan bases formativas concretas y sólidas, y una guía y mentoría para recorrer su camino profesional.
- **Jinetes profesionales** que buscan mejorar su parte técnica para diferenciarse.
- También: docentes, terapeutas (equinoterapia) y profesionales de la recreación ecuestre.

Dolores declarados: falta de conocimiento, frustración por no poder avanzar y por cometer errores que no pueden resolver solos, sensación de soledad, "picoteo" de información en redes que mezcla metodologías sin orden lógico, y falta de mentores que los acompañen en el tiempo.

Dónde están: redes sociales (Instagram y Facebook), instituciones y congresos.

## Product Purpose

Difundir la Metodología Balance Training® y vender sus capacitaciones. La propuesta es una instrucción ordenada, metódica e integral para el mundo ecuestre, aficionado y profesional, que sea amable y respetuosa con el caballo y a la vez técnica y eficiente. También busca instruir sobre el bienestar del caballo y de quienes lo manejan.

El sitio tiene que lograr que cada visitante encuentre la capacitación adecuada a su nivel, experiencia e intereses, y que se inscriba o consulte.

## Positioning

- **35 años** de experiencia de Andrea Pigazzi trabajando, enseñando y formando junto a los caballos, más 18 años dictando la Formación Ecuestre Integral.
- Un **método propio y nombrado** (Método Balance Training®): una alternativa compasiva y a la vez muy eficiente, sin violencia ni atajos, que va desde la iniciación de un potro hasta la competencia.
- **Orden pedagógico explícito**: la Pirámide Formativa, con niveles de 1 a 6 estrellas, propone en qué secuencia tomar las capacitaciones. Es una sugerencia, no una obligación.
- Formación integral de la persona, no solo de la técnica: valores como sensibilidad, compasión y templanza, más herramientas de coaching.
- Un lugar físico real: **Relinchos**, Centro de Entrenamiento y Capacitación en Cruz Grande, Córdoba, donde nació el método.

## Operating Context

Catálogo confirmado (textos de Andrea, documento del 13/09/2026, en `cursos-data.jsx`):

- **Cursos online:** Iniciación a la Metodología Balance Training® (★), Etología, Formas de Aprendizaje y Comunicación (★★), La Equitación y El Arte del menor esfuerzo (★★), Preparación Psico-Física del Jinete (★★, sincrónico, una vez al año, grupos reducidos), Bases Formativas del Caballo Deportivo (★★).
- **Webinars:** Mejorar tu asiento es posible; Del caballo nuevo al caballo hecho; Comunicación y Formas de Aprendizaje.
- **Formación:** Formación Ecuestre Integral 2027 · Primer Nivel (★★★★★): online por Zoom, 3 días presenciales y mentoring, con trabajo final y certificado. El Nivel 2 (★★★★★★) figura en el catálogo sin textos todavía.
- **Acompañamiento:** Mentorías Personalizadas (★★★; requieren entrevista previa y compromiso mínimo de 3 meses; vacantes anuales limitadas), Asesorías (1 h 30 por Zoom) y Sesiones de Coaching Deportivo y Ontológico (50 min).
- **Presenciales:** cursos y clínicas en todo el país según calendario, y Estadías Personalizadas en Relinchos (3 días o 1 semana).

Modelos de acceso declarados en el brief: cursos con fecha de inicio y cierre (cohorte) y contenido gratuito como imán de contactos.

## Capabilities and Constraints

- **Inscripción mixta (confirmado):** los cursos grabados se compran online (checkout + acceso automático; LearnDash con medio de pago argentino en el destino WordPress). Mentorías, estadías y Formación Integral se gestionan por consulta (WhatsApp o mail).
- **Abierto:** el método de inscripción de los webinars, del curso sincrónico de Psico-Física y de las Asesorías y Coaching. Mientras no se defina, el prototipo usa "Consultar por WhatsApp" en todo.
- **Precios:** no se publican; el sitio deriva a consulta. No inventar valores.
- Contacto oficial: WhatsApp +54 9 3548 616290, academybalancetraining@gmail.com, Instagram @balance.horsetraining.academy.
- Terminología de la clienta: "capacitaciones", "Formación", "Pirámide Formativa", "Master Classes", "Método/Metodología Balance Training®" (siempre con ®), "Relinchos".

## Brand Commitments

- Nombre: **Balance Training Academy®**. Andrea Pigazzi firma como Directora de Balance Training Academy® y Creadora del Método Balance Training®.
- Logos oficiales en `assets/` (logo-brown, logo-cream, logo-white, logo-alt) y carpeta de Drive de la clienta.
- El sitio es una extensión visual de `balancetrainingacademy.com.ar`.
- Estilo pedido por la clienta: **cálido, profesional, cercano, accesible**. Explícitamente **no quiere colores flúor ni colores fríos**.
- Voz: primera persona cálida de Andrea en la bienvenida; español rioplatense con voseo ("Quiero darte una cálida bienvenida…", "¡Estamos para acompañarte en tu camino de Formación y Profesionalización Ecuestre!").
- Frase insignia de Andrea: "El Bienestar y el futuro del Caballo al lado del humano está absolutamente ligado a cuán formadas, experimentadas y compasivas sean las personas que los manejan."
- Portadas oficiales de cada curso (diseñadas por la clienta, con el título incluido) en `assets/portadas/`. Se muestran completas y sin texto encima.

## Evidence on Hand

- Textos de todas las capacitaciones: `cursos-data.jsx` (fuente: "landing de Cursos.docx", 13/09/2026).
- Textos de la home y de la página de Andrea: "textos academy.docx" (Drive de la clienta).
- **Testimonios reales** de alumnos, confirmados para publicar: María Sol R., Diego A., Lucía F. (en `landing.jsx`).
- Fotos de Andrea: `assets/andrea-hero.jpg`, `assets/andrea-portrait.jpg`.
- 9 portadas de cursos en `assets/portadas/`.
- **Faltan, no inventar:** portadas de Mentorías y Coaching (Andrea las está haciendo), foto del banner superior de la home (`1000553231.jpg`, enviada por mail el 07/09/2026), textos del Nivel 2 de la Formación, y fechas de la etapa presencial 2027.

## Product Principles

1. **Orden antes que abundancia.** El valor central es el orden pedagógico. El sitio siempre tiene que ayudar a ubicarse ("¿por dónde empiezo?") y no solo mostrar más contenido.
2. **Compasión con rigor técnico.** Cada pieza tiene que transmitir las dos cosas a la vez; ni puro sentimiento ni puro manual.
3. **La voz es Andrea.** La autoridad viene de su experiencia real (35 años, Relinchos, alumnos formados). No hay que inventar pruebas ni promesas que ella no hizo.
4. **Acompañamiento visible.** Siempre a un paso de una persona real: WhatsApp, entrevista o asesoramiento para elegir.
5. **Construido para migrar.** Todo lo que se diseñe tiene que poder reconstruirse en Elementor sin trucos que no sobrevivan la conversión.
