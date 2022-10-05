import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MessagesComponent } from './components/messages/messages.component';
import { MomentFormComponent } from './components/moment-form/moment-form.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HomeComponent } from './components/pages/home/home.component';
import { NewMomentComponent } from './components/pages/new-moment/new-moment.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import {HttpClientModule} from '@angular/common/http'
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { MomentComponent } from './components/pages/moment/moment.component';
import { EditMomentComponent } from './components/pages/edit-moment/edit-moment.component';


@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MessagesComponent,
    MomentFormComponent,
    AboutComponent,
    HomeComponent,
    NewMomentComponent,
    MomentComponent,
    EditMomentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
