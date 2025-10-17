import CardIcon from './CardIcon';

type ChoiceProps = {
  handleClick: (e: any) => void;
  letter: string;
  answer: string;
  correctAnswer: string;
};

const Choice: React.FC<ChoiceProps> = ({
  handleClick,
  letter,
  answer,
  correctAnswer,
}) => {
  return (
    <button
      data-choice={answer}
      data-correct={answer === correctAnswer}
      type='button'
      className='card'
      onClick={handleClick}>
      <div className='card__icon'>{letter}</div>
      <div className='card__text'>{answer}</div>
      <CardIcon icon='error' iconColor='transparent' />
    </button>
  );
};
export default Choice;
