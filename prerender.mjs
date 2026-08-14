import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

const routes = [
  '/',
  '/about',
  '/services',
  '/services/1',
  '/services/2',
  '/services/3',
  '/services/4',
  '/services/5',
  '/services/6',
  '/pricing',
  '/careers',
  '/contact-us',
  '/checkout',
  '/privacy-policy',
  '/terms-conditions',
  '/refund-policy',
  '/cookie-policy',
];

async function run() {
  try {
    console.log('🚀 Starting pre-render...');
    
    // Load the client template HTML
    const templatePath = path.join(__dirname, 'dist', 'index.html');
    const template = fs.readFileSync(templatePath, 'utf8');

    // Import the compiled server entry point
    const serverEntryPath = path.join(__dirname, 'dist', 'server', 'entry-server.js');
    const { render } = await import(pathToFileURL(serverEntryPath).href);

    for (const route of routes) {
      const appHtml = render(route);
      
      // Inject the rendered HTML into the root div
      const html = template.replace(
        '<div id="root"></div>',
        `<div id="root">${appHtml}</div>`
      );

      // Determine output file path
      const outputDir = path.join(__dirname, 'dist', route === '/' ? '' : route);
      const outputFile = path.join(outputDir, 'index.html');

      // Ensure directory exists
      fs.mkdirSync(outputDir, { recursive: true });
      fs.writeFileSync(outputFile, html);
      console.log(`✅ Pre-rendered: ${route} → ${outputFile}`);
    }

    // Clean up server directory since Cloudflare Pages only needs the static build
    const serverDir = path.join(__dirname, 'dist', 'server');
    if (fs.existsSync(serverDir)) {
      fs.rmSync(serverDir, { recursive: true, force: true });
      console.log('🧹 Cleaned up server-side bundles');
    }
    
    console.log('🎉 Pre-render complete!');
  } catch (err) {
    console.error('❌ Pre-render failed:', err);
    process.exit(1);
  }
}

run();
