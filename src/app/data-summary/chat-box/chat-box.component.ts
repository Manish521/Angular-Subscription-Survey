import { 
  Component, 
  OnInit
} from '@angular/core';
import { Observable } from 'rxjs';
import { MessageService } from './chat-message/message.service';
import { concat } from 'rxjs/operator/concat';

@Component({
  selector: 'app-chat-box',
  templateUrl: './chat-box.component.html',
  styleUrls: ['./chat-box.component.css']
})
export class ChatBoxComponent implements OnInit {

  close: boolean;
  count:number;
  names:Array<string>;
  usermessage: string;
  messagesdisplayed: Array<string>;

  constructor(private service: MessageService) { 
    this.close = false;
    this.count = 0;
    this.usermessage = "";
    this.messagesdisplayed = [];
    this.names = [];
  }

  ngOnInit() {
  }
//
//  closeWindow() {
//    if (this.close == true) {
//      this.close = false;
//    } else {
//      this.close = true;
//    }
//  }

  addMessage() {
    this.usermessage = (<HTMLInputElement>document.getElementById('btn-input')).value;
    console.log('message' + this.usermessage);
    this.messagesdisplayed.push(this.usermessage);
    this.names.push("User");
    this.count++;
    let res;
    if(this.usermessage.toLowerCase() === 'iPhone'.toLowerCase())
    {
      res = '67.3% users use an iPhone';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Android'.toLowerCase())
    {
      res = '22.7% users use an Android device';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Apple music'.toLowerCase())
    {
      res = '32.2% users like using Apple Music';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Google Play Music'.toLowerCase())
    {
      res = '20% users like using Google Play Music';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Spotify'.toLowerCase())
    {
      res = '21.8% users like using Spotify';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Pandora'.toLowerCase())
    {
      res = '17.8% users like using Pandora';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Amazon music'.toLowerCase())
    {
      res = '8.2% users like using Amazon Music';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Netflix'.toLowerCase())
    {
      res = '45.4% users like using Netflix';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Hulu'.toLowerCase())
    {
      res = '21.3% users like using Hulu';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Amazon Video'.toLowerCase())
    {
      res = '18.1% users like using Amazon Video';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'HBO NOW'.toLowerCase())
    {
      res = '12.8% users like using HBO NOW';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Hotstar'.toLowerCase())
    {
      res = '2.2% users like using HotStar';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'news'.toLowerCase())
    {
      res = '16.2% users said Yes; Rest said No!';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Action'.toLowerCase())
    {
      res = '11.3% users will pay for Action';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Arcade'.toLowerCase())
    {
      res = '19.2% users will pay for Arcade';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Card'.toLowerCase())
    {
      res = '8.2% users will pay for Card';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Casual'.toLowerCase())
    {
      res = '13.3% users will pay for Casual';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Puzzle'.toLowerCase())
    {
      res = '30.2% users will pay for Puzzle';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Sports'.toLowerCase())
    {
      res = '8.2% users will pay for Sports';
      this.names.push("Bot");
    }
    else if(this.usermessage.toLowerCase() == 'Racing'.toLowerCase())
    {
      res = '9.6% users will pay for Racing';
      this.names.push("Bot");
    }
//    else if(this.usermessage == 'help')
//    {
//      res = 'rep2';
//      this.names.push("Bot");
//    }
    else 
    {
      res = 'I do not recognize that. Please go the homepage to see all valid keywords';
      this.names.push("Bot");
    }

    //let res = this.search(this.customerMessage);
    this.messagesdisplayed.push(res);
    this.count++;

//    if (this.count %2 == 1) {
//      this.names.push("Bot");
//    } else {
//      this.names.push("User");
//    }
    console.log(this.names);
  }

  search(message:string):string {
    let res = this.service.answer;;
    let token = message.split(" ");
    let index = new Array(this.service.answers.length).fill(true);

    for (let i = 0; i < this.service.answers.length; i++) {
      for (let j = 0; j < token.length; j++) {
        let tmp: string = token[j].toLowerCase();
        let sentence: string = this.service.answers[i].toLowerCase();

        if (!sentence.includes(tmp)) {
          index[i] = false;
        } 
      }
    }

    for (let i = 0; i < index.length; i++) {
      if (index[i]) {
        res = this.service.answers[i];
      }
    }

    return res;
  }
}
