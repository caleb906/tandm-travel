/* T&M Travel — shared nav toggle + footer year. Loaded on every page. */
(function () {
  var yr = document.getElementById('yr');
  if (yr) yr.textContent = new Date().getFullYear();

  var t = document.getElementById('navToggle');
  var m = document.getElementById('navMenu');
  if (!t || !m) return;

  t.addEventListener('click', function () {
    var open = m.classList.toggle('open');
    t.setAttribute('aria-expanded', open);
    t.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  });
  m.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      m.classList.remove('open');
      t.setAttribute('aria-expanded', false);
    });
  });
})();
