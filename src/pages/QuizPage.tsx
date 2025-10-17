import { useNavigate } from 'react-router-dom';
import { Quizzes } from '../data';
import { useQuizStore } from '../store/quizStore';
import { useEffect, useState } from 'react';
import { Choice, Choices, ProgressBar } from '../components';
import { Question } from '../types/quiz';

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

  const [questions, setQuestions] = useState<Question[]>([]);
  const [activeQuestion, setActiveQuestion] = useState(null as any);

  useEffect(() => {
    Quizzes.forEach((quiz) => {
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
            <p className='quiz__question'>
              {questions[activeQuestionIndex].question}
            </p>
            <ProgressBar totalQuestions={questions.length} />
          </div>
          <div className='col__right'>
            <Choices
              answers={activeQuestion.options}
              correctAnswer={activeQuestion.answer}
            />
          </div>
        </>
      )}
    </>
  );
};
export default QuizPage;
