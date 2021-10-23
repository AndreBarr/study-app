import { Component, OnInit, Input } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { qAndA } from './explore-container-utils';

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
  @Input() currentQuestion: Question;
  @Input() practice: boolean = true;

  correctQuestions = new Set<Question>();
  doneQuestions = new Set<number>();
  grade: number = 100;
  qAndA: Array<Question>;

  constructor(public alertController: AlertController) {}

  getRandomInt(max) {
    let random = Math.floor(Math.random() * max);
    let count = 0;
    while (this.doneQuestions.has(random) && count < this.qAndA.length) {
      random = Math.floor(Math.random() * max);
      count++;
    }
    this.doneQuestions.add(random);
    return random;
  }

  getRandomQuestion() {
    let random = this.getRandomInt(this.qAndA.length);
    this.currentQuestion = this.qAndA[random];
  }

  restartQuestions() {
    this.grade = 100;
    this.correctQuestions = new Set<Question>();
    this.doneQuestions = new Set<number>();
    this.getRandomQuestion();
  }

  correctAnswer() {
    console.log('correct');
  }

  checkAnswer() {
    const choice = document.querySelector('ion-radio-group').value;
    let isCorrect = false;
    if (this.currentQuestion.answer.hasOwnProperty(choice)) {
      this.correctQuestions.add(this.currentQuestion);
      this.grade = Math.floor(
        this.correctQuestions.size / this.doneQuestions.size
      );
      isCorrect = true;
    } else if (this.correctQuestions.has(this.currentQuestion)) {
      this.correctQuestions.delete(this.currentQuestion);
    }

    this.grade = Math.floor(
      (this.correctQuestions.size / this.doneQuestions.size) * 100
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
    this.getRandomQuestion();
  }

  toggleMode() {
    this.practice = !this.practice;
  }

  ngOnInit() {
    this.qAndA = [...qAndA];
    this.getRandomQuestion();
  }
}
