

let img = document.createElement("img");
img.src = "./assests/img_la.jpg";
img.alt = "LA";

const h1 = document.createElement("h1");
h1.textContent="This is a Heading";

const p1 = document.createElement("p");
p1.textContent = "This is a paragraph";

const p2 = document.createElement("p");
p2.textContent= "This is a another paragraph";

document.body.appendChild(img);
document.body.appendChild(h1);
document.body.appendChild(p1);
document.body.appendChild(p2);
