# Balance Training Academy® — Sitio de la Academia

Sitio de capacitaciones de **Balance Training Academy®** (Andrea Pigazzi).

## Estructura
- `index.html` — Inicio
- `cursos.html` — Catálogo de capacitaciones con filtros + Pirámide Formativa
- `andrea.html` — Soy Andrea
- `curso-<slug>.html` — Una landing por capacitación (14), generadas desde `cursos-data.jsx`
- `curso.html` — Alias de La Equitación y El Arte del menor esfuerzo (links viejos)
- `cursos-data.jsx` — **Textos de todas las capacitaciones** (fuente: documento de Andrea, 13/09/2026). Para editar un curso, se edita acá.
- `curso.jsx` — Plantilla de landing de capacitación
- `assets/portadas/` — Portadas oficiales de cada curso
- `styles.css`, `shared.jsx`, `landing.jsx`, `cursos.jsx`, `andrea.jsx`

React + Babel vía CDN. Sin build: son archivos estáticos.

## Cómo verlo / publicarlo
**Local:** abrí `index.html` en el navegador (o serví la carpeta con cualquier servidor estático).
**GitHub Pages:** Settings → Pages → Branch `main` / carpeta `/ (root)`.
