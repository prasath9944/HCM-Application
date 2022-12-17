import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MemberListComponent } from './components/member/member-list/member-list.component';
import { MemberAddComponent } from './components/member/add-member/member-add/member-add.component';
import { FormsModule } from '@angular/forms';
import { MembersearchComponent } from './components/member/membersearch/membersearch.component';
import { ClaimSubmitComponent } from './components/claim/claim-submit/claim-submit.component';
import { SearchIdComponent } from './components/member/search-id/search-id.component';
import { SearchPhysicianComponent } from './components/member/search-physician/search-physician.component';
import { SearchNameComponent } from './components/member/search-name/search-name.component';
import { LoginPageComponent } from './components/login/login-page/login-page.component';
import { RegisterMemberComponent } from './components/login/register-member/register-member.component';


@NgModule({
  declarations: [
    AppComponent,
    MemberListComponent,
    MemberAddComponent,
    MembersearchComponent,
    ClaimSubmitComponent,
    SearchIdComponent,
    SearchPhysicianComponent,
    SearchNameComponent,
    LoginPageComponent,
    RegisterMemberComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
