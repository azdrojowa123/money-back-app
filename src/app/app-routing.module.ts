import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { ListloansComponent } from './listloans/listloans.component';


const routes: Routes = [
  {path:'',component:WelcomeComponent}, //canActivate, RouteGuardService
  {path:'loans/:username',component:ListloansComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
