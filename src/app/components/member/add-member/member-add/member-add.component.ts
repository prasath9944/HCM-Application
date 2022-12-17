import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { AddMember } from 'src/app/model/member.model';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-member-add',
  templateUrl: './member-add.component.html',
  styleUrls: ['./member-add.component.css']
})
export class MemberAddComponent implements OnInit {
  AddMemberDetail:AddMember={
    firstName: "",
    lastName: "",
    username: "",
    password: "",
    confirmPassword: "",
    address: "",
    state: "",
    city: "",
    email: "",
    dateOfBirth: ""
  }

  constructor(private memberService:MembersService,private route:Router) { }

  ngOnInit(): void {

  }
  addMember(){
    this.memberService.addMember(this.AddMemberDetail)
    .subscribe({
      next:(member)=>{
        this.route.navigate(['member/search']);
      }
    })
  }

}
