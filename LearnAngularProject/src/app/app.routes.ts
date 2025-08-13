import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsersComponent } from './components/users/users.component';
import { ContactComponent } from './components/contact/contact.component';
import { ReactiveContactComponent } from './components/reactive-contact/reactive-contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'reactive-contact', component: ReactiveContactComponent }
];
