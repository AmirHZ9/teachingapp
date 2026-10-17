import './style.css';

const designs = [
  { id: 'today', title: 'کارهای امروز', eyebrow: '۰۱ / نمای روزانه', description: 'برنامه‌ی روز را یک‌جا ببینید و کارهای انجام‌شده را علامت بزنید.', alt: 'طرح صفحه کارهای امروز اپ روال، شامل برنامه هفتگی و فهرست قدم‌های روز', src: '/designs/today.png' },
  { id: 'exercise', title: 'جزئیات تمرین', eyebrow: '۰۲ / تمرین دوره', description: 'تمرین را بخوانید، برای خودتان یادداشت کنید و انجام آن را ثبت کنید.', alt: 'طرح صفحه جزئیات تمرین اپ روال، شامل شرح تمرین، یادداشت و دکمه ثبت', src: '/designs/exercise.png' },
  { id: 'progress', title: 'مسیر پیشرفت', eyebrow: '۰۳ / همراه مسیر', description: 'پیشرفت خود را مرور کنید و قدم بعدی دوره را ادامه دهید.', alt: 'طرح صفحه مسیر پیشرفت اپ روال، شامل درصد پیشرفت، فعالیت هفتگی و درس‌های بعدی', src: '/designs/progress.png' },
];

const icon = {
  arrow: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M5 12h14m-6-6 6 6-6 6"/></svg>',
  expand: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 3H3v5m13-5h5v5M3 16v5h5m13-5v5h-5"/></svg>',
  close: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" aria-hidden="true"><path d="M5 5l14 14M19 5 5 19"/></svg>'
};

const app = document.querySelector('#app');
app.innerHTML = `
  <header class="site-header wrap">
    <a class="brand" href="#top" aria-label="روال، بازگشت به ابتدای صفحه"><span class="brand-mark" aria-hidden="true"><i></i><i></i></span><span>روال<span class="brand-dot">.</span></span></a>
    <span class="header-label">ارائه کانسپت وب‌اپ</span>
  </header>
  <main id="top">
    <section class="hero wrap" aria-labelledby="hero-title">
      <div class="hero-flower" aria-hidden="true"><span></span><span></span><span></span></div>
      <p class="overline"><span class="overline-line"></span> یک تجربه‌ی همراه برای یادگیری</p>
      <h1 id="hero-title">کانسپت وب‌اپ <em>همراه دوره</em></h1>
      <p class="hero-subtitle">قدم‌های کوچک، مسیری روشن</p>
      <p class="hero-description">پیشنهاد اولیه برای پیگیری کارها و تمرین‌های دوره آموزشی. نام روال، محتوای درس‌ها و اطلاعات نمایش‌داده‌شده نمونه هستند و با هویت دوره هماهنگ می‌شوند.</p>
      <a class="hero-link" href="#gallery">تماشای طرح‌ها <span>${icon.arrow}</span></a>
    </section>
    <section class="gallery-section" id="gallery" aria-labelledby="gallery-heading">
      <div class="wrap gallery-wrap">
        <div class="section-heading"><div><p class="section-kicker">نگاهی به تجربه‌ی کاربر</p><h2 id="gallery-heading">سه نما از یک مسیر</h2></div><span class="section-count" aria-hidden="true">۰۱ — ۰۳</span></div>
        <div class="tabs" role="tablist" aria-label="انتخاب نمای اپلیکیشن">
          ${designs.map((item, i) => `<button class="tab ${i === 0 ? 'active' : ''}" id="tab-${item.id}" type="button" role="tab" aria-selected="${i === 0}" aria-controls="design-panel" tabindex="${i === 0 ? '0' : '-1'}" data-index="${i}"><span class="tab-number">۰${i+1}</span><span>${item.title}</span></button>`).join('')}
        </div>
        <div id="design-panel" class="design-panel" role="tabpanel" aria-labelledby="tab-today" tabindex="0">
          <div class="design-intro" aria-live="polite"><p class="design-eyebrow" id="design-eyebrow">${designs[0].eyebrow}</p><h3 id="design-title">${designs[0].title}</h3><p id="design-description">${designs[0].description}</p></div>
          <div class="image-stage"><button class="image-trigger" type="button" aria-label="بزرگ‌نمایی تصویر کارهای امروز"><img id="design-image" src="${designs[0].src}" alt="${designs[0].alt}" width="941" height="1672" fetchpriority="high" /></button></div>
          <button class="original-button" type="button">${icon.expand}<span>مشاهده در اندازه اصلی</span></button>
        </div>
        <p class="gallery-note">برای دیدن جزئیات، روی تصویر بزنید.</p>
        <div class="preview-heading"><span>مرور هر سه طرح</span><span>برای انتخاب، روی هر نما بزنید</span></div>
        <div class="preview-grid" aria-label="پیش‌نمایش سه طرح">
          ${designs.map((item, i) => `<button class="preview-card ${i === 0 ? 'selected' : ''}" type="button" data-index="${i}" aria-label="نمایش ${item.title}" aria-current="${i === 0 ? 'true' : 'false'}"><img src="${item.src}" alt="پیش‌نمایش ${item.title}" width="941" height="1672" loading="lazy" /><span><small>۰${i + 1}</small>${item.title}</span></button>`).join('')}
        </div>
      </div>
    </section>
    <section class="closing wrap"><span class="closing-symbol" aria-hidden="true">✳</span><p>هر قدم کوچک، بخشی از مسیر است.</p></section>
  </main>
  <footer class="footer"><div class="wrap footer-inner"><div><p class="footer-name">امیرحسین زنگنه</p><p class="footer-role">توسعه‌دهنده فرانت‌اند و بک‌اند</p></div><a class="portfolio-link" href="https://amirhzdev.ir" target="_blank" rel="noopener noreferrer">مشاهده نمونه‌کارها ${icon.arrow}</a></div></footer>
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="نمایش تصویر در اندازه بزرگ" hidden>
    <div class="lightbox-toolbar"><span class="lightbox-title"></span><div class="lightbox-actions"><button type="button" class="zoom-out" aria-label="کوچک‌نمایی">−</button><button type="button" class="zoom-reset" aria-label="بازنشانی بزرگ‌نمایی">۱۰۰٪</button><button type="button" class="zoom-in" aria-label="بزرگ‌نمایی">+</button><button type="button" class="lightbox-close" aria-label="بستن تصویر">${icon.close}</button></div></div>
    <div class="lightbox-viewport" aria-label="تصویر؛ برای بزرگ‌نمایی از چرخ ماوس یا دو انگشت استفاده کنید"><img class="lightbox-image" alt="" width="941" height="1672" draggable="false" /></div>
    <span class="lightbox-help">چرخ ماوس یا دو انگشت برای بزرگ‌نمایی · کشیدن برای جابه‌جایی</span>
  </div>`;

