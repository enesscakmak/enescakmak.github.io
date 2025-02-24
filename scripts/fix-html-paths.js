const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all HTML files in the out directory
const htmlFiles = glob.sync('out/**/*.html');

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace relative paths (./_next) with absolute paths (/_next)
  content = content.replace(/"\.\/_next\//g, '"/_next/');
  
  // Fix other relative paths if needed
  content = content.replace(/"\.\/([^"]+)"/g, '"/$1"');
  
  fs.writeFileSync(file, content);
  console.log(`Fixed paths in ${file}`);
}); 