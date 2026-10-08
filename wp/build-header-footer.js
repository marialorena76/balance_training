/* Balance Training Academy — Header y Footer para el Theme Builder de Elementor Pro
   Uso: node wp/build-header-footer.js  →  wp/elementor/header.json, footer.json */
const fs = require('fs');
const path = require('path');
const L = require('./build-elementor.js');
const { B, URL_CAT, URL_ANDREA, CONTACT, img, px, box, row, col, W, T, BTN } = L;

const IG = 'https://instagram.com/balance.horsetraining.academy';
const FB = 'https://facebook.com/balancetrainingacademy';

function header() {
  L.resetIds();
  const logo = W('image', { image: Object.assign(img('logo-cream'), { alt: 'Balance Training Academy' }), image_size: 'full', link_to: 'custom', link: { url: B + '/', is_external: '', nofollow: '' }, _css_classes: 'bta-head-logo' });
  const nav = W('nav-menu', { menu: 'menu-principal', layout: 'horizontal', align_items: 'right', pointer: 'none', dropdown: 'tablet', full_width: 'stretch', toggle: 'burger', _css_classes: 'bta-head-nav' });
  const cta = BTN('Mi Academia', B + '/mi-camino/', 'bta-btn-sm bta-head-academia');
  return [box({
    content_width: 'full', css_classes: 'bta-head', background_background: 'classic', background_color: '#2E1A0A',
    padding: px(12, 24, 12, 24), padding_mobile: px(10, 18, 10, 18), sticky: 'top', sticky_on: ['desktop', 'tablet', 'mobile'],
  }, [box({ content_width: 'boxed', boxed_width: { unit: 'px', size: 1180, sizes: [] }, flex_direction: 'row', flex_direction_mobile: 'row', flex_align_items: 'center', flex_justify_content: 'space-between', flex_wrap: 'nowrap', padding: px(0, 0, 0, 0), flex_gap: { column: '24', row: '24', unit: 'px', isLinked: true } }, [
    col(22, [logo], { cls: 'bta-head-left' }),
    box({ content_width: 'full', flex_direction: 'row', flex_align_items: 'center', flex_justify_content: 'flex-end', flex_wrap: 'nowrap', css_classes: 'bta-head-right', padding: px(0, 0, 0, 0), flex_gap: { column: '20', row: '20', unit: 'px', isLinked: true } }, [nav, cta]),
  ])], false)];
}

function footer() {
  L.resetIds();
  const linkList = (items) => '<ul class=\'bta-foot-list\'>' + items.map(([t, h]) => '<li><a href=\'' + h + '\'>' + t + '</a></li>').join('') + '</ul>';
  return [box({
    content_width: 'full', css_classes: 'bta-foot bta-dark', background_background: 'classic', background_color: '#2E1A0A',
    padding: px(72, 24, 32, 24), padding_mobile: px(56, 18, 28, 18),
  }, [box({ content_width: 'boxed', boxed_width: { unit: 'px', size: 1180, sizes: [] }, padding: px(0, 0, 0, 0), flex_gap: { column: '40', row: '40', unit: 'px', isLinked: true } }, [
    row([
      col(46, [
        W('image', { image: Object.assign(img('logo-cream'), { alt: 'Balance Training Academy' }), image_size: 'full', _css_classes: 'bta-foot-logo', align: 'left' }),
        T('<p class=\'bta-foot-txt\'>35 años acompañando la Formación y Profesionalización Ecuestre, por el Bienestar del Caballo y el Desarrollo integral de las personas.</p>'),
        W('social-icons', { social_icon_list: [
          { _id: 'ig1', social_icon: { value: 'fab fa-instagram', library: 'fa-brands' }, link: { url: IG, is_external: 'on', nofollow: '' } },
          { _id: 'fb1', social_icon: { value: 'fab fa-facebook-f', library: 'fa-brands' }, link: { url: FB, is_external: 'on', nofollow: '' } },
          { _id: 'wa1', social_icon: { value: 'fab fa-whatsapp', library: 'fa-brands' }, link: { url: CONTACT.wa, is_external: 'on', nofollow: '' } },
        ], shape: 'circle', align: 'left', icon_color: 'custom', icon_primary_color: 'rgba(255,255,255,0)', icon_secondary_color: '#DCB67E', icon_size: { unit: 'px', size: 17, sizes: [] }, icon_padding: { unit: 'em', size: 0.7, sizes: [] }, icon_spacing: { unit: 'px', size: 10, sizes: [] }, _css_classes: 'bta-foot-social' }),
      ], { gap: 18 }),
      col(27, [T('<p class=\'bta-foot-h\'>Navegación</p>' + linkList([['Metodología', B + '/#metodo'], ['Capacitaciones', URL_CAT], ['Formación 2027', URL_CAT + 'formacion-integral/'], ['Pirámide Formativa', URL_CAT + '#piramide'], ['Soy Andrea', URL_ANDREA]]))]),
      col(27, [T('<p class=\'bta-foot-h\'>Contacto</p>' + linkList([['WhatsApp ' + CONTACT.waLabel, CONTACT.wa], [CONTACT.email, 'mailto:' + CONTACT.email], ['@balance.horsetraining.academy', IG]]))]),
    ], { gap: 48 }),
    T('<div class=\'bta-foot-legal\'><p>© 2026 Balance Training Academy® · Andrea Pigazzi. Todos los derechos reservados.</p><p>www.balancetrainingacademy.com.ar</p></div>'),
  ])], false)];
}

const outDir = path.join(__dirname, 'elementor');
for (const [n, fn] of [['header', header], ['footer', footer]]) {
  const s = JSON.stringify(fn());
  if (s.includes('\\')) throw new Error('backslash ' + n);
  fs.writeFileSync(path.join(outDir, n + '.json'), s);
  console.log(n, s.length);
}
