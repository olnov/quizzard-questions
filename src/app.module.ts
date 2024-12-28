import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuestionsModule } from './questions/questions.module';
import { QuestionsService } from './questions/questions.service';

@Module({
  imports: [QuestionsModule],
  controllers: [AppController],
  providers: [AppService, QuestionsService],
})
export class AppModule { }
