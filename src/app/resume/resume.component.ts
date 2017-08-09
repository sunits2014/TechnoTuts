import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ResumeService } from "../resume.service";
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'resume-view',
  templateUrl: './resume.component.html',
  styleUrls: ['./resume.component.css', '../../../node_modules/semantic-ui/dist/semantic.min.css', '../css/ionicons-2.0.1/css/ionicons.min.css'],
  providers: [ResumeService],
  animations: [
    trigger('toggleAnim',[
      transition(':enter',[
        style({transform: 'scale(1.1)'}),
        animate('250ms',style({transform: 'scale(1)'}))
      ]),
      transition(':leave',[
        style({ opacity:'1'}),
        animate('250ms',style({ opacity: '0'}))
      ])      
    ])
  ]
})

export class ResumeComponent implements OnInit {

  @Output() closeView: EventEmitter<boolean> = new EventEmitter();

  public result: any[];
  constructor(public resumeService: ResumeService) { }

  ngOnInit() {    
    this.resumeService.getResumeData().subscribe(result => { this.result = result });
  }
  
  public closeViewEvnt() {
    this.closeView.emit(false);
  }
}