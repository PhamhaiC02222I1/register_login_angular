import {Component, OnInit} from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import {AuthService} from '../../service/auth.service';
import {SignUpForm} from '../../model/SignUpForm';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    status = 'Please fill in the form to register!';
    form: any = {};
    hide = true;
    emailFormControl = new FormControl('', [
        Validators.required,
        Validators.email
    ]);
    signUpForm: SignUpForm;
    error1: any = {
        message: 'no_user'
    };
    error2: any = {
        message: 'no_email'
    };
    success: any = {
        message: 'Create User Account Success!'
    };

    constructor(private authService: AuthService) {
    }

    ngOnInit(): void {
    }

    ngSubmit() {
        this.signUpForm = new SignUpForm(
            this.form.name,
            this.form.username,
            this.form.email,
            this.form.password
        );
            this.authService.signUp(this.signUpForm).subscribe(data => {

                if (JSON.stringify(data) === JSON.stringify(this.error1)) {
                    this.status = 'the username is existed!Pls try again';
                }

                if (JSON.stringify(data) === JSON.stringify(this.error2)) {
                    this.status = 'the email is existed!Pls try again';
                }

                if (JSON.stringify(data) === JSON.stringify(this.success)) {
                    this.status = 'Create account success';
                }
            });
    }
}
