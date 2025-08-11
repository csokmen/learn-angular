import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  getUsers() {
    return [
      { name: 'Alice (from Service)', age: 25 },
      { name: 'Bob (from Service)', age: 30 },
      { name: 'Charlie (from Service)', age: 28 }
    ];
  }
}
