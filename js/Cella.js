export default class Cella {
  #adat = "";
  #index = 0;
  constructor(adat, index, szuloElem) {
    this.#adat = adat;
    this.#index = index;
    this.szuloElem = szuloElem;
    this.megjelenit();
    this.divElem = document.querySelector(".kocka:last-child");
    this.esemenykezelo();
  }

  megjelenit() {
    let kod = `<div class="kocka">${this.#adat}</div>`;
    this.szuloElem.insertAdjacentHTML("beforeend", kod);
  }
  esemenykezelo() {
    this.divElem.addEventListener("click",(event)=>{
        this.sajatesemeny()
    });
  }
  sajatesemeny() {
    const esemeny = new CustomEvent("katt",{detail:this.#index});
    window.dispatchEvent(esemeny);
  }
}
