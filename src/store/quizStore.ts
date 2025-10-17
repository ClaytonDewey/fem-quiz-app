import { create } from 'zustand';
import { persist } from 'zustand/middleware';

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

export const useQuizStore = create<State & Action>()(
  persist(
    (set) => ({
      // Initial state
      topic: '',
      questions: [],
      answers: [],
      score: 0,
      activeQuestionIndex: 0,

      // Actions
      updateTopic: (topic) => set({ topic }),
      updateQuestions: (questions) => set({ questions }),
      updateAnswers: (answers) => set({ answers }),
      updateScore: (score) => set({ score }),
      updateActiveQuestionIndex: (index) => set({ activeQuestionIndex: index }),

      // Helper: reset everything but topic
      resetQuiz: () =>
        set({ questions: [], answers: [], score: 0, activeQuestionIndex: 0 }),
    }),
    {
      name: 'quiz-topic',
      partialize: (state) => ({ topic: state.topic }),
    }
  )
);
