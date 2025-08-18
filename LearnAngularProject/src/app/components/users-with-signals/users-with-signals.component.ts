import { Component, computed, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { toSignal } from '@angular/core/rxjs-interop';
import { UserApiService } from '../../services/user-api.service';

@Component({
  selector: 'app-users-with-signals',
  imports: [CommonModule],
  templateUrl: './users-with-signals.component.html',
  styleUrl: './users-with-signals.component.css'
})
export class UsersWithSignalsComponent {
  private userService = inject(UserApiService);

  private usersResult = toSignal(this.userService.getUsers(), { initialValue: [] });

  public users = computed(() => this.usersResult());
  public isLoading = computed(() => this.usersResult().length === 0);
}
