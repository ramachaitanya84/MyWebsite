import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ProfileRoutingModule } from './profile.routing.module';
import { ProfileComponent } from './profile.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { EducationComponent } from './education/education.component';
import { WorkexComponent } from './workex/workex.component';

@NgModule({
  declarations: [
    ProfileComponent,
    AboutmeComponent,
    EducationComponent,
    WorkexComponent
  ],
  imports: [
    BrowserModule,
    ProfileRoutingModule
  ],
})
export class ProfileModule { }
