import { Component, Renderer, OnInit} from '@angular/core';

import { Person } from '../person.model';
import * as $ from 'jquery';
import { OrderPipe } from 'ngx-order-pipe';
import { PersonsService } from '../persons.service';


@Component ({
  selector: 'app-persons-table',
  templateUrl: './persons-table.component.html',
  styleUrls: ['./persons-table.component.scss']
})
export class PersonsTableComponent implements OnInit {

  order = 'name';
  reverse = false;
  sortedCollection: Person[] = [];

  pesho: Person = new Person();
  kolio: Person = new Person();
  joro: Person = new Person();
  martin: Person = new Person();
  hacho: Person = new Person();

  list = [this.pesho, this.kolio, this.joro, this.martin, this.hacho];

  constructor(private orderPipe: OrderPipe, public renderer: Renderer, public personsService: PersonsService) {
    this.sortedCollection = orderPipe.transform(this.list, this.order);
    console.log(this.sortedCollection);
    this.pesho.createPerson('Pesho', 'Ivanov', 'a@abv.bg', '0888 888 886');
    this.kolio.createPerson('Nikola', 'Peshev', 'b@abv.bg', '0888 888 887');
    this.joro.createPerson('Georgi', 'Jordanov', 'c@abv.bg', '0888 888 888');
    this.martin.createPerson('Martin', 'Evtimov', 'd@abv.bg', '0888 888 889');
    this.hacho.createPerson('Vladislav', 'Borisov', 'e@abv.bg', '0888 888 885');
  }


  setOrder(value: string) {
    if (this.order === value) {
      this.reverse = !this.reverse;
    }

    this.order = value;
  }

  public ngOnInit() {
    $(function() {
      let pressed = false;
      let start;
      let startX, startWidth;
      $('#table-persons td').mousedown(function(e) {
        start = $(this);
        pressed = true;
        startX = e.pageX;
        startWidth = $(this).width();
        $(start).addClass('resizing');
        $(start).addClass('noSelect');
      });
      $(document).mousemove(function(e) {
        if (pressed) {
          $(start).width(startWidth + (e.pageX - startX));
        }
      });
      $(document).mouseup(function() {
        if (pressed) {
          $(start).removeClass('resizing');
          $(start).removeClass('noSelect');
          pressed = false;
        }
      });
    });
  }

  onChoosenPerson(selected: Person){
   this.personsService.changePerson(selected.getName(), selected.getVorname(), selected.getEmail(), selected.getTelefon());
  }

}
