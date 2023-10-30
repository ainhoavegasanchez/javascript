export class Person {
   name;
    surname;
    country;
    age;

  constructor(name, surname, country, age ) {
    this.name= name;
    this.surname= surname;
    this.country= country;
    this.age= age;
  };

  get name() {
    return this.name;
  };

  set name(nombre) {
    this.name = nombre;
  };

  get surname() {
    return this.surname;
  };

  set surname(apellido) {
   ; this.surname = apellido;
  }
  get country() {
    return this.country;
  };

  set country(pais) {
    this.country = pais;
  };

  get age() {
    return this.age;
  };

  set age(edad) {
    this.age = edad;
  }
};

