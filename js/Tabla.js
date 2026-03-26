import Cella from "./Cella.js";

export default class Tabla{
    #lista=[]
    constructor(lista,szuloElem){
        this.#lista=lista
        this.szuloElem=szuloElem
        this.szuloElem.innerHTML=""
        this.megjelenit()

    }

    megjelenit(){
        this.#lista.forEach((element,index) => {
            new Cella(element,index,this.szuloElem)
        });
    }

    setlista(index,adat){
        this.#lista[index]=adat
        return this.#lista
    }
    
}