import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AddMember, Member } from '../model/member.model';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ClaimSumbit, GetClaims } from '../model/Claim/claim';
import { encriptedRegister, Register } from '../model/Auth/Register';
import { Login} from '../model/Auth/Login';
import { Token } from '../model/Auth/Token';



@Injectable({
  providedIn: 'root'
})
export class MembersService {
  baseApiUrl:string=environment.baseUrlApi;
  authApiUrl:string=environment.AuthUrlApi;
  claimApiUrl:string=environment.claimUrlApi;


  constructor(private http:HttpClient) { }
  getAllMembers():Observable<Member[]>{
    return this.http.get<Member[]>(this.baseApiUrl+'/api/Member');
  }

  addMember(AddMemberDetail:AddMember):Observable<Member>{
    return this.http.post<Member>(this.baseApiUrl+'/api/Member',AddMemberDetail);
  }
  searchMemberbyId(id:number):Observable<Member>{
    return this.http.get<Member>(this.baseApiUrl+'/api/Member/'+id);
  }

  searchMemberByName(fname:string,lname:string):Observable<Member>{
    return this.http.get<Member>(this.baseApiUrl+'/api/Member/name?name='+fname+lname);
  }
  searchMemberByPhysicianName(PhysicianName:string):Observable<Member[]>{
    return this.http.get<Member[]>(this.baseApiUrl+'/physicianName/'+PhysicianName);
  }



  getAllCliam():Observable<GetClaims[]>{
    return this.http.get<GetClaims[]>(this.claimApiUrl+'/api/Claims/GetClaims');
  }

  sumbitClaim(SumbitClaimDetails:ClaimSumbit):Observable<GetClaims>{
    return this.http.post<GetClaims>(this.claimApiUrl+'/api/Claims',SumbitClaimDetails);
  }

  RegisterNewMember(RegisterMember:Register):Observable<encriptedRegister>{
    return this.http.post<encriptedRegister>(this.authApiUrl+'/api/MemberAuth/register',RegisterMember);
  }

  LoginMember(LoginMember:Login):Observable<Token>{
    return this.http.post<Token>(this.authApiUrl+'/api/MemberAuth/login',LoginMember);
  }


}
