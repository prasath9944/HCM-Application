import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Register } from 'src/app/model/Auth/Register';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-register-member',
  templateUrl: './register-member.component.html',
  styleUrls: ['./register-member.component.css']
})
export class RegisterMemberComponent implements OnInit {

  constructor(private route:Router,private memberservice:MembersService) { }

  RegisterMember:Register={
    username: '',
    password: '',
    role: ''
  }
  ngOnInit(): void {
  }
  AddNewMember(){
    this.memberservice.RegisterNewMember(this.RegisterMember)
    .subscribe({
      next:(member)=>{
        console.log(member);
        this.route.navigate(['members/add'])
      }
    })


  }
  CancelMemberRegister(){
    this.route.navigate(['']);
  }

}

// this.memberService.addMember(this.AddMemberDetail)
//     .subscribe({
//       next:(member)=>{
//         this.route.navigate(['member/search']);
//       }
//     })
