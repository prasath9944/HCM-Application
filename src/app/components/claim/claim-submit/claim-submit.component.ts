import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClaimSumbit } from 'src/app/model/Claim/claim';
import { MembersService } from 'src/app/services/members.service';
import { MembersearchComponent } from '../../member/membersearch/membersearch.component';
@Component({
  selector: 'app-claim-submit',
  templateUrl: './claim-submit.component.html',
  styleUrls: ['./claim-submit.component.css']
})
export class ClaimSubmitComponent implements OnInit {
  claims:ClaimSumbit={
    claimID:'',
    claimType: '',
    claim_Amount: 0,
    remarks: '',
    claim_Date: ''
  }
  constructor(private claimservice:MembersService,private router:Router,public route: ActivatedRoute) { }
  ngOnInit(): void {

  }
  claimsId:any=this.route.snapshot.paramMap.get('claimid');


  sumbitClaims(id:string){
    this.claims.claimID=id;
    console.log(this.claims);
    this.claimservice.sumbitClaim(this.claims)
    .subscribe({
      next:(claim)=>{
        this.router.navigate(['members']);
      }
    })

  }



}


