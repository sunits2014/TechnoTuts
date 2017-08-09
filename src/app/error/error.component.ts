import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.css','../../../node_modules/semantic-ui/dist/semantic.min.css', '../css/ionicons-2.0.1/css/ionicons.min.css', '../css/font-awesome/css/font-awesome.min.css']
})
export class ErrorComponent {

  constructor(public route: Router) { }

  public goToLogin() {
    this.route.navigate(['']);
  }

}
