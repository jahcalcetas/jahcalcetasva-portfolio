export interface Project { title: string; description: string; role: string; tools: string[]; image: string; projectUrl: string; githubUrl?: string; }
export const portfolio = {
  name:'Janine Calcetas', role:'Virtual Assistant', specialty:'Administrative, Digital & Technical Support', bio:'Detail-oriented IT professional with experience in documentation, reporting automation, issue resolution, digital tools, and cross-functional support. I help teams stay organized, efficient, and productive.',
  email:'ricajaninecalcetas@gmail.com', phone:'+63 977 613 0074', location:'Sta. Cruz, Manila, Philippines', linkedin:'https://www.linkedin.com/in/rj-calcetas/', upwork:'https://www.upwork.com/', github:'https://github.com/', resumeUrl:'New-CV-Template.pdf',
  services:[
    {icon:'inbox',title:'Administrative Support',text:'Email management, file organization, scheduling, and general administrative tasks.'},{icon:'grid',title:'Data Management',text:'Data entry, spreadsheets, reports, and information organization.'},{icon:'chat',title:'Communication',text:'Client communication, updates, and task coordination.'},{icon:'search',title:'Research',text:'Internet research and accurate information gathering.'},{icon:'spark',title:'Tools & Automation',text:'Working with digital tools and basic workflow automation.'},{icon:'edit',title:'Content Support',text:'Basic content preparation, Canva designs, and document preparation.'}
  ],
  strengths:[{title:'Organized',text:'Able to keep information, tasks, files, and priorities structured.'},{title:'Reliable',text:'Comfortable working independently and meeting deadlines.'},{title:'Adaptable',text:'Able to learn unfamiliar tools and workflows quickly.'},{title:'Detail-Oriented',text:'Careful with information, documentation, and repetitive tasks.'}],
  skills:{va:['Documentation','Reporting','Data Processing','Issue Tracking','Task Management','Production Support','Internet Research','Graphic Design Support'],tools:['Microsoft Excel','Word','PowerPoint','Power Automate','New Relic','Azure Data Explorer','Canva','Jira','Postman'],technical:['Angular','React','JavaScript','HTML / CSS','Bootstrap / Tailwind','Java / Spring Boot','MySQL','GitHub / Bitbucket']},
  experience:[
    {period:'Aug 2022 - Present',role:'Associate Front-end Software Engineer',company:'Manulife IT Delivery Center Asia Inc.',summary:'Monitor performance data, automate reporting, resolve production issues, support deployments, and deliver application features.'},
    {period:'Sep 2021 - Dec 2022',role:'Junior Frontend Web Developer',company:'DeepOffice Inc.',summary:'Resolved interface issues, supported system integration, and helped develop standardized, responsive UI templates.'},
    {period:'Apr 2019 - Jun 2019',role:'Graphic Design Marketing Intern',company:'Great Deals E-Commerce Corp.',summary:'Created promotional assets and prepared product imagery through editing, retouching, and background removal.'}
  ],
  education:'Bachelor of Science in Information Technology, Cum Laude - Polytechnic University of the Philippines, 2024',
  certifications:['Microsoft Certified: Azure AI Fundamentals (AI-900), 2025','Microsoft Certified: Azure Fundamentals (AZ-900), 2023','Computer Systems Servicing NC II, valid through 2027'],
  projects:<Project[]>[
    {title:'Performance Reporting Automation',description:'Tracked Core Web Vitals and stored recurring performance data for ongoing analysis and reporting.',role:'Monitoring, reporting & workflow automation',tools:['New Relic','Power Automate','Azure Data Explorer'],image:'tracker',projectUrl:'#'},
    {title:'Application Feature & Support Delivery',description:'Built Angular features, integrated APIs, investigated frontend issues, and supported production deployments and incidents.',role:'Feature delivery & production support',tools:['Angular','Spring Boot','Postman'],image:'dashboard',projectUrl:'#'},
    {title:'Marketing Asset Production',description:'Created website banners and promotional materials, including product-image background removal and retouching.',role:'Graphic design marketing',tools:['Adobe Photoshop','Canva'],image:'planner',projectUrl:'#'}]
};
