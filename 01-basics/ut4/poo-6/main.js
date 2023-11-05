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

const div = document.createElement("div");
div.classList = "container";
const imagen = document.createElement("img");
imagen.src = producto.thumbnail;

div.append(imagen);


const modal1 = document.createElement("div");
modal1.className= "modal";
const modal2 = document.createElement("div");
modal2.className= "modal-content";

div.append(modal1);
modal1.append(modal2);

const productname = document.createElement("h3");
productname.textContent = producto.title;

const precioproducto = document.createElement("p");
precioproducto.textContent = `Price = ${precio.current_price} ${precio.currency}`;

const valoracion=  document.createElement("p");
valoracion.textContent = `Rating = ${reviews.rating}`;

const total = document.createElement("p");
total.textContent = `Total reviews = ${reviews.total_reviews}`;

modal2.append(productname, precioproducto, valoracion, total);



document.body.append(div);


const img = document.querySelector("img");
const modal = document.getElementsByClassName("modal")[0];


img.addEventListener("mouseover",function() {
    modal.style.display = "block";
  });

  modal1.addEventListener("click",function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  });