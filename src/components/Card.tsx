import React from 'react';
import { makeLetter } from '../utils';
import { Button, CardIcon } from '.';

type CardProps = {
  icon?: string;
  iconColor: string;
  index: number;
  text: string;
};

const Card: React.FC<CardProps> = ({ icon, iconColor, text, index }) => {
  return (
    <Button className='card' onClick={() => console.log(text)}>
      {icon ? (
        <CardIcon icon={icon} iconColor={iconColor} />
      ) : (
        <div className='card__icon'>{makeLetter(index + 1)}</div>
      )}
      <div className='card__text'>{text}</div>
    </Button>
  );
};
export default Card;
