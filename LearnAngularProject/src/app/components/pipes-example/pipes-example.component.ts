import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TruncatePipe } from '../../pipes/truncate.pipe';

@Component({
  selector: 'app-pipes-example',
  imports: [CommonModule, TruncatePipe],
  templateUrl: './pipes-example.component.html',
  styleUrl: './pipes-example.component.css'
})
export class PipesExampleComponent {
  today = new Date();
  price = 19.99;
  someObject = {
    name: 'Angular',
    version: 19,
    features: ['Signals', 'Standalone Components']
  };
  longText = 'This is a very long text that needs to be truncated to fit in a small space.';
}
