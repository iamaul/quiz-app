import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { QuizComponent } from './components/quiz/quiz.component';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { LogoutComponent } from './components/logout/logout.component';
import { LoginComponent } from './components/login/login.component';

const appRouters: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LoginComponent},
  {path: 'quiz', component: QuizComponent},
  {path: 'logout', component: LogoutComponent},
  {path: '**', component: PageErrorComponent}
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRouters)
  ]
})
export class AppRoutingModule { }
