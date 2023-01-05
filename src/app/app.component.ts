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
  peopleSelected: People|undefined;

  ngOnInit(){
    console.table(this.peopleTable);
  }

  selectPeople(index: string){
    const people: People|undefined = this.peopleTable.find(people => people.id == +index)
    if(people){
      this.peopleSelected = people;
    }else {
      this.peopleSelected = people;
    }
  }
}
