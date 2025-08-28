import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { User } from '../../models/user.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-detail',
  imports: [CommonModule, RouterLink],
  templateUrl: './user-detail.component.html',
  styleUrl: './user-detail.component.css'
})
export class UserDetailComponent implements OnInit {
  private route = inject(ActivatedRoute);
  user: User | null = null;

  ngOnInit() {
    this.route.data.subscribe(data => {
      this.user = data['user'];
    });
  }
}
