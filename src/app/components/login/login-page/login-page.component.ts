import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/model/Auth/Login';
import { Token } from 'src/app/model/Auth/Token';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  LoginUser:Login={
    username: '',
    password: ''
  }
  tokenGenerated:Token={
    token: '',
    role: ''
  }
  constructor(private route:Router,private memberservice:MembersService) { }

  ngOnInit(): void {
  }
  LoginMember(){
    this.memberservice.LoginMember(this.LoginUser)
    .subscribe({
      next:(token)=>{
        this.tokenGenerated=token;
        console.log(this.tokenGenerated);
        if(this.tokenGenerated.role=="Admin"){
          this.route.navigate(['members']);
        }
        else{
          this.route.navigate(['member/search']);
        }

      }
    })
  }


  CreateMember(){
    this.route.navigate(['register/member']);
  }

}
