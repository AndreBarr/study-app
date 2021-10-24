import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Unit1, Unit2, Unit3 } from './explore-container-utils';

interface Question {
  question: string;
  choices: Object;
  answer: Object;
}

@Component({
  selector: 'app-explore-container',
  templateUrl: './explore-container.component.html',
  styleUrls: ['./explore-container.component.scss'],
})
export class ExploreContainerComponent implements OnInit {
  @Input() practice: boolean = true;
  @Input() unit = 'one';

  unitMap = {
    one: Unit1,
    two: Unit2,
    three: Unit3,
  };

  currentQuestion: Question;
  correctQuestions = new Set<Question>();
  shownQuestions = new Set<Question>();
  questions: Array<Question>;
  grade = 100;
  done = false;

  constructor(public alertController: AlertController) {}

  getRandomQuestion(max: number): Question {
    return this.questions[Math.floor(Math.random() * max)];
  }

  getNewQuestion(): Question {
    if (this.shownQuestions.size < this.questions.length) {
      let randomQuestion = this.getRandomQuestion(this.questions.length);
      while (this.shownQuestions.has(randomQuestion)) {
        randomQuestion = this.getRandomQuestion(this.questions.length);
      }
      this.shownQuestions.add(randomQuestion);
      return randomQuestion;
    } else {
      this.done = true;
      return this.currentQuestion;
    }
  }

  restartQuestions() {
    this.grade = 100;
    this.done = false;
    this.correctQuestions = new Set<Question>();
    this.shownQuestions = new Set<Question>();
    this.currentQuestion = this.getNewQuestion();
  }

  checkAnswer() {
    const choice = document.querySelector('ion-radio-group').value;
    let isCorrect = false;
    if (this.currentQuestion.answer.hasOwnProperty(choice)) {
      this.correctQuestions.add(this.currentQuestion);
      this.grade = Math.floor(
        this.correctQuestions.size / this.shownQuestions.size
      );
      isCorrect = true;
    } else if (this.correctQuestions.has(this.currentQuestion)) {
      this.correctQuestions.delete(this.currentQuestion);
    }

    this.grade = Math.floor(
      (this.correctQuestions.size / this.shownQuestions.size) * 100
    );
    return isCorrect;
  }

  async checkAnswerPractice() {
    const correct = this.checkAnswer();
    const choice = document.querySelector('ion-radio-group').value;
    const alert = await this.alertController.create({
      header: `${correct ? 'Correct! 🥳🎉' : 'Wrong 😕'}`,
      message: `${
        correct
          ? Object.entries(this.currentQuestion.answer)[0][1]
          : "It's just practice, feel free to try again!"
      }`,
      buttons: [
        { text: `${correct ? 'Close' : 'Try Again'}`, role: 'close' },
        { text: 'Next', role: 'next', handler: () => this.nextQuestion() },
      ],
    });

    await alert.present();
  }

  nextQuestion() {
    this.checkAnswer();
    this.currentQuestion = this.getNewQuestion();
  }

  toggleMode() {
    this.practice = !this.practice;
  }

  ngOnInit() {
    this.unit === 'all'
      ? (this.questions = [...Unit1, ...Unit2, ...Unit3])
      : (this.questions = [...this.unitMap[this.unit]]);
    this.currentQuestion = this.getNewQuestion();
  }
}
