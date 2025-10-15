import React, { forwardRef, useState } from 'react';
import { Icon } from '../svg';

type ButtonProps = {
  choice: string | null;
  setChoice: (value: string | null) => void;
  ref: React.Ref<HTMLButtonElement>;
};

const Button: React.FC<ButtonProps> = forwardRef(
  ({ choice, setChoice }, ref) => {
    const [btnText, setBtnText] = useState('Submit Answer');
    const [error, setError] = useState(false);

    return (
      <>
        <button className='quiz__btn'>{btnText}</button>
        {error ? (
          <div className='msg msg--error'>
            <Icon name='error' />
            Please select an answer
          </div>
        ) : null}
      </>
    );
  }
);
export default Button;
