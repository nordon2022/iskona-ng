import { Component } from '@angular/core';
import {User} from "./store/user/user.types";
import {AuthService} from "./services";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public user: User | undefined;

  constructor(private accountService: AuthService) {

  }

  ngOnInit(): void {
    this.accountService.user.subscribe(x => this.user = x);
  }

  title = 'Искона';
}
