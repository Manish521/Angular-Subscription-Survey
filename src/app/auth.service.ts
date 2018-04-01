import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable()
export class AuthService {
  
  constructor(private user: UserService) {

  }

  login(user: string, password: string): boolean {
    if (user === this.user.username && password === this.user.password) {
      localStorage.setItem('username', user);
      return true;
    }

    return false;
  }

  logout(): any {
    localStorage.removeItem('username');
  }

  getUser(): any {
    return localStorage.getItem('username');
  }

  isLoggedIn(): boolean {
    return this.getUser() !== null;
  }
}

export const AUTH_PROVIDERS: Array<any> = [
  { provide: AuthService, useClass: AuthService }
];
