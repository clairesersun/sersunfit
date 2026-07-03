/**
 * ============================================
 * BUILD-TIME STATIC PRERENDER (from Supabase)
 * ============================================
 *
 * Runs automatically after `npm run build` (see package.json "postbuild").
 *
 * WHAT IT DOES
 *   1. Fetches published blog posts from Supabase.
 *   2. For each post, writes a fully-static HTML file at
 *        build/blog/{slug}/index.html
 *      containing the real article text, correct <title>/description/canonical,
 *      Open Graph tags, and BlogPosting JSON-LD — so search engines AND AI
 *      crawlers (which mostly do NOT execute JavaScript) can read and cite the
 *      content. React still boots on load and takes over normally.
 *   3. Regenerates build/sitemap.xml with every static route + every post URL.
 *
 * SAFETY
 *   Never fails the build. If Supabase is unreachable or credentials are
 *   missing, it logs a warning, still writes the static-route sitemap, and
 *   exits 0.
 *
 * ============================================
 */

const fs = require('fs');
const path = require('path');

const SITE = process.env.REACT_APP_SITE_URL || 'https://www.clairesersunfitness.com';
const BUILD_DIR = path.join(__dirname, '..', 'build');
const OG_IMAGE = `${SITE}/images/Headshot.webp`;

// Fixed routes (kept in sync with src/utils/seo.js PAGE_SEO).
const STATIC_ROUTES = [
  { loc: '/', priority: '1.0' },
  { loc: '/coaching', priority: '0.9' },
  { loc: '/kilimanjaro-training-plan', priority: '0.9' },
  { loc: '/about', priority: '0.8' },
  { loc: '/blog', priority: '0.8' },
  { loc: '/corporate', priority: '0.7' },
  { loc: '/resources', priority: '0.7' },
  { loc: '/contact', priority: '0.6' },
  { loc: '/privacy', priority: '0.3' },
];

// ---------- helpers ----------

/** Minimal .env loader (avoids adding a dotenv dependency). */
function loadEnv() {
  const envPath = path.join(__dirname, '..', '.env');
  if (!fs.existsSync(envPath)) return;
  for (const line of fs.readFileSync(envPath, 'utf8').split('\n')) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*)\s*$/);
    if (m && !process.env[m[1]]) {
      process.env[m[1]] = m[2].replace(/^["']|["']$/g, '');
    }
  }
}

