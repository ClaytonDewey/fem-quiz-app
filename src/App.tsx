import { useThemeStore } from './store/themeStore';
import { Header } from './components';

function App() {
  const { theme } = useThemeStore();
  return (
    <div className='theme-wrapper' data-theme={theme}>
      <div className='container flex'>
        <Header />
      </div>
    </div>
  );
}

export default App;
