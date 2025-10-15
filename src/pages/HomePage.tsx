import { Card } from '../components';

const HomePage = () => {
  return (
    <>
      <div className='col__left'>
        <h1>
          <span>Welcome to the</span>Frontend Quiz!
        </h1>
        <p>
          <i>Pick a subject to get started.</i>
        </p>
      </div>
      <div className='col__right'>
        <div className='card--container'>
          <Card index={1} icon='html' text='HTML' />
          <Card index={2} icon='css' text='CSS' />
          <Card index={3} icon='js' text='JavaScript' />
          <Card index={4} icon='a11y' text='Accessibility' />
        </div>
      </div>
    </>
  );
};
export default HomePage;
