import { Component } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component ({
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
})

export class LoginComponent {
    title = 'BURGER VEGGIE';
    image = 'https://cdn-icons-png.flaticon.com/512/1971/1971043.png';

    loginForm!: FormGroup;

    constructor(
        private formBuilder: FormBuilder
    ) {
        console.log('Se ha cargado login')
        this.buildForm();
    }
    onLogin(){
        if(this.loginForm.valid){
            console.log(this.loginForm.value);
        }else{
            this.loginForm.markAllAsTouched();
        }
    }

    private buildForm(){
        this.loginForm = this.formBuilder.group({
            email: ["", Validators.required],
            password: ["", [Validators.required, Validators.minLength(6)]],
        });
    }
}