import { Controller, Get } from '@nestjs/common';
import { QuestionsService } from './questions.service';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly questionService: QuestionsService) {}

  @Get()
  getAllQuestions() {
    return this.questionService.getQuestions();
  }
}
