import { create } from 'zustand';
import { persist, PersistStorage } from 'zustand/middleware';

type Theme = 'light' | 'dark';

interface ThemeState {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
}

// Minimal wrapper for localStorage that satisfies Zustand's types
const localStorageWrapper: PersistStorage<ThemeState> = {
  getItem: (name) => {
    const item = localStorage.getItem(name);
    return item ? JSON.parse(item) : null;
  },
  setItem: (name, value) => {
    localStorage.setItem(name, JSON.stringify(value));
  },
  removeItem: (name) => {
    localStorage.removeItem(name);
  },
};

export const useThemeStore = create<ThemeState>()(
  persist(
    (set) => ({
      theme: 'light', // default fallback
      toggleTheme: () =>
        set((state) => ({
          theme: state.theme === 'light' ? 'dark' : 'light',
        })),
      setTheme: (theme) => set({ theme }),
    }),
    {
      name: 'theme',
      storage: typeof window === 'undefined' ? undefined : localStorageWrapper,
      onRehydrateStorage: () => (state) => {
        // When hydration completes, if no theme is stored, use system preference
        if (state && typeof window !== 'undefined') {
          const stored = localStorage.getItem('theme');
          if (!stored) {
            const prefersDark = window.matchMedia(
              '(prefers-color-scheme: dark)'
            ).matches;
            state.setTheme(prefersDark ? 'dark' : 'light');
          }
        }
      },
    }
  )
);
