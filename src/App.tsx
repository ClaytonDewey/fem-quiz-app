import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useThemeStore } from './store/themeStore';
import { HomePage, QuizPage, ResultsPage } from './pages';
import Layout from './layout/Layout';

function App() {
  const { theme } = useThemeStore();
  return (
    <div className='theme-wrapper' data-theme={theme}>
      <Router>
        <Routes>
          <Route element={<Layout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/quiz' element={<QuizPage />} />
            <Route path='/results' element={<ResultsPage />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
