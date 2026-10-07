/* ============================================================
   Balance Training Academy — Inicio, Capacitaciones y Soy Andrea
   para Elementor. Reutiliza los helpers de build-elementor.js.
   Uso: node wp/build-paginas.js  →  wp/elementor/pagina-*.json
   ============================================================ */
const fs = require('fs');
const path = require('path');
const L = require('./build-elementor.js');
const { DATA, TESTIMONIOS, PIRAMIDE, B, URL_CAT, URL_ANDREA, url, CONTACT, q, esc, stars, img, coverKey, section, row, col, W, H, T, BTN, IMG, ul } = L;
global.window = global.window || {};
const { CARTA, EXTRA } = window.BTA_DATA;
const bySlug = (s) => DATA.find(d => d.slug === s);
const WA = (msg) => CONTACT.wa + '?text=' + encodeURIComponent(msg);
const MAIL = 'mailto:' + CONTACT.email;

/* tarjeta de capacitación (catálogo / inicio) */
function card(c, { desc = true, catTag = false } = {}) {
  const k = coverKey(c);
  const media = k
    ? '<img src=\'' + img(k).url + '\' alt=\'\' loading=\'lazy\'>'
    : '<span class=\'bta-panel\'><span>' + esc(c.cat === 'Presenciales' ? 'Presencial' : 'Acompañamiento personalizado') + '</span></span>';
  const foot = c.stars
    ? '<span class=\'bta-card-stars\'><span aria-hidden=\'true\'>' + stars(c.stars) + '</span><span class=\'bta-sr\'>' + c.stars + ' estrellas</span></span>'
    : '<span class=\'bta-card-kind\'>' + (c.cat === 'Webinars' ? 'Encuentro puntual' : c.cat === 'Presenciales' ? 'Presencial' : 'A medida') + '</span>';
  return '<a class=\'bta-cardlink bta-cardlink-full\' href=\'' + url(c.slug) + '\'>' + media
    + '<span class=\'bta-card-body\'>' + (catTag ? '<span class=\'bta-card-meta\'>' + esc(c.eyebrow) + '</span>' : '')
    + '<span class=\'bta-card-t\'>' + esc(c.t) + '</span>'
    + (desc ? '<span class=\'bta-card-d\'>' + esc(c.short) + '</span>' : '')
    + '<span class=\'bta-card-foot\'>' + foot + '<span class=\'bta-card-more\'>Ver más <span aria-hidden=\'true\'>→</span></span></span></span></a>';
}
function piramideHTML(cls = '') {
  const n = PIRAMIDE.length;
  return '<ol class=\'bta-pir ' + cls + '\' aria-label=\'Pirámide Formativa, de arriba hacia abajo\'>' + PIRAMIDE.map((r, i) => {
    const courses = DATA.filter(d => d.stars === r.s);
    const soon = r.soon !== undefined && courses.length === 0;
    const body = soon
      ? '<span class=\'bta-soon\'>' + (r.soon.length ? r.soon.map(esc).join(' · ') + ' · ' : '') + 'Próximamente</span>'
      : courses.map(c => '<a href=\'' + url(c.slug) + '\'>' + esc(c.t) + '</a>').join('');
    return '<li class=\'' + (soon ? 'is-soon' : '') + '\' style=\'width:' + Math.round(46 + i * (54 / (n - 1))) + '%\'>'
      + '<span class=\'bta-sr\'>Nivel ' + r.s + (r.s === 1 ? ' estrella' : ' estrellas') + (soon ? ', próximamente' : '') + '.</span>'
      + '<span class=\'bta-pir-stars\' aria-hidden=\'true\'>' + stars(r.s) + '</span><span class=\'bta-pir-items\'>' + body + '</span></li>';
  }).join('') + '</ol>';
}
const faqW = (qs) => W('accordion', { title_html_tag: 'h3', _css_classes: 'bta-faq', tabs: qs.map(([a, b], i) => ({ _id: 'f' + i + Math.random().toString(16).slice(2, 7), tab_title: esc(a), tab_content: '<p>' + esc(b) + '</p>' })) });
const facts = (list) => '<dl class=\'bta-facts\'>' + list.map(([a, b]) => '<div><dt>' + esc(a) + '</dt><dd>' + esc(b) + '</dd></div>').join('') + '</dl>';

