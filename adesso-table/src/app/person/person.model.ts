export class Person {
  private name: string;
  private vorname: string;
  private email: string;
  private telefon: string;

  constructor() {
    this.name = 'Martin';
    this.vorname = 'Evtimov';
    this.email = 'd@abv.bg';
    this.telefon = '0888 888 889';
  }

  getName (): string {
    return this.name;
  }

  getVorname (): string {
    return this.vorname;
  }

  getEmail (): string {
    return this.email;
  }

  getTelefon (): string {
    return this.telefon;
  }

  createPerson(name:string, vorname:string, email:string, telefon:string): void{
    this.name = name;
    this.vorname = vorname;
    this.email = email;
    this.telefon = telefon;
  }

}
