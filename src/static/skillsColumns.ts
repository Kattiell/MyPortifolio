interface Skill {
  id: number;
  iconSrc: string;
  alt: string;
  title: string;
  explain: string;
  skillsTitle: string;
  skills: string;
  toolsTitle: string;
  tools: string;
}

const skillsColumns: Skill[] = [
  {
    id: 1,

    iconSrc: 'https://res.cloudinary.com/dmjmaixrd/image/upload/v1667246536/designer_pwkcbs.png',
    alt: 'DevOps',

    title: 'DevOps',
    explain:
      'I focus on automation, scalability, and smooth CI/CD pipelines to ensure reliable software delivery and efficient infrastructure management.',
    
    skillsTitle: 'Areas I specialize in:',
    skills: 'CI/CD, Infrastructure as Code, Cloud Computing, Monitoring, Containerization',
    
    toolsTitle: 'DevOps Tools:',
    tools: `Docker
    Kubernetes
    GitHub Actions
    AWS
    Azure DevOps
    Terraform
    Jenkins
    Nginx
    Grafana`
    
  },
  {
    id: 2,

    iconSrc: 'https://res.cloudinary.com/dmjmaixrd/image/upload/v1667246536/developer_hgettf.png',
    alt: 'Full-Stack Developer',

    title: 'Full-Stack Developer',
    explain: 'I’m passionate about turning ideas into functional solutions, building complete applications from frontend to backend with a focus on performance, scalability, and clean code.',
    
    skillsTitle: 'Languages and Technologies I use:',
    skills: 'TypeScript, JavaScript, React.js, Node.js, Python, Java, SQL, MongoDB, Git, HTML, CSS',

    toolsTitle: 'Dev Tools:',
    tools: `Visual Studio Code
    GitHub
    Bitbucket
    Jira
    Postman
    Vercel
    Figma
    Tailwind CSS
    Insomnia
    ` 
},    
  {
    id: 3,

    iconSrc: 'https://res.cloudinary.com/dmjmaixrd/image/upload/v1667246536/mentor_uhk3wy.png',
    alt: 'Scrum Practices',

    title: 'Scrum Practices',
    explain:
      'I’m committed to delivering high-value software through agile methodologies, facilitating team collaboration and continuous improvement as a Scrum practitioner.',
    
    skillsTitle: 'Experiences I draw from:',
    skills: 'Agile Methodologies, Scrum, Project Management, Requirements Gathering, Team Leadership',
    
    toolsTitle: 'Scrum Stats:',
    tools: `5+ years of agile experience
    20+ completed sprints
    100+ daily stand-ups
    10+ successful project deliveries
    Cross-functional team facilitation`
    
  },
];

export default skillsColumns;
