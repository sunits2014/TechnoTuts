import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, AbstractControl } from '@angular/forms';
import { Router } from '@angular/router';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
    selector: 'login-comp',
    templateUrl: './login.component.html',
    styleUrls: [
        './login.component.css',
        '../../../node_modules/semantic-ui/dist/semantic.min.css','../css/ionicons-2.0.1/css/ionicons.min.css'],
    animations: [
        trigger('deleteAnim', [
            transition(':leave', [
                style({ top: '0.5em', opacity: '1' }),
                animate('250ms', style({ top: '-0.25em', opacity: '0' }))
            ])
        ])
    ]
})

export class LoginComponent implements OnInit {

    public loginForm: FormGroup;
    public registerForm: FormGroup;
    public passwordForm: FormGroup;
    public onerror: boolean;

    public message: boolean = true;

    public closeMsg() {
        this.message = false;
    }

    constructor(public _fb: FormBuilder, public route: Router) { }

    ngOnInit() {
        this.registerClicked = false;
        this.loginClicked = true;
        this.forgotPasswordClicked = true;
        this.loginForm = this._fb.group({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
        this.registerForm = this._fb.group({
            fullname: new FormControl('',Validators.required),
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        });
        this.passwordForm = this._fb.group({
            email: new FormControl('', Validators.required)
        })
    }

    public resetForms() {
        this.loginForm.reset();
        this.registerForm.reset();
        this.passwordForm.reset();
    }

    public registerClicked: boolean;
    public loginClicked: boolean;
    public forgotPasswordClicked: boolean;
    public loginSwitch: string;
    public switchLogin(loginName: string) {
        if (loginName == 'login') {
            this.resetForms();
            this.loginSwitch = 'login';
            this.loginClicked = false;
            this.registerClicked = true;
            this.forgotPasswordClicked = true;
        }
        else if (loginName == 'register') {
            this.resetForms();
            this.loginSwitch = 'register';
            this.loginClicked = true;
            this.registerClicked = false;
            this.forgotPasswordClicked = true;
        } else if (loginName == 'fpassword') {
            this.resetForms();
            this.loginSwitch = 'forgotPassword';
            this.loginClicked = true;
            this.registerClicked = true;
            this.forgotPasswordClicked = false;
        }
    }

    public register() {
        localStorage.setItem('currentUser',JSON.stringify({
            name: this.registerForm.controls['username'].value,
            password: this.registerForm.controls['password'].value
        }));
        this.loginSwitch = 'login';
        this.registerClicked = true;
        this.loginClicked = false;
    }

    public login() {
        var currentUser = JSON.parse(localStorage.getItem('currentUser'));
        var currentUserName = currentUser.name;
        var currentPassword = currentUser.password;
        if (this.loginForm.controls['username'].value == currentUserName &&
            this.loginForm.controls['password'].value == currentPassword) {
            this.route.navigate(['about']);
        }
        else {
            this.onerror = true;
            setTimeout(() => {
                this.onerror = false;
            }, 2000)
        }

    }
}