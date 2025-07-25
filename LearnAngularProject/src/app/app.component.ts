import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'LearnAngularProject';
  items = ['Item 1', 'Item 2', 'Item 3'];
  currentDate = new Date();

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }
}
