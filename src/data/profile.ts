import type { Profile } from './types';

export const profile: Profile = {
  name: 'Alessandro Piergiovanni',
  title: 'Software Engineer',
  avatar: './assets/images/my_profile_pic.jpg',
  avatarWidth: 80,
  contacts: [
    { icon: 'mail-outline', title: 'Email', kind: 'link', value: 'alessandropiergiovanni.info@gmail.com', href: 'mailto:alessandropiergiovanni.info@gmail.com' },
    //{ icon: 'phone-portrait-outline', title: 'Phone', kind: 'link', value: '+1 (213) 352-2795', href: 'tel:+12133522795' },
    { icon: 'calendar-outline', title: 'Birthday', kind: 'time', value: 'November 23, 2001', datetime: '2001-11-23' },
    { icon: 'location-outline', title: 'Location', kind: 'address', value: 'Bari, Puglia, Italy' },
  ],
  socials: [
    { icon: 'logo-github', href: 'https://github.com/alessandropier' },
    { icon: 'logo-linkedin', href: 'https://www.linkedin.com/in/alessandropiergiovanni001/' },
    { icon: 'logo-youtube', href: 'https://www.youtube.com/@alessandropiergyo' }
  ],
};
