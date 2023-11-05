import { Price } from "./classes/Price.js";
import { Review } from "./classes/Review.js";
import { Product } from "./classes/Product.js";

let precio = new Price("USD", "399.00");

let reviews = new Review("4.6", "73");

let producto = new Product(
  "New Apple iPhone SE (64GB, (Product) RED) [Locked] + Cricket Wireless Plan",
  "https://www.amazon.com/dp/B087623TMW",
  "https://m.media-amazon.com/images/I/810DvHOZ9nL._AC_UL320_.jpg",
  "335.80",
  precio,
  reviews
);



let lista = document.createElement("ul");
let div = document.createElement("div");
div.className = "container";

Object.entries(producto).forEach(([clave, valor]) => {
  let li = document.createElement("li");

  if (clave == "price") {
    li.textContent = clave +"= " +`${Object.values(precio)[0]} ${Object.values(precio)[1]}`;
    lista.append(li);

  } else if (clave === "review") {
    Object.entries(valor).forEach(([key, value]) => {
      let lis = document.createElement("li");
      lis.textContent = key + "= " + value;
      lista.append(lis);
    });
  } else {
    li.textContent = clave + "= " + valor; 
    lista.append(li);
  }
});

div.append(lista);
document.body.append(div);
