/* ============================================================
   Balance Training Academy — generador de landings para Elementor
   Lee cursos-data.jsx y arma, por cada capacitación, el JSON de
   Elementor (contenedores + widgets nativos) en wp/elementor/.
   Los estilos viven en wp/bta-elementor.css (CSS del Kit).
   Uso: node wp/build-elementor.js
   ============================================================ */
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..');
global.window = {};
eval(fs.readFileSync(path.join(ROOT, 'cursos-data.jsx'), 'utf8'));
const { DATA, TESTIMONIOS, PIRAMIDE } = window.BTA_DATA;
const MEDIA = JSON.parse(fs.readFileSync(path.join(__dirname, 'media-map.json'), 'utf8'));
const B = MEDIA.site;
const M = MEDIA.media;
const UP = B + '/wp-content/uploads/2026/10/';

const CONTACT = {
  email: 'academybalancetraining@gmail.com',
  wa: 'https://wa.me/5493548616290',
  waLabel: '+549 3548 616290',
};
const URL_CAT = B + '/capacitaciones/';
const URL_ANDREA = B + '/soy-andrea/';
const url = (slug) => URL_CAT + slug + '/';

/* ---------- helpers ---------- */
let seq = 0;
const id = () => (0x1000000 + (seq++ * 7919) % 0xEFFFFFF).toString(16).slice(-7);
/* Evita barras invertidas en el payload: comillas rectas → tipográficas */
const q = (s) => String(s == null ? '' : s)
  .replace(/"([^"]*)"/g, '“$1”').replace(/"/g, '”')
  .replace(/\\/g, '/').replace(/\s*\n\s*/g, ' ');