const tabs = [...document.querySelectorAll('.tab')];
const previewCards = [...document.querySelectorAll('.preview-card')];
const panel = document.querySelector('#design-panel');
const image = document.querySelector('#design-image');
const lightbox = document.querySelector('#lightbox');
const viewport = lightbox.querySelector('.lightbox-viewport');
const largeImage = lightbox.querySelector('.lightbox-image');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
let current = 0;
let transitionTimer;
let returnFocus;

function selectDesign(index, focus = false) {
  if (index === current) return;
  clearTimeout(transitionTimer);
  panel.classList.add('changing');
  transitionTimer = setTimeout(() => {
    current = index;
    const item = designs[index];
    tabs.forEach((tab, i) => {
      tab.classList.toggle('active', i === index);
      tab.setAttribute('aria-selected', String(i === index));
      tab.tabIndex = i === index ? 0 : -1;
    });
    if (focus) tabs[index].focus();
    previewCards.forEach((card, i) => {
      card.classList.toggle('selected', i === index);
      card.setAttribute('aria-current', String(i === index));
    });
    panel.setAttribute('aria-labelledby', `tab-${item.id}`);
    document.querySelector('#design-eyebrow').textContent = item.eyebrow;
    document.querySelector('#design-title').textContent = item.title;
    document.querySelector('#design-description').textContent = item.description;
    image.src = item.src;
    image.alt = item.alt;
    document.querySelector('.image-trigger').setAttribute('aria-label', `بزرگ‌نمایی تصویر ${item.title}`);
    requestAnimationFrame(() => panel.classList.remove('changing'));
  }, reducedMotion.matches ? 0 : 130);
}

previewCards.forEach((card, index) => card.addEventListener('click', () => {
  selectDesign(index);
  if (window.matchMedia('(max-width: 640px)').matches) panel.scrollIntoView({ behavior: reducedMotion.matches ? 'instant' : 'smooth', block: 'start' });
}));

tabs.forEach((tab, index) => {
  tab.addEventListener('click', () => selectDesign(index));
  tab.addEventListener('keydown', event => {
    let next;
    if (event.key === 'ArrowLeft') next = (index + 1) % tabs.length;
    if (event.key === 'ArrowRight') next = (index - 1 + tabs.length) % tabs.length;
    if (event.key === 'Home') next = 0;
    if (event.key === 'End') next = tabs.length - 1;
    if (next !== undefined) { event.preventDefault(); selectDesign(next, true); if (next === current) tabs[next].focus(); }
  });
});

