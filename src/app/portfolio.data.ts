export type ProjectCategory = 'website' | 'email' | 'excel' | 'other';

export interface Project {
  title: string;
  description: string;
  role: string;
  tools: string[];
  image: string;
  projectUrl: string;
  githubUrl?: string;
  category: ProjectCategory;
  previewUrl?: string;
}

export const profile = {
  name: 'Janine Calcetas',
  role: 'Software Engineer | Virtual Assistant',
  specialty: 'Administrative, Digital & Technical Support',
  bio: 'Detail-oriented IT professional with experience in documentation, reporting automation, issue resolution, digital tools, and cross-functional support. I help teams stay organized, efficient, and productive.',
  email: 'ricajaninecalcetas@gmail.com',
  phone: '+63 977 613 0074',
  location: 'Sta. Cruz, Manila, Philippines',
  linkedin: 'https://www.linkedin.com/in/rj-calcetas/',
  upwork: 'https://www.upwork.com/',
  github: 'https://github.com/',
  resumeUrl: 'New-CV-Template.pdf'
};

export const services = [
  {
    icon: 'inbox',
    title: 'Administrative & Operations Support',
    text: 'Inbox management, scheduling, task coordination, file organization, and day-to-day operational support to keep workflows efficient and well-structured.'
  },
  {
    icon: 'grid',
    title: 'Excel & Document Management',
    text: 'Spreadsheet creation, data entry, reporting, file organization, and document tracking to keep information accurate, easy to find, and well maintained.'
  },
  {
    icon: 'chat',
    title: 'Communication & Email Support',
    text: 'Professional email handling, client communication, follow-ups, scheduling coordination, and polished written support for business conversations.'
  },
  {
    icon: 'search',
    title: 'Web Development (Frontend & Backend)',
    text: 'Responsive web development using HTML, CSS, JavaScript, Angular, React, and backend support for building and improving digital experiences.'
  },
  {
    icon: 'spark',
    title: 'Automation & Workflow Optimization',
    text: 'Process automation, repetitive task reduction, Excel workflow improvements, and digital tool support to save time and improve productivity.'
  },
  {
    icon: 'edit',
    title: 'Email Specialist & Graphic Design Support',
    text: 'Marketing email templates, design assistance, Canva-based visuals, branded assets, and polished content support for digital marketing and presentations.'
  }
];

export const strengths = [
  { title: 'Organized', text: 'Able to keep information, tasks, files, and priorities structured.' },
  { title: 'Reliable', text: 'Comfortable working independently and meeting deadlines.' },
  { title: 'Adaptable', text: 'Able to learn unfamiliar tools and workflows quickly.' },
  { title: 'Detail-Oriented', text: 'Careful with information, documentation, and repetitive tasks.' }
];

export const skills = {
  va: ['Documentation', 'Reporting', 'Data Processing', 'Issue Tracking', 'Task Management', 'Production Support', 'Internet Research', 'Graphic Design Support'],
  tools: ['Microsoft Excel', 'Word', 'PowerPoint', 'Power Automate', 'New Relic', 'Azure Data Explorer', 'Canva', 'Jira', 'Postman'],
  technical: ['Angular', 'React', 'JavaScript', 'HTML / CSS', 'Bootstrap / Tailwind', 'Java / Spring Boot', 'MySQL', 'GitHub / Bitbucket']
};

export const experience = [
  {
    period: 'Aug 2022 - Present',
    role: 'Associate Front-end Software Engineer',
    company: 'Manulife IT Delivery Center Asia Inc.',
    summary: 'Monitor performance data, automate reporting, resolve production issues, support deployments, and deliver application features.'
  },
  {
    period: 'Sep 2021 - Dec 2022',
    role: 'Junior Frontend Web Developer',
    company: 'DeepOffice Inc.',
    summary: 'Resolved interface issues, supported system integration, and helped develop standardized, responsive UI templates.'
  },
  {
    period: 'Apr 2019 - Jun 2019',
    role: 'Graphic Design Marketing Intern',
    company: 'Great Deals E-Commerce Corp.',
    summary: 'Created promotional assets and prepared product imagery through editing, retouching, and background removal.'
  }
];

export const education = 'Bachelor of Science in Information Technology, Cum Laude - Polytechnic University of the Philippines, 2024';

export const certifications = [
  'Microsoft Certified: Azure AI Fundamentals (AI-900), 2025',
  'Microsoft Certified: Azure Fundamentals (AZ-900), 2023',
  'Computer Systems Servicing NC II, valid through 2027'
];

