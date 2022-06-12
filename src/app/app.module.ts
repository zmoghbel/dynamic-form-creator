import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button'; 
import { NewFormComponent } from './shared/new-form/new-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';  
import { MatSelectModule } from '@angular/material/select'; 
import { AppRoutingModule } from './app-routing.module';
import { MatCheckboxModule } from '@angular/material/checkbox'; 
import { MatExpansionModule } from '@angular/material/expansion'; 
import { MatDatepickerModule } from '@angular/material/datepicker'; 
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core'; 
import { NewFormPageComponent } from './pages/new-form-page/new-form-page.component';
import { NewFieldComponent } from './shared/new-field/new-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuildFormComponent } from './shared/build-form/build-form.component';
import { ViewFieldComponent } from './shared/view-field/view-field.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NewFormComponent,
    NewFormPageComponent,
    NewFieldComponent,
    BuildFormComponent,
    ViewFieldComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    BrowserAnimationsModule,
    MatCheckboxModule,
    MatExpansionModule,
    MatRadioModule,
    MatNativeDateModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    NewFieldComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
