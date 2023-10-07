const grupo = "list-group";
const lista = "list-group-item";
const accion = "list-group-item-action";

document.body.classList.add("p-3", "m-0", "border-0", "bd-example");

const div1 = document.createElement("div");
div1.classList.add(grupo);

document.body.append(div1);

const div2 = document.getElementsByTagName("div")[0];

for (let i = 0; i < 9; i++) {
  const normal = document.createElement("a");
  normal.href = "#";
  normal.classList.add(lista, accion);
  normal.textContent = "A simple default list group item";
  div2.appendChild(normal);

  switch (i) {
    case 1:
      normal.classList.add("list-group-item-primary");
      normal.textContent= "A simple primary list group item";
      break;
    case 2:
      normal.classList.add("list-group-item-secondary");
      normal.textContent= "A simple secondary list group item";
      break;
    case 3:
        normal.classList.add("list-group-item-success");
        normal.textContent= "A simple success list group item";
      break;
    case 4:
        normal.classList.add("list-group-item-danger");
        normal.textContent= "A simple danger list group item";
      break;
    case 5:
        normal.classList.add("list-group-item-warning");
        normal.textContent= "A simple warning list group item";
      break;
    case 6:
        normal.classList.add("list-group-item-info");
        normal.textContent= "A simple info list group item";
      break;
    case 7:
        normal.classList.add("list-group-item-light");
        normal.textContent= "A simple light list group item";
      break;
    case 8:
        normal.classList.add("list-group-item-dark");
        normal.textContent= "A simple dark list group item";
      break;
  }
}
