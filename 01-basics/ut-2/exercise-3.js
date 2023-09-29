let padre ={
    name: "Paco",
    age: 52
}

let madre = {
    name: "Maria",
    age: 47
}


let persona = {
  name: "Pepe",
  age: 12,
  addres: [{calle:"Calle Larios"},{ciudad:"Malaga"}, {c_p:"29010"}],
  telephone: "952309876",
  padre1: padre,
  padre2: madre, 
  email: "pepito@gmail.com",

};


function ObtenerClaves(object){
    return Object.keys(object);

}

function ObtenerValores(object){
    return Object.values(object)
};


console.log(ObtenerClaves(persona));
console.log(ObtenerValores(persona));