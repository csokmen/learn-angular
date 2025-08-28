import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { UserApiService } from '../services/user-api.service';
import { User } from '../models/user.interface';

export const userDetailResolver: ResolveFn<User> = (route, state) => {
  const userService = inject(UserApiService);
  const userId = route.paramMap.get('id');

  if (userId) {
    return userService.getUser(+userId);
  }

  throw new Error('User ID not found');
};
