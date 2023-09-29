
//primera actividad
const text= "wellcome to the application!";

console.log("%c"+text,"color: blue; font-weight:bold; font-size: 18px");

//segunda actividad
const text2 = "This is an informational message";
console.log("%c"+text2,"color: green, font-size: 16px");

//tercera actividad
const text3= "This is a warning. Be cautious.";
console.warn("%c"+text3,"font-size:16px");

//cuarta actividad
const text4 = "Error | Something went wrong.";
console.error(text4);

//quinta actividad

let person1={
    name:'John',
    age:30,
    city:'New York'
}

let person2={
    name:'Jane',
    age: 25,
    city:'San Francisco'
}

let person3={
    name: 'Bob',
    age: 40,
    city:'Chicago'
}

const tabla= [person1, person2, person3]

console.table(tabla);


/*CORRECION


*/