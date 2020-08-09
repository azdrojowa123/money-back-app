import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListloansComponent } from './listloans/listloans.component';
import { LoanComponent } from './loan/loan.component';
import { UserComponent } from './user/user.component';
import { LoanSummaryComponent } from './loan-summary/loan-summary.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AddLoanComponent } from './add-loan/add-loan.component';
import { AppComponent } from './app.component';
import { NewHeaderComponent } from './new-header/new-header.component';



const routes: Routes = [
  {path:'',component:NewHeaderComponent},
  {path:'loans/:username',component:ListloansComponent},
  {path:'loan/:id',component:LoanComponent},
  {path:'loans',component:ListloansComponent},
  {path:'user',component:UserComponent},
  {path:'friends/:username',component:LoanSummaryComponent},
  {path:'addLoan',component:AddLoanComponent},


  {path:'not-found', component:ErrorPageComponent, data: {message: 'Page Not Found'}},

  
  {path:'**', redirectTo:'/not-found'}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
