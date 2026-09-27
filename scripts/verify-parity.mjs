import { readFileSync } from 'node:fs';

const extractMain = (html) => {
  const start = html.indexOf('<main');
  const end = html.indexOf('</main>');
  if (start === -1 || end === -1) throw new Error('no <main> found');
  return html.slice(start, end + '</main>'.length);
};

const decodeEntities = (s) =>
  s
    .replace(/&#39;/g, "'")
    .replace(/&quot;/g, '"')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&amp;/g, '&');

const normalize = (html) =>
  decodeEntities(
    html
      .replace(/<!--[\s\S]*?-->/g, '')
      .replace(/\s+/g, ' ')
      .replace(/ +"/g, '"')
      .replace(/>\s+/g, '>')
      .replace(/\s+</g, '<')
      .trim(),
  );

const original = normalize(extractMain(readFileSync('docs/superpowers/reference/original-index.html', 'utf8')));
const built = normalize(extractMain(readFileSync('dist/index.html', 'utf8')));

if (original === built) {
  console.log('PARITY OK: rendered <main> matches original');
  process.exit(0);
}

let i = 0;
while (i < original.length && original[i] === built[i]) i++;
console.error('PARITY MISMATCH at index', i);
console.error('original:', JSON.stringify(original.slice(Math.max(0, i - 60), i + 60)));
console.error('built   :', JSON.stringify(built.slice(Math.max(0, i - 60), i + 60)));
process.exit(1);
