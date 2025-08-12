import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {
  usersFromService: { name: string, age: number }[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.usersFromService = this.userService.getUsers();
  }
}
