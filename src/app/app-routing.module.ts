import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { WorkComponent } from '../app/components/work/work.component';
import { EducationComponent } from '../app/components/education/education.component';
import { PortfolioComponent } from '../app/components/portfolio/portfolio.component'
import { ContactComponent } from '../app/components/contact/contact.component'
const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'education', component: EducationComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'work', component: WorkComponent },
  { path: 'contact', component: ContactComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
