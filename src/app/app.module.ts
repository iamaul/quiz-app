import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

library.add(fas);

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { PageErrorComponent } from './components/page-error/page-error.component';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { QuizComponent } from './components/quiz/quiz.component';
import { QuizService } from './services/quiz.service';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopNavbarComponent,
    LoginComponent,
    QuizComponent,
    PageErrorComponent,
    FooterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [
    AppComponent,
    Title,
    QuizService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
