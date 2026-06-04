// petal-theme.js — dark mode toggle + border flowers
// No dependencies. ~1KB.

(function () {
  'use strict';

  // ── DARK MODE ──────────────────────────────────────────────
  var STORAGE_KEY = 'petal-theme';

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    var btn = document.getElementById('theme-toggle');
    if (btn) btn.textContent = theme === 'dark' ? '☀️' : '🌙';
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
  function plantFlowers() {
    var strips = document.querySelectorAll('.border-strip');
    strips.forEach(function (strip) {
      var height = strip.offsetHeight;
      // space flowers every 55px, start 32px from top
      for (var y = 32; y < height - 20; y += 55) {
        var flower = document.createElement('div');
        flower.className = 'flower';
        flower.style.top = y + 'px';
        strip.appendChild(flower);
      }
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
