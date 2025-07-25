import { Component } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  items = ['Item 1', 'Item 2', 'Item 3'];

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
