import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeavyComponent } from '../heavy/heavy.component';

@Component({
  selector: 'app-defer-example',
  imports: [CommonModule, HeavyComponent],
  templateUrl: './defer-example.component.html',
  styleUrl: './defer-example.component.css'
})
export class DeferExampleComponent {

}
