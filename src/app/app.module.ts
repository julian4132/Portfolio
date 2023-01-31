import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { CircleProgressComponent } from './circle-progress/circle-progress.component';
import { HeaderComponent } from './components/header/header.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { EducationComponent } from './components/education/education.component';
import { LanguagesComponent } from './components/languages/languages.component';
import { SoftskillsComponent } from './components/softskills/softskills.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { LoginComponent } from './components/login/login.component';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RegisterComponent } from './components/register/register.component'
import { FetchPortfolioDataService } from './services/fetch-portfolio-data.service';
import { InterceptorService } from './services/interceptor.service';
import { MatCardModule } from '@angular/material/card';
import { PortfolioItemComponent } from './components/portfolio-item/portfolio-item.component';
import { PortfolioItemListComponent } from './components/portfolio-item-list/portfolio-item-list.component';
import { MatIconModule } from '@angular/material/icon';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { RoundProgressComponent } from './components/round-progress/round-progress.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { AwardsComponent } from './components/awards/awards.component';
import { ModalWindowComponent } from './components/modal-window/modal-window.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { ModalAskDeleteComponent } from './components/modal-ask-delete/modal-ask-delete.component';
import { ModalWindowLinksComponent } from './components/modal-window-links/modal-window-links.component';
import { ModalWindowHeaderComponent } from './components/modal-window-header/modal-window-header.component';
import { TimeoutErrorComponent } from './components/timeout-error/timeout-error.component';



@NgModule({
  declarations: [
    AppComponent,
    CircleProgressComponent,
    HeaderComponent,
    ExperienceComponent,
    EducationComponent,
    LanguagesComponent,
    SoftskillsComponent,
    PortfolioComponent,
    LoginComponent,
    RegisterComponent,
    PortfolioItemComponent,
    PortfolioItemListComponent,
    RoundProgressComponent,
    ProjectsComponent,
    AwardsComponent,
    ModalWindowComponent,
    ModalAskDeleteComponent,
    ModalWindowLinksComponent,
    ModalWindowHeaderComponent,
    TimeoutErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    DragDropModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [FetchPortfolioDataService,
    { provide: HTTP_INTERCEPTORS, useClass: InterceptorService, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
