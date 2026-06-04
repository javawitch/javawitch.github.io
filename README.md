# 🌸 Petal Theme

A playful, lightweight Jekyll theme for GitHub Pages.

**Design:** High contrast B&W + millennial pink accent + `#FFF47F` flowers  
**Weight target:** HTML <15KB · CSS <12KB · JS <2KB · Zero image requests

---

## Quick Start

1. Copy all files into your GitHub Pages repo root.
2. Edit `_config.yml` — update `title`, `url`, and nav links.
3. Push to GitHub. Done.

### Local dev

```bash
bundle install
bundle exec jekyll serve
```

---

## File Structure

```
├── _config.yml          # Site settings & nav
├── _layouts/
│   ├── default.html     # Base layout (all pages)
│   └── post.html        # Blog post layout
├── _includes/
│   ├── head.html        # <head> with meta + CSS
│   └── header.html      # Nav + subbar
├── _sass/
│   └── petal.scss       # All styles (single file)
├── assets/
│   ├── css/style.scss   # Entry point (imports petal.scss)
│   └── js/petal.js      # Dark mode toggle + flowers
├── _drafts/             # For housing draft blog posts
└── index.html           # Post list homepage
```

---

## Customization

### Change the accent color
In `_sass/petal.scss`, update the `:root` block:
```scss
--accent: #f4a7b9;   // millennial pink → swap to any color
--flower: #FFF47F;   // border flowers
--link:   #c0634f;   // body link color
```

### Change the border pattern
The dots are pure CSS in `.border-strip`:
```scss
background:
  radial-gradient(circle, var(--accent) 38%, transparent 38%) 0 0 / 10px 10px,
  radial-gradient(circle, var(--accent) 38%, transparent 38%) 5px 5px / 10px 10px,
  var(--bg);
```
Tweak `38%` (dot size) and `10px 10px` (grid spacing) to taste.

### Adjust flower frequency
In `assets/js/petal.js`, change the `55` in the loop:
```js
for (var y = 32; y < height - 20; y += 55) { ... }
// smaller number = more flowers, larger = fewer
```

---

## Dark Mode

Respects `prefers-color-scheme` automatically. Users can also toggle manually — preference is saved to `localStorage`. No flash on load (theme is applied before first paint via inline script in `<head>`).

---

## License

MIT — use freely, credit appreciated ✿
