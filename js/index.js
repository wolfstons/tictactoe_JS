import Tabla from "./Tabla.js";
import { nyert } from "./ellenorzes.js";

const LISTA = ["", "", "", "", "", "", "", "", ""];
let kovetkezo = "x";


const szuloElem = document.querySelector("article");
const gombElem=document.getElementById("ujjatek")

new Tabla(LISTA, szuloElem);

function ujJatek() {
  LISTA.fill("");
  kovetkezo = "x";
  new Tabla(LISTA, szuloElem);
}

gombElem.addEventListener("click", ujJatek);

window.addEventListener("katt", (event) => {
  const index = event.detail;

  if (LISTA[index] !== "") {
    return;
  }

  LISTA[index] = kovetkezo;

  if (nyert(LISTA, kovetkezo)) {
    new Tabla(LISTA, szuloElem);
    alert(`${kovetkezo} nyert! Kattints az 'Új játék' gombra az újrakezdéshez.`);
    return;
  }

  kovetkezo = kovetkezo === "x" ? "o" : "x";

  new Tabla(LISTA, szuloElem);
});
