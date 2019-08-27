import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {

  static invalidName(control: FormControl): {[s: string]: boolean} {
    if (control.value === 'Test') {
      return {'nameIsForbidden': true};
    }
    return null;
  }

  static asyncProject(control: FormControl): Promise<any> | Observable<any>  {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Testproject') {
          resolve ({'nameIsForbidden': true});
        } else {
          resolve(null);
        }
      }, 2000);
    });
    return promise;
  }

}
