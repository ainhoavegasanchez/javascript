const persons = [
  { name: "Juan", age: 25 },
  { name: "María", age: 30 },
  { name: "Carlos", age: 22 },
  { name: "Luisa", age: 28 },
  { name: "Ana", age: 35 },
];

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle FOR
 **/
export const getNameWithFor = () => {
  let names=[];
  for(let i= 0; i<persons.length;i++){
    names.push(persons[i].name);
  }
  return names;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle DO WHILE
 **/
export const getNameWithDoWhile = () => {
  let names=[];
  let i=0;
  do{
    names.push(persons[i].name);
    i++;
  }while(i<persons.length)
  return names;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de los nombres
 ** Usando el bucle WHILE
 **/
export const getNameWithWhile = () => {
  let names=[];
  let i=0;
  while(i<persons.length){
    names.push(persons[i].name);
    i++;
  }
  return names;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle FOR
 **/
export const getAgeWithFor = () => {
  let edad=[];
  for(let i= 0; i<persons.length;i++){
    edad.push(persons[i].age);
  }
  return edad;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle DO WHILE
 **/
export const getAgeWithDoWhile = () => {
  let edad=[];
  let i=0;
  do{
    edad.push(persons[i].age);
    i++;
  }while(i<persons.length)
  return edad;
};

/*
 ** Usando el array persons crea una función que devuelva
 ** otro array de las edades
 ** Usando el bucle WHILE
 **/
export const getAgeWithWhile = () => {
  let edad=[];
  let i=0;
  while(i<persons.length){
    edad.push(persons[i].age);
    i++;
  }
  return edad;
};
