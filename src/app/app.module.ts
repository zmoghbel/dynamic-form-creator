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
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatNativeDateModule } from '@angular/material/core'; 
import { MatCardModule } from '@angular/material/card'; 
import { MatDividerModule } from '@angular/material/divider'; 
import { NewFormPageComponent } from './pages/new-form-page/new-form-page.component';
import { NewFieldComponent } from './shared/new-field/new-field.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuildFormComponent } from './shared/build-form/build-form.component';
import { ViewFieldComponent } from './shared/view-field/view-field.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ShowFormsComponent } from './pages/show-forms/show-forms.component';
import { FormCardComponent } from './shared/form-card/form-card.component';
import { FormAuthComponent } from './shared/form-auth/form-auth.component';
import { FieldAuthComponent } from './shared/field-auth/field-auth.component';
import { LoginComponent } from './users/login/login.component';
import { JwtInterceptor } from './helper/jwt.interceptor';
import { ErrorInterceptor } from './helper/error.interceptor';
import { fakeBackendProvider } from './helper/fake-backend';
import { AccessControlDirective } from './access-control.directive';
import { ViewFormComponent } from './pages/view-form/view-form.component';
import { EditFormComponent } from './pages/edit-form/edit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NewFormComponent,
    NewFormPageComponent,
    NewFieldComponent,
    BuildFormComponent,
    ViewFieldComponent,
    ShowFormsComponent,
    FormCardComponent,
    FormAuthComponent,
    FieldAuthComponent,
    LoginComponent,
    AccessControlDirective,
    ViewFormComponent,
    EditFormComponent
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
    MatDividerModule,
    MatMenuModule,
    MatRadioModule,
    MatNativeDateModule,
    MatCardModule,
    MatIconModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  exports:[
    NewFieldComponent
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    // provider used to create fake backend
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
