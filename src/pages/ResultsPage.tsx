import { Icon } from '../svg';

const ResultsPage = () => {
  return (
    <>
      <div className='col__left'>
        <h1>
          <span>Quiz completed</span>
          You scored
        </h1>
      </div>
      <div className='col__right'>
        <div className='card card__results'>
          <div className='card__results--header'>
            <div className='card__icon'>
              <Icon name='a11y' />
            </div>
            Accessibility
          </div>
          <div className='card__results--body'>
            <h2>8</h2>
            <p>out of 10</p>
          </div>
        </div>
        <button type='button' className='quiz__btn'>
          Play Again
        </button>
      </div>
    </>
  );
};
export default ResultsPage;
