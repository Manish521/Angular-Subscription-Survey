import { Injectable } from '@angular/core'

@Injectable()
export class UserService {
  username: string;
  email: string;
  imageUrl: string;
  password: string;

  constructor() {
    this.username = "someuser";
    this.email = "abc@xyz.com";
    this.imageUrl = "https://png.icons8.com/circled-user-male-skin-type-5/color/100/000000";
    this.password = "somepass"
  }

  getUsername() : string {
    return this.username;
  }

  getEmail() : string {
    return this.email;
  }

  getImageUrl() : string {
    return this.imageUrl;
  } 

  getPassword() : string {
    return this.password;
  }

  setUsername(username : string) {
    this.username = username;
  }
  
  setEmail(email : string) {
    this.email = email;
  }

  setImageUrl(url : string) {
    this.imageUrl = url;
  }

  setPassword(password : string) {
    this.password = password;
  }
}