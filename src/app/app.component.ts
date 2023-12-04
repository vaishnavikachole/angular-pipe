import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-pipe';

biodata = {
  name : "shravani dixit",
  age : 25,
  salary : 34000,
  born : new Date(1996,0,5), //js mai month 0 se start hota hai
  boards : 75.45
}
}