import { Card } from '../components';
import { Quizzes } from '../data';

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
          {Quizzes.map((quiz, index) => {
            const { icon, iconColor, title } = quiz;
            return (
              <Card
                key={title}
                index={index}
                icon={icon}
                iconColor={iconColor}
                text={title}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};
export default HomePage;