/* ================= INICIO ================= */
function inicio() {
  L.resetIds();
  const out = [];
  out.push(section({ cls: 'bta-dark bta-hero bta-hero-home', bg: '#2E1A0A', pad: [120, 24, 104, 24], padM: [72, 18, 64, 18], bgImage: img('andrea-hero') }, [
    col(62, [
      H('35 años acompañando la Formación y Profesionalización Ecuestre', 'h1', 'bta-h1 bta-h1-xl'),
      T('<p class=\'bta-lead-dark\'>Por el Bienestar del Caballo y el Desarrollo integral de las personas. Una Academia pensada tanto para aficionados como para profesionales.</p>'),
      row([BTN('Encontrá tu punto de partida', '#empezar'), BTN('Ver capacitaciones', URL_CAT, 'bta-btn-light')], { gap: 14, cls: 'bta-btnrow' }),
      T(facts([['35 años', 'junto a los caballos'], ['Método propio', 'Balance Training®'], ['Relinchos', 'Cruz Grande, Córdoba']])),
    ], { gap: 18 }),
  ]));
  out.push(section({ maxw: 1180 }, [row([
    col(42, [IMG('andrea-portrait', 'Andrea Pigazzi, creadora del Método Balance Training®, junto a su caballo', 'bta-portrait')]),
    col(58, [
      H('Bienvenida a Balance Training Academy®'),
      T('<p class=\'bta-lead\'>' + esc(CARTA[0]) + '</p><p>' + esc(CARTA[3]) + '</p>', 'bta-prose'),
      T('<figure class=\'bta-sign\'><blockquote>“El Bienestar y el futuro del Caballo al lado del humano está absolutamente ligado a cuán formadas, experimentadas y compasivas sean las personas que los manejan.”</blockquote><figcaption><strong>Andrea Pigazzi</strong><span>Directora de Balance Training Academy® · Creadora del Método Balance Training®</span></figcaption></figure>'),
      row([BTN('Leer la carta completa', URL_ANDREA + '#carta', 'bta-btn-outline'), BTN('Conocé a Andrea', URL_ANDREA, 'bta-btn-outline')], { gap: 12, cls: 'bta-btnrow' }),
    ], { gap: 20 }),
  ], { gap: 64, align: 'center' })]));
  const pains = ['Sentís que avanzás a ciegas y cometés errores que no sabés cómo resolver.', 'Probaste mil consejos sueltos de redes que se contradicen y te confunden más.', 'Te falta un método con orden lógico, paso a paso y según tu nivel.', 'Echás de menos un mentor que te acompañe de verdad, en el tiempo y en cada situación.', 'No encontraste una Metodología afín a tus ideales de cómo vincularnos con el caballo desde el respeto y la compasión.', 'No encontraste una metodología completa y coherente desde la Iniciación de un potro a la Competencia.'];
  out.push(section({ bg: '#F6EFE2', maxw: 960, gap: 14 }, [
    H('¿Querés avanzar en tu formación pero no encontrás una manera integral y realmente efectiva?'),
    T('<p class=\'bta-muted bta-muted-lg\'>Puede que algo de esto te esté pasando…</p><ul class=\'bta-pains\'>' + pains.map(p => '<li>' + esc(p) + '</li>').join('') + '</ul><p class=\'bta-punch\'>No necesitás más información desordenada. ¡Necesitás un Método!</p>'),
  ]));
  const pillars = [['Conocimiento profundo del caballo', 'Partimos de su naturaleza, su etología y su lenguaje. Entender cómo piensa y siente el caballo es el primer paso para todo lo demás.'], ['Trato compasivo y respetuoso', 'Una alternativa amable, sin violencia ni atajos. El vínculo y la confianza son la base, no el sometimiento.'], ['Técnica y eficiencia reales', 'Resultados concretos y permanentes e incorporación de herramientas importantes para tratar y entrenar todo tipo de caballos y disciplinas.'], ['Desarrollo integral del jinete', 'Formar jinetes y entrenadores no solo atiende a cuestiones ecuestres, sino a la formación integral en valores y herramientas para la vida.']];
  const trans = ['Bases formativas sólidas basadas en experiencia y aporte científico.', 'Mayores conocimientos teóricos y prácticos.', 'Mayor capacidad de resolver problemas con tu caballo y los de tus alumnos.', 'Más y mejores herramientas para Iniciar, Entrenar y Corregir Caballos.', 'Comprensión de fundamentos de la práctica ecuestre alineada con el Bienestar del caballo.', 'Tecnificación y perfeccionamiento real de tu trabajo.', 'Herramientas para tu trabajo sobre ti mismo.', 'Solvencia, autonomía y vínculos armoniosos con los caballos.'];
  out.push(section({ cls: 'bta-dark', bg: '#2E1A0A', anchor: 'metodo', gap: 20 }, [
    H('¿Qué es la Metodología Balance Training®?'),
    T('<p class=\'bta-lead-dark\'>Un método para iniciar, entrenar y reeducar caballos respetando su naturaleza y su bienestar en toda circunstancia. Un sistema que busca desarrollar caballos calmos, seguros y estables, construyendo balance y equilibrio en todos los planos: físico, mental y emocional.</p><p class=\'bta-soft-dark\'>Al mismo tiempo, es un modelo de enseñanza enfocado en el acompañamiento y desarrollo integral de las personas: un camino ordenado, armonioso y acompañado, dentro de un Método muy técnico, respetuoso del caballo y ético en cuanto a las normas de Bienestar y las buenas prácticas.</p>', 'bta-narrow'),
    T('<div class=\'bta-pillars\'>' + pillars.map(([t, d]) => '<div><h3>' + esc(t) + '</h3><p>' + esc(d) + '</p></div>').join('') + '</div>'),
    T('<div class=\'bta-trans\'><h3>¿Qué transformación vas a lograr?</h3>' + ul(trans, 'bta-checks bta-checks-2 bta-checks-dark') + '</div>'),
  ]));
  const ini = bySlug('iniciacion'), fei = bySlug('formacion-integral'), men = bySlug('mentorias'), etol = bySlug('etologia'), asi = bySlug('webinar-asiento');
  const perfiles = [
    ['Te iniciás en el mundo del caballo', 'Para quienes quieren introducirse en el mundo del caballo desde una mirada respetuosa y compasiva.', [[ini.t, url(ini.slug), 'El primer escalón de la Pirámide']]],
    ['Querés avanzar en tu formación', 'Para quienes quieren llevar sus conocimientos y herramientas a otro nivel.', [['Cursos del escalón ★★', URL_CAT + '#piramide', 'Después de la Iniciación']]],
    ['Sos profesional y buscás tecnificarte', 'Para profesionales que buscan tecnificarse y profesionalizarse con bases sólidas.', [[fei.t, url(fei.slug), 'La columna vertebral de la Academia'], [men.t, url(men.slug), 'Acompañamiento individual']]],
    ['Trabajás en docencia, terapias o recreación', 'Para profesionales de la docencia, las terapias o la recreación con caballos.', [[etol.t, url(etol.slug), 'Para quienes trabajan con caballos'], [asi.t, url(asi.slug), 'Para instructores y equinoterapeutas']]],
  ];
  out.push(section({ bg: '#F1E6D2', anchor: 'empezar', gap: 28 }, [
    H('¿Por dónde empiezo?'),
    T('<p class=\'bta-muted bta-muted-lg\'>Elegí lo que más se parece a tu momento. Y si tenés dudas, escribinos: con mucho gusto te asesoramos.</p>'),
    row([
      col(56, [T('<ul class=\'bta-perfiles\'>' + perfiles.map(([t, d, go]) => '<li><h3>' + esc(t) + '</h3><p>' + esc(d) + '</p><p class=\'bta-start\'>Tu punto de partida</p>' + go.map(([gt, gh, gs]) => '<a href=\'' + gh + '\'><strong>' + esc(gt) + ' <span aria-hidden=\'true\'>→</span></strong><span>' + esc(gs) + '</span></a>').join('') + '</li>').join('') + '</ul>')]),
      col(44, [H('La Pirámide Formativa', 'h3', 'bta-h3'), T('<p class=\'bta-muted\'>El orden en que sugerimos ir tomando las capacitaciones. Es una sugerencia y no invalida tomarlas en otro orden.</p>' + piramideHTML('bta-pir-sm'))], { gap: 8 }),
    ], { gap: 48 }),
  ]));
  const F = fei;
  out.push(section({ gap: 0 }, [row([
    col(52, [IMG('portada-formacion-integral', 'Portada: ' + F.t, 'bta-feat-img')]),
    col(48, [
      T('<p class=\'bta-meta\'>' + esc(F.eyebrow) + ' · <span aria-hidden=\'true\'>★★★★★</span><span class=\'bta-sr\'>5 estrellas</span></p>'),
      H(F.t, 'h2', 'bta-h-sm'),
      T('<p>La columna vertebral de Balance Training ACADEMY: una formación integral, metodológica y súper personalizada, en tres etapas.</p><dl class=\'bta-specs bta-specs-dark\'>' + F.specs.map(([k, v]) => '<dt>' + esc(k) + '</dt><dd>' + esc(v) + '</dd>').join('') + '</dl>'),
      BTN('Conocer la Formación', url(F.slug)),
    ], { gap: 14, cls: 'bta-feat-body' }),
  ], { gap: 0, align: 'center', cls: 'bta-feat bta-dark' })]));
  const destacados = ['iniciacion', 'etologia', 'arte-menor-esfuerzo', 'caballo-deportivo', 'mentorias', 'estadias'].map(bySlug);
  out.push(section({ bg: '#F6EFE2', anchor: 'cursos', gap: 28 }, [
    row([col(70, [H('Capacitaciones según tu nivel, experiencia e intereses')]), col(30, [BTN('Ver las ' + DATA.length + ' propuestas', URL_CAT, 'bta-btn-outline bta-btn-sm')], { cls: 'bta-end' })], { gap: 16, align: 'flex-end' }),
    T('<div class=\'bta-cards\'>' + destacados.map(c => card(c)).join('') + '</div>'),
  ]));
  out.push(section({ cls: 'bta-dark', bg: '#2E1A0A', gap: 32 }, [
    H('Lo que dicen los alumnos'),
    T('<ul class=\'bta-testis\'>' + TESTIMONIOS.map(d => '<li><figure class=\'bta-testi bta-testi-soft\'><span class=\'bta-qmark\' aria-hidden=\'true\'>“</span><blockquote>' + esc(d.t) + '</blockquote><figcaption><strong>' + esc(d.n) + '</strong><span>' + esc(d.r) + '</span></figcaption></figure></li>').join('') + '</ul>'),
  ]));
  out.push(section({ maxw: 800, anchor: 'faq' }, [
    H('Preguntas frecuentes', 'h2', 'bta-center'),
    faqW([
      ['No sé cuál capacitación me conviene, ¿me pueden orientar?', 'Sí, con mucho gusto. Escribinos contándonos tu nivel, tu experiencia y tus intereses, y te asesoramos para que elijas el camino más adecuado para vos.'],
      ['¿Qué significan las estrellas de cada curso?', 'Indican el escalón de cada capacitación dentro de la Pirámide Formativa: el orden en que sugerimos ir tomándolas y sus requerimientos previos. Es una sugerencia y no invalida tomarlas en otro orden.'],
      ['¿Las clases son en vivo o grabadas?', 'Depende de cada capacitación. En cada página encontrás su modalidad, y si tenés dudas escribinos y te contamos cómo es el acceso.'],
      ['¿Necesito tener caballo propio?', 'Depende de la capacitación: cada una detalla sus requisitos. Por ejemplo, las Mentorías requieren contar con un caballo con el cual desarrollar tus prácticas.'],
      ['¿Entregan certificado?', 'La Formación Ecuestre Integral entrega certificado a quienes completan sus tres etapas y el trabajo final. Para las demás capacitaciones, consultanos.'],
      ['¿Cómo puedo pagar?', 'Escribinos por WhatsApp o por mail a ' + CONTACT.email + ' y te pasamos el valor vigente y las formas de pago disponibles.'],
    ]),
  ]));
  out.push(ctaFinal('¡Estamos para acompañarte en tu camino!', 'Si tenés alguna duda sobre cuál opción es mejor para vos, contactanos y con mucho gusto vamos a asesorarte.', 'Hola Andrea, quiero que me orienten para elegir una capacitación.', ['Ver capacitaciones', URL_CAT]));
  return out;
}

