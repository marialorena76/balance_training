/* ============================================================
   Balance Training Academy — "Mi Camino" (escritorio del alumno)
   Página Elementor con shortcodes de LearnDash: saludo, "Seguí donde
   dejaste", tus cursos con progreso, próximo paso y Pirámide con tu avance.
   Uso: node wp/build-aula.js  →  wp/elementor/pagina-mi-camino.json
   ============================================================ */
const fs = require('fs');
const path = require('path');
const L = require('./build-elementor.js');
const { DATA, PIRAMIDE, B, URL_CAT, url, CONTACT, esc, stars, img, section, row, col, H, T, BTN } = L;

/* Cursos del aula (IDs de LearnDash en el staging) */
const AULA = [
  { id: 529, t: 'Iniciación a la Metodología Balance Training®', cover: img('portada-iniciacion').url, meta: 'Curso online · ★', mods: 'Presentación + 2 clases', landing: 'iniciacion' },
  { id: 531, t: 'Etología, Comunicación y Formas de Aprendizaje', cover: img('portada-etologia').url, meta: 'Curso online · ★★', mods: '4 clases', landing: 'etologia' },
  { id: 532, t: 'El Arte de Tratar con Caballos', cover: B + '/wp-content/uploads/2026/10/bta-portada-arte-tratar-caballos.png', meta: 'Curso online', mods: '8 módulos · más de 16 horas de clases', landing: null },
  { id: 533, t: 'Tres Master Class (Combo)', cover: img('portada-webinar-asiento').url, meta: 'Master Classes', mods: 'Mejorar tu asiento · Del caballo nuevo al caballo hecho · Comunicación y Formas de Aprendizaje', landing: null },
];
const AULA_BY_SLUG = { iniciacion: 529, etologia: 531 };
const aulaUrl = (id) => B + '/?p=' + id;
const WA = CONTACT.wa + '?text=' + encodeURIComponent('Hola Andrea, tengo una consulta sobre el aula.');

/* Shortcodes con comillas simples: evitan barras invertidas en el JSON */
const sc = (tag, id, inner) => '[' + tag + ' course_id=' + id + ']' + inner + '[/' + tag + ']';
const estado = (id) =>
  sc('course_complete', id, '<span class=\'bta-mis-state is-done\'>✓ Completado</span>')
  + sc('course_inprogress', id, '<span class=\'bta-mis-state is-going\'>En curso</span>')
  + sc('course_notstarted', id, '<span class=\'bta-mis-state\'>Para empezar</span>');

function cursoCard(c) {
  const visitante = c.landing
    ? '<a class=\'bta-mis-go\' href=\'' + url(c.landing) + '\'>Conocé el curso <span aria-hidden=\'true\'>→</span></a>'
    : '<a class=\'bta-mis-go\' href=\'' + URL_CAT + '\'>Ver capacitaciones <span aria-hidden=\'true\'>→</span></a>';
  return '<li><img src=\'' + c.cover + '\' alt=\'\' loading=\'lazy\'><div class=\'bta-mis-body\'>'
    + '<span class=\'bta-mis-meta\'>' + esc(c.meta) + '</span><h3 class=\'bta-mis-t\'>' + esc(c.t) + '</h3><p class=\'bta-mis-mods\'>' + esc(c.mods) + '</p>'
    + sc('student', c.id, estado(c.id) + '[learndash_course_progress course_id=' + c.id + ']<a class=\'bta-mis-go\' href=\'' + aulaUrl(c.id) + '\'>Entrar al aula <span aria-hidden=\'true\'>→</span></a>')
    + sc('visitor', c.id, visitante)
    + '</div></li>';
}

function piramideAula() {
  const n = PIRAMIDE.length;
  return '<ol class=\'bta-pir\' aria-label=\'Pirámide Formativa, de arriba hacia abajo\'>' + PIRAMIDE.map((r, i) => {
    const courses = DATA.filter(d => d.stars === r.s);
    const soon = r.soon !== undefined && courses.length === 0;
    const body = soon
      ? '<span class=\'bta-soon\'>' + (r.soon.length ? r.soon.map(esc).join(' · ') + ' · ' : '') + 'Próximamente</span>'
      : courses.map(c => {
        const id = AULA_BY_SLUG[c.slug];
        const badge = id ? sc('course_complete', id, '<span class=\'bta-pir-badge\'>✓ Completado</span>') + sc('course_inprogress', id, '<span class=\'bta-pir-badge is-going\'>En curso</span>') : '';
        return '<span><a href=\'' + url(c.slug) + '\'>' + esc(c.t) + '</a>' + badge + '</span>';
      }).join('');
    return '<li class=\'' + (soon ? 'is-soon' : '') + '\' style=\'width:' + Math.round(46 + i * (54 / (n - 1))) + '%\'>'
      + '<span class=\'bta-sr\'>Nivel ' + r.s + (r.s === 1 ? ' estrella' : ' estrellas') + (soon ? ', próximamente' : '') + '.</span>'
      + '<span class=\'bta-pir-stars\' aria-hidden=\'true\'>' + stars(r.s) + '</span><span class=\'bta-pir-items\'>' + body + '</span></li>';
  }).join('') + '</ol>';
}

