import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {AuthService} from "../../../services";
import {Router} from "@angular/router";

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
    private authService: AuthService,
    private route: Router
  ) { }

  ngOnInit(): void {
  }

  public submitForm(): void {
    this.authService.login(this.form.value);
    this.route.navigate(['/home']);
  }

  public register(): void {
    this.route.navigate(['/auth/register']);
  }

}
