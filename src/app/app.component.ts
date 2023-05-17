import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SignupFormComponent } from './components/signup-form/signup-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, LoginFormComponent, SignupFormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {
  title = 'angular-authentication-page-frontend';
}
