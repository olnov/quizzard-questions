import { Injectable } from '@nestjs/common';

@Injectable()
export class QuestionsService {
  getQuestions = () => {
    return this.questions;
  };

  questions = {
    response_code: 0,
    results: [
      {
        category: 'Vlads questions',
        type: 'multiple',
        difficulty: 'easy',
        question: 'What is the only one Sprunki OG?',
        correct_answer: 'Wenda',
        incorrect_answers: ['Black', 'Oren', 'Cluckr'],
      },
      {
        category: 'Vlads questions',
        type: 'multiple',
        difficulty: 'easy',
        question: 'How much Sprunki sinner additions are there? ',
        correct_answer: '17',
        incorrect_answers: ['20', '10', 'around 5'],
      },
      {
        category: 'Vlads questions',
        type: 'multiple',
        difficulty: 'easy',
        question: 'How much Sprunki phases are there?',
        correct_answer: '113',
        incorrect_answers: ['117', '135', 'less than 100'],
      },
    ],
  };
}
