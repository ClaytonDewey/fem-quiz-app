import React, { MouseEvent, ReactNode } from 'react';
import { Icon } from '../svg';

interface ButtonProps {
  children: ReactNode;
  onClick: (event: MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  className?: string;
  icon?: string;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  disabled = false,
  className = '',
  icon,
  iconPosition = 'left',
}) => {
  return (
    <button onClick={onClick} className={className} disabled={disabled}>
      {icon && iconPosition === 'left' && <Icon name={icon} />}
      {children}
      {icon && iconPosition === 'right' && <Icon name={icon} />}
    </button>
  );
};
export default Button;
