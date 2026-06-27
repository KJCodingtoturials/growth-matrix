const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// 1. Announcements
html = html.replace(/New Batch 1 Class starts on <strong>28 June \(Monday\)<\/strong> at <strong>10:15 PM<\/strong> PKT\. Admission Fee Rs\. 300 only\. \(Next month.*?Seats are filling fast, register now!/g, 
  'New Batch 2 Classes for Digital Marketing & AI Web Development starting soon. Admission Fee Rs. 1000 each. Seats are filling fast, register now!');

// 2. Welcome Modal
html = html.replace(/<h2>GMD Batch 1 Starts 28 June!<\/h2>\s*<p>Join <strong>AI Web Dev<\/strong> \(Batch 1\) for Rs\. 300 only\.<\/p>/g,
  '<h2>GMD Batch 2 Enrollments Open!</h2>\n          <p>Join <strong>AI Web Dev</strong> or <strong>Digital Marketing</strong> (Batch 2) for Rs. 1000 each.</p>');

// 3. Hero Section
html = html.replace(/BATCH 1 LIVE — 28 JUNE/g, 'BATCH 2 ENROLLMENTS OPEN');
html = html.replace(/Online — Rs\. 300 Se Shuru/g, 'Online — Rs. 1000 Se Shuru');
html = html.replace(/Apply Now — Rs\. 300/g, 'Apply Now — Rs. 1000');
html = html.replace(/⚡ Batch 1 Starting/g, '⚡ Batch 2 Open');
html = html.replace(/<span class="badge badge-live" style="font-size: 0\.65rem;">28 June 2026<\/span>/g, '<span class="badge badge-live" style="font-size: 0.65rem;">Limited Seats</span>');
html = html.replace(/>Rs\. 300<\/span>/g, '>Rs. 1000</span>');
html = html.replace(/Note: Next month, Digital Marketing &amp; Meta Ads course bhi shuru hoga — fee Rs\. 1000/g, 'Note: Digital Marketing &amp; Meta Ads course is also available in Batch 2');

// 4. Stats
html = html.replace(/let coursesCount = 0;\s*const coursesTarget = 4;/g, 'let coursesCount = 0;\n        const coursesTarget = 2;');
html = html.replace(/coursesCount \+= 1;/g, 'coursesCount += 1;'); // just in case

// 5. Update courseDetailsData
const newCourseDetailsData = `{
        'digital-marketing': {
          title: 'Digital Marketing & Meta Ads',
          tagline: 'Batch 2 special program. Build business growth strategies, optimize ads, and capture target markets.',
          fee: 'Rs. 1000',
          timing: 'Alternate Days, 40 to 50 minutes duration',
          starts: 'Batch 2',
          badgeColor: 'badge-blue',
          description: 'Businesses aur brands ki growth, search engine algorithms optimization, aur target lead generation ka premium course.',
          syllabi: [
            'Module 1 - Digital Marketing Fundamentals: Digital marketing ki ahmiyat aur scope. Traditional vs Digital Marketing. Freelancer, agency owner, ya job seeker ke liye opportunities. Buyer Persona aur Target Audience ki pehchan. Social Media Marketing (SMM) platforms overview.',
            'Module 2 - Meta Ecosystem & Organic Setup: Facebook Profile vs Page ka farq. Professional Page aur Instagram Business account banana aur optimize karna. WhatsApp integration. Meta Business Suite ka deep dive (Posts/Reels scheduling, Unified Inbox, Insights).',
            'Module 3 - Meta Ads Manager (Basics): Boost button aur Ads Manager ka farq. Business Manager aur Ad Account creation. Campaign, Ad Set, aur Ad level structure. Sahi Campaign Objectives chun\\'na. Budgeting, Scheduling, aur Basic Audience Targeting.',
            'Module 4 - Meta Ads (Advanced Strategies): Detailed Targeting (Demographics, Interests). Meta Pixel aur Conversions API (Events Tracking). Custom aur Lookalike Audiences (LAL). Retargeting Campaigns, A/B Testing, aur Ads Metrics (CTR, CPC, ROAS) analytics.',
            'Module 5 - Ad Creatives & Copywriting: Aisi Ad Copy likhna jo click par majboor kare (Headlines, Primary text). Canva ya basic tools ke zariye attention-grabbing images aur video ads banana. Facebook Ad Policies aur account bans se bachne ke tareeqay.',
            'Module 6 - Client Hunting & Freelancing: Dummy projects se portfolio banana. Local (Restaurants, Real Estate) aur International (LinkedIn, Cold Email) clients hunt karna. Fiverr/Upwork profile setup, Client meeting/closing, aur Pricing Strategy (Retainer, Fixed).'
          ],
          features: [
            'Alternate Day Live Classes',
            'LMS recordings repository access',
            'Active marketing campaigns live evaluation',
            'Freelancing tips for digital marketers'
          ]
        },
        'ai-web-dev': {
          title: 'AI Advance-Webdevelopment Course',
          tagline: 'Batch 2 flagship program. Learn Vibe Coding, WordPress, AI tools, GitHub & Earning.',
          fee: 'Rs. 1000',
          timing: '6 Days a week class, 40 to 50 minutes duration',
          starts: 'Batch 2',
          badgeColor: 'badge-gold',
          description: 'Seekhein modern Vibe Coding workflows, LLM prompting (Google AI Studio, Antigravity, Lovable, Codex), localhost WordPress installation, backend integration aur freelancing/earning opportunities.',
          syllabi: [
            'Week 1: Vibe Coding fundamentals, Types of websites, LLMs & prompting, HTML vs CSS, local WordPress installation on localhost, authentication and deployment basics.',
            'Week 2: WordPress development details, Customizing Premium Themes, Plugins configuration, and website layout building.',
            'Week 3: Advanced IDEs & LLM tools (Google AI Studio, Antigravity, Lovable, Codex). Building and remixing full websites using AI tools, and saving code on GitHub.',
            'Week 4: Backend database setups, User Authentication integration, web deployment, and freelancing/online earning opportunities.'
          ],
          features: [
            'Daily Live Classes (40-50 minutes)',
            'Full recording archive access',
            'Seniors & mentors bug fixing support group',
            'Completion certificate from GMD Academy'
          ]
        }
      }`;
// We need to replace `const courseDetailsData = { ... };` with our new object.
// The regex finds `const courseDetailsData = {` and matches everything until `const renderHome =` or `const renderCourseDetail =`
html = html.replace(/const courseDetailsData = \{[\s\S]*?\};\s*(?=const render|function render|const app)/, `const courseDetailsData = ${newCourseDetailsData};\n\n      `);

// 6. Update coursesList
const newCoursesList = `[
            {
              id: 'digital-marketing',
              batch: 'batch-2',
              title: 'Digital Marketing & Meta Ads',
              description: 'Seekhein SEO, Content Strategy, Branding aur social media marketing taake kisi bhi business ko online grow kar sakein.',
              fee: 'Rs. 1000',
              timing: 'Alternate Days, Live + Recorded',
              duration: '2 Months',
              starts: 'Batch 2',
              badgeColor: 'badge-blue',
              badgeText: 'Batch 2 (Open)'
            },
            {
              id: 'ai-web-dev',
              batch: 'batch-2',
              title: 'AI Advance-Webdevelopment Course',
              description: 'Seekhein vibe coding fundamentals, WordPress premium setup, Google AI Studio tools, Antigravity, GitHub portfolio aur online earning opportunities.',
              fee: 'Rs. 1000',
              timing: '6 Days a week, Live + Recorded',
              duration: '1 Month',
              starts: 'Batch 2',
              badgeColor: 'badge-gold',
              badgeText: 'Batch 2 (Open)'
            }
          ]`;
html = html.replace(/const coursesList = \[[\s\S]*?\];\s*(?=const container)/, `const coursesList = ${newCoursesList};\n          `);

// 7. Update Admission Form Options
// We replace the <select> options in the admission form
html = html.replace(/<option value="ai-web-dev">AI Web Development & Vibe Coding \(Batch 1 - Rs\. 300\)<\/option>[\s\S]*?<option value="ai-course">Artificial Intelligence \(August Batch - Rs\. 1000\)<\/option>/, 
  `<option value="digital-marketing">Digital Marketing & Meta Ads (Batch 2 - Rs. 1000)</option>
                      <option value="ai-web-dev">AI Advance-Webdevelopment Course (Batch 2 - Rs. 1000)</option>`);

// 8. Update admission course labels in JS
html = html.replace(/const courseLabels = \{[\s\S]*?\};/, `const courseLabels = {
            'digital-marketing': 'Digital Marketing & Meta Ads (Batch 2 - Rs. 1000)',
            'ai-web-dev': 'AI Advance-Webdevelopment Course (Batch 2 - Rs. 1000)'
          };`);

fs.writeFileSync('index.html', html);
console.log("Patched index.html");
