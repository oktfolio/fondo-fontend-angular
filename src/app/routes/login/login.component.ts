import {Component, Injectable, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Observable} from 'rxjs';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';

interface LoginResult {
  access_token: string;
  token_type: string;
  expires_in: number;
}

class User {
  constructor(public username?: string,
              public password?: string) {
  }
}

@Injectable()
export class LoginService {
  url = 'http://localhost:8080/user/login';

  login(user: User): Observable<LoginResult> {
    return this.http.post<LoginResult>(`${this.url}`, user);
  }

  constructor(private http: HttpClient) {
  }
}

@Component({
  selector: 'app-login',
  providers: [LoginService],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  validateForm: FormGroup;
  user: User;
  loginResult: LoginResult;

  submitForm(): void {

    this.user = new User();

    for (const i of Object.keys(this.validateForm.controls)) {
      this.validateForm.controls[i].markAsDirty();
      this.validateForm.controls[i].updateValueAndValidity();
    }

    this.user.username = this.validateForm.get('username').value;
    this.user.password = this.validateForm.get('password').value;

    this.loginService
      .login(this.user)
      .subscribe((data: LoginResult) => {
        this.loginResult = data;
        sessionStorage.setItem('access_token', data.access_token);
        sessionStorage.setItem('token_type', data.token_type);
        sessionStorage.setItem('expire_in', String(data.expires_in));
      });

    this.router.navigateByUrl('/');

  }

  constructor(private loginService: LoginService, private fb: FormBuilder, private router: Router) {
  }

  ngOnInit(): void {
    this.validateForm = this.fb.group({
      username: [null, [Validators.required]],
      password: [null, [Validators.required]],
      remember: [true]
    });
  }
}
