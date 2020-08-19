import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfessionalExperienceComponent } from './experience/professional-experience/professional-experience.component';
import { ResumeComponent } from './resume/resume.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { TechnicalSkillsComponent } from './technical-skills/technical-skills.component';
import { FrameworkToolsComponent } from './framework-tools/framework-tools.component';
import { HttpClientModule } from '@angular/common/http';
import { EducationComponent } from './education/education.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    AppComponent,
    ProfessionalExperienceComponent,
    ResumeComponent,
    ContactDetailsComponent,
    TechnicalSkillsComponent,
    FrameworkToolsComponent,
    EducationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatCardModule,
    MatIconModule,
    MatDividerModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
