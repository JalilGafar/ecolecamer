import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { tokenStorageService } from 'src/app/services/token-storage.service';
import { AuthenService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit{

  form: any={};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[]= [];

  constructor(private auth: AuthService,
              //private authen : AuthenService, 
             // private router: Router,
              private tokenStorage: tokenStorageService) { }

  ngOnInit(): void {
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }
  }

  onSubmit(): void{
    this.auth.login(this.form).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accesToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
  }

  reloadPage(): void {
    window.location.reload();
  }

  onLogin() {
  //this.authen.login();
  //this.router.navigateByUrl('admin/adminStart');
  }

}
