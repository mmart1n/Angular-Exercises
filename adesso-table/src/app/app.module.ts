import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonsTableComponent } from './person/persons-table/persons-table.component';
import { OrderModule } from 'ngx-order-pipe';
import { AppBootstrapModule } from './person/app-bootstrap.module';
import { PersonsService } from './person/persons.service';


@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonsTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    OrderModule,
    AppBootstrapModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
