import { useNavigate } from 'react-router-dom';
import data from '../data.json';
import { useQuizStore } from '../store/quizStore';
import { useEffect, useState } from 'react';
import { Choices, ProgressBar } from '../components';

interface Questions {
  question: string;
  options: string[];
  answer: string;
}

// interface CurrentQuiz {
//   title: string;
//   icon: string;
//   iconColor: string;
//   questions: Questions[];
// }

const QuizPage = () => {
  const topic = useQuizStore((state) => state.topic);
  const activeQuestionIndex = useQuizStore(
    (state) => state.activeQuestionIndex
  );
  // const updateTopic = useQuizStore((state) => state.updateTopic);
  // const updateActiveQuestionIndex = useQuizStore(
  //   (state) => state.updateActiveQuestionIndex
  // );
  const navigate = useNavigate();

  const [questions, setQuestions] = useState<Questions[]>([]);
  const [activeQuestion, setActiveQuestion] = useState(null as any);

  useEffect(() => {
    data.quizzes.forEach((quiz) => {
      if (quiz.title === topic) {
        setQuestions(quiz.questions);
      }
    });
  }, [topic]);

  useEffect(() => {
    setActiveQuestion(questions[activeQuestionIndex]);
  }, [questions, setActiveQuestion, activeQuestionIndex]);

  useEffect(() => {
    if (!topic) navigate('/');
  }, [topic, navigate]);

  return (
    <>
      {activeQuestion && (
        <>
          <div className='col__left'>
            <p className='quiz__step'>
              Question {activeQuestionIndex + 1} of {questions.length}
            </p>
            <p className='quiz__questions'>
              {questions[activeQuestionIndex].question}
            </p>
            <ProgressBar totalQuestions={questions.length} />
          </div>
          <div className='col__right'>
            <div className='card--container'>
              <Choices
                options={activeQuestion.options}
                answer={activeQuestion.answer}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};
export default QuizPage;
