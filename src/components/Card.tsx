import React from 'react';
import { makeLetter } from '../utils';
import { CardIcon } from '.';
import { useQuizStore } from '../store/quizStore';
import { useNavigate } from 'react-router-dom';

type CardProps = {
  icon?: string;
  iconColor: string;
  index: number;
  text: string;
};

const Card: React.FC<CardProps> = ({ icon, iconColor, text, index }) => {
  const navigate = useNavigate();

  const updateTopic = useQuizStore((state) => state.updateTopic);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const topic = event.currentTarget.getAttribute('data-topic');

    if (topic !== null) {
      updateTopic(topic);
      navigate('/quiz');
    }
  };

  return (
    <button
      type='button'
      data-topic={text}
      className='card'
      onClick={handleClick}>
      {icon ? (
        <CardIcon icon={icon} iconColor={iconColor} />
      ) : (
        <div className='card__icon'>{makeLetter(index + 1)}</div>
      )}
      <div className='card__text'>{text}</div>
    </button>
  );
};
export default Card;
