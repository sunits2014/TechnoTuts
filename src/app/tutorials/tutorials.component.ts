import { Component, OnInit, Input } from '@angular/core';
import { menuService } from "../menu-service.service";
import { trigger, state, style, animate, transition } from '@angular/animations';
import { QuestionsService } from "../questions.service";


@Component({
  selector: 'app-tutorials',
  templateUrl: './tutorials.component.html',
  styleUrls: ['./tutorials.component.css', '../../../node_modules/semantic-ui/dist/semantic.min.css', '../css/ionicons-2.0.1/css/ionicons.min.css'],
  providers: [menuService, QuestionsService],
  animations: [
    trigger('toggleAnim', [
      transition(':enter', [
        style({ transform: 'scale(1.1)' }),
        animate('250ms', style({ transform: 'scale(1)' }))
      ]),
      transition(':leave', [
        style({ opacity: '1' }),
        animate('250ms', style({ opacity: '0' }))
      ])
    ]),
    trigger('zoomout', [
      transition(':enter', [
        style({ transform: 'scale(0.95)', opacity: '0' }),
        animate('250ms', style({ transform: 'scale(1)', opacity: '1' }))
      ]),
      transition(':leave', [
        style({ transform: 'scale(1)', opacity: '1' }),
        animate('250ms', style({ transform: 'scale(0.95)', opacity: '0' }))
      ])
    ]),
    trigger('fadeToggle', [
      transition(':enter', [
        style({ opacity: '0' }),
        animate('250ms', style({ opacity: '1' }))
      ]),
      transition(':leave', [
        style({ opacity: '1' }),
        animate('250ms', style({ opacity: '0' }))
      ])
    ])
  ]
})

export class TutorialsComponent implements OnInit {


  public result: any[];
  public questions: any[];
  public singleQues: any[];
  constructor(public menuService: menuService, public questionService: QuestionsService) { }

  public classVal(boolVal: boolean) {
    this.slideIn = boolVal;
    this.addClass = boolVal;
    this.showToggle = boolVal;
  };

  public usernameText: string;
  ngOnInit() {
    this.correctAnswer = true;
    this.menuService.getMenuList().subscribe(result => { this.result = result });
    this.questionService.getQuestions().subscribe(
      questions => {
        this.questions = questions;
        this.singleQues = [this.questions[Math.floor(Math.random() * this.questions.length)]];
      },
      error => { console.log(error) }
    );
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    this.usernameText = currentUser.name;
  }

  public addClass: boolean;
  public slideIn: boolean;
  public showToggle: boolean;
  public addRotateClass() {
    this.addClass = !this.addClass;
    this.slideIn = !this.slideIn;
    this.showToggle = true;
  }

  public hideMenu() {
    this.showToggle = false;
    this.addClass = false;
    this.slideIn = false;
  }

  public switchView: string;
  public getMenuItem(menuItemObj: any) {
    if (menuItemObj.title == "Product List") {
      this.switchView = "productList";
    } else if (menuItemObj.title == "Checkboxes/Radio") {
      this.switchView = "checkBox";
    }
  }

  public getnewUsernameUpdate(usernameUpdate: string) {
    this.usernameText = usernameUpdate;
  }

  public resumeBody: boolean;
  public resumeSwitch() {
    this.resumeBody = true;
  }

  public closeRes(event) {
    this.resumeBody = event;
  }

  //Flipping Even
  public aflip: boolean;
  public sflip: boolean;
  public faflip: boolean;
  public iflip: boolean;
  public fxflip: boolean;

  public shuffle() {
    this.singleQues.length = 0;
    this.singleQues = [this.questions[Math.floor(Math.random() * this.questions.length)]];
  }

  public myRadio: string;
  public correctAnswer: boolean;
  public submit(questionIndex: string) {
    if (questionIndex == "A" && this.myRadio == "Typescript" || this.myRadio == "Yes") {
      this.correctAnswer = false;
      this.aflip = true;
    } else if (questionIndex == "S" && this.myRadio == "HTML tags understood by the browser.") {
      this.correctAnswer = false;
      this.sflip = true;
    } else if (questionIndex == "FA" && this.myRadio == "An icons library") {
      this.correctAnswer = false;
      this.faflip = true;
    } else if (questionIndex == "IC" && this.myRadio == "Ionic Framework") {
      this.correctAnswer = false;
      this.iflip = true;
    } else if (questionIndex == "FX" && this.myRadio == "A CSS Skeleton") {
      this.correctAnswer = false;
      this.fxflip = true;
    }
    else {
      this.onErrorToaster = true;
      setTimeout(() => {
        this.onErrorToaster = false;
      }, 2000);
      this.errorMsg = "Incorrect answer. Please try again.";
    };    
    this.myRadio = "";
  }

  public prevState() {
    debugger;
    this.aflip = false;
    this.sflip = false;
    this.faflip = false;
    this.iflip = false;
    this.fxflip = false;
    this.correctAnswer = true;
    // this.singleQues = this.singleQues.splice(1);
    this.singleQues.length = 0;
    this.singleQues = [this.questions[Math.floor(Math.random() * this.questions.length)]];
  }

  public onErrorToaster: boolean;
  public errorMsg: string;
}
