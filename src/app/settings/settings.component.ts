import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.component.html',
  styleUrls: ['./settings.component.css']
})
export class SettingsComponent implements OnInit {
  username: string;
  email: string;
  password: string;
  imageUrl: string;
  isEditEnabled: boolean;

  constructor(private user: UserService) { 
    this.username = user.getUsername();
    this.email = user.getEmail();
    this.imageUrl = user.getImageUrl();
    this.password = user.getPassword();
    this.isEditEnabled = false;
  }

  ngOnInit() {
  }

  editting() {
    this.isEditEnabled = true;
  }

  editSaved() {
    this.isEditEnabled = false;
    this.user.setEmail(this.email);
    this.user.setImageUrl(this.imageUrl);
    this.user.setPassword(this.password);
    this.user.setUsername(this.username);
    console.log(this.user.getUsername());
  }

  editcanceled() {
    this.isEditEnabled = false;
    this.username = this.user.getUsername();
    this.email = this.user.getEmail();
    this.password = this.user.getPassword();
    this.imageUrl = this.user.getImageUrl();
   
  }
}
