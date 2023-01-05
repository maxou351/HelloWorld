import { Component, Input, OnInit } from '@angular/core';
import { People } from './people';
import { PEOPLE } from './bdd-people';
// import {MatToolbar} from `@angular/material/toolbar`

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Hello';
  peopleTable: People[] = PEOPLE;
  peopleSelected: People;

  ngOnInit(){
    console.table(this.peopleTable);
  }

  selectPeopleInput(event: MouseEvent){
    const index: number = +(event.target as HTMLInputElement).value;
    console.log(`Vous avez cliqué sur le nom ${this.peopleTable[index].name}`);
  }

  selectPeople(people: People){
    console.log(`Vous avez cliqué sur le nom ${people.name}`);
  }

  selectPeopleKeyUp(index: string){
    const peopleId: number = +index;
    this.peopleSelected = this.peopleTable[peopleId+1];
  }
}
