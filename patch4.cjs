const fs = require('fs');

let html = fs.readFileSync('index.html', 'utf8');

const targetStr = `          syllabi: [
            'Week 1: Vibe Coding fundamentals, Types of websites, LLMs & prompting, HTML vs CSS, local WordPress installation on localhost, authentication and deployment basics.',
            'Week 2: WordPress development details, Customizing Premium Themes, Plugins configuration, and website layout building.',
            'Week 3: Advanced IDEs & LLM tools (Google AI Studio, Antigravity, Lovable, Codex). Building and remixing full websites using AI tools, and saving code on GitHub.',
            'Week 4: Backend database setups, User Authentication integration, web deployment, and freelancing/online earning opportunities.'
          ],`;

const replacementStr = `          syllabi: [
            'Module 1 - Vibe Coding & Web Fundamentals: Vibe coding kya hai aur iska mindset. Static, Dynamic, Web Apps mein farq. Prompt Engineering for Developers (Good vs Bad Prompts). Code likhne se pehle Sitemap aur Wireframing.',
            'Module 2 - Local Environment & CMS Basics: Localhost Setup (XAMPP/Node.js environment). WordPress ko install karna, aur Vibe Coding ke zariye custom themes ya plugins mein AI ki madad se changes karna.',
            'Module 3 - Advanced AI Tools & Ecosystem: LLM IDEs Masterclass (Cursor, GitHub Copilot). AI-powered web builders se tezi se UI/UX design. Kisi bhi live website ka design apne style mein "remix" ya clone karna.',
            'Module 4 - Backend, APIs & Authentication: Third-party APIs (weather, payment) ko fetch aur display karna. Firebase/Supabase se User Signup/Login system. Database setup aur CRUD operations (Data read, write, update).',
            'Module 5 - Real-World Projects & Software Creation: Scratch se ek mukammal website (Front-end + Back-end) banana. Real-life problems solve karne wale tools (Downloader, Admin Panel). The Final Mega Project (Market ready web app).',
            'Module 6 - Portfolio Building & Client Hunting: Apne projects ko GitHub par host karna aur Resume mein add karna. Local aur International clients hunt karna (LinkedIn, Cold outreach). Fiverr/Upwork par gigs banana.'
          ],`;

if (html.includes(targetStr)) {
  html = html.replace(targetStr, replacementStr);
  fs.writeFileSync('index.html', html);
  console.log("Patched AI Web Dev Syllabus in index.html");
} else {
  console.log("Could not find the target AI Web Dev Syllabus string in index.html!");
}

// Update src/data/courses.js as well for consistency
try {
  let jsData = fs.readFileSync('src/data/courses.js', 'utf8');
  if (jsData.includes(targetStr)) {
    jsData = jsData.replace(targetStr, replacementStr);
    fs.writeFileSync('src/data/courses.js', jsData);
    console.log("Patched AI Web Dev Syllabus in src/data/courses.js");
  }
} catch(e) {
  console.log("Failed to patch src/data/courses.js: " + e.message);
}
