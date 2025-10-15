import { Toggler, CardIcon } from '.';
import { useQuizStore } from '../store/quizStore';

const Header = () => {
  const topic = useQuizStore((state) => state.topic);

  return (
    <header className='header flex'>
      {topic && <CardIcon icon='html' iconColor='#FFF1E9' />}
      <Toggler />
    </header>
  );
};
export default Header;
