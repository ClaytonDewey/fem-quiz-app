import { create } from 'zustand';

type State = {
  topic: string;
  questions: string[];
  answers: string[];
  score: number;
  activeQuestionIndex: number;
};

type Action = {
  updateTopic: (topic: State['topic']) => void;
  updateQuestions: (questions: State['questions']) => void;
  updateAnswers: (answers: State['answers']) => void;
  updateScore: (score: State['score']) => void;
  updateActiveQuestionIndex: (
    activeQuestionIndex: State['activeQuestionIndex']
  ) => void;
};

export const useQuizStore = create<State & Action>((set) => ({
  topic: '',
  questions: [],
  answers: [],
  score: 0,
  activeQuestionIndex: 0,
  updateTopic: (topic) => set(() => ({ topic: topic })),
  updateQuestions: (questions) => () => ({ questions: questions }),
  updateAnswers: (answers) => () => ({ answers: answers }),
  updateScore: (score) => set(() => ({ score: score })),
  updateActiveQuestionIndex: (activeQuestionIndex) => ({
    activeQuestionIndex: activeQuestionIndex,
  }),
}));
