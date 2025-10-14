import { InputHTMLAttributes, forwardRef } from 'react';

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  wrapperClasses?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, wrapperClasses, className, id, ...rest }, ref) => {
    return (
      <div className={wrapperClasses}>
        {label && (
          <label htmlFor={id} className=''>
            {label}
          </label>
        )}
        <input ref={ref} id={id} className='' {...rest} />
        {error && <p className='error'>{error}</p>}
      </div>
    );
  }
);
export default Input;
