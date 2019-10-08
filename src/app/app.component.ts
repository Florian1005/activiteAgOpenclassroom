import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Activite';
  post = [
    {
      namePost: 'Vive patoche sebastien',
      nameTitle: 'Le premier post',
      love : 2,
      date : Date()
    },
    {
       namePost: 'Les lamas sont les annimaux les plus nobles du monde',
      nameTitle: 'Le deuxieme post',
      love : 0,
      date : Date()
    },
    {
      namePost: 'Que fait un canard quand il tombe du trente-deuxieme etage... il meurt',
      nameTitle: 'Le troisieme post',
      love : 1,
      date : Date()
    }
  ];
}
