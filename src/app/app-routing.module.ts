import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListloansComponent } from './listloans/listloans.component';
import { LoanComponent } from './loan/loan.component';
import { UserComponent } from './user/user.component';
import { LoanSummaryComponent } from './loan-summary/loan-summary.component';
import { HeaderComponent } from './header/header.component';



const routes: Routes = [
  {path:'',component:HeaderComponent}, 
  {path:'loans/:username',component:ListloansComponent},
  {path:'loan/:id',component:LoanComponent},
  {path:'loans',component:ListloansComponent},
  {path:'user',component:UserComponent},
  {path:'friends/:username',component:LoanSummaryComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
