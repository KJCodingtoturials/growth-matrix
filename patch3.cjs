const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

const targetCSS = `.hero-visual {
        flex: 0.8;
        display: flex;
        justify-content: center;
        align-items: center;
      }`;
      
const replacementCSS = `.hero-visual {
        flex: 0.8;
        display: flex;
        justify-content: center;
        align-items: center;
      }
      @media (max-width: 900px) {
        .hero-content, .hero-visual { flex: none; width: 100%; }
      }`;

html = html.replace(targetCSS, replacementCSS);

fs.writeFileSync('index.html', html);
console.log("Patched index.html CSS!");
