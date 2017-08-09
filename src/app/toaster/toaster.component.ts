import { Component, OnInit, Input } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.css', '../../../node_modules/semantic-ui/dist/semantic.min.css', '../css/ionicons-2.0.1/css/ionicons.min.css']
})
export class ToasterComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() errorMsg: string;

}
