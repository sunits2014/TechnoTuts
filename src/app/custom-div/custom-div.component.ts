import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { CustomDivService } from "../custom-div.service";

@Component({
  selector: 'custom-div',
  templateUrl: './custom-div.component.html',
  styleUrls: ['./custom-div.component.css','../../../node_modules/semantic-ui/dist/semantic.min.css','../css/ionicons-2.0.1/css/ionicons.min.css'],
  providers: [CustomDivService],
  animations: [
    trigger('hideAnim', [
      transition(':leave', [
        style({ opacity: '1' }),
        animate('250ms', style({ opacity: '0' }))
      ]),
      transition(':enter', [
        style({ opacity: '0' }),
        animate('250ms', style({ opacity: '1' }))
      ])
    ])
  ]
})

export class CustomDivComponent implements OnInit {

  @Input() customSection: string;

  public customSwitch: string;

  public result: any[];
  constructor(public customService: CustomDivService) { }

  @Output() closeCustomDiv: EventEmitter<boolean> = new EventEmitter();
  @Output() usernameNew: EventEmitter<string> = new EventEmitter();

  public hideCustomDiv() {
    this.closeCustomDiv.emit(false);
  }

  public usernameLocal: string;
  public passwordLocal: string;

  public settingsArray = [
    "Subscribe to Newsletter",
    "Email Notifications",
    "Portal Notifications",
    "SMS Alerts"
  ]

  public getOldPassword: string;
  public getOldUsername: string;

  ngOnInit() {
    var userLocal = JSON.parse(localStorage.getItem('currentUser'));
    this.getOldPassword = userLocal.password;
    this.getOldUsername = userLocal.name;
    if (this.customSection == 'Profile Info') {
      this.customService.getProfileInfoData().subscribe(result => { this.result = result });
      this.customSwitch = 'profileInfoClicked';
      var userLocal = JSON.parse(localStorage.getItem('currentUser'));
      this.usernameLocal = userLocal.name;
      this.passwordLocal = userLocal.password;
    } else if (this.customSection == 'Account Settings') {
      var userLocal = JSON.parse(localStorage.getItem('currentUser'));
      this.usernameLocal = userLocal.name;
      this.customSwitch = 'accountSettingsClicked';
    } else if (this.customSection == 'Like/Share') {
      this.customSwitch = 'likeShareClicked';
    }
    this.activeTab1 = true;
  }

  ngAfterViewInit() {
    if (this.customSwitch == 'profileInfoClicked') {
      console.log('Profile Info')
    }
    else if (this.customSwitch == 'accountSettingsClicked') {
      console.log('Account Settings')
    }
    else if (this.customSwitch == 'likeShareClicked') {
      console.log('Like Share')
    }
  }

  public toggle(eventName: any) {
  }

  public showOnPassCheck: boolean;
  public updatePass: boolean;
  public updatePassword() {
    if (this.updatePass == true) {
      this.showOnPassCheck = true;
    } else {
      this.showOnPassCheck = false;
    }
  }
  public newPass: string;
  public newUser: string;
  public updateuser() {
    var currentUser = JSON.parse(localStorage.getItem('currentUser'));
    var currentPassword = currentUser.password;
    if (this.newPass != undefined && this.newUser != undefined) {
      localStorage.setItem('currentUser', JSON.stringify({
        name: this.newUser,
        password: this.newPass
      }));
      this.closeCustomDiv.emit(false);
      this.usernameNew.emit(this.newUser);
    }
    else if (this.newPass != undefined && this.newUser == undefined) {
      localStorage.setItem('currentUser', JSON.stringify({
        name: currentUser.name,
        password: this.newPass
      }));
      this.closeCustomDiv.emit(false);
    }
    else if (this.newPass == undefined && this.newUser != undefined) {
      localStorage.setItem('currentUser', JSON.stringify({
        name: this.newUser,
        password: currentUser.password
      }));
      this.closeCustomDiv.emit(false);
      this.usernameNew.emit(this.newUser);
    }
    else {
      var currentUser = JSON.parse(localStorage.getItem('currentUser'));
      localStorage.setItem('currentUser', JSON.stringify({
        name: currentUser.name,
        password: currentUser.password
      }));
      this.closeCustomDiv.emit(false);
    }

  }

  public activeTab1: boolean;
  public activeTab2: boolean;
  public credentialSwitch: string;
  public leftradius: boolean;
  public tabSelection(tabSelection: string) {
    if (tabSelection == 'password') {
      this.activeTab2 = true;
      this.activeTab1 = false;
      this.credentialSwitch = 'password';
      this.leftradius = true;
    }
    else {
      this.activeTab1 = true;
      this.activeTab2 = false;
      this.credentialSwitch = 'username';
      this.leftradius = false;
    }
  }
}