let scale = 1, x = 0, y = 0;
const pointers = new Map();
let gesture = null;
function baseSize() {
  return Math.min(viewport.clientWidth / 941, viewport.clientHeight / 1672, 1);
}
function updateTransform() {
  largeImage.style.width = `${941 * baseSize()}px`;
  largeImage.style.height = `${1672 * baseSize()}px`;
  const maxX = Math.max(0, (941 * baseSize() * scale - viewport.clientWidth) / 2);
  const maxY = Math.max(0, (1672 * baseSize() * scale - viewport.clientHeight) / 2);
  x = Math.max(-maxX, Math.min(maxX, x));
  y = Math.max(-maxY, Math.min(maxY, y));
  largeImage.style.transform = `translate(${x}px, ${y}px) scale(${scale})`;
  lightbox.querySelector('.zoom-reset').textContent = `${Math.round(baseSize() * scale * 100)}٪`;
}
function zoom(value) { scale = Math.max(1, Math.min(5, value)); updateTransform(); }
function openLightbox(nativeSize = false) {
  returnFocus = document.activeElement;
  largeImage.src = designs[current].src;
  largeImage.alt = designs[current].alt;
  lightbox.querySelector('.lightbox-title').textContent = designs[current].title;
  lightbox.hidden = false;
  document.body.classList.add('modal-open');
  scale = nativeSize ? Math.min(5, 1 / baseSize()) : 1;
  x = 0; y = 0; updateTransform();
  lightbox.querySelector('.lightbox-close').focus();
}
function closeLightbox() {
  lightbox.hidden = true;
  document.body.classList.remove('modal-open');
  pointers.clear(); gesture = null;
  returnFocus?.focus();
}
document.querySelector('.image-trigger').addEventListener('click', () => openLightbox());
document.querySelector('.original-button').addEventListener('click', () => openLightbox(true));
lightbox.querySelector('.lightbox-close').addEventListener('click', closeLightbox);
lightbox.querySelector('.zoom-in').addEventListener('click', () => zoom(scale * 1.35));
lightbox.querySelector('.zoom-out').addEventListener('click', () => zoom(scale / 1.35));
lightbox.querySelector('.zoom-reset').addEventListener('click', () => { scale = 1; x = 0; y = 0; updateTransform(); });
lightbox.addEventListener('click', event => { if (event.target === lightbox) closeLightbox(); });
window.addEventListener('resize', () => { if (!lightbox.hidden) updateTransform(); });
document.addEventListener('keydown', event => {
  if (lightbox.hidden) return;
  if (event.key === 'Escape') closeLightbox();
  if (event.key === '+' || event.key === '=') zoom(scale * 1.25);
  if (event.key === '-') zoom(scale / 1.25);
  if (event.key === 'Tab') {
    const buttons = [...lightbox.querySelectorAll('button')];
    const first = buttons[0], last = buttons.at(-1);
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  }
});
viewport.addEventListener('wheel', event => { event.preventDefault(); zoom(scale * (event.deltaY < 0 ? 1.12 : 1 / 1.12)); }, { passive: false });
function distance() { const [a, b] = [...pointers.values()]; return Math.hypot(a.clientX - b.clientX, a.clientY - b.clientY); }
viewport.addEventListener('pointerdown', event => {
  viewport.setPointerCapture(event.pointerId);
  pointers.set(event.pointerId, event);
  if (pointers.size === 1) gesture = { x: event.clientX, y: event.clientY, offsetX: x, offsetY: y };
  if (pointers.size === 2) gesture = { distance: distance(), scale, offsetX: x, offsetY: y, centerX: [...pointers.values()].reduce((s,p) => s+p.clientX,0)/2, centerY: [...pointers.values()].reduce((s,p) => s+p.clientY,0)/2 };
});
viewport.addEventListener('pointermove', event => {
  if (!pointers.has(event.pointerId)) return;
  pointers.set(event.pointerId, event);
  if (pointers.size === 2 && gesture?.distance) {
    const centerX = [...pointers.values()].reduce((s,p) => s+p.clientX,0)/2;
    const centerY = [...pointers.values()].reduce((s,p) => s+p.clientY,0)/2;
    scale = Math.max(1, Math.min(5, gesture.scale * distance() / gesture.distance));
    x = gesture.offsetX + centerX - gesture.centerX; y = gesture.offsetY + centerY - gesture.centerY;
  } else if (pointers.size === 1 && gesture && !gesture.distance) {
    x = gesture.offsetX + event.clientX - gesture.x; y = gesture.offsetY + event.clientY - gesture.y;
  }
  updateTransform();
});
function endPointer(event) {
  pointers.delete(event.pointerId);
  if (pointers.size === 1) { const p = [...pointers.values()][0]; gesture = { x: p.clientX, y: p.clientY, offsetX: x, offsetY: y }; }
  else gesture = null;
}
viewport.addEventListener('pointerup', endPointer);
viewport.addEventListener('pointercancel', endPointer);
viewport.addEventListener('dblclick', () => zoom(scale > 1 ? 1 : 2));
