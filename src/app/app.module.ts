import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AboutComponent } from './about/about.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ContactComponent } from './contact/contact.component';
import { TeamComponent } from './team/team.component';
import { ServiceTemplateComponent } from './service-template/service-template.component';



@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    PortfolioComponent,
    TeamComponent,
    ContactComponent,
    ServiceTemplateComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
