const fs = require('fs-extra');
const path = require('path');

async function createRedirects() {
  const buildDir = path.join(__dirname, '..', 'build');
  const enUSDir = path.join(buildDir, 'en-US');

  console.log('Creating redirect structure for /en-US/* -> /*');

  // Create en-US directory
  await fs.ensureDir(enUSDir);

  // Create a redirect HTML page that handles any path
  const redirectHTML = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
        // Get current path and remove /en-US prefix
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace('/en-US', '') || '/';
        const newUrl = window.location.origin + newPath + window.location.search + window.location.hash;

        // Redirect immediately
        window.location.replace(newUrl);
    </script>
    <meta http-equiv="refresh" content="0; url=/">
</head>
<body>
    <p>Redirecting...</p>
</body>
</html>`;

  // Function to mirror directory structure and create redirect pages
  async function mirrorStructure(srcDir, destDir) {
    const items = await fs.readdir(srcDir);

    for (const item of items) {
      const srcPath = path.join(srcDir, item);
      const destPath = path.join(destDir, item);
      const stat = await fs.stat(srcPath);

      if (stat.isDirectory()) {
        // Create directory and mirror its contents
        await fs.ensureDir(destPath);
        await mirrorStructure(srcPath, destPath);
      } else if (item === 'index.html') {
        // Replace index.html files with redirect pages
        await fs.writeFile(destPath, redirectHTML);
      }
    }
  }

  // Mirror the structure from root build directory to en-US
  const itemsToMirror = ['docs', 'leap-sign', 'leap-visma-employees', 'leap-visma-payroll', 'leap-visma-expense', 'enkel-ehf', 'legal'];

  for (const item of itemsToMirror) {
    const srcPath = path.join(buildDir, item);
    const destPath = path.join(enUSDir, item);

    if (await fs.pathExists(srcPath)) {
      await fs.ensureDir(destPath);
      await mirrorStructure(srcPath, destPath);
      console.log(`Created redirect structure for /en-US/${item}`);
    }
  }

  // Create root redirect page
  await fs.writeFile(path.join(enUSDir, 'index.html'), redirectHTML);

  console.log('Created comprehensive redirect structure from /en-US/* to /*');

  // Create redirects from /leap-ehf/* to /enkel-ehf/*
  const leapEhfRedirectHTML = `<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8">
    <title>Redirecting...</title>
    <script>
        const currentPath = window.location.pathname;
        const newPath = currentPath.replace('/leap-ehf', '/enkel-ehf') || '/enkel-ehf/';
        const newUrl = window.location.origin + newPath + window.location.search + window.location.hash;
        window.location.replace(newUrl);
    </script>
    <meta http-equiv="refresh" content="0; url=/enkel-ehf/">
</head>
<body>
    <p>Redirecting...</p>
</body>
</html>`;

  const enkelEhfSrc = path.join(buildDir, 'enkel-ehf');
  const leapEhfDest = path.join(buildDir, 'leap-ehf');

  if (await fs.pathExists(enkelEhfSrc)) {
    await fs.ensureDir(leapEhfDest);

    async function mirrorAsRedirects(srcDir, destDir) {
      const items = await fs.readdir(srcDir);
      for (const item of items) {
        const srcPath = path.join(srcDir, item);
        const destPath = path.join(destDir, item);
        const stat = await fs.stat(srcPath);
        if (stat.isDirectory()) {
          await fs.ensureDir(destPath);
          await mirrorAsRedirects(srcPath, destPath);
        } else if (item === 'index.html') {
          await fs.writeFile(destPath, leapEhfRedirectHTML);
        }
      }
    }

    await mirrorAsRedirects(enkelEhfSrc, leapEhfDest);
    console.log('Created redirect structure from /leap-ehf/* to /enkel-ehf/*');
  }
}

createRedirects().catch(console.error);