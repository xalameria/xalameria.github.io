/* Shared behaviour for every page: icon set, mobile menu, scroll reveal,
   and the project-card renderer used by the home page. */
(function () {
  var ICONS = {
    arrow: '<path d="M7 17 17 7M8 7h9v9"/>',
    back: '<path d="M15 18l-6-6 6-6"/>',
    menu: '<path d="M4 7h16M4 12h16M4 17h16"/>',
    check: '<circle cx="12" cy="12" r="9"/><path d="m8 12.5 2.7 2.7L16 9.8"/>',
    mail: '<rect x="3" y="5" width="18" height="14" rx="2"/><path d="m3 7 9 6 9-6"/>',
    map: '<path d="m3 6 6-2 6 2 6-2v14l-6 2-6-2-6 2z"/><path d="M9 4v14M15 6v14"/>',
    users: '<circle cx="9" cy="8" r="3.5"/><path d="M2.5 20c.6-3.5 3.3-5.5 6.5-5.5s5.9 2 6.5 5.5"/><path d="M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.8c2 .6 3.2 2.5 3.5 5.2"/>',
    shield: '<path d="M12 3l8 3v6c0 4.5-3.2 7.8-8 9-4.8-1.2-8-4.5-8-9V6l8-3z"/>',
    eye: '<path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12z"/><circle cx="12" cy="12" r="3"/>',
    db: '<ellipse cx="12" cy="5.5" rx="7.5" ry="2.8"/><path d="M4.5 5.5v13c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8v-13"/><path d="M4.5 12c0 1.5 3.4 2.8 7.5 2.8s7.5-1.3 7.5-2.8"/>',
    chart: '<path d="M4 20V10M10 20V4M16 20v-7M22 20H2"/>',
    net: '<circle cx="5" cy="12" r="2.4"/><circle cx="19" cy="5" r="2.4"/><circle cx="19" cy="19" r="2.4"/><line x1="7.2" y1="11" x2="16.8" y2="5.9"/><line x1="7.2" y1="13" x2="16.8" y2="18.1"/>',
    spark: '<path d="M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.5 2.5M15.5 15.5 18 18M6 18l2.5-2.5M15.5 8.5 18 6"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18"/>',
    pin: '<path d="M12 21s-6.5-6.2-6.5-10.5a6.5 6.5 0 0 1 13 0C18.5 14.8 12 21 12 21z"/><circle cx="12" cy="10.3" r="2.2"/>',
    layers: '<path d="m12 3 9 5-9 5-9-5z"/><path d="m3 13 9 5 9-5"/>',
    play: '<path d="M8 5.5v13l11-6.5z" fill="currentColor" stroke="none"/>',
    uni: '<path d="M2 9 12 4l10 5-10 5z"/><path d="M6 11v5c0 1.5 2.7 3 6 3s6-1.5 6-3v-5"/>'
  };
  var sprite = '<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>';
  Object.keys(ICONS).forEach(function (k) {
    sprite += '<symbol id="i-' + k + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' + ICONS[k] + '</symbol>';
  });
  document.body.insertAdjacentHTML('afterbegin', sprite + '</defs></svg>');
  document.documentElement.classList.remove('no-js');

  /* mobile menu */
  var nav = document.querySelector('.site-nav'), mb = document.querySelector('.menu-btn');
  if (nav && mb) {
    var set = function (open) { nav.classList.toggle('open', open); mb.setAttribute('aria-expanded', open);
                                mb.setAttribute('aria-label', open ? 'Close menu' : 'Open menu'); };
    mb.addEventListener('click', function () { set(!nav.classList.contains('open')); });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { set(false); }); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && nav.classList.contains('open')) { set(false); mb.focus(); } });
  }

  /* scroll reveal */
  window.siteReveal = function () {
    if (!('IntersectionObserver' in window)) { document.querySelectorAll('.rv').forEach(function (e) { e.classList.add('in'); }); return; }
    var io = new IntersectionObserver(function (es) {
      es.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    document.querySelectorAll('.rv:not(.in)').forEach(function (el) { io.observe(el); });
  };

  /* contact links from SITE */
  if (window.SITE) {
    document.querySelectorAll('.js-email').forEach(function (a) {
      a.href = 'mailto:' + SITE.email; if (!a.textContent.trim()) a.textContent = SITE.email;
    });
    document.querySelectorAll('.js-year').forEach(function (s) { s.textContent = new Date().getFullYear(); });
  }

  /* project card (used by the home page); base = path prefix back to the site root */
  var esc = function (s) { return String(s).replace(/[&<>"]/g, function (c) { return { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]; }); };
  window.projectCard = function (p, base) {
    base = base || '';
    var href = /^https?:/.test(p.page) ? p.page : base + p.page;
    var src = p.cover && !/^https?:/.test(p.cover) ? base + p.cover : p.cover;
    var cls = p.status === 'Live' ? 'live' : p.status === 'In progress' ? 'progress' : '';
    var cover = src
      ? '<img src="' + esc(src) + '" alt="" loading="lazy">'
      : '<div class="cover-type"><div><b>' + esc(p.name[0]) + '<span>' + esc(p.name[1] || '') + '</span></b>' +
        (p.collection ? '<small>' + esc(p.collection) + '</small>' : '') + '</div></div>';
    return '<article class="pcard rv" data-tags="' + esc(p.tags.join('|')) + '">' +
      '<div class="cover">' + cover + '<span class="status ' + cls + '"><i></i>' + esc(p.status) + '</span></div>' +
      '<div class="body">' +
        (p.collection ? '<span class="coll">' + esc(p.collection) + '</span>' : '') +
        '<h3><a href="' + esc(href) + '">' + esc(p.name.join('')) + '</a></h3>' +
        '<div class="tag-line">' + esc(p.tagline) + '</div>' +
        '<p>' + esc(p.summary) + '</p>' +
        '<div class="tags">' + p.tags.map(function (t) { return '<span>' + esc(t) + '</span>'; }).join('') + '</div>' +
        '<div class="meta">' + esc(p.subject) + ' · ' + esc(p.date.slice(0, 4)) + '</div>' +
      '</div></article>';
  };
})();
