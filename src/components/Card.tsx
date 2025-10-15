import React from 'react';
import { makeLetter } from '../utils';
import { Button } from '.';
import { Icon } from '../svg';

type CardProps = {
  icon?: string;
  index: number;
  text: string;
};

const Card: React.FC<CardProps> = ({ icon, text, index }) => {
  return (
    <Button className='card' onClick={() => console.log(text)}>
      {icon ? (
        <Icon name={icon} />
      ) : (
        <div className='card__icon'>{makeLetter(index + 1)}</div>
      )}
      <div className='card__text'>{text}</div>
    </Button>
  );
};
export default Card;
