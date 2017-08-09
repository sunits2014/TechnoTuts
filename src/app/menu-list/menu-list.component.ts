import { Component, Output, EventEmitter, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.css',
    '../../../node_modules/semantic-ui/dist/semantic.min.css',
    '../css/ionicons-2.0.1/css/ionicons.min.css']
})

export class MenuListComponent implements OnInit {

  public customSection: string;

  @Output() changeClass: EventEmitter<boolean> = new EventEmitter();
  @Output() userNameUpdate: EventEmitter<string> = new EventEmitter();

  public menuListItem = [
    { name: "Profile Info", class: "ion-android-person" },
    { name: "Account Settings", class: "ion-android-settings" },
    { name: "Like/Share", class: "ion-android-share-alt" },
    { name: "Logout", class: "ion-android-exit" },
  ]

  public closeDiv(closeDivBool: boolean) {
    this.CustomDiv = closeDivBool;
  }

  constructor(public route: Router) { }

  public CustomDiv: boolean;
  public selectItem(listIndex: any) {
    this.CustomDiv = true;
    this.changeClass.emit(false);
    if (listIndex.name == "Profile Info") {
      this.customSection = 'Profile Info';
    }
    else if (listIndex.name == "Account Settings") {
      this.customSection = 'Account Settings';
    }
    else if (listIndex.name == "Like/Share") {
      this.customSection = 'Like/Share';
    }
    else if (listIndex.name == "Logout") {
      localStorage.setItem('currentUser', JSON.stringify({ name: '', password: '' }));
      this.route.navigate([""]);
    }
  }

  public updateUsername(newUsername: string) {
    this.userNameUpdate.emit(newUsername);
  }

  //Context Menu
  public contextMenuStyle: Object = {};
  public showToggle: boolean;

  ngOnInit() {
    this.contextMenuStyle = {
      'display': 'none'
    }
  }

  public openContextMenu(event: any) {
    this.showToggle = true;
    if (event.which === 3) {
      this.contextMenuStyle = {
        'display': 'block',
        'left': event.clientX + 'px',
        'top': event.clientY + 'px',
        'z-index': 1000,
        'position': 'absolute',
        'padding': '0.5em',
        'background-color': 'white'
      };
      return false;
    }
  }

  public hideContextMenu() {
    this.showToggle = false;
    this.contextMenuStyle = {
      'display': 'none'
    }
  }
}
