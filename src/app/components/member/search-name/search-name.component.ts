import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetClaims } from 'src/app/model/Claim/claim';
import { Member } from 'src/app/model/member.model';

@Component({
  selector: 'app-search-name',
  templateUrl: './search-name.component.html',
  styleUrls: ['./search-name.component.css']
})
export class SearchNameComponent implements OnInit {
  @Input() membersname:Member={
    memberId: 0,
    firstName: '',
    lastName: '',
    username: '',
    physicianName: '',
    dateOfBirth: '',
    cliamId: ''
  }
  constructor(private route:Router) { }

  ngOnInit(): void {
  }
  claims:GetClaims[]=[]
  ClaimSearch(claimId:string,isChecked:boolean){
    if(isChecked==true){
      this.route.navigate(["/Claims",claimId]);
    }

  }

  isChecked:boolean=false;
  doSomething(){
    if(this.isChecked==true){
      console.log('checkbox is checked');
    }
    else{
      console.log('checkbox is unchecked');
    }
  }
}
