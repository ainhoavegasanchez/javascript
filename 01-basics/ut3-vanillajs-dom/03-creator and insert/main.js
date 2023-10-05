
const div = document.createElement("div");


document.body.appendChild(div);
const div1 = document.getElementsByTagName("div")[0];

const h1 = document.createElement("h1");
h1.textContent="The input min and max attributes";

const p1= document.createElement("p");
p1.textContent="The min and max attributes specify the minimum and maximum values for an input element.";

const espacio = document.createElement("br");

div1.append(h1, espacio, p1, espacio.cloneNode());

const form = document.createElement("form");
form.action="/action_page.php";

div1.appendChild(form);




const label1= document.createElement("label");
label1.for= "datemax";
label1.textContent="Enter a date before 1980-01-01:";

const input1= document.createElement("input");
input1.type = "date";
input1.id="datemax";
input1.name="datemax";
input1.max="1979-12-31";

const form1 = document.getElementsByTagName("form")[0];




const label2= label1.cloneNode();
label2.for= "datemin";
label2.textContent="Enter a date before 2000-01-01:";

const input2= input1.cloneNode();
input2.id="datemin";
input2.name="datemin";
input2.max="2000-01-02";


const label3= label1.cloneNode();
label3.for= "quantity";
label3.textContent="quantity (between 1 and 5):";

const input3= input1.cloneNode();
input3.type="number";
input2.id="quantity";
input2.name="quantity";
input2.min="1";
input1.max="5";


const boton = document.createElement("input");
boton.type="submit";
boton.value="Submit";
/*aqui vamos a ir metiendolo en el html */

form1.append(label1,input1, espacio.cloneNode(),espacio.cloneNode(),label2,input2, espacio.cloneNode(),
espacio.cloneNode(),label3, input3, espacio.cloneNode(),espacio.cloneNode(), boton);






