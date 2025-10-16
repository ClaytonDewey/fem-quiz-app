import { makeLetter } from '../utils';

type ChoiceProps = {
  question: string;
  index: number;
};

const Choice: React.FC<ChoiceProps> = ({ question, index }) => {
  const letter = makeLetter(index + 1);

  return (
    <button className='card'>
      <div className='card__icon'>{letter}</div>
      <div className='card__text'>{question}</div>
    </button>
  );
};
export default Choice;
