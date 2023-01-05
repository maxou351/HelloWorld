import { Component, OnInit } from '@angular/core';
import { People } from './people';
import { PEOPLE } from './bdd-people';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Hello';

  ngOnInit(){
    console.table(PEOPLE);
    this.selectPeople(PEOPLE[0]);
  }

  selectPeople(people: People){
    console.log(`Vous avez cliqué sur le nom ${people.name}`);
  }
}
