import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Member } from 'src/app/model/member.model';
import { MembersService } from 'src/app/services/members.service';

@Component({
  selector: 'app-member-list',
  templateUrl: './member-list.component.html',
  styleUrls: ['./member-list.component.css']
})
export class MemberListComponent implements OnInit {
  members:Member[]=[];
  constructor(private memberService:MembersService,private route:Router) { }

  ngOnInit(): void {
    this.memberService.getAllMembers()
    .subscribe({
      next:(members)=>{
        this.members=members
      },
      error:(response)=>{
        console.log(response);
      }
    });
  }

  NavigateMemberSearch(){
    this.route.navigate(['member/search'])
  }



}
