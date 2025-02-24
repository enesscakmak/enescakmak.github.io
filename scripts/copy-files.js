const fs = require('fs');
const path = require('path');

const files = ['_headers', '_redirects', '_routes.json'];
const outDir = path.join(process.cwd(), 'out');

// Create .nojekyll file
fs.writeFileSync(path.join(outDir, '.nojekyll'), '');

// Copy each file to the out directory
files.forEach(file => {
  try {
    const sourcePath = path.join(process.cwd(), 'public', file);
    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, path.join(outDir, file));
      console.log(`Copied ${file} to out directory`);
    } else {
      console.log(`File ${file} not found in public directory`);
    }
  } catch (err) {
    console.warn(`Warning: Could not copy ${file}:`, err);
  }
}); 