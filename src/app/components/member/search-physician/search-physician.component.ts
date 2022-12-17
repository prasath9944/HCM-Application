import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GetClaims } from 'src/app/model/Claim/claim';
import { Member } from 'src/app/model/member.model';

@Component({
  selector: 'app-search-physician',
  templateUrl: './search-physician.component.html',
  styleUrls: ['./search-physician.component.css']
})
export class SearchPhysicianComponent implements OnInit {
  @Input() memberlist:Member[]=[];
  member:Member={
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
  ClaimSearch(claimId:string,isChecked:boolean){
    if(isChecked==true){
      this.route.navigate(["/Claims",claimId]);
    }

  }
  claimid:string='';
  count:number=0;
  isChecked:boolean=false;

  onCheckboxChange(event:any,claimid:string){
    if(event.target.checked===true){
      this.claimid=claimid;
      this.isChecked=true;
    }
  }

}
