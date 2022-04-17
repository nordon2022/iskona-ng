import {Component} from "@angular/core";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-reg-form',
  templateUrl: './registration-form.component.html'
})
export class RegistrationFormComponent {
  public form: FormGroup = new FormGroup({
    username: new FormControl(),
    password: new FormControl()
  });

  public loading: boolean = false;

  public onSubmit(): void {

  }
}
