const fs = require('fs');
let html = fs.readFileSync('index.html', 'utf8');

// A: Admission Form
html = html.replace(
  /<select id="form-course" class="form-control">[\s\S]*?<\/select>/,
  `<select id="form-course" class="form-control">
                      <option value="ai-web-dev">AI Advance-Webdevelopment (Batch 2 - Rs. 1000)</option>
                      <option value="digital-marketing">Digital Marketing & Meta Ads (Batch 2 - Rs. 1000)</option>
                    </select>`
);

// B: Schedule Template
html = html.replace(
  /<div style="margin-bottom: 25px; border-bottom: 1px dashed var\(--border-light\); padding-bottom: 15px;">[\s\S]*?<div>\s*<span class="badge badge-blue".*?Batch 2 \(August\)[\s\S]*?<\/div>/,
  `<div style="margin-bottom: 25px; border-bottom: 1px dashed var(--border-light); padding-bottom: 15px;">
                  <span class="badge badge-gold" style="margin-bottom: 10px;">Admissions Start: 1 July 2026</span>
                  <h4 style="font-size: 1.05rem; margin-bottom: 6px;">AI Advance-Webdevelopment Course</h4>
                  <p style="color: var(--text-secondary); font-size: 0.9rem;">
                    Is course ki classes haftay me 6 din hongi. Regular daily work for 1 month. Fee Rs. 1000.
                  </p>
                </div>

                <div>
                  <span class="badge badge-blue" style="margin-bottom: 10px;">Admissions Start: 1 July 2026</span>
                  <h4 style="font-size: 1.05rem; margin-bottom: 6px;">Digital Marketing & Meta Ads</h4>
                  <p style="color: var(--text-secondary); font-size: 0.9rem; line-height: 1.6;">
                    Is course ki classes alternate days hongi. Total duration 2 months hai. Fee Rs. 1000.
                  </p>
                </div>`
);

// C: Home page schedule summary
html = html.replace(
  /GMD me courses do different batches me split hain\. Batch 1 active hai aur Batch 2 August me shuru hoga\./,
  'GMD me sirf 2 premium courses hain. Dono courses ke admissions 1 July 2026 se start honge.'
);

// D: Next live class text
html = html.replace(
  /Next Live Class is scheduled on <strong>28 June 2026<\/strong>\./g,
  'Admissions are starting on <strong>1 July 2026</strong>.'
);

fs.writeFileSync('index.html', html);
console.log('Patched schedule and admission details in index.html');
