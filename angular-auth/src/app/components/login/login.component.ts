import { Component, OnInit } from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../service/user.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public titulo: string;
  public cssUrl: string;
  formLogin!: FormGroup;
  invalidLogin: boolean = false;
  message: any;

  constructor(
    public sanitizer: DomSanitizer,
    private formBuilder: FormBuilder,
    private userauth: UserService,
    private router: Router,
  ) {
    this.titulo = "Innovation Soccer";
    this.cssUrl = './login.component.css';
  }

  ngOnInit() {
    this.formLogin = this.formBuilder.group({
      username: ['', Validators.compose([Validators.required])],
      password: ['', [Validators.required]]
    });
  }

  onSubmit() {
    //console.log(this.formLogin.value)

    if (this.formLogin.invalid) {
      return;
    }

    const loginData = {
      username: this.formLogin.controls['username'].value,
      password: this.formLogin.controls['password'].value
    };

    /*this.userauth.login(loginData).subscribe((data: any) => {
      this.message = data.message;
      console.log(this.message);

      if (data.token) {
        window.localStorage.setItem('token', data.token);
        this.router.navigate(['/inicio'])
        // this.userauth.logged = true;
      } else {
        // this.userauth.logged = false;
        this.invalidLogin = true;
      }
    });*/
  }

}
