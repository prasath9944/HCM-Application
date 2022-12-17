import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

import { Member } from 'src/app/model/member.model';

import { MemberSearch } from 'src/app/model/membersearch';

import { MembersService } from 'src/app/services/members.service';



@Component({

  selector: 'app-membersearch',

  templateUrl: './membersearch.component.html',

  styleUrls: ['./membersearch.component.css']

})

export class MembersearchComponent implements OnInit {

  memberId:number=0;

  member:Member={

    memberId: 0,

    firstName: '',

    lastName: '',

    username: '',

    physicianName: '',

    dateOfBirth: '',

    cliamId: ''

  }




  membersearch:MemberSearch={

    memberId: 0,

    fname: '',

    lname: '',

    physicianName: ''

  }

  physicianname:string='';

  memberlist:Member[]=[];

  temp:number=0;



  constructor(private memberService:MembersService,private route:Router) { }



  ngOnInit(): void {



  }

 count:number=0;

 isChecked:boolean=false;



 searchMember(membersearch:MemberSearch){

  if(membersearch.memberId!=null && membersearch.memberId!=0){

    this.searchMemberById(membersearch.memberId);

  }

  else if(membersearch.physicianName!=null && membersearch.physicianName!=''){




    this.searchbyPhysicianName(membersearch.physicianName);



  }

  else if(membersearch.fname!=null && membersearch.fname!='' && membersearch.lname!=null && membersearch.lname!=''){

    this.searchMemberByName(membersearch.fname,membersearch.lname);

  }

  else{

    this.route.navigate(['member/search']);

  }





 }

 searchMemberById(id:number){

  this.count=id;

  this.temp=1;

  this.memberService.searchMemberbyId(id)

  .subscribe({

    next:(members: Member)=>{

      this.member=members;

    }

  })

}

 searchMemberByName(fname:string,lname:string){

  this.temp=2;

  this.memberService.searchMemberByName(fname,lname)

  .subscribe({

    next:(members: Member)=>{

      this.member=members;

    }

  })

 }





  searchbyPhysicianName(name:string){

    this.temp=3;

    this.memberService.searchMemberByPhysicianName(name)

    .subscribe({

      next:(member: Member[])=>{

        this.memberlist=member;

      }

    })



  }

}
