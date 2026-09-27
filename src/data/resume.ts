import type { TimelineSection, Skill } from './types';

export const education: TimelineSection = {
  icon: 'book-outline',
  heading: 'Education',
  entries: [
    { 
      title: 'BSc in Computer Science — University of Bari Aldo Moro', 
      period: 'Nov 2020 — Apr 2025', 
      final_grade: '110/110 with highest honors',
      text: `▪ Thesis in generative AI for the fashion industry: given a user profile and a piece of clothing, it `+
      `generates tailored high-fashion advertisements <span style="display: inline !important; white-space: nowrap `+
      `!important;"><a href="/blog/personalized-fashion-adv/" target="_blank"`+
      ` style="color: var(--orange-yellow-crayola, #ffbf00); text-decoration: underline; display: inline !important;">(more here)</a>` +
      ` <span style="font-weight: bold; color: #fafafae2; display: inline !important;"><br>Awarded by Forbes.</span></span>` 
    },
    { 
      title: 'High School Of Computer Science — IISS G. Ferraris Molfetta', 
      period: 'Sept 2015 — Jun 2020', 
      final_grade: '100/100 with highest honors',
      text: '▪ Studied system design, programming, systems, networks, C, C++, Java, Python and SQL. \n▪ Multiple participations in Competitive Programming competitions such as Italian Olympiads in Informatics (OII), Team Informatics Olympiad (OIS) and CyberChallenge IT.' 
    }
  ],
};

export const experience: TimelineSection = {
  icon: 'book-outline',
  heading: 'Experience',
  entries: [
    { title: 'Computer Science Tutor — Freelancer', period: 'Sept 2022 — Sept 2026', text: 'I provided advanced academic and technical support in Computer Science, Systems & Networks, Telecommunications, and English to high-shool and university students.' },
    { title: 'AI Research Intern — University of Bari Aldo Moro', period: 'Oct 2024 — Apr 2025', text: "I conceptualized and developed an AI framework for personalized advertising in the fashion-tech industry. The final project was awarded by Forbes." },
    { title: 'IT Support Specialist — Police Department of Molfetta', period: 'Apr 2016 — May 2018', text: 'I was responsible for monitoring and maintaining technological equipment and the internal network, managing traffic violations and fines through dedicated software, and interacting with the public at the reports desk to provide assistance and information.' },
  ],
};

export const skills: Skill[] = [
  { name: 'Web design', value: 80 },
  { name: 'Graphic design', value: 70 },
  { name: 'Branding', value: 90 },
  { name: 'WordPress', value: 50 },
];

// Struttura dati per le categorie del resume
export interface SkillCategory {
  title: string;
  items: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    title: 'Languages',
    items: ['Italian (Native)', 'English (Near-Native)']
  },
  {
    title: 'Core Technical Skills',
    items: ['C++', 'Java', 'Python', 'SQL', 'System Design', 'Algorithms', 'Git', 'CI/CD', 'LLMs/VLMs']
  },
  {
    title: 'Soft Skills',
    items: ['Public Speaking', 'Team Leadership', 'Technical Writing', 'Curiosity', 'Fast Learner', 'Problem Solving']
  },
  {
    title: 'Interests & Hobbies',
    items: ['Competitive Programming', 'Reading', 'Cinema & Arts', 'Chess']
  }
];