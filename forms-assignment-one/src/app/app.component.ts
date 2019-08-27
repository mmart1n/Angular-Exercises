import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') signupForm: NgForm;
  submited = false;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  output = {
    email: '',
    type: '',
    password: ''
  };

  onSubmit() {
    console.log(this.signupForm);
    this.submited = true;
    this.output.email = this.signupForm.value.email;
    this.output.type = this.signupForm.value.userTypes;
    this.output.password = this.signupForm.value.password;
    this.signupForm.reset();
  }
}
