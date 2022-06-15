import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditFormComponent } from './pages/edit-form/edit-form.component';
import { HomeComponent } from './pages/home/home.component';
import { NewFormPageComponent } from './pages/new-form-page/new-form-page.component';
import { ViewFormComponent } from './pages/view-form/view-form.component';
import { LoginComponent } from './users/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-form', component: NewFormPageComponent },
  { path: 'view-form', component: ViewFormComponent },
  { path: 'edit-form', component: EditFormComponent },
  { path: '**', component: HomeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
