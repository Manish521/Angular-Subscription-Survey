import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css']
})
export class ChatMessageComponent implements OnInit {

  @Input() name:string;
  //@Input() time:string;
  @Input() message:string;

  constructor() { }

  ngOnInit() {
  }
  
  time() : string {
    let t = new Date();
    let hour:number = t.getHours();
    let min:number = t.getMinutes();
    let sec:number = t.getSeconds();
    return hour.toString() + ":" + min.toString() + ":" + sec.toString();
  }
 
}
