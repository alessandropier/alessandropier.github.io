export type PageId = 'about' | 'resume' | 'portfolio' | 'blog' | 'contact';

export interface NavItem {
  label: string;
  page: PageId;
}

export type ContactKind = 'link' | 'time' | 'address';

export interface ContactItem {
  icon: string;
  title: string;
  kind: ContactKind;
  value: string;
  href?: string;
  datetime?: string;
}

export interface SocialLink {
  icon: string;
  href: string;
}

export interface Profile {
  name: string;
  title: string;
  avatar: string;
  avatarWidth: number;
  contacts: ContactItem[];
  socials: SocialLink[];
}

export interface Service {
  icon: string;
  iconWidth: number;
  alt: string;
  title: string;
  text: string;
}

export interface Testimonial {
  avatar: string;
  name: string;
  text: string;
}

export interface ModalDefault {
  avatar: string;
  name: string;
  alt: string;
  datetime: string;
  dateLabel: string;
  text: string;
}

export interface Client {
  logo: string;
  href: string;
}

export interface TimelineEntry {
  title: string;
  period: string;
  final_grade?: string;
  text: string;
}

export interface TimelineSection {
  icon: string;
  heading: string;
  entries: TimelineEntry[];
}

export interface Skill {
  name: string;
  value: number;
}

export interface Project {
  title: string;
  category: string;
  categorySlug: string;
  tags?: string[]; // <--- diverse tecnologie utilizzate
  image: string;
  alt: string;
  githubUrl?: string;
  blogUrl?: string;
  youtubeUrl?: string; // <--- link youtube del video o altro
  liveUrl?: string;    // <--- link per testare l'app
}

export interface PersonSchema {
  name: string;
  jobTitle: string;
  image: string;
  email: string;
  telephone: string;
  addressLocality: string;
  sameAs: string[];
}

export interface SiteMeta {
  url: string;
  title: string;
  description: string;
  keywords: string[];
  themeColor: string;
  locale: string;
  favicon: string;
  ogImage: string;
  person: PersonSchema;
}
