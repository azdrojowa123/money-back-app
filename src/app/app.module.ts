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
