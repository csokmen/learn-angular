import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Learn Angular Project';
  initialText = 'This is some initial text.';
  showUsers = true;
  users = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 28 }
  ];

  changeTitle() {
    this.title = 'New Title!';
  }

  toggleUsers() {
    this.showUsers = !this.showUsers;
  }
}
