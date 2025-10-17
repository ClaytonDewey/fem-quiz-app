import { makeLetter } from '../utils';
import { Choice } from '.';
import { useRef, useState } from 'react';

type ChoicesProps = {
  answers: string[];
  correctAnswer: string;
};

const Choices: React.FC<ChoicesProps> = ({ answers, correctAnswer }) => {
  const [isDisabled, setIsDisabled] = useState(true);
  const answerRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = (e: any) => {
    const selectedAnswer = e.currentTarget.getAttribute('data-choice');
    answerRef.current = e.target;
    console.log(selectedAnswer === correctAnswer);
    setIsDisabled(false);
  };

  return (
    <>
      <div className='card--container'>
        {answers.map((answer, index) => {
          const letter = makeLetter(index + 1);
          return (
            <Choice
              handleClick={handleClick}
              letter={letter}
              answer={answer}
              correctAnswer={correctAnswer}
              key={index}
            />
          );
        })}
      </div>
      <button type='button' className='quiz__btn' disabled={isDisabled}>
        Submit Answer
      </button>
    </>
  );
};
export default Choices;
