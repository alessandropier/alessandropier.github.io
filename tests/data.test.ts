import { test, expect } from 'bun:test';
import { readdirSync, readFileSync } from 'node:fs';
import { navItems } from '../src/data/navigation';
import { profile } from '../src/data/profile';
import { services, testimonials, clients, aboutText } from '../src/data/about';
import { education, experience, skills } from '../src/data/resume';
import { projects, portfolioCategories } from '../src/data/portfolio';

test('navigation has the five pages in order', () => {
  expect(navItems.map((n) => n.page)).toEqual(['about', 'resume', 'portfolio', 'blog', 'contact']);
});

test('profile has four contacts and three socials', () => {
  expect(profile.contacts).toHaveLength(4);
  expect(profile.socials).toHaveLength(3);
});

test('about content counts match original', () => {
  expect(aboutText).toHaveLength(2);
  expect(services).toHaveLength(4);
  expect(testimonials).toHaveLength(4);
  expect(clients).toHaveLength(6);
});

test('resume content counts match original', () => {
  expect(education.entries).toHaveLength(3);
  expect(experience.entries).toHaveLength(3);
  expect(skills).toHaveLength(4);
});

test('portfolio has nine projects and four categories', () => {
  expect(projects).toHaveLength(9);
  expect(portfolioCategories).toEqual(['All', 'Web design', 'Applications', 'Web development']);
});

test('every project category slug is one of the known slugs', () => {
  const slugs = new Set(['web design', 'applications', 'web development']);
  for (const p of projects) expect(slugs.has(p.categorySlug)).toBe(true);
});

const blogDir = new URL('../src/content/blog/', import.meta.url);
const blogFiles = () => readdirSync(blogDir).filter((f) => f.endsWith('.md'));

test('blog has six posts', () => {
  expect(blogFiles()).toHaveLength(6);
});

test('every blog post has required frontmatter', () => {
  const keys = ['title:', 'category:', 'datetime:', 'dateLabel:', 'image:', 'alt:', 'excerpt:'];
  for (const file of blogFiles()) {
    const src = readFileSync(new URL(file, blogDir), 'utf8');
    for (const key of keys) expect(src).toContain(key);
  }
});
