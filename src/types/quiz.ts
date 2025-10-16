export type QuizState = 'start' | 'playing' | 'end';

export type Category = 'HTML' | 'CSS' | 'JavaScript' | 'Accessibility';

export interface Question {
  id: number;
  question: string;
  options: string[];
  answer: string;
  isCorrect?: boolean | null;
  selectedAnswer?: string | null;
}

export interface Quiz {
  title: Category;
  icon: string;
  iconColor: string;
  questions: Question[];
}
