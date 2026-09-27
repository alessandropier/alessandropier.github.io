import type { SiteMeta } from './types';

export const site: SiteMeta = {
  url: 'https://your-domain.com',
  title: 'Dev Portfolio',
  description:
    'Personal portfolio of Richard Hanrick — Creative Director and UI/UX Designer specializing in web design, web development, and mobile apps.',
  keywords: ['portfolio', 'web developer', 'ui ux designer', 'web design', 'creative director'],
  themeColor: '#383838',
  locale: 'en',
  favicon: './assets/images/logo.ico',
  ogImage: './assets/images/my-avatar.png',
  person: {
    name: 'Alessandro Piergiovanni',
    jobTitle: 'Software Engineer',
    image: './assets/images/my_profile_pic.jpg',
    email: 'alessandropiergiovanni.info@gmail.com',
    telephone: '+1 (111) 111-1111',
    addressLocality: 'Bari, Puglia, Italy',
    sameAs: [],
  },
};
