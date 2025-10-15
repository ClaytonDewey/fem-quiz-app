export type QuizState = 'start' | 'playing' | 'end';

export type Category = 'HTML' | 'CSS' | 'JavaScript' | 'Accessibility';

export interface Question {
  question: string;
  options: string[];
  correct: number;
}

export interface Quiz {
  type: Category;
  icon: string;
  iconColor: string;
  questions: Question[];
}