const esc = (s) => q(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
const stars = (n) => n ? '★'.repeat(n) : '';
const levelText = (n) => n === 1 ? 'Primer escalón de la Pirámide' : 'Nivel de la Pirámide Formativa';
const img = (key) => ({ url: UP + 'bta-' + key + (key.startsWith('logo') ? '.png' : '.jpg'), id: M[key], alt: '', source: 'library' });
const coverKey = (c) => c.cover ? 'portada-' + c.slug : null;
const px = (t, r, b, l) => ({ unit: 'px', top: String(t), right: String(r), bottom: String(b), left: String(l), isLinked: false });

function box(settings, elements, inner = true) {
  return { id: id(), elType: 'container', isInner: inner, settings: Object.assign({ flex_direction: 'column' }, settings), elements };
}
/* sección = contenedor a todo el ancho + caja interna */
function section({ cls = '', bg = '#FFFFFF', maxw = 1180, anchor, pad = [88, 24, 88, 24], padM = [60, 18, 60, 18], gap = 24, bgImage }, elements) {
  const s = {
    content_width: 'full', css_classes: ('bta-section ' + cls).trim(),
    background_background: 'classic', background_color: bg,
    padding: px(...pad), padding_mobile: px(...padM),
  };
  if (anchor) s._element_id = anchor;
  if (bgImage) Object.assign(s, {
    background_image: bgImage, background_position: 'center right', background_size: 'cover',
    background_overlay_background: 'classic', background_overlay_color: '#2E1A0A',
    background_overlay_opacity: { unit: 'px', size: 0.86, sizes: [] },
  });
  const inner = box({ content_width: 'boxed', boxed_width: { unit: 'px', size: maxw, sizes: [] },
    flex_gap: { column: String(gap), row: String(gap), unit: 'px', isLinked: true }, padding: px(0, 0, 0, 0) }, elements);
  return box(s, [inner], false);
}
function row(cols, { gap = 48, cls = '', align = 'flex-start' } = {}) {
  return box({ content_width: 'full', flex_direction: 'row', flex_direction_mobile: 'column', flex_wrap: 'nowrap',
    flex_align_items: align, css_classes: cls, padding: px(0, 0, 0, 0),
    flex_gap: { column: String(gap), row: String(gap), unit: 'px', isLinked: true } }, cols);
}
function col(width, elements, { cls = '', gap = 18 } = {}) {
  return box({ content_width: 'full', width: { unit: '%', size: width, sizes: [] }, width_mobile: { unit: '%', size: 100, sizes: [] },
    css_classes: cls, padding: px(0, 0, 0, 0), flex_gap: { column: String(gap), row: String(gap), unit: 'px', isLinked: true } }, elements);
}
const W = (widgetType, settings) => ({ id: id(), elType: 'widget', widgetType, settings, elements: [] });
const H = (text, tag = 'h2', cls = '') => W('heading', { title: esc(text), header_size: tag, _css_classes: ('bta-h ' + cls).trim() });
const T = (html, cls = '') => W('text-editor', { editor: html, _css_classes: cls });
const BTN = (text, href, cls = '') => W('button', { text: q(text), link: { url: href, is_external: '', nofollow: '', custom_attributes: '' }, _css_classes: ('bta-btn ' + cls).trim() });
const IMG = (key, alt, cls = '') => W('image', { image: Object.assign(img(key), { alt: q(alt) }), image_size: 'large', _css_classes: cls });
const ul = (items, cls = 'bta-checks') => '<ul class=\'' + cls + '\'>' + items.map(t => '<li>' + esc(t) + '</li>').join('') + '</ul>';

/* ---------- inscripción por tipo ---------- */
const ENROLL = {
  curso: { cta: 'Consultar inscripción', title: 'Inscripción', text: 'Escribinos y te pasamos el valor vigente, las formas de pago y cómo acceder al curso.' },
  cohorte: { cta: 'Consultar próximas fechas', title: 'Inscripción', text: 'Te contamos la fecha de inicio, el valor vigente y las formas de pago. Los cupos son limitados.' },
  entrevista: { cta: 'Solicitar entrevista', title: 'El primer paso', text: 'Todo empieza con una conversación con Andrea para conocer tu caso, tus objetivos y definir juntos la mejor forma de acompañarte.' },
  consulta: { cta: 'Escribinos', title: 'Consultas', text: 'Dejanos tus datos para enterarte de las próximas capacitaciones presenciales, o contanos dónde querés organizar una clínica.' },
};

function build(C) {
  seq = 0;
  const E = ENROLL[C.enroll] || ENROLL.curso;
  const CTA = C.ctaShort || E.cta;
  const WA = CONTACT.wa + '?text=' + encodeURIComponent('Hola Andrea, quiero información sobre “' + q(C.t) + '”.');
  const out = [];

  /* HERO */
  const meta = '<p class=\'bta-meta\'>' + esc(C.eyebrow) + (C.stars ? ' <span aria-hidden=\'true\'>·</span> <span class=\'bta-stars\' aria-hidden=\'true\'>' + stars(C.stars) + '</span> ' + levelText(C.stars) : '') + '</p>';
  const facts = (C.facts || []).filter(f => !/^★+$/.test(f[0]));
  const left = [
    T('<nav class=\'bta-crumbs\' aria-label=\'Ruta de navegación\'><a href=\'' + B + '/\'>Inicio</a> / <a href=\'' + URL_CAT + '\'>Capacitaciones</a> / <span aria-current=\'page\'>' + esc(C.t) + '</span></nav>'),
    H(C.t, 'h1', 'bta-h1'),
    T(meta),
    T('<p class=\'bta-lead-dark\'>' + esc(C.lead) + '</p>'),
    row([BTN(CTA, '#inscripcion'), BTN('Ver todas las capacitaciones', URL_CAT, 'bta-btn-light')], { gap: 14, cls: 'bta-btnrow' }),
  ];
  if (facts.length) left.push(T('<dl class=\'bta-facts\'>' + facts.map(([a, b]) => '<div><dt>' + esc(a) + '</dt><dd>' + esc(b) + '</dd></div>').join('') + '</dl>'));
  const visual = coverKey(C)
    ? IMG(coverKey(C), 'Portada: ' + C.t, 'bta-hero-img')
    : IMG('andrea-hero', 'Andrea Pigazzi con su caballo en Córdoba', 'bta-hero-img bta-hero-photo');
  out.push(section({ cls: 'bta-dark bta-hero', bg: '#2E1A0A', pad: [56, 24, 76, 24], padM: [36, 18, 56, 18], bgImage: img('andrea-hero') },
    [row([col(54, left, { gap: 16 }), col(46, [visual])], { gap: 52, align: 'center' })]));

  /* DE QUÉ SE TRATA */
  if (C.about || C.quote) {
    const els = [H(C.aboutTitle || '¿De qué se trata?')];
    if (C.about) els.push(T(C.about.map((p, i) => '<p' + (i === 0 ? ' class=\'bta-lead\'' : '') + '>' + esc(p) + '</p>').join(''), 'bta-prose'));
    if (C.quote) els.push(T('<figure class=\'bta-quote\'><blockquote>' + esc(C.quote) + '</blockquote></figure>'));
    if (C.where) els.push(T('<p><strong>¿Dónde estamos?</strong> ' + esc(C.where) + '</p>', 'bta-prose'));
    out.push(section({ maxw: 780 }, els));
  }

  /* PROGRAMA */
  if (C.program) {
    const label = C.programLabel;
    const detailed = C.program.some(m => m.d && m.d.length > 60);
    const els = [H(C.programTitle || 'Programa')];
    if (label) els.push(T('<p class=\'bta-muted\'>' + C.program.length + ' ' + (label === 'Etapa' ? 'etapas' : label === 'Clase' ? 'clases' : 'módulos') + '</p>'));
    els.push(T('<ol class=\'bta-prog' + (detailed ? '' : ' bta-prog-cols') + '\'>' + C.program.map((m, i) =>
      '<li><span class=\'bta-num\'>' + String(i + 1).padStart(2, '0') + '</span><div><strong>' + (label ? label + ' ' + (i + 1) + ': ' : '') + esc(m.t) + '</strong>' + (m.d ? '<p>' + esc(m.d) + '</p>' : '') + '</div></li>').join('') + '</ol>'));
    out.push(section({ bg: '#F6EFE2', maxw: detailed ? 860 : 980, gap: 10 }, els));
  }

  /* BLOQUES */
  if (C.blocks) {
    const cols = C.blocks.map(b => col(C.blocks.length > 1 ? 50 : 100, [
      H(b.title, 'h3', 'bta-h3'), T('<p class=\'bta-kicker-inline\'>' + esc(b.eyebrow) + '</p>' + b.paras.map(p => '<p>' + esc(p) + '</p>').join(''), 'bta-prose bta-prose-soft'),
    ], { gap: 8 }));
    const rows = [];
    for (let i = 0; i < cols.length; i += 2) rows.push(row(cols.slice(i, i + 2), { gap: 56 }));
    out.push(section({ bg: '#F6EFE2', maxw: 1000, gap: 44 }, rows));
  }

  /* QUÉ VAS A OBTENER */
  if (C.gets) {
    const els = [H(C.gainsTitle || '¿Qué vas a obtener?'), T(ul(C.gets, 'bta-checks bta-checks-2'))];
    if (C.gainsNote) els.push(T('<p class=\'bta-note\'>' + esc(C.gainsNote) + '</p>'));
    out.push(section({ maxw: 1000 }, els));
  }

  /* PARA QUIÉN + REQUISITOS */
  const hasReq = C.req || C.reqSoft;
  if (C.forWho || hasReq) {
    const cards = [];
    if (C.forWho) cards.push(col(hasReq ? 55 : 100, [
      H('¿A quién está dirigido?', 'h2', 'bta-h-sm'),
      T(ul(C.forWho) + (C.forWhoNote ? '<p class=\'bta-card-note\'>' + esc(C.forWhoNote) + '</p>' : '')),
    ], { cls: 'bta-card' }));
    if (hasReq) {
      const list = C.req || [C.reqSoft];
      const numbered = C.req && C.req.length > 1;
      cards.push(col(C.forWho ? 45 : 100, [
        H(C.req ? (C.reqTitle || 'Requisitos') : 'Recomendación', 'h2', 'bta-h-sm'),
        T((numbered ? '<ol class=\'bta-numlist\'>' + list.map(t => '<li>' + esc(t) + '</li>').join('') + '</ol>' : ul(list, 'bta-checks bta-checks-leaf'))
          + '<p class=\'bta-card-foot\'>¿Dudas sobre tu caso? <a href=\'' + WA + '\'>Escribinos</a> y te asesoramos.</p>'),
      ], { cls: 'bta-card bta-card-warm' }));
    }
    out.push(section({ bg: '#F1E6D2', maxw: (C.forWho && hasReq) ? 1040 : 780 }, [row(cards, { gap: 26, align: 'stretch' })]));
  }

  /* QUIÉN TE ACOMPAÑA */
  const andreaText = [
    H('Quién te acompaña'),
    T('<p><strong>Andrea Pigazzi</strong>, creadora del Método Balance Training® y directora de la Academia. 35 años acompañando la formación y profesionalización ecuestre, por el bienestar del caballo y el desarrollo integral de las personas.</p>'
      + '<blockquote class=\'bta-andrea-quote\'>“El Bienestar y el futuro del Caballo al lado del humano está absolutamente ligado a cuán formadas, experimentadas y compasivas sean las personas que los manejan.”</blockquote>'
      + '<p><a class=\'bta-arrow\' href=\'' + URL_ANDREA + '\'>Conocé a Andrea <span aria-hidden=\'true\'>→</span></a></p>'),
  ];
  out.push(C.cover
    ? section({ cls: 'bta-dark', bg: '#2E1A0A', pad: [72, 24, 72, 24] }, [row([col(42, [IMG('andrea-portrait', 'Andrea Pigazzi, creadora del Método Balance Training®', 'bta-portrait')]), col(58, andreaText)], { gap: 56, align: 'center' })])
    : section({ cls: 'bta-dark', bg: '#2E1A0A', maxw: 820, pad: [72, 24, 72, 24] }, andreaText));

  /* INSCRIPCIÓN */
  const specs = (C.specs || []).concat(C.stars ? [['Nivel', stars(C.stars) + ' · ' + levelText(C.stars)]] : []);
  const tm = TESTIMONIOS[Math.max(0, DATA.findIndex(d => d.slug === C.slug)) % TESTIMONIOS.length];
  const incl = C.includes && C.includes.length > 1 ? '<h3 class=\'bta-incl-t\'>Qué incluye</h3>' + ul(C.includes, 'bta-checks bta-checks-2 bta-checks-sm') : '';
  const card = col(62, [
    T('<div class=\'bta-insc-head\'><h2>' + esc(E.title) + '</h2><p>' + esc(C.t) + '</p></div>'),
    T((specs.length ? '<dl class=\'bta-specs\'>' + specs.map(([k, v]) => '<dt>' + esc(k) + '</dt><dd>' + esc(v) + '</dd>').join('') + '</dl>' : '') + incl + '<p class=\'bta-insc-text\'>' + esc(E.text) + '</p>', 'bta-insc-body'),
    row([BTN(C.ctaLabel || CTA + ' por WhatsApp', WA), BTN('Escribir por mail', 'mailto:' + CONTACT.email + '?subject=' + encodeURIComponent(q(C.t)), 'bta-btn-outline')], { gap: 12, cls: 'bta-btnrow bta-insc-pad' }),
    T('<p class=\'bta-insc-foot\'>Te responde Andrea o su equipo · WhatsApp ' + CONTACT.waLabel + ' · ' + CONTACT.email + '</p>', 'bta-insc-pad'),
  ], { cls: 'bta-insc-card', gap: 0 });
  const testi = col(38, [T('<figure class=\'bta-testi\'><span class=\'bta-qmark\' aria-hidden=\'true\'>“</span><blockquote>' + esc(tm.t) + '</blockquote><figcaption><strong>' + esc(tm.n) + '</strong><span>' + esc(tm.r) + '</span></figcaption></figure>')], { cls: 'bta-testi-col' });
  out.push(section({ bg: '#F6EFE2', maxw: 1040, anchor: 'inscripcion' }, [row([card, testi], { gap: 28 })]));

  /* FAQ */
  const qs = [];
  if (C.req) qs.push(['¿Tiene requisitos previos?', C.req.join(' ')]);
  else if (C.reqSoft) qs.push(['¿Necesito haber hecho otro curso antes?', C.reqSoft]);
  if (C.enroll === 'curso' && !/grabad|cuando quieras/i.test(JSON.stringify(C.specs || []))) qs.push(['¿Es en vivo o grabado?', 'Escribinos por WhatsApp y te contamos cómo es el acceso a esta capacitación y cuándo podés empezar.']);
  qs.push(['¿Cuánto sale y cómo se paga?', 'Escribinos por WhatsApp al ' + CONTACT.waLabel + ' o a ' + CONTACT.email + ' y te pasamos el valor vigente y las formas de pago disponibles.']);
  if (C.stars) qs.push(['¿Qué significan las estrellas?', 'Indican el escalón de cada capacitación dentro de la Pirámide Formativa, el orden en que sugerimos ir tomándolas. Es una sugerencia y no invalida tomarlas en otro orden.']);
  qs.push(['No sé si es la capacitación indicada para mí, ¿me orientan?', 'Sí, con mucho gusto. Contanos tu nivel, tu experiencia y tus intereses, y te asesoramos para que elijas el camino más adecuado.']);
  out.push(section({ maxw: 800 }, [
    H('Preguntas frecuentes', 'h2', 'bta-center'),
    W('accordion', { title_html_tag: 'h3', _css_classes: 'bta-faq', tabs: qs.map(([a, b]) => ({ _id: id(), tab_title: esc(a), tab_content: '<p>' + esc(b) + '</p>' })) }),
  ]));

  /* PIRÁMIDE + PRÓXIMO ESCALÓN */
  const els = [];
  if (C.stars) {
    const n = PIRAMIDE.length;
    const rows = PIRAMIDE.map((r, i) => {
      const here = r.s === C.stars;
      const courses = DATA.filter(d => d.stars === r.s);
      const soon = r.soon !== undefined && courses.length === 0;
      const body = soon
        ? '<span class=\'bta-soon\'>' + (r.soon.length ? r.soon.map(esc).join(' · ') + ' · ' : '') + 'Próximamente</span>'
        : courses.map(c => c.slug === C.slug ? '<strong>' + esc(c.t) + ' · Estás acá</strong>' : '<a href=\'' + url(c.slug) + '\'>' + esc(c.t) + '</a>').join('');
      return '<li class=\'' + (here ? 'is-here' : soon ? 'is-soon' : '') + '\' style=\'width:' + Math.round(46 + i * (54 / (n - 1))) + '%\'' + (here ? ' aria-current=\'step\'' : '') + '>'
        + '<span class=\'bta-sr\'>Nivel ' + r.s + (r.s === 1 ? ' estrella' : ' estrellas') + (here ? ', estás en este escalón' : '') + (soon ? ', próximamente' : '') + '.</span>'
        + '<span class=\'bta-pir-stars\' aria-hidden=\'true\'>' + stars(r.s) + '</span><span class=\'bta-pir-items\'>' + body + '</span></li>';
    }).join('');
    els.push(H('Tu lugar en la Pirámide Formativa', 'h2', 'bta-h-sm'));
    els.push(T('<p class=\'bta-muted\'>El orden en que sugerimos ir tomando las capacitaciones. Es una guía, no una obligación: cada escalón suma sobre el anterior.</p><ol class=\'bta-pir\' aria-label=\'Pirámide Formativa, de arriba hacia abajo\'>' + rows + '</ol>'));
  }
  let title, intro, list;
  if (C.stars) {
    const higher = DATA.filter(d => d.stars && d.stars > C.stars);
    const next = higher.length ? Math.min(...higher.map(d => d.stars)) : null;
    list = next ? DATA.filter(d => d.stars === next).slice(0, 3) : DATA.filter(d => d.stars === C.stars && d.slug !== C.slug).slice(0, 3);
    title = next ? 'Tu próximo escalón' : 'Seguí profundizando';
    intro = next ? 'Después de esta capacitación, la Pirámide sugiere seguir por acá.' : 'Otras capacitaciones de tu mismo escalón.';
  } else {
    const pool = DATA.filter(d => d.slug !== C.slug);
    list = pool.filter(d => d.cat === C.cat).concat(pool.filter(d => d.cat !== C.cat && d.cover)).slice(0, 3);
    title = 'Seguí tu camino'; intro = 'Otras propuestas de la Academia.';
  }
  if (list.length) {
    els.push(row([col(70, [H(title, 'h2', 'bta-h-sm'), T('<p class=\'bta-muted\'>' + intro + '</p>')], { gap: 6 }),
      col(30, [BTN('Ver catálogo completo', URL_CAT, 'bta-btn-outline bta-btn-sm')], { cls: 'bta-end' })], { gap: 16, align: 'flex-end' }));
    els.push(T('<div class=\'bta-cards\'>' + list.map(c => {
      const k = coverKey(c) || 'andrea-hero';
      return '<a class=\'bta-cardlink\' href=\'' + url(c.slug) + '\'><img src=\'' + img(k).url + '\' alt=\'\' loading=\'lazy\'' + (c.cover ? '' : ' class=\'is-photo\'') + '><span class=\'bta-card-meta\'>' + esc(c.eyebrow) + (c.stars ? ' · ' + stars(c.stars) : '') + '</span><span class=\'bta-card-t\'>' + esc(c.t) + '</span></a>';
    }).join('') + '</div>'));
  }
  out.push(section({ bg: '#F1E6D2', gap: 28 }, els));

  return out;
}

const outDir = path.join(__dirname, 'elementor');
fs.mkdirSync(outDir, { recursive: true });
const manifest = [];
for (const C of DATA) {
  const json = build(C);
  const s = JSON.stringify(json);
  if (s.includes('\\')) throw new Error('Barra invertida en ' + C.slug + ': ' + s.slice(s.indexOf('\\') - 60, s.indexOf('\\') + 20));
  fs.writeFileSync(path.join(outDir, 'curso-' + C.slug + '.json'), s);
  manifest.push({ slug: C.slug, title: q(C.t), cat: C.cat, featured: coverKey(C) ? M[coverKey(C)] : M['andrea-hero'], excerpt: q(C.short), bytes: s.length });
}
fs.writeFileSync(path.join(outDir, 'manifest.json'), JSON.stringify(manifest, null, 2));
console.log(manifest.map(m => m.slug + ' ' + m.bytes).join('\n'));
