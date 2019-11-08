import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

class User {

  constructor(private username: string,
              private password: string,
              private realName: string,
              private mobile: number,
              private avatar: string) {
  }
}

@Injectable()
export class CreateUserService {
  url = 'http://localhost:8080/users';

  do(user: User) {
    return this.http.post<Observable<object>>(`${this.url}`, user);
  }

  constructor(private http: HttpClient) {
  }
}


@Component({
  selector: 'app-create-user',
  providers: [CreateUserService],
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.less']
})
export class CreateUserComponent implements OnInit {
  validateForm: FormGroup;

  submitForm(): void {
    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();

      const username = this.validateForm.get('username').value;
      const password = this.validateForm.get('password').value;
      const realName = this.validateForm.get('realName').value;
      const mobile = this.validateForm.get('mobile').value;
      const avatar = this.validateForm.get('avatar').value;

      const user = new User(username, password, realName, mobile, avatar);

      console.log(user);

      this.createUserService.do(user).subscribe(it => {
        console.log(it);
      });

    }
  }

  updateConfirmValidator(): void {
    /** wait for refresh value */
    Promise.resolve().then(() => this.validateForm.controls.checkPassword.updateValueAndValidity());
  }

  confirmationValidator = (control: FormControl): { [s: string]: boolean } => {
    if (!control.value) {
      return {required: true};
    } else if (control.value !== this.validateForm.controls.password.value) {
      return {confirm: true, error: true};
    }
    return {};
  };

  getCaptcha(e: MouseEvent): void {
    e.preventDefault();
  }

  constructor(private fb: FormBuilder, private createUserService: CreateUserService) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      checkPassword: [null, [Validators.required, this.confirmationValidator]],
      realName: [null, [Validators.required]],
      mobilePrefix: ['+86'],
      mobile: [null, [Validators.required]],
      avatar: [null, [Validators.required]],
      agree: [false]
    });
  }
}
