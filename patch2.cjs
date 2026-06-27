const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

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
      };`;

// Replace courseDetailsData
const startIdx1 = html.indexOf('const courseDetailsData = {');
const endIdx1 = html.indexOf('// Quiz State');
if(startIdx1 !== -1 && endIdx1 !== -1) {
  html = html.substring(0, startIdx1) + 'const courseDetailsData = ' + newCourseDetailsData + '\n\n      ' + html.substring(endIdx1);
} else {
  console.log("Could not find courseDetailsData block");
}

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
          ];`;

const startIdx2 = html.indexOf('const coursesList = [');
const endIdx2 = html.indexOf('const filtered = activeCourseTab ===');
if(startIdx2 !== -1 && endIdx2 !== -1) {
  html = html.substring(0, startIdx2) + 'const coursesList = ' + newCoursesList + '\n\n          ' + html.substring(endIdx2);
} else {
  console.log("Could not find coursesList block");
}

fs.writeFileSync('index.html', html);
console.log("Patched index.html again!");
