import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetClaims } from 'src/app/model/Claim/claim';
import { Member } from 'src/app/model/member.model';

@Component({
  selector: 'app-search-id',
  templateUrl: './search-id.component.html',
  styleUrls: ['./search-id.component.css']
})
export class SearchIdComponent implements OnInit {


  constructor(private route:Router) { }
  @Input() members:Member={
    memberId: 0,
    firstName: '',
    lastName: '',
    username: '',
    physicianName: '',
    dateOfBirth: '',
    cliamId: ''
  }
  ngOnInit(): void {
  }
  claims:GetClaims[]=[]
  ClaimSearch(claimId:string,isChecked:boolean){
    if(isChecked===true){
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
