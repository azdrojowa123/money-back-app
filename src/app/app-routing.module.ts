import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListloansComponent } from './listloans/listloans.component';
import { LoanComponent } from './loan/loan.component';
import { UserComponent } from './user/user.component';



const routes: Routes = [
  {path:'',component:WelcomeComponent}, 
  {path:'loans/:username',component:ListloansComponent},
  {path:'loan/:id',component:LoanComponent},
  {path:'loans',component:ListloansComponent},
  {path:'user',component:UserComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
