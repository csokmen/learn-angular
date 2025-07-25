import { Component } from '@angular/core';
import { DataService } from './services/data.service';

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

  serviceData: string[] = [];
  newItem = '';

  constructor(private dataService: DataService) {
    this.serviceData = this.dataService.getData();
  }

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  addServiceData() {
    if (this.newItem) {
      this.dataService.addData(this.newItem);
      this.newItem = '';
    }
  }
}
