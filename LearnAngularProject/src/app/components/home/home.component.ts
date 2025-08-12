import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  title = 'Learn Angular Project';
  initialText = 'This is some initial text.';
  showUsers = true;
  users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 28 }
  ];

  constructor() { }

  ngOnInit() {
  }

  changeTitle() {
    this.title = 'New Title!';
  }

  toggleUsers() {
    this.showUsers = !this.showUsers;
  }
}
