import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from '../../module/Class/login';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

    loginObj: Login;

    constructor(private http: HttpClient, private router: Router){
      this.loginObj = new Login();
    };

    
    onLogin(){
      this.http.post('https://freeapi.miniprojectideas.com/api/User/Login', this.loginObj).subscribe((res:any)=>{
        if(res.result){
          alert("Login Successfully");
          localStorage.setItem('Token', res.data.token);
          this.router.navigate(['/dashboard']);
        }else{
          alert(res.message)
        }
      
      })
    }
  }