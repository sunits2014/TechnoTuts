import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css','../../../node_modules/semantic-ui/dist/semantic.min.css'],
  animations: [
    trigger('hideAnim', [
      transition(':leave', [
        style({ top: '-16em', opacity: '1' }),
        animate('250ms', style({ top: '-15.5em', opacity: '0' }))
      ]),
      transition(':enter', [
        style({ top: '-15.5em', opacity: '0' }),
        animate('250ms', style({ top: '-16em', opacity: '1' }))
      ])
    ])
  ]
})

export class AboutComponent {

  constructor(public route: Router) { }

  public goToDashboard() {
    this.route.navigate(['/tutorials'])
  }

  public showCardDiv: boolean;
  public showCard(eventName: string) {
    if (eventName == 'sunit') {
      this.showCardDiv = true;
    }
    else {
      this.showCardDiv = false;
    }
  }
}
