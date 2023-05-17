import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'login-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.less'],
})
export class LoginFormComponent {}
