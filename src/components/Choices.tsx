import React, { useEffect, useRef, useState } from 'react';
import { makeLetter } from '../utils';
import { Button } from '.';

type ChoicesProps = {
  options: string[];
  answer: string;
};

const Choices: React.FC<ChoicesProps> = ({ options, answer }) => {
  const [choice, setChoice] = useState<string | null>('');
  const choiceRef = useRef<HTMLButtonElement | null>(null);

  const handleClick = (e: any) => {
    const selectedChoice = e.currentTarget.getAttribute('data-choice');
    choiceRef.current = e.target;
    setChoice(selectedChoice);
  };

  useEffect(() => {
    const allChoices = document.querySelectorAll('.card');

    allChoices.forEach((currentChoice) => {
      currentChoice.classList.add('card__active');
    });
  }, [choice]);

  return (
    <>
      <div className='card--container'>
        {options.map((option, index) => {
          const letter = makeLetter(index + 1);
          return (
            <button
              onClick={handleClick}
              className='card'
              type='button'
              data-choice={letter}
              data-correct={option === answer}
              key={index}>
              <div className='card__icon'>{letter}</div>
              <div className='card__text'>{option}</div>
            </button>
          );
        })}
      </div>
      <Button choice={choice} setChoice={setChoice} ref={choiceRef} />
    </>
  );
};
export default Choices;
