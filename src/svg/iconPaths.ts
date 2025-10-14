export const iconPaths = {
  'moon-dark': './moon-dark',
  moon: './moon',
  'sun-dark': './sun-dark',
  sun: './sun',
  css: './css',
  js: './js',
  html: './html',
  correct: './correct',
  error: './error',
  accessibility: './accessibility',
} as const;

export type IconName = keyof typeof iconPaths;