function escapeHtml(s = '') {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

/** Strip <script>/<style> from trusted-but-sanitized HTML bodies. */
function stripDangerous(html = '') {
  return html.replace(/<(script|style)[\s\S]*?<\/\1>/gi, '');
}

function todayISO(dateStr) {
  const d = dateStr ? new Date(dateStr) : new Date();
  return isNaN(d.getTime()) ? new Date().toISOString().slice(0, 10) : d.toISOString().slice(0, 10);
}

/** Detect whether stored content is already HTML (mirrors BlogPost.jsx). */
const isHTML = (str = '') => /<(p|h[1-6]|div|ul|ol|li|br|img|a|span|strong|em)\b/i.test(str);

function buildSitemap(posts) {
  const urls = [];
  for (const r of STATIC_ROUTES) {
    urls.push(
      `  <url>\n    <loc>${SITE}${r.loc}</loc>\n    <lastmod>${todayISO()}</lastmod>\n    <priority>${r.priority}</priority>\n  </url>`
    );
  }
  for (const p of posts) {
    urls.push(
      `  <url>\n    <loc>${SITE}/blog/${p.slug}</loc>\n    <lastmod>${todayISO(
        p.published_at || p.created_at
      )}</lastmod>\n    <priority>0.7</priority>\n  </url>`
    );
  }
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join(
    '\n'
  )}\n</urlset>\n`;
}

function buildPostHtml(shell, post, articleHtml) {
  const title = `${post.title} | Claire Sersun Fitness`;
  const desc = post.meta_description || post.excerpt || `${post.title} — Claire Sersun Fitness`;
  const canonical = `${SITE}/blog/${post.slug}`;
  const published = post.published_at || post.created_at;
  const modified = post.created_at || post.published_at;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: desc,
    url: canonical,
    mainEntityOfPage: canonical,
    datePublished: published ? new Date(published).toISOString() : undefined,
    dateModified: modified ? new Date(modified).toISOString() : undefined,
    image: OG_IMAGE,
    keywords: post.keyword || undefined,
    author: { '@type': 'Person', '@id': `${SITE}/#claire`, name: 'Claire Sersun' },
    publisher: { '@id': `${SITE}/#business` },
  };
  const ldScript = `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>`;

  let html = shell;

  // <title>
  html = html.replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(title)}</title>`);

  // meta description
  html = html.replace(
    /<meta name="description"[^>]*>/,
    `<meta name="description" content="${escapeHtml(desc)}" />`
  );

  // canonical
  if (/<link rel="canonical"[^>]*>/.test(html)) {
    html = html.replace(/<link rel="canonical"[^>]*>/, `<link rel="canonical" href="${canonical}" />`);
  } else {
    html = html.replace('</head>', `  <link rel="canonical" href="${canonical}" />\n</head>`);
  }

  // Open Graph / Twitter
  html = html
    .replace(/<meta property="og:title"[^>]*>/, `<meta property="og:title" content="${escapeHtml(title)}" />`)
    .replace(
      /<meta property="og:description"[^>]*>/,
      `<meta property="og:description" content="${escapeHtml(desc)}" />`
    )
    .replace(/<meta property="og:url"[^>]*>/, `<meta property="og:url" content="${canonical}" />`)
    .replace(/<meta property="og:type"[^>]*>/, `<meta property="og:type" content="article" />`)
    .replace(
      /<meta name="twitter:title"[^>]*>/,
      `<meta name="twitter:title" content="${escapeHtml(title)}" />`
    )
    .replace(
      /<meta name="twitter:description"[^>]*>/,
      `<meta name="twitter:description" content="${escapeHtml(desc)}" />`
    );

  // BlogPosting JSON-LD before </head>
  html = html.replace('</head>', `  ${ldScript}\n</head>`);

  // Inject prerendered article into #root
  html = html.replace('<div id="root"></div>', `<div id="root">${articleHtml}</div>`);

  return html;
}

function renderArticle(post, bodyHtml) {
  const date = post.published_at || post.created_at;
  const dateLabel = date
    ? new Date(date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
    : '';
  const keyword = post.keyword ? `<span class="pre-keyword">${escapeHtml(post.keyword)}</span>` : '';
  return (
    `<main id="main-content">` +
    `<article>` +
    `<p class="pre-meta">${escapeHtml(dateLabel)} ${keyword}</p>` +
    `<h1>${escapeHtml(post.title)}</h1>` +
    `<div class="blog-prose">${bodyHtml}</div>` +
    `</article>` +
    `</main>`
  );
}

// ---------- main ----------

async function main() {
  loadEnv();

  const shellPath = path.join(BUILD_DIR, 'index.html');
  if (!fs.existsSync(shellPath)) {
    console.warn('[prerender] build/index.html not found — run `npm run build` first. Skipping.');
    return;
  }
  const shell = fs.readFileSync(shellPath, 'utf8');

  let posts = [];
  const url = process.env.REACT_APP_SUPABASE_URL;
  const key = process.env.REACT_APP_SUPABASE_ANON_KEY;

  if (!url || !key) {
    console.warn('[prerender] Supabase credentials missing — writing static-route sitemap only.');
  } else {
    try {
      const { createClient } = require('@supabase/supabase-js');
      const supabase = createClient(url, key);
      const { data, error } = await supabase
        .from('blog_posts')
        .select('id, title, slug, keyword, body, meta_description, sources, created_at, published_at')
        .eq('status', 'Published')
        .lte('published_at', new Date().toISOString())
        .order('published_at', { ascending: false });
      if (error) throw error;
      posts = (data || []).filter((p) => p.slug);
    } catch (e) {
      console.warn(`[prerender] Supabase fetch failed (${e.message}) — writing static-route sitemap only.`);
      posts = [];
    }
  }

  // Markdown -> HTML (only needed if any post is stored as markdown)
  let marked = null;
  if (posts.some((p) => !isHTML(p.body || ''))) {
    try {
      ({ marked } = await import('marked'));
    } catch (e) {
      console.warn('[prerender] `marked` not installed — markdown posts will be emitted as plain text.');
    }
  }

  let written = 0;
  for (const post of posts) {
    const raw = post.body || '';
    let bodyHtml;
    if (isHTML(raw)) {
      bodyHtml = stripDangerous(raw);
    } else if (marked) {
      bodyHtml = stripDangerous(marked.parse(raw));
    } else {
      bodyHtml = `<p>${escapeHtml(raw)}</p>`;
    }

    const excerpt = post.meta_description || '';
    const articleHtml = renderArticle({ ...post, excerpt }, bodyHtml);
    const pageHtml = buildPostHtml(shell, { ...post, excerpt }, articleHtml);

    const outDir = path.join(BUILD_DIR, 'blog', post.slug);
    fs.mkdirSync(outDir, { recursive: true });
    fs.writeFileSync(path.join(outDir, 'index.html'), pageHtml, 'utf8');
    written++;
  }

  // Sitemap (static routes + all posts)
  const sitemap = buildSitemap(posts);
  fs.writeFileSync(path.join(BUILD_DIR, 'sitemap.xml'), sitemap, 'utf8');

  console.log(
    `[prerender] Wrote ${written} static blog page(s) and sitemap.xml with ${STATIC_ROUTES.length + posts.length} URL(s).`
  );
}

main().catch((e) => {
  // Never break the deploy.
  console.warn(`[prerender] Unexpected error, continuing: ${e.message}`);
});
