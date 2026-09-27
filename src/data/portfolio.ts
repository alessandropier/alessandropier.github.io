import type { Project } from './types';

export const portfolioCategories: string[] = ['All', 'C++', 'Java', 'AI', 'Python', 'Applications' /*, 'Web design', 'Web development'*/];

export const projects: Project[] = [
  { 
    title: 'Enhanced Wordle', 
    category: 'Applications', 
    categorySlug: 'applications', 
    tags: ['Java', 'CI/CD', 'Agile SCRUM', '.JAR', 'Swing', 'FlatLaf', 'Docker', 'Gradle', 'Model-View-Controller'],
    image: './assets/images/enhanced-wordle.png', 
    alt: 'Enhanced Wordle',
    githubUrl: 'https://github.com/alessandropier/Enhanced-Wordle',
    blogUrl: '/blog/enhanced-wordle',
    youtubeUrl: 'https://www.youtube.com/watch?v=wxe9mf7-VIA',
    liveUrl: ''
  },
  { 
    title: 'Personalized Fashion Adv', 
    category: 'AI', 
    categorySlug: 'ai', 
    tags: ['Python', 'APIs', 'LLMs', 'LDMs', 'VLMs', 'Gradio', 'Numpy', 'SQLite', 'Prompting'],
    image: './assets/images/personalized-fashion-adv-3.png', 
    alt: 'Personalized Fashion Adv',
    githubUrl: 'https://github.com/alessandropier/Personalized-Fashion-Ads',
    blogUrl: '/blog/personalized-fashion-adv',
    liveUrl: ''
  },
  { 
    title: 'Competitive Programming', 
    category: 'C++', 
    categorySlug: 'c++', 
    tags: ['C++', 'Problem Write-Ups', 'Theory'],
    image: './assets/images/competitive-programming.png', 
    alt: 'Competitive Programming',
    githubUrl: 'https://github.com/alessandropier/Competitive-Programming',
    blogUrl: '', // Se non c'è il blog, lascialo vuoto o non metterlo
    liveUrl: ''
  }
  
  /*,
  { title: 'Fundo', category: 'Web design', categorySlug: 'web design', image: './assets/images/project-3.jpg', alt: 'fundo', githubUrl: '#' },
  { title: 'Brawlhalla', category: 'Applications', categorySlug: 'applications', image: './assets/images/project-4.png', alt: 'brawlhalla', githubUrl: '#' },
  { title: 'DSM.', category: 'Web design', categorySlug: 'web design', image: './assets/images/project-5.png', alt: 'dsm.', githubUrl: '#' },
  { title: 'MetaSpark', category: 'Web design', categorySlug: 'web design', image: './assets/images/project-6.png', alt: 'metaspark', githubUrl: '#' },
  { title: 'Summary', category: 'Web development', categorySlug: 'web development', image: './assets/images/project-7.png', alt: 'summary', githubUrl: '#' },
  { title: 'Task Manager', category: 'Applications', categorySlug: 'applications', image: './assets/images/project-8.jpg', alt: 'task manager', githubUrl: '#' },
  { title: 'Arrival', category: 'Web development', categorySlug: 'web development', image: './assets/images/project-9.png', alt: 'arrival', githubUrl: '#' },
  */
];