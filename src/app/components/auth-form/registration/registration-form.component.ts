import {Component} from "@angular/core";
import {FormBuilder, FormControl, FormGroup, Validator, Validators} from "@angular/forms";

@Component({
  selector: 'app-reg-form',
  templateUrl: './registration-form.component.html'
})
export class RegistrationFormComponent {
  constructor(private fb: FormBuilder) {
  }
  public form: FormGroup = this.fb.group({
    firstName: ['', Validators.required],
    lastName: ['', Validators.required],
    username: ['', Validators.required],
    password: ['', Validators.required],
    repeat_password: ['', Validators.required],
  })

  public loading: boolean = false;

  public onSubmit(): void {
    console.log(this.form.getRawValue())
  }
}
