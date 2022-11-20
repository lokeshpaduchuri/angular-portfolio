import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { ImageLightboxComponent } from './components/image-lightbox/image-lightbox.component';
import { WorkComponent } from './components/work/work.component';
import { EducationComponent } from './components/education/education.component';

import { ImageService} from '../app/services/image.service';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ContactComponent } from './components/contact/contact.component';
@NgModule({
  declarations: [
    AppComponent,
    ImageLightboxComponent,
    WorkComponent,
    EducationComponent,
    PortfolioComponent,
    ContactComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule
  ],
  providers: [ImageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
