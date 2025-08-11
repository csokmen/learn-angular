import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'Learn Angular Project';
  initialText = 'This is some initial text.';
  showUsers = true;
  users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 28 }
  ];
  usersFromService: { name: string, age: number }[] = [];

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.usersFromService = this.userService.getUsers();
  }

  changeTitle() {
    this.title = 'New Title!';
  }

  toggleUsers() {
    this.showUsers = !this.showUsers;
  }
}
