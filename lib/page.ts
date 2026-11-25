import { featured, getRepos, type Repo } from "./github";

const EMAIL = "pedromiguelrc99@gmail.com";
const SITE = "https://eternal-view.vercel.app";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const arrow = '<svg class="m-arrow" viewBox="0 0 12 12" aria-hidden="true"><path class="m-arrow__stem" d="M1 6h8"/><path class="m-arrow__head" d="M4.5 2.5 8 6l-3.5 3.5"/></svg>';

function row(r: Repo) {
  return `<li><a class="link rows__name" href="${esc(r.url)}" target="_blank" rel="noopener noreferrer">${esc(r.name)}</a>${
    r.language ? `<span class="rows__value">${esc(r.language)}</span>` : ""
  }${r.description ? `<p>${esc(r.description)}</p>` : ""}</li>`;
}

export async function renderPage(): Promise<string> {
  const repos = await getRepos();
  const top = featured.map((n) => repos.find((r) => r.name === n)).filter((r): r is Repo => !!r);
  const rest = repos.filter((r) => !top.includes(r));
  const year = new Date().getFullYear();
  const title = "Pedro Carvalho: software engineer in Porto";
  const description = "Software engineer at FanDuel in Porto, building backend services with Java and Spring Boot. Projects, tools and contact.";

  return `<!doctype html>
<html lang="en" data-type="service" data-radius="soft" data-buttons="solid" data-motion>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">
<title>${title}</title>
<meta name="description" content="${description}">
<meta property="og:type" content="website">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${SITE}/share.jpg">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" href="/favicon.svg" type="image/svg+xml">
<meta name="theme-color" content="#f7f9f8">
<link rel="canonical" href="${SITE}/">
<meta name="site-kind" content="other">
<meta name="page-type" content="service">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Host+Grotesk:wght@400..700&display=swap" rel="stylesheet">
<link rel="stylesheet" href="/assets/system.css">
<link rel="stylesheet" href="/assets/ui/cards.css">
<link rel="stylesheet" href="/assets/motion/motion.css">
<link rel="stylesheet" href="/assets/layout/layout.css">
<link rel="stylesheet" href="/assets/icons/icon.css">
<link rel="stylesheet" href="/assets/diagrams/diagram.css">
<style>
:root {
  --p-bg: #f7f9f8; --p-surface: #ebf0ee; --p-ink: #06525c; --p-muted: #2f737d;
  --p-accent: #06525c; --p-accent-ink: #f7f9f8; --p-action: #06525c; --p-action-ink: #f7f9f8;
  --p-inv-bg: #06525c; --p-inv-surface: #205d66; --p-inv-ink: #f7f9f8; --p-inv-muted: #c1d0d2;
  --p-inv-accent: #f7f9f8; --p-inv-accent-ink: #06525c; --p-inv-action: #f7f9f8; --p-inv-action-ink: #06525c;
  --font-display: "Host Grotesk", system-ui, sans-serif;
  --font-text: "Host Grotesk", system-ui, sans-serif;
  --display-weight: 400;
  --display-tracking: -0.035em;
  --display-tracking-xl: -0.04em;
}
/* the statement's resting words: 3:1 at least on the ground (the kit's 50% mix measured 2.6:1 with this palette) */
@media (prefers-reduced-motion: no-preference) { .mo-wh .mo-w:not(.is-on) { color: color-mix(in oklab, var(--ink) 68%, var(--bg)); } }
#projects .rows > li { padding-block: var(--s-3); }
@media (max-width: 359px) { .nav__actions .btn { display: none; } }
@media (max-width: 1099px) { #projects .rows--rest > li > p { display: none; } }
</style>
<script>document.documentElement.classList.add('m-enter');setTimeout(()=>document.documentElement.classList.add('m-enter-done'),700)</script>
<script>document.documentElement.classList.add('mo-js');setTimeout(()=>document.documentElement.classList.add('mo-safe'),2500)</script>
<link rel="modulepreload" href="/assets/moments/moments.js">
<link rel="modulepreload" href="/assets/moments/lib.js">
<link rel="modulepreload" href="/assets/moments/word-highlight/moment.js">
</head>
<body>
<!-- type: service
     deal: type garamond failed hero-lines, so the next pairings (schibsted failed too, then host); hero split, nav-split, footer-dark, close-type (close-photo needs a second photograph), rhythm dark-band (skills), buttons solid, mark dots
     moments: word-highlight in #about -->
<header class="nav nav--split">
  <div class="wrap nav__bar">
    <a class="skip-link" href="#top">Skip to content</a>
    <a class="nav__logo" href="#top"><span class="mark" data-mark="dots" aria-hidden="true"></span>Pedro Carvalho</a>
    <nav class="nav__links" aria-label="Main">
      <div class="nav__item"><a class="nav__link" href="#about">About</a></div>
      <div class="nav__item"><a class="nav__link" href="#skills">Skills</a></div>
      <div class="nav__item"><a class="nav__link" href="#projects">Projects</a></div>
    </nav>
    <div class="nav__actions">
      <a class="btn btn--primary" href="mailto:${EMAIL}">Email Pedro${arrow}</a>
    </div>
    <button class="nav__toggle" type="button" aria-expanded="false" aria-label="Menu"><svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" stroke-width="1.6" stroke-linecap="round"/></svg></button>
  </div>
</header>
<main id="top">
  <section class="hero hero--split" data-enter aria-labelledby="hero-h">
    <div class="wrap"><div class="hero-text grid hero__grid">
      <div class="hero__text span-5">
        <h1 id="hero-h">Software engineer in Porto</h1>
        <p class="hero__lead">I work at FanDuel, through Blip.pt, writing Java and Spring Boot. I'm also doing a master's in Software Engineering at ISEP.</p>
        <div class="btn-row"><a class="btn btn--primary" href="mailto:${EMAIL}">Email Pedro${arrow}</a><a class="btn btn--secondary" href="#projects">See my projects</a></div>
      </div>
      <div class="hero__media span-6 start-7">
        <img src="/img/pedro.jpg" srcset="/img/pedro-640.jpg 533w, /img/pedro.jpg 1000w" sizes="(max-width: 1023px) 100vw, 628px" alt="Black and white portrait of Pedro Carvalho, smiling with his hand on his cheek" style="--ly-pos: 55% 38%" fetchpriority="high" width="1000" height="1500">
      </div>
    </div></div>
  </section>

  <section class="section statement" id="about" data-moment="word-highlight" aria-label="About">
    <div class="wrap">
      <p class="mo-wh__text">I studied Computer Science at FCUP, and I'm now doing a master's in Software Engineering at ISEP. Before moving into development, I was president of one youth <strong>non-profit</strong> and treasurer of another.</p>
    </div>
  </section>

  <section class="section ground-inverse" id="skills" aria-labelledby="skills-h">
    <div class="wrap grid">
      <div class="span-5">
        <div class="section-head">
          <h2 id="skills-h">Tools for backend software. <span class="muted">What I use in my job.</span></h2>
        </div>
        <ul class="rows">
          <li><span class="rows__name">Build</span><span class="rows__value">Java, Spring Boot, Maven</span></li>
          <li><span class="rows__name">Data</span><span class="rows__value">Kafka, Cassandra</span></li>
          <li><span class="rows__name">Delivery</span><span class="rows__value">GitHub Actions, Jenkins, Buildkite</span></li>
          <li><span class="rows__name">Monitoring</span><span class="rows__value">Datadog</span></li>
          <li><span class="rows__name">Cloud</span><span class="rows__value">AWS</span></li>
        </ul>
      </div>
      <div class="panel span-6 start-7" style="--p-h: 520px"><div class="dg" data-diagram><script type="application/json">{"layout": "hub", "shape": "radial", "pulse": "none", "alt": "A backend at the centre, connected to the tools I use: Java, Spring Boot and Maven for building; Kafka and Cassandra for data; GitHub Actions, Jenkins and Buildkite for delivery; Datadog for monitoring; AWS for the cloud.", "center": {"label": "Backend", "icon": "ui:server"}, "spokes": [{"label": "Build", "children": [{"label": "Java", "icon": "java"}, {"label": "Spring Boot", "icon": "spring"}, {"label": "Maven", "icon": "logos:maven"}]}, {"label": "Data", "children": [{"label": "Kafka", "icon": "kafka"}, {"label": "Cassandra", "icon": "cassandra"}]}, {"label": "Delivery", "children": [{"label": "GitHub Actions", "icon": "github-actions"}, {"label": "Jenkins", "icon": "jenkins"}, {"label": "Buildkite", "icon": "buildkite"}]}, {"label": "Monitoring", "children": [{"label": "Datadog", "icon": "datadog"}]}, {"label": "Cloud", "children": [{"label": "AWS", "icon": "aws"}]}]}</script></div></div>
    </div>
  </section>

  <section class="section g2" id="projects" aria-labelledby="projects-h">
    <div class="wrap">
      <div>
        <div class="section-head">
          <h2 id="projects-h">Projects on GitHub. <span class="muted">Four to start with.</span></h2>
        </div>
        <ul class="rows">
          ${top.map(row).join("\n          ")}
        </ul>
      </div>
      <div>
        <ul class="rows rows--rest">
          ${rest.map(row).join("\n          ")}
        </ul>
      </div>
    </div>
  </section>
</main>
<footer class="footer closing footer--dark ground-inverse" id="contact" aria-labelledby="close-h">
  <div class="wrap">
    <div class="closing__cta close--type">
      <div class="section-head"><h2 id="close-h">Contact</h2></div>
      <a class="btn btn--primary btn--xl" href="mailto:${EMAIL}">Email Pedro${arrow}</a>
    </div>
    <div class="closing__links">
      <div class="grid">
        <div class="span-4 stack-5">
          <a class="nav__logo" href="#top"><span class="mark" data-mark="dots" aria-hidden="true"></span>Pedro Carvalho</a>
          <p class="footer__lede">Software engineer in Porto.</p>
        </div>
        <div class="span-4 start-5 footer__col"><h3>Pages</h3><ul><li><a href="#about">About</a></li><li><a href="#skills">Skills</a></li><li><a href="#projects">Projects</a></li></ul></div>
        <div class="span-4 footer__col"><h3>Elsewhere</h3><ul><li><a href="https://github.com/pedrocarvalho77" target="_blank" rel="noopener noreferrer">GitHub</a></li><li><a href="https://www.linkedin.com/in/pedrocarvalho77/" target="_blank" rel="noopener noreferrer">LinkedIn</a></li><li><a href="https://twitter.com/pedro_mcarvalho" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li></ul></div>
      </div>
      <div class="footer__legal">
        <span>&copy; ${year} Pedro Carvalho</span>
        <span>Product names and logos are trademarks of their owners</span>
      </div>
    </div>
  </div>
</footer>
<script type="module" src="/assets/system.js"></script>
<script type="module" src="/assets/layout/layout.js"></script>
<script type="module" src="/assets/diagrams/mount.js"></script>
</body>
</html>
`;
}
