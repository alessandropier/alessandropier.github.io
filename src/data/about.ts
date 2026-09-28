import type { Service, Testimonial, ModalDefault, Client } from './types';

export const aboutText: string[] = [
  "I am a <b style='font-weight: 800;'>Software Engineer</b> from Molfetta (BA), Italy, with a degree in Computer Science " +
  "(<b style='font-weight: 800;'>110 with highest honors</b>). I was recognized by <b style='font-weight: 800;'>Forbes</b> " +
  "as Top Graduates 2025 for <b style='font-weight: 800;'>applying AI to fashion</b>. ",
  
  "I am <b style='font-weight: 800;'>curious</b> and goal driven, able to <b style='font-weight: 800;'>break down workloads</b> into small steps " +
  "and <b style='font-weight: 800;'>milestones</b>. I am comfortable <b style='font-weight: 800;'>taking ownership</b>, coordinating with others and providing " +
"<b style='font-weight: 800;'>team leadership</b> when needed. Bilingual in <em>Italian and English</em>, highly adaptable with strong cross-cultural <b style='font-weight: 800;'>" +
  "communication skills</b> honed through <b style='font-weight: 800;'>public speaking</b> and acting.",

  "My core technical stack includes <b style='font-weight: 800;'>C++, Java, Python</b>, and <b style='font-weight: 800;'>SQL</b> " +
  "with experience in <b style='font-weight: 800;'>system design</b>, software architecture, product ideation and turning concepts into robust architectural " +
  "solutions. I also work with <b style='font-weight: 800;'>Git</b>, <b style='font-weight: 800;'>GitHub Actions</b> and <b style='font-weight: 800;'>CI/CD pipelines</b>.",

  "Currently, I am expanding my stack with <b style='font-weight: 800;'><em>Node.js, Next.js, JavaScript, TypeScript</em></b> " +
  "while strengthening my CP skills."
];

// Definizione della struttura e dei dati per i cubotti delle skill
export interface Skill {
  name: string;
  icon: string;
}

export const techStack: Skill[] = [
  // Linguaggi
  { name: 'C', icon: 'devicon-c-plain colored' },
  { name: 'C++', icon: 'devicon-cplusplus-plain colored' },
  { name: 'Java', icon: 'devicon-java-plain colored' },
  { name: 'Python', icon: 'devicon-python-plain colored' },
  { name: 'JavaScript', icon: 'devicon-javascript-plain colored' },
  { name: 'TypeScript', icon: 'devicon-typescript-plain colored' },

  // Markup & Styling
  { name: 'HTML5', icon: 'devicon-html5-plain colored' },
  { name: 'CSS3', icon: 'devicon-css3-plain colored' },
  
  // Framework & Web
  //{ name: 'React', icon: 'devicon-react-original colored' },
  { name: 'Astro', icon: 'devicon-astro-plain colored' },
  { name: 'Next.js', icon: 'devicon-nextjs-plain' },
  { name: 'Node.js', icon: 'devicon-nodejs-plain colored' },

  // Database
  { name: 'SQL', icon: 'devicon-azuresqldatabase-plain colored' },
  { name: 'MySQL', icon: 'devicon-mysql-plain colored' },
  { name: 'SQLite', icon: 'devicon-sqlite-plain colored' },

  // Tool, OS & Altro
  { name: 'Git', icon: 'devicon-git-plain colored' },
  { name: 'GitHub', icon: 'devicon-github-original' },
  { name: 'CI/CD', icon: 'devicon-githubactions-plain colored'},
  { name: 'Docker', icon: 'devicon-docker-plain colored' },
  { name: 'LaTeX', icon: 'devicon-latex-plain colored' },

  // Software & Grafica/Video
  { name: 'Photoshop', icon: 'devicon-photoshop-plain colored' },
  { name: 'Premiere', icon: 'devicon-premierepro-plain colored' } 
];



export const services: Service[] = [
  { icon: './assets/images/icon-design.svg', iconWidth: 40, alt: 'design icon', title: 'Web design', text: 'The most modern and high-quality design made at a professional level.' },
  { icon: './assets/images/icon-dev.svg', iconWidth: 40, alt: 'Web development icon', title: 'Web development', text: 'High-quality development of sites at the professional level.' },
  { icon: './assets/images/icon-app.svg', iconWidth: 40, alt: 'mobile app icon', title: 'Mobile apps', text: 'Professional development of applications for iOS and Android.' },
  { icon: './assets/images/icon-photo.svg', iconWidth: 40, alt: 'camera icon', title: 'Photography', text: 'I make high-quality photos of any category at a professional level.' },
];

const testimonialText =
  'Richard was hired to create a corporate identity. We were very pleased with the work done. She has a lot of experience and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt consectetur adipiscing elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.';

export const testimonials: Testimonial[] = [
  { avatar: './assets/images/avatar-1.png', name: 'Daniel lewis', text: testimonialText },
  { avatar: './assets/images/avatar-2.png', name: 'Jessica miller', text: testimonialText },
  { avatar: './assets/images/avatar-3.png', name: 'Emily evans', text: testimonialText },
  { avatar: './assets/images/avatar-4.png', name: 'Henry william', text: testimonialText },
];

export const modalDefault: ModalDefault = {
  avatar: './assets/images/avatar-1.png',
  name: 'Daniel lewis',
  alt: 'Daniel lewis',
  datetime: '2021-06-14',
  dateLabel: '14 June, 2021',
  text: testimonialText,
};

export const clients: Client[] = [
  { logo: './assets/images/logo-1-color.png', href: '#' },
  { logo: './assets/images/logo-2-color.png', href: '#' },
  { logo: './assets/images/logo-3-color.png', href: '#' },
  { logo: './assets/images/logo-4-color.png', href: '#' },
  { logo: './assets/images/logo-5-color.png', href: '#' },
  { logo: './assets/images/logo-6-color.png', href: '#' },
];
