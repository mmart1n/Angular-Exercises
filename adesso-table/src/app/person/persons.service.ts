import { Person } from './person.model';
import { Injectable } from '@angular/core';

@Injectable({providedIn: 'root'})
export class PersonsService{
  private person:Person = new Person();
  getPerson() {
    return this.person;
  }
  changePerson(name:string, vorname:string, email:string, telefon:string){
    this.person.createPerson(name, vorname, email, telefon);
  }
}
