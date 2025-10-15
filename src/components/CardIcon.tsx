import React from 'react';
import { Icon } from '../svg';

type CardIconProps = {
  icon: string;
  iconColor: string;
};

const CardIcon: React.FC<CardIconProps> = ({ icon, iconColor }) => {
  return (
    <div className='card__icon' style={{ backgroundColor: `${iconColor}` }}>
      <Icon name={icon} />
    </div>
  );
};

export default CardIcon;
