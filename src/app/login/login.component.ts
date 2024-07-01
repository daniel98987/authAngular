import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {AuthService, LoginData} from '../services/auth.service'
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  errMsg = [];

  loginForm: FormGroup;
  authService = inject(AuthService )
  router = inject(Router)
  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.loginForm = new FormGroup({
      email: new FormControl('daniel@gmail.com', [Validators.required]),
      password: new FormControl('123', [Validators.required])
    })
  }

  login() {
    if (this.loginForm.invalid) {
      alert('Formulario incorrecto');
      return;
    }
    let login: LoginData = {
      mail: this.loginForm.controls['email'].value,
      password: this.loginForm.controls['password'].value,
    };
    this.authService.login(login).subscribe({
      next: (res) => {
        localStorage.setItem('_jwt', res._jwt);

        this.router.navigate(['./dashboard']); // Corrección aquí
      },
      error: (error) => {
        alert('Correo o password no válido');
      }
    });
  }
  
}
