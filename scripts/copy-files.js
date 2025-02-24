const fs = require('fs');
const path = require('path');

const files = ['_headers', '_redirects', '_routes.json'];
const outDir = path.join(process.cwd(), 'out');

// Create .nojekyll file
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

// Copy each file to the out directory
files.forEach(file => {
  try {
    if (fs.existsSync(file)) {
      fs.copyFileSync(file, path.join(outDir, file));
      console.log(`Copied ${file} to out directory`);
    }
  } catch (err) {
    console.warn(`Warning: Could not copy ${file}:`, err);
  }
}); 