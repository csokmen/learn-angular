import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { User } from '../../models/user.interface';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-users-api',
  imports: [CommonModule, RouterLink],
  templateUrl: './users-api.component.html',
  styleUrl: './users-api.component.css'
})
export class UsersApiComponent implements OnInit {
  users: User[] = [];
  isLoading = true;
  error: string | null = null;

  constructor(private userService: UserApiService) { }

  ngOnInit() {
    this.userService.getUsers().subscribe({
      next: (data) => {
        this.users = data;
        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Failed to load users. Please try again later.';
        this.isLoading = false;
        console.error(err);
      }
    });
  }
}
