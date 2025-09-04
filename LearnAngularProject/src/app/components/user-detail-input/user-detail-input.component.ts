import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { User } from '../../models/user.interface';

@Component({
  selector: 'app-user-detail-input',
  imports: [CommonModule, RouterLink],
  templateUrl: './user-detail-input.component.html',
  styleUrl: './user-detail-input.component.css'
})
export class UserDetailInputComponent {
  @Input() user!: User;
}
