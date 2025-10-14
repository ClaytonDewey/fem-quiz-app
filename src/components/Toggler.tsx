import { useThemeStore } from '../store/themeStore';
import { Icon } from '../svg';

const Toggler = () => {
  const { theme, toggleTheme } = useThemeStore();

  return (
    <div className='toggler'>
      {theme === 'dark' ? <Icon name='sun' /> : <Icon name='sun-dark' />}
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
      {theme === 'light' ? <Icon name='moon-dark' /> : <Icon name='moon' />}
    </div>
  );
};
export default Toggler;
