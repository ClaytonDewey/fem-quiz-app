import { create } from 'zustand';

type State = {
  topic: string;
  score: number;
  activeQuestionIndex: number;
};

type Action = {
  updateTopic: (topic: State['topic']) => void;
  updateScore: (score: State['score']) => void;
  updateActiveQuestionIndex: (
    activeQuestionIndex: State['activeQuestionIndex']
  ) => void;
};

export const useQuizStore = create<State & Action>((set) => ({
  topic: '',
  score: 0,
  activeQuestionIndex: 0,
  updateTopic: (topic) => set(() => ({ topic: topic })),
  updateScore: (score) => set(() => ({ score: score })),
  updateActiveQuestionIndex: (activeQuestionIndex) => ({
    activeQuestionIndex: activeQuestionIndex,
  }),
}));
