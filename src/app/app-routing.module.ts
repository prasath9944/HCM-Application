import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimSubmitComponent } from './components/claim/claim-submit/claim-submit.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { RegisterMemberComponent } from './components/login/register-member/register-member.component';
import { MemberAddComponent } from './components/member/add-member/member-add/member-add.component';
import { MemberListComponent } from './components/member/member-list/member-list.component';
import { MembersearchComponent } from './components/member/membersearch/membersearch.component';

const routes: Routes = [
  {
    path:'',
    component:LoginPageComponent
  },
  {
    path:'members',
    component:MemberListComponent
  },
  {
    path:'members/add',
    component:MemberAddComponent
  },
  {
    path:'member/search',
    component:MembersearchComponent
  },
  {
    path:'register/member',
    component:RegisterMemberComponent
  },
  {
    path:'Claims/:claimid',
    component:ClaimSubmitComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