function miCamino() {
  L.resetIds();
  const out = [];

  /* HERO: saludo + seguí donde dejaste */
  out.push(section({ cls: 'bta-aula bta-dark bta-hero', bg: '#2E1A0A', pad: [72, 24, 72, 24], padM: [48, 18, 48, 18], bgImage: img('andrea-hero'), gap: 14 }, [
    col(70, [
      T('<p class=\'bta-aula-hello\'>Mi Camino · Balance Training Academy®</p>'),
      H('Tu camino en la Academia', 'h1', 'bta-h1'),
      T('<p class=\'bta-lead-dark\'>Acá tenés tus cursos, tu avance y el próximo escalón de tu formación, a tu ritmo.</p>'),
      T('[ld_course_resume label=\'Seguí donde dejaste →\']'),
    ], { gap: 12 }),
  ]));

  /* TUS CURSOS */
  out.push(section({ cls: 'bta-aula', bg: '#F6EFE2', gap: 22 }, [
    H('Tus cursos', 'h2', 'bta-h-sm'),
    T('<p class=\'bta-muted\'>Entrá al aula, mirá cada clase y marcala como completada para ir sumando avance.</p>'),
    T('<ul class=\'bta-mis\'>' + AULA.map(cursoCard).join('') + '</ul>'),
  ]));

  /* PRÓXIMO PASO + PIRÁMIDE */
  const ini = 529;
  const next = '<div class=\'bta-next\'>'
    + sc('visitor', ini, '<p><strong>Tu primer escalón es la Iniciación.</strong> Es la base del Método: los pilares, la filosofía y el modo de trabajo.</p><p><a href=\'' + url('iniciacion') + '\'>Conocé la Iniciación →</a></p>')
    + sc('course_notstarted', ini, '<p><strong>Empezá por la Iniciación.</strong> Es el primer escalón y ordena todo lo que viene después.</p><p><a href=\'' + aulaUrl(ini) + '\'>Ir a la primera clase →</a></p>')
    + sc('course_inprogress', ini, '<p><strong>Estás haciendo la Iniciación.</strong> Cuando la termines, la Pirámide sugiere seguir por el escalón ★★.</p><p><a href=\'' + aulaUrl(ini) + '\'>Seguir con la Iniciación →</a></p>')
    + sc('course_complete', ini, '<p><strong>¡Completaste la Iniciación!</strong> Tu próximo escalón (★★) es Etología, Comunicación y Formas de Aprendizaje.</p><p><a href=\'' + url('etologia') + '\'>Conocé el escalón ★★ →</a></p>')
    + '<p>¿Dudas sobre qué seguir? <a href=\'' + WA + '\'>Escribile a Andrea por WhatsApp</a>.</p></div>';
  out.push(section({ cls: 'bta-aula', gap: 28 }, [row([
    col(40, [H('Tu próximo paso', 'h2', 'bta-h-sm'), T(next)], { gap: 16 }),
    col(60, [H('Tu lugar en la Pirámide Formativa', 'h2', 'bta-h-sm'), T('<p class=\'bta-muted\'>El orden en que sugerimos ir tomando las capacitaciones. Es una guía, no una obligación: cada escalón suma sobre el anterior.</p>' + piramideAula())], { gap: 8 }),
  ], { gap: 48 })]));

  /* CÓMO FUNCIONA EL AULA */
  const faq = [
    ['¿Cómo avanzo en un curso?', 'Entrá al curso, mirá el video de cada clase y, al terminar, tocá “Marcar como completada”. Así se va llenando tu barra de progreso.'],
    ['¿Puedo volver a ver una clase?', 'Sí. Entrá al curso y elegí la clase que quieras desde la lista.'],
    ['¿Tengo que seguir las clases en orden?', 'Te sugerimos seguirlas en orden, porque cada una se apoya en la anterior.'],
    ['Tengo una duda sobre una clase, ¿a quién le escribo?', 'Escribinos por WhatsApp al ' + CONTACT.waLabel + ' o a ' + CONTACT.email + ' y te respondemos.'],
  ];
  out.push(section({ cls: 'bta-aula', bg: '#F1E6D2', maxw: 800, gap: 18 }, [
    H('¿Cómo funciona el aula?', 'h2', 'bta-h-sm bta-center'),
    T('<div class=\'bta-howto\'>' + faq.map(([a, b]) => '<details><summary>' + esc(a) + '</summary><p>' + esc(b) + '</p></details>').join('') + '</div>'),
    row([BTN('Escribinos por WhatsApp', WA)], { gap: 12, cls: 'bta-btnrow bta-btnrow-center' }),
  ]));
  return out;
}

const s = JSON.stringify(miCamino());
if (s.includes('\\')) throw new Error('Barra invertida en mi-camino: ' + s.slice(s.indexOf('\\') - 60, s.indexOf('\\') + 20));
fs.writeFileSync(path.join(__dirname, 'elementor', 'pagina-mi-camino.json'), s);
console.log('mi-camino', s.length);
