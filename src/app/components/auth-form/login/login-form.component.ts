import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../../shared/services/auth.service";

@Component({
  selector: 'app-auth-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss']
})
export class LoginFormComponent implements OnInit {
  public loading: boolean = true;

  public imgLogIn: string = '../../../../assets/beautiful-pine-trees-mountains.jpg';

  public form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  constructor(
    private fb: FormBuilder,
    private route: Router,
    public authService: AuthService
  ) { }

  ngOnInit(): void {
  }

  public submitForm(): void {
    this.authService.SignIn(this.form.value.username, this.form.value.password);
    // this.authService.login(this.form.value);

  }

  public register(): void {
    this.route.navigate(['/auth/register']);
  }

  public forgotPassword(): void {
    this.route.navigate(['/auth/forgot']);
  }

}
