import { Component, OnInit } from '@angular/core';
import { Person } from './person.model';
import { PersonsService } from './persons.service';

@Component ({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person:Person;
  loadComponent = false;
  personsService: PersonsService;

  constructor(personsService: PersonsService) {
    this.personsService = personsService;
  }

  ngOnInit() {
    this.person = this.personsService.getPerson();
  }


  loadMyChildComponent() {
    this.loadComponent = true;
  }

}
