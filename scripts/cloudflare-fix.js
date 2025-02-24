const fs = require('fs');
const path = require('path');
const glob = require('glob');

// Find all HTML files in the out directory
const htmlFiles = glob.sync('out/**/*.html');

htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace all instances of enesscakmak.github.io with enescakmak.net
  content = content.replace(/enesscakmak\.github\.io/g, 'enescakmak.net');
  
  // Remove any remaining /enesscakmak.github.io/ paths
  content = content.replace(/\/enesscakmak\.github\.io\//g, '/');
  
  // Fix relative paths
  content = content.replace(/"\.\/_next\//g, '"/_next/');
  content = content.replace(/"\.\/([^"]+)"/g, '"/$1"');
  
  // Update any hardcoded URLs
  content = content.replace(/https:\/\/enesscakmak\.github\.io/g, 'https://enescakmak.net');
  
  fs.writeFileSync(file, content);
  console.log(`Fixed paths in ${file}`);
});

// Also check JS files for hardcoded URLs
const jsFiles = glob.sync('out/_next/static/chunks/**/*.js');
jsFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  // Replace all instances of enesscakmak.github.io with enescakmak.net
  content = content.replace(/enesscakmak\.github\.io/g, 'enescakmak.net');
  
  // Remove any remaining /enesscakmak.github.io/ paths
  content = content.replace(/\/enesscakmak\.github\.io\//g, '/');
  
  fs.writeFileSync(file, content);
  console.log(`Fixed paths in ${file}`);
});