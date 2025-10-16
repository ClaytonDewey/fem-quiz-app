import { Toggler, CardIcon } from '.';
import { useQuizStore } from '../store/quizStore';

const Header = () => {
  const topic = useQuizStore((state) => state.topic);
  let iconImage;
  switch (topic) {
    case 'HTML':
      iconImage = 'html';
      break;
    case 'CSS':
      iconImage = 'css';
      break;
    case 'JavaScript':
      iconImage = 'js';
      break;
    default:
      iconImage = 'a11y';
      break;
  }

  return (
    <header className='header flex'>
      {topic !== '' && (
        <>
          <CardIcon icon={iconImage} iconColor='#FFF1E9' />
          {topic}
        </>
      )}
      <Toggler />
    </header>
  );
};
export default Header;
