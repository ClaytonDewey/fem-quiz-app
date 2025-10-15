import { useThemeStore } from '../store/themeStore';
import { Icon } from '../svg';

const Toggler = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className='toggler'>
      <Icon
        name={theme === 'dark' ? 'sun' : 'sun-dark'}
        fallback={<p>...</p>}
      />
      <div className='toggle__container'>
        <input
          type='checkbox'
          id='mode'
          className={`toggle ${theme} visually-hidden`}
          onChange={toggleTheme}
        />
        <label htmlFor='mode' className='label'>
          <div className='ball'></div>
        </label>
      </div>
      <Icon
        name={theme === 'light' ? 'moon-dark' : 'moon'}
        fallback={<p>...</p>}
      />
    </div>
  );
};
export default Toggler;
