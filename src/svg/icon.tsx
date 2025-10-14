import { FC, lazy, Suspense } from 'react';
import IconA11y from './accessibility';

// 1️⃣ Map PascalCase icon names → file paths
const iconPaths: Record<string, string> = {
  MoonDark: './moon-dark',
  Moon: './moon',
  SunDark: './sun-dark',
  Sun: './sun',
  CSS: './css',
  JS: './js',
  HTML: './html',
  Correct: './correct',
  Error: './error',
  Accessibility: './accessibility',
};

// 2️⃣ Convert PascalCase → kebab-case for usage
const pascalToKebab = (str: string) =>
  str
    .replace(/^Icon/, '') // remove "Icon" prefix
    .replace(/([a-z0-9])([A-Z])/g, '$1-$2') // camelCase → kebab-case
    .toLowerCase();

// 3️⃣ Build a lazy-loaded icon map
const iconMap: Record<string, React.LazyExoticComponent<FC>> = {};

Object.entries(iconPaths).forEach(([key, path]) => {
  const kebabName = pascalToKebab(`Icon${key}`);
  iconMap[kebabName] = lazy(() =>
    import(`${path}`)
      .then((mod) => ({ default: mod.default || IconA11y }))
      .catch(() => ({ default: IconA11y }))
  );
});

// 4️⃣ Type-safe icon names
export type IconName = keyof typeof iconMap;

interface IconProps {
  name: IconName;
  fallback?: React.ReactNode;
}

// 5️⃣ Main Icon component
const Icon: FC<IconProps> = ({ name, fallback }) => {
  const SelectedIcon = iconMap[name];
  return (
    <Suspense fallback={fallback ?? <IconA11y />}>
      {SelectedIcon ? <SelectedIcon /> : <IconA11y />}
    </Suspense>
  );
};

export default Icon;
