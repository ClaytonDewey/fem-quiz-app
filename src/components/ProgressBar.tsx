import React, { useEffect, useRef } from 'react';
import { useQuizStore } from '../store/quizStore';

type ProgressBarProps = {
  totalQuestions: number;
};

const ProgressBar: React.FC<ProgressBarProps> = ({ totalQuestions }) => {
  const activeQuestionIndex = useQuizStore(
    (state) => state.activeQuestionIndex
  );
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (progressRef.current !== null) {
      progressRef.current.style.width = `${
        (activeQuestionIndex / totalQuestions) * 100
      }`;
    }
  }, [activeQuestionIndex, totalQuestions]);

  return (
    <div className='progress__border'>
      <div ref={progressRef} className='progress__bar'></div>
    </div>
  );
};
export default ProgressBar;