const buildEmailTemplatePreview = (options: {
  brand: string;
  accent: string;
  softAccent: string;
  topLabel: string;
  headline: string;
  subhead: string;
  cta: string;
  offer: string;
  detailOne: string;
  detailTwo: string;
  footer: string;
}) => {
  const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${options.brand}</title>
        <style>
          body { margin: 0; padding: 0; background: #f3efe8; font-family: Arial, Helvetica, sans-serif; }
          table { border-collapse: collapse; }
          img { border: 0; outline: none; text-decoration: none; }
          a { text-decoration: none; }
          @media screen and (max-width: 620px) {
            .stack { display: block !important; width: 100% !important; }
            .mobile-padding { padding-left: 18px !important; padding-right: 18px !important; }
            .headline { font-size: 28px !important; line-height: 32px !important; }
          }
        </style>
      </head>
      <body>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f3efe8; margin:0; padding:0;">
          <tr>
            <td align="center" style="padding:28px 12px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:620px; background:#ffffff; border:1px solid #e2d7c6;">
                <tr>
                  <td style="background:${options.accent}; padding:18px 28px; color:#ffffff; font-size:12px; letter-spacing:3px; font-weight:bold;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td align="left" style="font-family:Arial, Helvetica, sans-serif; text-transform:uppercase;">${options.brand}</td>
                        <td align="right" style="font-family:Arial, Helvetica, sans-serif; text-transform:uppercase; opacity:0.9;">${options.topLabel}</td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td class="mobile-padding" style="padding:28px 30px 10px; background:#fff8f2;">
                    <div style="font-family:Arial, Helvetica, sans-serif; font-size:36px; line-height:42px; font-weight:bold; color:#1b1b1b; text-transform:uppercase; letter-spacing:1px;" class="headline">${options.headline}</div>
                  </td>
                </tr>

                <tr>
                  <td class="mobile-padding" style="padding:0 30px 22px; background:#fff8f2; font-family:Arial, Helvetica, sans-serif; font-size:15px; line-height:24px; color:#4b4036;">
                    ${options.subhead}
                  </td>
                </tr>

                <tr>
                  <td class="mobile-padding" align="center" style="background:#fff8f2; padding:0 30px 26px;">
                    <table cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td style="background:${options.accent}; padding:14px 26px; font-family:Arial, Helvetica, sans-serif; font-size:14px; font-weight:bold; color:#ffffff; text-transform:uppercase; letter-spacing:1px;">
                          <a href="#" style="color:#ffffff; text-decoration:none;">${options.cta}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td class="mobile-padding" style="padding:0 30px 28px; background:#ffffff;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="stack" width="50%" valign="top" style="padding-right:8px;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:${options.softAccent}; border:1px solid #eadfc8;">
                            <tr>
                              <td style="padding:18px 18px 12px; font-family:Arial, Helvetica, sans-serif; font-size:28px; line-height:30px; font-weight:bold; color:#1b1b1b; text-align:center; text-transform:uppercase;">${options.offer}</td>
                            </tr>
                            <tr>
                              <td style="padding:0 18px 18px; font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:22px; color:#2d261f; text-align:center;">${options.detailOne}</td>
                            </tr>
                          </table>
                        </td>
                        <td class="stack" width="50%" valign="top" style="padding-left:8px;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f8f3ee; border:1px solid #e3d6c2;">
                            <tr>
                              <td style="padding:18px 18px 12px; font-family:Arial, Helvetica, sans-serif; font-size:18px; line-height:22px; font-weight:bold; color:#1b1b1b; text-transform:uppercase; text-align:center;">LIMITED DROP</td>
                            </tr>
                            <tr>
                              <td style="padding:0 18px 18px; font-family:Arial, Helvetica, sans-serif; font-size:13px; line-height:22px; color:#2d261f; text-align:center;">${options.detailTwo}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>

                <tr>
                  <td class="mobile-padding" style="padding:0 30px 24px; background:#f5efe7;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff; border:1px solid #e7dcc7;">
                      <tr>
                        <td style="padding:18px; font-family:Arial, Helvetica, sans-serif; font-size:14px; line-height:22px; color:#473d35; text-align:center;">
                          <strong style="font-size:16px; text-transform:uppercase; letter-spacing:1px; color:#1b1b1b;">${options.footer}</strong><br />
                          Shop today before the collection sells out.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
};

const buildFlashSalePreview = () => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Flash Sale</title>
        <style>
          body { margin: 0; background: #f5efe7; font-family: Arial, Helvetica, sans-serif; color: #1d1d1d; }
          table { border-collapse: collapse; }
          a { text-decoration: none; }
          @media screen and (max-width: 620px) {
            .stack { display: block !important; width: 100% !important; }
            .pad { padding-left: 18px !important; padding-right: 18px !important; }
          }
        </style>
      </head>
      <body>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f5efe7; padding:0; margin:0;">
          <tr>
            <td align="center" style="padding:24px 10px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:620px; background:#fffaf4; border:1px solid #e9d7b8;">
                <tr>
                  <td align="center" style="background:#171717; color:#fff5dc; font-size:11px; font-weight:bold; letter-spacing:2px; padding:12px 20px; text-transform:uppercase;">
                    Midseason Event • Ends Sunday
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:22px 26px 10px; background:linear-gradient(180deg, #fff6ea 0%, #fffaf4 100%);">
                    <div style="font-size:12px; letter-spacing:2px; color:#c65c34; font-weight:bold; text-transform:uppercase;">Save big this week</div>
                    <div style="font-size:44px; line-height:46px; letter-spacing:-2px; font-weight:900; color:#171717; margin-top:10px;">UP TO<br>60% OFF</div>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 26px 18px; background:linear-gradient(180deg, #fff6ea 0%, #fffaf4 100%); font-size:15px; line-height:24px; color:#342d2a;">
                    Refresh your essentials with elevated layers, statement pieces, and limited-time savings on your favorite picks.
                  </td>
                </tr>
                <tr>
                  <td class="pad" align="center" style="padding:0 26px 22px; background:linear-gradient(180deg, #fff6ea 0%, #fffaf4 100%);">
                    <table cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td style="background:#d13c2d; padding:16px 28px; border-radius:26px; text-transform:uppercase; font-weight:bold; font-size:12px; letter-spacing:1px;">
                          <a href="#" style="color:#ffffff;">Shop The Sale</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 26px 18px; background:#ffffff;">
                    <a href="#"><img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80" alt="Featured sale collection" width="100%" style="display:block; width:100%; height:260px; object-fit:cover; border-radius:12px;" /></a>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 26px 26px; background:#ffffff;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="stack" width="50%" valign="top" style="padding-right:8px;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#fef0e6; border:1px solid #efc9af; height:220px;">
                            <tr><td align="center" style="padding:18px 12px 8px; font-size:28px; font-weight:bold; color:#cb5e3b; text-transform:uppercase;">40% off</td></tr>
                            <tr><td align="center" style="padding:0 12px 14px; font-size:11px; line-height:18px; color:#3e312d; text-transform:uppercase; font-weight:bold;">Outerwear</td></tr>
                            <tr><td align="center" style="padding:0 12px 14px; font-size:11px; line-height:18px; color:#3e312d; text-transform:uppercase; font-weight:bold;">Accessories</td></tr>
                            <tr><td align="center" style="padding:0 12px 18px; font-size:11px; line-height:18px; color:#3e312d; text-transform:uppercase; font-weight:bold;">Shoes</td></tr>
                          </table>
                        </td>
                        <td class="stack" width="50%" valign="top" style="padding-left:8px;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f8f1ff; border:1px solid #e0d0f4; height:220px;">
                            <tr><td align="center" style="padding:18px 12px 8px; font-size:28px; font-weight:bold; color:#6853a5; text-transform:uppercase;">Curated</td></tr>
                            <tr><td align="center" style="padding:0 12px 14px; font-size:11px; line-height:18px; color:#3e312d; text-transform:uppercase; font-weight:bold;">Editor picks</td></tr>
                            <tr><td align="center" style="padding:0 12px 14px; font-size:11px; line-height:18px; color:#3e312d; text-transform:uppercase; font-weight:bold;">New arrivals</td></tr>
                            <tr><td align="center" style="padding:0 12px 18px; font-size:11px; line-height:18px; color:#3e312d; text-transform:uppercase; font-weight:bold;">Styles to love</td></tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 26px 24px; background:#fff;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="stack" width="33.3%" valign="top" style="padding:0 6px 0 0;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#fefaf0; border:1px solid #ead6a4;">
                            <tr><td style="padding:18px 10px 8px; text-align:center; font-size:24px; font-weight:bold; color:#8d6318;">50%</td></tr>
                            <tr><td style="padding:0 10px 16px; text-align:center; font-size:11px; line-height:17px; color:#3e312d; text-transform:uppercase; font-weight:bold;">Accessories</td></tr>
                          </table>
                        </td>
                        <td class="stack" width="33.3%" valign="top" style="padding:0 3px;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#edf6ef; border:1px solid #bdd6c0;">
                            <tr><td style="padding:18px 10px 8px; text-align:center; font-size:24px; font-weight:bold; color:#39825d;">30%</td></tr>
                            <tr><td style="padding:0 10px 16px; text-align:center; font-size:11px; line-height:17px; color:#3e312d; text-transform:uppercase; font-weight:bold;">Basics</td></tr>
                          </table>
                        </td>
                        <td class="stack" width="33.3%" valign="top" style="padding:0 0 0 6px;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f5f0ff; border:1px solid #d7c7f3;">
                            <tr><td style="padding:18px 10px 8px; text-align:center; font-size:24px; font-weight:bold; color:#6651a4;">25%</td></tr>
                            <tr><td style="padding:0 10px 16px; text-align:center; font-size:11px; line-height:17px; color:#3e312d; text-transform:uppercase; font-weight:bold;">Home</td></tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:18px 20px 28px; background:#171717; color:#fef1ce; font-size:12px; letter-spacing:1px; text-transform:uppercase;">
                    Free shipping over $75 • Code: STYLE30
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
};

const buildKpopPreview = () => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Baby Monster</title>
        <style>
          body { margin: 0; background: #f4e9f4; font-family: Arial, Helvetica, sans-serif; color: #1f1b28; }
          table { border-collapse: collapse; }
          a { text-decoration: none; }
          @media screen and (max-width: 620px) {
            .stack { display: block !important; width: 100% !important; }
            .pad { padding-left: 18px !important; padding-right: 18px !important; }
          }
        </style>
      </head>
      <body>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f4e9f4; padding:0; margin:0;">
          <tr>
            <td align="center" style="padding:22px 10px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:620px; background:#fff7fd; border:1px solid #edcfe5;">
                <tr>
                  <td align="center" style="background:#1d1026; color:#fce9f6; font-size:11px; letter-spacing:3px; font-weight:bold; padding:14px 20px; text-transform:uppercase;">
                    Official Fan Drop
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:26px 30px 12px; background:linear-gradient(180deg, #fbe6f2 0%, #fff 100%);">
                    <div style="font-size:12px; letter-spacing:2px; color:#8a2d6a; font-weight:bold; text-transform:uppercase;">New release</div>
                    <div style="font-size:42px; line-height:46px; letter-spacing:-2px; font-weight:900; color:#131313; margin-top:8px;">Let the anthem<br>begin.</div>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 30px 22px; background:#fff; font-size:15px; line-height:24px; color:#2a2130;">
                    Experience the comeback with exclusive merch, behind-the-scenes moments, and just-for-fans access to the latest drop.
                  </td>
                </tr>
                <tr>
                  <td class="pad" align="center" style="padding:0 30px 26px; background:#fff;">
                    <table cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td style="background:#d51a7d; padding:15px 26px; font-size:12px; letter-spacing:1px; font-weight:bold; text-transform:uppercase; border-radius:24px;">
                          <a href="#" style="color:#fff;">Get Access Now</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 30px 18px; background:#fff;">
                    <a href="#"><img src="https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=1200&q=80" alt="Fan drop photo" width="100%" style="display:block; width:100%; height:260px; object-fit:cover; border-radius:12px;" /></a>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 30px 22px; background:#fff;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="stack" width="50%" valign="top" style="padding-right:8px;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#fbe2f0; border:1px solid #e7bfd5; height:190px;">
                            <tr><td style="padding:18px 14px 10px; text-align:center; font-size:26px; font-weight:bold; color:#9f1d6b; text-transform:uppercase;">VIP</td></tr>
                            <tr><td style="padding:0 14px 18px; font-size:12px; line-height:20px; color:#35263a; text-align:center;">Early access to teases and pre-orders.</td></tr>
                          </table>
                        </td>
                        <td class="stack" width="50%" valign="top" style="padding-left:8px;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f6ebff; border:1px solid #dbcaef; height:190px;">
                            <tr><td style="padding:18px 14px 10px; text-align:center; font-size:26px; font-weight:bold; color:#6f49aa; text-transform:uppercase;">Album</td></tr>
                            <tr><td style="padding:0 14px 18px; font-size:12px; line-height:20px; color:#35263a; text-align:center;">Exclusive merch bundles while stock lasts.</td></tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 30px 26px; background:#f7eff7;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#fff; border:1px solid #eccfe1;">
                      <tr>
                        <td style="padding:18px; text-align:center; font-size:13px; line-height:22px; color:#34293f;">
                          <strong style="font-size:15px; letter-spacing:1px; text-transform:uppercase; color:#1b1b1b;">Tracks / Teasers / Merch</strong><br />
                          The comeback is live. Don’t miss the next wave.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:20px 20px 30px; background:#150e1e; color:#fce7f7; font-size:11px; letter-spacing:2px; text-transform:uppercase; font-weight:bold;">
                    Baby Monster • 2026 Fan Club Drop
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
};

const buildBeautyLaunchPreview = () => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Vela Skin</title>
        <style>
          body { margin: 0; background: #f6f1ee; font-family: Arial, Helvetica, sans-serif; color: #2a2a2a; }
          table { border-collapse: collapse; }
          a { text-decoration: none; }
          @media screen and (max-width: 620px) {
            .stack { display: block !important; width: 100% !important; }
            .pad { padding-left: 18px !important; padding-right: 18px !important; }
          }
        </style>
      </head>
      <body>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f6f1ee; padding:0; margin:0;">
          <tr>
            <td align="center" style="padding:22px 10px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:620px; background:#fffdfc; border:1px solid #ead7d2;">
                <tr>
                  <td align="center" style="background:#e4b3a8; color:#2a1a17; font-size:11px; letter-spacing:2px; font-weight:bold; padding:12px 20px; text-transform:uppercase;">
                    Glow Initiation • New Routine
                  </td>
                </tr>
                <tr>
                  <td align="center" class="pad" style="padding:30px 30px 16px; background:#fff2ee;">
                    <div style="font-size:14px; letter-spacing:2px; text-transform:uppercase; color:#9d554a; font-weight:bold;">vela skin</div>
                    <div style="font-size:42px; line-height:46px; letter-spacing:-2px; font-weight:900; color:#2a201e; margin-top:10px;">Soft glow.<br>Real results.</div>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 30px 22px; background:#fff2ee; font-size:15px; line-height:24px; color:#413633;">
                    Meet the essentials made to hydrate, calm, and brighten your skin with a simple ritual you’ll actually want to keep.
                  </td>
                </tr>
                <tr>
                  <td class="pad" align="center" style="padding:0 30px 24px; background:#fff2ee;">
                    <table cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td style="background:#c77a75; padding:16px 28px; border-radius:24px; font-size:12px; font-weight:bold; letter-spacing:1px; text-transform:uppercase;">
                          <a href="#" style="color:#ffffff;">Shop the Routine</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 30px 18px; background:#ffffff;">
                    <a href="#"><img src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80" alt="Beauty routine product bundle" width="100%" style="display:block; width:100%; height:260px; object-fit:cover; border-radius:12px;" /></a>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 30px 28px; background:#fff;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="stack" width="33.3%" valign="top" style="padding:0 6px 0 0;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#fef4f1; border:1px solid #efd9d5;">
                            <tr><td style="padding:18px 10px 8px; text-align:center; font-size:30px; font-weight:bold; color:#c77065;">1</td></tr>
                            <tr><td style="padding:0 10px 16px; text-align:center; font-size:11px; font-weight:bold; text-transform:uppercase; line-height:18px; color:#463732;">Cleanse</td></tr>
                          </table>
                        </td>
                        <td class="stack" width="33.3%" valign="top" style="padding:0 3px;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f4f5ef; border:1px solid #dfe0d3;">
                            <tr><td style="padding:18px 10px 8px; text-align:center; font-size:30px; font-weight:bold; color:#6f8d5e;">2</td></tr>
                            <tr><td style="padding:0 10px 16px; text-align:center; font-size:11px; font-weight:bold; text-transform:uppercase; line-height:18px; color:#463732;">Treat</td></tr>
                          </table>
                        </td>
                        <td class="stack" width="33.3%" valign="top" style="padding:0 0 0 6px;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f9f3eb; border:1px solid #ebddc8;">
                            <tr><td style="padding:18px 10px 8px; text-align:center; font-size:30px; font-weight:bold; color:#b88844;">3</td></tr>
                            <tr><td style="padding:0 10px 16px; text-align:center; font-size:11px; font-weight:bold; text-transform:uppercase; line-height:18px; color:#463732;">Glow</td></tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 30px 26px; background:#fff;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#faf4f0; border:1px solid #edd7d0;">
                      <tr>
                        <td style="padding:18px; text-align:center; font-size:13px; line-height:24px; color:#473734;">
                          <strong style="font-size:15px; letter-spacing:1px; text-transform:uppercase; color:#2a201e;">Free Gift With Every Set</strong><br />
                          Bundle the ritual and receive a limited edition mini kit.
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:18px 20px 30px; background:#2b2422; color:#fff4ef; font-size:11px; letter-spacing:1px; text-transform:uppercase; font-weight:bold;">
                    Free shipping • New launch • 30-day glow guarantee
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
};

const buildClassicPromoPreview = (options: {
  brand: string;
  accent: string;
  softAccent: string;
  topLabel: string;
  headline: string;
  subhead: string;
  cta: string;
  offer: string;
  detailOne: string;
  detailTwo: string;
  footer: string;
}) => {
  const html = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>${options.brand}</title>
        <style>
          body { margin: 0; background: #f3efe8; font-family: Arial, Helvetica, sans-serif; color: #1a1a1a; }
          table { border-collapse: collapse; }
          img { border: 0; outline: none; text-decoration: none; }
          a { text-decoration: none; }
          @media screen and (max-width: 620px) {
            .stack { display: block !important; width: 100% !important; }
            .pad { padding-left: 18px !important; padding-right: 18px !important; }
          }
        </style>
      </head>
      <body>
        <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#f3efe8; padding:0; margin:0;">
          <tr>
            <td align="center" style="padding:24px 10px;">
              <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="max-width:620px; background:#fffaf5; border:1px solid #e4d7c4;">
                <tr>
                  <td align="center" style="background:${options.accent}; color:#ffffff; font-size:11px; font-weight:bold; letter-spacing:2px; padding:12px 20px; text-transform:uppercase;">
                    ${options.topLabel}
                  </td>
                </tr>
                <tr>
                  <td style="padding:22px 26px 8px; background:#fffaf5;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td style="font-size:26px; font-weight:900; letter-spacing:-1px; color:${options.accent}; text-transform:uppercase;">${options.brand}</td>
                        <td align="right" style="font-size:10px; font-weight:bold; letter-spacing:1px; color:#50463f; text-transform:uppercase;">Spring Edit</td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:20px 26px 10px; background:#fff8f3;">
                    <div style="font-size:12px; color:${options.accent}; letter-spacing:2px; font-weight:bold; text-transform:uppercase;">Fresh Arrival</div>
                    <div style="font-size:42px; line-height:44px; letter-spacing:-2px; font-weight:900; color:#171717; margin-top:10px;">${options.headline}</div>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 26px 20px; background:#fff8f3; font-size:15px; line-height:24px; color:#433d38;">
                    ${options.subhead}
                  </td>
                </tr>
                <tr>
                  <td class="pad" align="center" style="padding:0 26px 24px; background:#fff8f3;">
                    <table cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td bgcolor="${options.accent}" style="padding:16px 26px; border-radius:28px; font-size:12px; letter-spacing:1px; font-weight:bold; text-transform:uppercase;">
                          <a href="#" style="color:#ffffff;">${options.cta}</a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 26px 22px; background:#fff;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="stack" width="50%" valign="top" style="padding-right:8px;">
                          <a href="#"><img src="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=900&q=80" alt="Model look" width="100%" style="display:block; width:100%; height:260px; object-fit:cover; border-radius:12px;" /></a>
                        </td>
                        <td class="stack" width="50%" valign="top" style="padding-left:8px;">
                          <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:${options.softAccent}; border:1px solid #ead9c7; height:260px;">
                            <tr>
                              <td align="center" style="padding:18px 16px 8px; font-size:28px; line-height:30px; font-weight:900; color:#1d1a18; text-transform:uppercase;">${options.offer}</td>
                            </tr>
                            <tr>
                              <td align="center" style="padding:0 18px 18px; font-size:12px; line-height:20px; color:#382f2c;">${options.detailOne}</td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 26px 24px; background:#fff;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation">
                      <tr>
                        <td class="stack" width="33.3%" valign="top" style="padding:0 6px 0 0;">
                          <a href="#"><img src="https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80" alt="Accessories" width="100%" style="display:block; width:100%; height:150px; object-fit:cover; border-radius:12px;" /></a>
                        </td>
                        <td class="stack" width="33.3%" valign="top" style="padding:0 3px;">
                          <a href="#"><img src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80" alt="Streetwear" width="100%" style="display:block; width:100%; height:150px; object-fit:cover; border-radius:12px;" /></a>
                        </td>
                        <td class="stack" width="33.3%" valign="top" style="padding:0 0 0 6px;">
                          <a href="#"><img src="https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=800&q=80" alt="Everyday essentials" width="100%" style="display:block; width:100%; height:150px; object-fit:cover; border-radius:12px;" /></a>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td class="pad" style="padding:0 26px 26px; background:#f9f2ea;">
                    <table width="100%" cellpadding="0" cellspacing="0" role="presentation" style="background:#ffffff; border:1px solid #ebded3;">
                      <tr>
                        <td style="padding:18px; text-align:center; font-size:13px; line-height:22px; color:#463d36;">
                          <strong style="font-size:15px; text-transform:uppercase; letter-spacing:1px; color:#171717;">${options.footer}</strong><br />
                          ${options.detailTwo}
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
                <tr>
                  <td align="center" style="padding:18px 20px 30px; background:#221d1a; color:#fff8f0; font-size:11px; letter-spacing:1px; text-transform:uppercase; font-weight:bold;">
                    Shipping worldwide • Easy returns
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </body>
    </html>
  `;

  return `data:text/html;charset=utf-8,${encodeURIComponent(html)}`;
};

const solaraFreshFitsPreview = `
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>SOLARA | Fresh Fits</title>
    <style>
      body { margin: 0; background: #f4f5f0; font-family: Arial, Helvetica, sans-serif; color: #102a43; }
      table { border-collapse: collapse; }
      img { border: 0; outline: none; text-decoration: none; }
      a { text-decoration: none; }
    </style>
  </head>
  <body style="margin:0;background:#f4f5f0;font-family:Arial,Helvetica,sans-serif;color:#102a43;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4f5f0;">
      <tr>
        <td align="center" style="padding:20px 8px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:100%;max-width:600px;background:#fffaf2;">
            <tr>
              <td align="center" bgcolor="#FFD84D" style="padding:13px;font-size:11px;font-weight:bold;letter-spacing:2px;color:#102a43;">
                ✦ FREE SHIPPING ON ORDERS OVER $60 ✦
              </td>
            </tr>

            <tr>
              <td style="padding:23px 25px;">
                <table role="presentation" width="100%">
                  <tr>
                    <td style="font-size:28px;font-weight:900;letter-spacing:-1px;color:#f15b35;">☀ SOLARA</td>
                    <td align="right" style="font-size:10px;font-weight:bold;letter-spacing:1px;color:#102a43;">NEW &nbsp; WOMEN &nbsp; MEN</td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td bgcolor="#FFE5D7" style="padding:34px 26px 28px;">
                <p style="font-size:11px;font-weight:bold;letter-spacing:2px;color:#bf482f;">SPRING / SUMMER 2026</p>
                <h1 style="font-size:43px;line-height:1.04;letter-spacing:-2px;color:#f15b35;margin:12px 0;">Fresh Fits<br>for Brighter<br>Days.</h1>
                <p style="font-size:14px;line-height:1.8;color:#102a43;margin-bottom:25px;">
                  Light layers. Bold colors. Effortless style.<br>
                  Meet the new collection made to brighten<br>
                  up your everyday wardrobe.
                </p>
                <a href="https://example.com/collection" style="display:inline-block;background:#FFD84D;color:#102a43;padding:16px 23px;border-radius:30px;text-decoration:none;font-size:12px;font-weight:bold;letter-spacing:1px;">SHOP THE COLLECTION &rarr;</a>
                <p style="margin:25px 0 0;font-size:12px;font-weight:bold;color:#f15b35;">GOOD CLOTHES. BRIGHTER DAYS. ♡</p>
              </td>
            </tr>

            <tr>
              <td style="padding:30px 20px;">
                <p style="font-size:10px;font-weight:bold;letter-spacing:2px;color:#f15b35;">THE COLOR EDIT</p>
                <h2 style="font-size:30px;line-height:1.1;margin:5px 0 22px;letter-spacing:-1px;">Your New Favorites</h2>

                <table role="presentation" width="100%" cellspacing="0" cellpadding="5">
                  <tr>
                    <td width="50%" valign="top">
                      <a href="https://example.com/shirt"><img src="https://placehold.co/260x300/F5B63D/33251A?text=LINEN+SHIRT" alt="Linen shirt" width="100%" style="display:block;width:100%;height:auto;border-radius:10px;border:0;" /></a>
                      <p style="font-size:13px;font-weight:bold;margin:10px 0 4px;">Linen Button-Up</p>
                      <p style="font-size:12px;margin:0;">$34.00</p>
                      <p style="color:#f5ad36;font-size:15px;margin:8px 0;">● ● ● ●</p>
                    </td>
                    <td width="50%" valign="top">
                      <a href="https://example.com/tank"><img src="https://placehold.co/260x300/F7B5CA/7B3152?text=RIBBED+TANK" alt="Pink ribbed tank top" width="100%" style="display:block;width:100%;height:auto;border-radius:10px;border:0;" /></a>
                      <p style="font-size:13px;font-weight:bold;margin:10px 0 4px;">Ribbed Tank Top</p>
                      <p style="font-size:12px;margin:0;">$28.00</p>
                      <p style="color:#f48bb3;font-size:15px;margin:8px 0;">● ● ● ●</p>
                    </td>
                  </tr>
                  <tr>
                    <td width="50%" valign="top">
                      <a href="https://example.com/jeans"><img src="https://placehold.co/260x300/A7D6E8/183D63?text=WIDE+LEG+JEANS" alt="Wide leg jeans" width="100%" style="display:block;width:100%;height:auto;border-radius:10px;border:0;" /></a>
                      <p style="font-size:13px;font-weight:bold;margin:10px 0 4px;">Wide Leg Jeans</p>
                      <p style="font-size:12px;margin:0;">$52.00</p>
                      <p style="color:#69b8d4;font-size:15px;margin:8px 0;">● ● ●</p>
                    </td>
                    <td width="50%" valign="top">
                      <a href="https://example.com/tote"><img src="https://placehold.co/260x300/BAD8A6/23563F?text=EVERYDAY+TOTE" alt="Everyday tote bag" width="100%" style="display:block;width:100%;height:auto;border-radius:10px;border:0;" /></a>
                      <p style="font-size:13px;font-weight:bold;margin:10px 0 4px;">Everyday Tote</p>
                      <p style="font-size:12px;margin:0;">$26.00</p>
                      <p style="color:#69b68a;font-size:15px;margin:8px 0;">● ● ●</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td bgcolor="#FBC8D6" style="padding:30px 24px;">
                <p style="font-size:10px;font-weight:bold;letter-spacing:2px;margin:0 0 10px;">A LITTLE SOMETHING EXTRA</p>
                <h2 style="font-size:32px;line-height:1.05;letter-spacing:-1px;margin:0 0 12px;">Mix & Match.<br>Save More.</h2>
                <p style="font-size:14px;line-height:1.7;margin:0 0 22px;">Get 20% off when you buy two or more items from our new collection.</p>
                <table role="presentation" cellspacing="0" cellpadding="0">
                  <tr>
                    <td bgcolor="#F15B35" style="border-radius:25px;padding:14px 22px;">
                      <a href="https://example.com/offers" style="font-size:12px;font-weight:bold;letter-spacing:1px;color:#ffffff;text-decoration:none;">SHOP THE OFFER &rarr;</a>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td bgcolor="#D9F0E2" style="padding:24px 15px;">
                <table role="presentation" width="100%" cellpadding="5">
                  <tr>
                    <td align="center" width="50%">
                      <p style="font-size:24px;margin:0;">🌿</p>
                      <p style="font-size:10px;font-weight:bold;letter-spacing:1px;line-height:1.6;">THOUGHTFUL<br>MATERIALS</p>
                    </td>
                    <td align="center" width="50%">
                      <p style="font-size:24px;margin:0;">📦</p>
                      <p style="font-size:10px;font-weight:bold;letter-spacing:1px;line-height:1.6;">FAST & RELIABLE<br>SHIPPING</p>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>

            <tr>
              <td bgcolor="#145C4B" align="center" style="padding:30px 20px;color:#ffffff;">
                <p style="font-size:26px;font-weight:900;letter-spacing:-1px;margin:0 0 8px;">☀ SOLARA</p>
                <p style="font-size:12px;margin:0 0 20px;">Wear the sunshine.</p>
                <p style="font-size:12px;margin:0 0 20px;">
                  <a href="https://instagram.com" style="color:#FFD84D;text-decoration:none;">Instagram</a>
                  &nbsp; · &nbsp;
                  <a href="https://tiktok.com" style="color:#FFD84D;text-decoration:none;">TikTok</a>
                  &nbsp; · &nbsp;
                  <a href="https://pinterest.com" style="color:#FFD84D;text-decoration:none;">Pinterest</a>
                </p>
                <p style="font-size:10px;line-height:1.8;color:#d6eee4;">
                  You're receiving this email because you subscribed to our newsletter.<br>
                  <a href="https://example.com/unsubscribe" style="color:#FFD84D;">Unsubscribe</a>
                  &nbsp; | &nbsp;
                  <a href="https://example.com/privacy" style="color:#FFD84D;">Privacy Policy</a>
                </p>
                <p style="font-size:10px;color:#d6eee4;">© 2026 SOLARA. All rights reserved.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>
`;

export const projects: Project[] = [
  {
    title: 'Brand Clothing Capsule',
    description: 'Luxury streetwear launch email built with a classic table-based layout for a premium seasonal drop.',
    role: 'Email marketing campaign',
    tools: ['HTML Email', 'Table Layout', 'Campaign Copy'],
    image: 'https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=800&q=80',
    projectUrl: '/email-previews/luna-threads.html',
    category: 'email',
    previewUrl: '/email-previews/luna-threads.html'
  },
  {
    title: 'Sales Discount Promotion',
    description: 'Promotional sale email with countdown energy, featured deals, and a conversion-focused CTA for a seasonal campaign.',
    role: 'Sales promotion design',
    tools: ['Email Design', 'Promo Banner', 'CTA Strategy'],
    image: 'https://images.unsplash.com/photo-1483985988355-763728e1935b?auto=format&fit=crop&w=800&q=80',
    projectUrl: '/email-previews/flash-sale.html',
    category: 'email',
    previewUrl: '/email-previews/flash-sale.html'
  },
  {
    title: 'K-pop Baby Monster Promo',
    description: 'High-energy fan campaign email styled for a K-pop release, using vivid contrast, bold typography, and album-first messaging.',
    role: 'Event and fan campaign email',
    tools: ['Campaign HTML', 'Fan Promo', 'K-pop Styling'],
    image: 'https://images.unsplash.com/photo-1516280440614-37939bbacd81?auto=format&fit=crop&w=800&q=80',
    projectUrl: '/email-previews/baby-monster.html',
    category: 'email',
    previewUrl: '/email-previews/baby-monster.html'
  },
  {
    title: 'SOLARA | Fresh Fits',
    description: 'Brand clothing campaign email inspired by a cheerful spring retail launch with product highlights, a promo CTA, and a polished buyer journey.',
    role: 'Fashion brand email template',
    tools: ['HTML Email', 'Retail Promo', 'Product Grid'],
    image: 'https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=800&q=80',
    projectUrl: '/email-previews/solara-fresh-fits.html',
    category: 'email',
    previewUrl: '/email-previews/solara-fresh-fits.html'
  },
  {
    title: 'Beauty Product Launch',
    description: 'Clean retail promo email tailored for a skincare or beauty launch with soft neutrals and a friendly conversion layout.',
    role: 'Beauty brand campaign',
    tools: ['HTML Email', 'Retargeting Campaign', 'Launch Promo'],
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=800&q=80',
    projectUrl: '/email-previews/beauty-launch.html',
    category: 'email',
    previewUrl: '/email-previews/beauty-launch.html'
  }
];

export const portfolio = {
  ...profile,
  services,
  strengths,
  skills,
  experience,
  education,
  certifications,
  projects
};
