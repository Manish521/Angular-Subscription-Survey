import { Injectable } from '@angular/core'

@Injectable()
export class MessageService {

  answers: string[] = [
      "There are two front end framework mentioned, Angular and Reacts.",
      "The most popular front end framework is Angular.",
      "The portion of Angular in front end framework is 75.86%.",
      "The portion of Reacts in front end framework is 17.24%.",
      "22 students prefer Angular.",
      "5 students prefer Reacts.",
      "There are 3 operation system mentioned, Windows, OSX, and Linux.",
      "The most popular operation system is OSX.",
      "The portion of OSX in operation system is 51.72%.",
      "The portion of Windows in operation system is 41.38%.",
      "The portion of Linux in operation system is 6.9%.",
      "12 students prefer Windows.",
      "15 students prefer OSX.",
      "2 students prefer Linux.",
      "There are more than 10 interested technology trends.",
      "The portion of AI in interested technology trends is 17.24%.",
      "9 students' dream job is software developer.",
      "4 students' dream job is cyber security.",
      "15 students prefer Java in programming language of choice.",
      "13 students prefer JavaScript in programming language of choice.",
      "12 students prefer Python in programming language of choice.",
      "8 students prefer C# in programming language of choice.",
      "6 students prefer C++ in programming language of choice.",
      "Only 1 student prefer Ruby in programming language of choice."
  ];
  
  answer: string = "I can't recognize that. Try saying 'help' for all questions you can ask" ;


}