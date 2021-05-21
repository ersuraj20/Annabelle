import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ServiceTemplateComponent } from './service-template/service-template.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';



const routes: Routes = [
  {path:"About",component:AboutComponent},
  {path:"Services",component:ServiceTemplateComponent},
  {path:"Portfolio",component:PortfolioComponent},
  {path:"Team",component:TeamComponent},
  {path:"Contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
