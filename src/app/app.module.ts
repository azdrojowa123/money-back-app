import { FormsModule} from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ListloansComponent } from './listloans/listloans.component';
import { LoanComponent } from './loan/loan.component';
import { UserComponent } from './user/user.component';
import { LoanSummaryComponent } from './loan-summary/loan-summary.component';
import { EventsComponent } from './events/events.component';
import { LoggingService } from './data/login.service';
import { NewHeaderComponent } from './new-header/new-header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { UserValidationComponent } from './user/user-validation/user-validation.component';
import { ValidationDirective } from './user/validation.directive';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FooterComponent,
    HeaderComponent,
    ListloansComponent,
    LoanComponent,
    UserComponent,
    LoanSummaryComponent,
    EventsComponent,
    NewHeaderComponent,
    NotFoundComponent,
    ErrorPageComponent,
    UserValidationComponent,
    ValidationDirective,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [LoggingService],
  bootstrap: [AppComponent]
})
export class AppModule { }
