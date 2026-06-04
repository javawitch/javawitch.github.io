// petal-theme.js — dark mode toggle + border flowers
// No dependencies. ~1KB.

(function () {
  'use strict';

  // ── DARK MODE ──────────────────────────────────────────────
  var STORAGE_KEY = 'petal-theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var txt = document.querySelector('.toggle-txt');
    if (txt) txt.textContent = theme === 'dark' ? 'dark' : 'light';
    localStorage.setItem(STORAGE_KEY, theme);
  }

  function initTheme() {
    var saved = localStorage.getItem(STORAGE_KEY);
    var preferred = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    applyTheme(saved || preferred);
  }

  function toggleTheme() {
    var current = document.documentElement.getAttribute('data-theme');
    applyTheme(current === 'dark' ? 'light' : 'dark');
  }

  // ── FLOWERS ────────────────────────────────────────────────
  function blossomSVG(cx, cy) {
  var size = 16;
  var r = size * 0.38;
  var cr = size * 0.18;
  var petals = '', notches = '', stamens = '';

  for (var i = 0; i < 5; i++) {
    var angle = (i * 72 - 90) * Math.PI / 180;
    var px = cx + Math.cos(angle) * r;
    var py = cy + Math.sin(angle) * r;
    var rot = (i * 72 - 90);
    petals += '<ellipse cx="' + px.toFixed(1) + '" cy="' + py.toFixed(1) + '" rx="' + (size*0.28).toFixed(1) + '" ry="' + (size*0.18).toFixed(1) + '" fill="#FFF47F" transform="rotate(' + rot + ' ' + px.toFixed(1) + ' ' + py.toFixed(1) + ')"/>';
  }

  for (var j = 0; j < 5; j++) {
    var na = (j * 72 - 90) * Math.PI / 180;
    var nx = cx + Math.cos(na) * (r + size * 0.22);
    var ny = cy + Math.sin(na) * (r + size * 0.22);
    notches += '<ellipse cx="' + nx.toFixed(1) + '" cy="' + ny.toFixed(1) + '" rx="' + (size*0.09).toFixed(1) + '" ry="' + (size*0.06).toFixed(1) + '" fill="#e8b84b" opacity="0.6" transform="rotate(' + (j*72-90) + ' ' + nx.toFixed(1) + ' ' + ny.toFixed(1) + ')"/>';
  }

  for (var k = 0; k < 5; k++) {
    var ka = (k * 72 - 90) * Math.PI / 180;
    var sx1 = cx + Math.cos(ka) * (cr * 0.4);
    var sy1 = cy + Math.sin(ka) * (cr * 0.4);
    var sx2 = cx + Math.cos(ka) * (cr * 1.4);
    var sy2 = cy + Math.sin(ka) * (cr * 1.4);
    stamens += '<line x1="' + sx1.toFixed(1) + '" y1="' + sy1.toFixed(1) + '" x2="' + sx2.toFixed(1) + '" y2="' + sy2.toFixed(1) + '" stroke="#e8b84b" stroke-width="1" opacity="0.8"/>';
    stamens += '<circle cx="' + sx2.toFixed(1) + '" cy="' + sy2.toFixed(1) + '" r="' + (size*0.05).toFixed(1) + '" fill="#e8b84b" opacity="0.9"/>';
  }

  var center = '<circle cx="' + cx + '" cy="' + cy + '" r="' + cr.toFixed(1) + '" fill="#e8b84b"/>';
  return petals + notches + stamens + center;
}

function plantFlowers() {
  var strips = document.querySelectorAll('.border-strip');
  strips.forEach(function(strip) {
    var height = strip.offsetHeight;
    var size = 16;
    var cx = strip.offsetWidth / 2;
    var svgContent = '';

    for (var y = 32; y < height - 20; y += 55) {
      svgContent += blossomSVG(cx, y);
    }

    var svg = '<svg xmlns="http://www.w3.org/2000/svg" style="position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;">' + svgContent + '</svg>';
    strip.insertAdjacentHTML('beforeend', svg);
  });
}

  // ── INIT ───────────────────────────────────────────────────
  document.addEventListener('DOMContentLoaded', function () {
    initTheme();
    plantFlowers();

    var btn = document.getElementById('theme-toggle');
    if (btn) btn.addEventListener('click', toggleTheme);
  });
})();
