import { Component, OnInit, OnChanges, AfterViewInit, AfterContentChecked, AfterViewChecked } from '@angular/core';
import { trigger, transition, animate, style } from '@angular/animations';
@Component({
  selector: 'check-box',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css',
    '../../../node_modules/semantic-ui/dist/semantic.min.css',
    '../css/ionicons-2.0.1/css/ionicons.min.css'],
  animations: [
    trigger('toggle',[
      transition(':enter',[
        style({top:'-0.5em', opacity:'0'}),
        animate('250ms',style({top: '0.5em', opacity: '1'}))
      ]),
      transition(':leave',[
        style({top:'0.5em', opacity: '1'}),
        animate('250ms',style({top: '-0.5em', opacity: '0'}))
      ])
    ])
  ]
})
export class CheckboxComponent implements OnInit, AfterContentChecked {

  constructor() { }

  ngOnInit() {
    this.checkedText1 = "false";
    this.checkedText2 = "false";
    this.textColor1 = {
      'color': 'red',
      'font-weight': 'bold'
    }
    this.textColor2 = {
      'color': 'red',
      'font-weight': 'bold'
    }
  }

  ngAfterContentChecked() {
    if (this.chk1 == true || this.chk2 == true || this.chk3 == true) {
      this.checkedText1 = "true";
      this.textColor1 = {
        'color': 'green',
        'font-weight': 'bold'
      }
    }
    else if (this.chk4 == true || this.chk5 == true || this.chk6 == true) {
      this.checkedText2 = "true";
      this.textColor2 = {
        'color': 'green',
        'font-weight': 'bold'
      }
    } else {
      this.checkedText1 = "false";
      this.checkedText2 = "false";
      this.textColor1 = {
        'color': 'red',
        'font-weight': 'bold'
      }
      this.textColor2 = {
        'color': 'red',
        'font-weight': 'bold'
      }
    }
  }

  public textColor1: Object = {};
  public textColor2: Object = {};
  public chk1: boolean;
  public chk2: boolean;
  public chk3: boolean;
  public chk4: boolean;
  public chk5: boolean;
  public chk6: boolean;
  public checkedText1: string;
  public checkedText2: string;
  public showOnHover1: boolean;
  public showOnHover2: boolean;

  public showBtn(event: string) {
    if(event == 'firstDiv'){
      this.showOnHover1 = true;
      this.showOnHover2 = false;
    }
    else if(event == "secondDiv"){
      this.showOnHover1 = false;
      this.showOnHover2 = true;
    }
    
  }

  public hideBtn() {
    this.showOnHover1 = false;
    this.showOnHover2 = false;
  }
}