function ctaFinal(title, text, waMsg, second) {
  return section({ cls: 'bta-dark bta-cta-final', bg: '#2E1A0A', maxw: 720, pad: [96, 24, 96, 24], gap: 18 }, [
    H(title, 'h2', 'bta-center'),
    T('<p class=\'bta-center-p\'>' + esc(text) + '</p>'),
    row([BTN('Escribinos por WhatsApp', WA(waMsg)), BTN(second[0], second[1], 'bta-btn-light')], { gap: 14, cls: 'bta-btnrow bta-btnrow-center' }),
    T('<p class=\'bta-center-p bta-small\'>o por mail a <a href=\'' + MAIL + '\'>' + CONTACT.email + '</a></p>'),
  ]);
}

/* ================= CAPACITACIONES ================= */
function catalogo() {
  L.resetIds();
  const out = [];
  out.push(section({ cls: 'bta-dark bta-hero', bg: '#2E1A0A', maxw: 860, pad: [88, 24, 88, 24], bgImage: img('andrea-hero'), gap: 18 }, [
    H('Encontrá la capacitación según tu nivel, experiencia e intereses', 'h1', 'bta-h1 bta-center'),
    T('<p class=\'bta-lead-dark bta-center-p\'>Y si tenés alguna duda sobre cuál opción es mejor para vos, nos podés contactar y con mucho gusto vamos a asesorarte. ¡Estamos para acompañarte en tu camino de Formación y Profesionalización Ecuestre!</p>'),
    T('<p class=\'bta-jump\'>' + ['Cursos', 'Webinars', 'Formación', 'Acompañamiento', 'Presenciales'].map(c => '<a href=\'#' + slugCat(c) + '\'>' + c + '</a>').join('') + '<a href=\'#piramide\'>Pirámide Formativa</a></p>'),
  ]));
  const cats = [['Cursos', 'Cursos online', 'Grabados o sincrónicos, ordenados por escalón de la Pirámide.'], ['Webinars', 'Webinars', 'Master Classes puntuales sobre un tema.'], ['Formación', 'Formación', 'El programa más completo de la Academia.'], ['Acompañamiento', 'Acompañamiento personalizado', 'Mentorías, asesorías y coaching a tu medida.'], ['Presenciales', 'Presenciales', 'Clínicas en todo el país y estadías en Relinchos.']];
  cats.forEach(([cat, title, sub], i) => {
    const list = DATA.filter(d => d.cat === cat);
    const extra = EXTRA.filter(e => e.cat === cat).map(e => '<div class=\'bta-cardlink bta-cardlink-full is-soon\'><span class=\'bta-panel\'><span>Próximamente</span></span><span class=\'bta-card-body\'><span class=\'bta-card-t\'>' + esc(e.t) + '</span><span class=\'bta-card-d\'>' + esc(e.short) + '</span><span class=\'bta-card-foot\'><span class=\'bta-card-stars\' aria-hidden=\'true\'>' + stars(e.stars) + '</span><a class=\'bta-card-more\' href=\'' + WA('Hola Andrea, quiero información sobre ' + q(e.t) + '.') + '\'>Consultar <span aria-hidden=\'true\'>→</span></a></span></span></div>').join('');
    out.push(section({ bg: i % 2 ? '#F6EFE2' : '#FFFFFF', anchor: slugCat(cat), gap: 10, pad: [72, 24, 72, 24] }, [
      H(title),
      T('<p class=\'bta-muted\'>' + esc(sub) + '</p>'),
      T('<div class=\'bta-cards bta-cards-gap\'>' + list.map(c => card(c)).join('') + extra + '</div>'),
    ]));
  });
  out.push(section({ bg: '#F1E6D2', anchor: 'piramide', maxw: 900, gap: 14 }, [
    H('Pirámide Formativa', 'h2', 'bta-center'),
    T('<p class=\'bta-muted bta-center-p\'>Este gráfico puede ayudarte a planificar tu estudio y dedicación. Muestra el orden en que sugerimos ir tomando los Cursos y los requerimientos de cada uno. Es sólo una sugerencia y no invalida tomarlos en otro orden.</p>' + piramideHTML() + '<p class=\'bta-muted bta-center-p bta-small\'>Cualquier duda nos podés escribir a <a href=\'' + MAIL + '\'>' + CONTACT.email + '</a></p>'),
  ]));
  out.push(ctaFinal('¿No sabés cuál opción es mejor para vos?', 'Contactanos y con mucho gusto vamos a asesorarte para que elijas la capacitación adecuada a tu nivel y a tus intereses.', 'Hola Andrea, quiero que me orienten para elegir una capacitación.', ['Escribir por mail', MAIL]));
  return out;
}
function slugCat(c) { return c.toLowerCase().normalize('NFD').replace(/[^a-z]/g, ''); }

