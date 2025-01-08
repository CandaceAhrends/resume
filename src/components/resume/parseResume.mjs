import { resume } from './resume.mjs';

const titles = [
  'Northwestern',
  'Bank of America',
  'Bank of New York',
  'Morgan Stanley',
  'Dairy',
  'Brothers',
];

const parsedResume = resume.split('\n').reduce(
  (acc, line) => {
    const hasTitle = titles.find((title) => line.includes(title));
    if (hasTitle) {
      acc.current = line;
      acc.resume[acc.current] = [];
    } else {
      acc.resume[acc.current] && acc.resume[acc.current].push(line);
    }
    return acc;
  },
  { current: '', resume: [] }
);

const finalResume = Object.entries(parsedResume.resume).map(([k, v]) => {
  const [company] = v;
  const dates = company.slice(-30).trim();
  const bullets = [...v.slice(1)].filter((b) => b.length);
  return {
    company: k,
    title: company.slice(0, 30).trimEnd(),
    dates,
    bullets,
  };
});

console.log(finalResume);
