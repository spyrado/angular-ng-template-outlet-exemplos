import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-ng-template-outlet';
  list = [
    {
      id: 1,
      nome: 'Nicolas'
    },
    {
      id: 2,
      nome: 'Talita'
    },
  ]
}