/* ================= SOY ANDREA ================= */
function andrea() {
  L.resetIds();
  const out = [];
  out.push(section({ cls: 'bta-dark bta-hero bta-hero-home', bg: '#2E1A0A', pad: [140, 24, 88, 24], padM: [80, 18, 60, 18], bgImage: img('andrea-hero'), gap: 0 }, [
    col(60, [
      H('Soy Andrea', 'h1', 'bta-h1 bta-h1-xl'),
      T('<p class=\'bta-lead-dark\'>Entrenadora de caballos, formadora y coach. Creadora del Método <strong>Balance Training®</strong>.</p><p class=\'bta-roles-line\'>Entrenadora · Formadora · Amazona · Coach ontológico y deportivo</p>'),
    ], { gap: 18 }),
  ]));
  out.push(section({ cls: 'bta-dark', bg: '#4F2D10', pad: [40, 24, 40, 24], padM: [32, 18, 32, 18] }, [
    T('<ul class=\'bta-roles\'>' + [['Creadora', 'del Método Balance Training®'], ['Directora', 'de Balance Training Academy'], ['Directora y fundadora', 'de Relinchos, Centro de Entrenamiento y Capacitación']].map(([a, b]) => '<li><strong>' + a + '</strong><span>' + esc(b) + '</span></li>').join('') + '</ul>'),
  ]));
  out.push(section({}, [row([
    col(58, [
      H('Más de 35 años formando personas y caballos'),
      T('<p class=\'bta-lead\'>Soy Andrea Pigazzi, entrenadora de caballos, formadora y coach especializada en biomecánica, técnica y perfeccionamiento ecuestre.</p><p>Hace más de tres décadas fundé <strong>Relinchos</strong>, un Centro de Capacitaciones Ecuestres ubicado en las sierras de Córdoba, Argentina, dedicado a la difusión de técnicas compasivas de doma, entrenamiento y reeducación de caballos de todas las razas y disciplinas.</p><p>Hace más de 25 años imparto cursos, clínicas y capacitaciones en distintos puntos de Argentina y otros países, asesorando además a Centros Ecuestres, Criadores, Escuelas de Equitación y Centros de Equinoterapia.</p>', 'bta-prose'),
    ], { gap: 22 }),
    col(42, [IMG('andrea-portrait', 'Andrea Pigazzi', 'bta-portrait'), T('<dl class=\'bta-nums\'><div><dt>35+</dt><dd>años de trabajo</dd></div><div><dt>25+</dt><dd>años formando</dd></div></dl>')], { gap: 20 }),
  ], { gap: 64 })]));
  out.push(section({ bg: '#F6EFE2', maxw: 760, anchor: 'carta', gap: 18 }, [
    H('Carta de bienvenida'),
    T(CARTA.map((p, i) => '<p' + (i === 0 ? ' class=\'bta-lead\'' : '') + '>' + esc(p) + '</p>').join('') + '<div class=\'bta-firma\'><p><em>Con cariño,</em></p><p class=\'bta-firma-n\'>Andrea Pigazzi</p><p class=\'bta-small\'>Directora de Balance Training Academy® · Creadora del Método Balance Training®</p></div>', 'bta-prose'),
  ]));
  out.push(section({ bg: '#F1E6D2', maxw: 820, gap: 22 }, [
    H('Todo empezó con los caballos que habían sufrido', 'h2', 'bta-center'),
    T('<p class=\'bta-lead\'>Durante toda mi vida, mi principal preocupación han sido los caballos que han sufrido abuso, maltrato o experiencias traumáticas.</p><p>Fue justamente esa búsqueda por comprenderlos, ayudarlos y rehabilitarlos lo que me llevó a dedicar gran parte de mi trabajo a ellos. De esa experiencia nació el <strong>Método Balance Training®</strong>: una metodología de iniciación, entrenamiento y reeducación basada en técnicas de bajo estrés, alineadas a la naturaleza del caballo y a la preservación de su bienestar.</p>', 'bta-prose bta-prose-center'),
  ]));
  const pil = [['El comportamiento natural del caballo', 'Partir de cómo es, cómo aprende y cómo se comunica, en lugar de imponerle nuestra lógica.'], ['La biomecánica aplicada a la equitación', 'Entender el movimiento del caballo y del jinete para montar sin desgastar el cuerpo de ninguno de los dos.'], ['El perfeccionamiento integral del jinete-entrenador', 'Técnica, cuerpo, atención y vínculo: la persona también se forma.']];
  out.push(section({ cls: 'bta-dark', bg: '#2E1A0A', gap: 28 }, [
    H('Tres pilares fundamentales'),
    T('<div class=\'bta-pillars bta-pillars-3\'>' + pil.map(([t, d]) => '<div><h3>' + esc(t) + '</h3><p>' + esc(d) + '</p></div>').join('') + '</div><p class=\'bta-soft-dark bta-narrow-p\'>Balance Training® integra técnicas de trabajo en libertad, pie a tierra y montado, contemplando la unidad de todos los planos —físico, psíquico, emocional y espiritual—. Propone una forma de monta consciente, orgánica y en plena sincronía con el caballo.</p>'),
  ]));
  const cert = [['Preparadora Físico Deportiva', ''], ['Técnica en Producción Equina', ''], ['Centered Riding Instructor', 'Certificada por Centered Riding Organization · USA'], ['Tecnificación Ecuestre', 'Real Escuela Andaluza de Arte Ecuestre, Jerez de la Frontera · España'], ['Trauma Informed Horse Trainer', 'Understand Horses · Reino Unido']];
  const areas = ['Coaching', 'Counseling Relacional', 'Constelaciones Familiares', 'Biodinámica', 'Osteopatía', 'Terapia Craneosacral', 'Etología', 'Teorías del Aprendizaje'];
  out.push(section({}, [row([
    col(50, [H('Certificaciones', 'h2', 'bta-h-sm'), T('<ul class=\'bta-certs\'>' + cert.map(([t, d]) => '<li><strong>' + esc(t) + '</strong>' + (d ? '<span>' + esc(d) + '</span>' : '') + '</li>').join('') + '</ul>')], { gap: 16 }),
    col(50, [H('Otras disciplinas que sumé al camino', 'h2', 'bta-h-sm'), T('<p class=\'bta-muted\'>A lo largo de los años integré diferentes áreas de formación buscando comprender cada vez más profundamente la relación entre humanos y caballos.</p><p class=\'bta-tags\'>' + areas.map(a => '<span>' + a + '</span>').join('') + '</p><p class=\'bta-note bta-note-box\'>Creo profundamente en una enseñanza humanizada, basada en el respeto, la comprensión y el desarrollo integral tanto del caballo como de las personas.</p>')], { gap: 16 }),
  ], { gap: 64 })]));
  out.push(section({ cls: 'bta-dark', bg: '#2E1A0A', maxw: 840, pad: [104, 24, 104, 24], bgImage: img('andrea-hero'), gap: 18 }, [
    T('<p class=\'bta-cierre-t\'>Balance Training® es, para mí, mucho más que un método.</p><p class=\'bta-center-p\'>Es una forma clara, ordenada y compasiva de relación entre humanos y caballos; un arte, una filosofía de vida y una manera de habitar el vínculo desde el mismo latir.</p><p class=\'bta-cierre-n\'>Andrea Pigazzi</p>'),
  ]));
  out.push(section({ bg: '#F1E6D2', pad: [80, 24, 80, 24] }, [row([
    col(60, [H('¿Querés formarte conmigo?', 'h2', 'bta-h-sm'), T('<p class=\'bta-muted\'>Conocé los cursos y capacitaciones de Balance Training Academy, o escribime y conversemos sobre tu caballo.</p>')], { gap: 10 }),
    col(40, [row([BTN('Ver los cursos', URL_CAT), BTN('Escribime por WhatsApp', WA('Hola Andrea, quiero conversar sobre mi caballo.'), 'bta-btn-outline')], { gap: 12, cls: 'bta-btnrow' })], { cls: 'bta-end' }),
  ], { gap: 36, align: 'center' })]));
  return out;
}

const outDir = path.join(__dirname, 'elementor');
for (const [name, fn] of [['inicio', inicio], ['capacitaciones', catalogo], ['soy-andrea', andrea]]) {
  const s = JSON.stringify(fn());
  if (s.includes('\\')) throw new Error('Barra invertida en ' + name + ': ' + s.slice(s.indexOf('\\') - 60, s.indexOf('\\') + 20));
  fs.writeFileSync(path.join(outDir, 'pagina-' + name + '.json'), s);
  console.log(name, s.length);
}
