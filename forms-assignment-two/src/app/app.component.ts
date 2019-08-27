import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  signupForm: FormGroup;
  projectStatus = ['Stable', 'Critical', 'Finished'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, CustomValidators.invalidName], CustomValidators.asyncProject),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'status': new FormControl(this.projectStatus[1], Validators.required)
    });
  }

  onSubmit() {
    console.log(this.signupForm.value);
    this.signupForm.reset({ 'status': this.projectStatus[1] });
    // this.signupForm.patchValue({'status': this.projectStatus[1]});
  }

}
