import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveContactComponent } from './components/reactive-contact/reactive-contact.component';
import { UsersApiComponent } from './components/users-api/users-api.component';
import { UsersWithSignalsComponent } from './components/users-with-signals/users-with-signals.component';
import { ProfileComponent } from './components/profile/profile.component';
import { authGuard } from './guards/auth.guard';
import { UserDetailComponent } from './components/user-detail/user-detail.component';
import { userDetailResolver } from './resolvers/user-detail.resolver';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';
import { UserDetailInputComponent } from './components/user-detail-input/user-detail-input.component';
import { DeferExampleComponent } from './components/defer-example/defer-example.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'reactive-contact', component: ReactiveContactComponent },
  { path: 'users-api', component: UsersApiComponent },
  { path: 'users-with-signals', component: UsersWithSignalsComponent },
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [authGuard]
  },
  {
    path: 'users-api/:id',
    component: UserDetailComponent,
    resolve: {
      user: userDetailResolver
    }
  },
  {
    path: 'users-api-input/:id',
    component: UserDetailInputComponent,
    resolve: {
      user: userDetailResolver
    }
  },
  { path: 'pipes-example', component: PipesExampleComponent },
  { path: 'defer-example', component: DeferExampleComponent },
];
