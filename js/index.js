import Tabla from "./Tabla.js";

const LISTA = [" ", "", " ", " ", "", " ", " ", " ", " "];
const szuloElemElem = document.querySelector("article");
//const divElem = document.querySelectorAll(".kartya");

new Tabla(LISTA, szuloElemElem);
window.addEventListener("katt", (event) => {
    console.log(event.detail);
  LISTA[event.detail] = "x";//itt változik hogy mit rakjon oda, léptető
  new Tabla(LISTA, szuloElemElem);
});
//ide kell a logika