# Tic-Tac-Toe Játék

Ez egy modern, objektumorientált szemlélettel készült amőba játék, amely moduláris JavaScript felépítést használ.

## 🎮 Projekt leírása

A játék egy 3x3-as rácson játszódik, ahol a játékosok ("x" és "o") váltják egymást. A program minden lépés után ellenőrzi a nyerő kombinációkat, és győzelem esetén üzenetet küld a felhasználónak.

### Főbb funkciók:
* **Moduláris felépítés**: Külön osztályok felelnek a tábláért és a cellákért.
* **Egyedi eseménykezelés**: A cellákra való kattintás `CustomEvent` segítségével jut el a fővezérlőhöz.
* **Új játék**: Lehetőség van a tábla alaphelyzetbe állítására a gomb segítségével.

---

## 🏗️ Rendszerfelépítés (UML Osztálydiagram)

Az alábbi ábra mutatja be az osztályok közötti kapcsolatokat és a projekt logikai felépítését:

```mermaid
classDiagram
    direction TB
    class Tabla {
        -lista: Array
        +szuloElem: HTMLElement
        +constructor(lista, szuloElem)
        +megjelenit()
        +setlista(index, adat)
    }

    class Cella {
        -adat: String
        -index: Number
        +szuloElem: HTMLElement
        +divElem: HTMLElement
        +constructor(adat, index, szuloElem)
        +megjelenit()
        +esemenykezelo()
        +sajatesemeny()
    }

    class IndexJS {
        <<Module>>
        -LISTA: Array
        -kovetkezo: String
        +ujJatek()
    }

    class EllenorzesJS {
        <<Module>>
        +nyert(lista, jatekos)
    }

    Tabla "1" *-- "9" Cella : példányosítja és tartalmazza
    IndexJS ..> Tabla : vezérli
    IndexJS ..> EllenorzesJS : meghívja az ellenőrzést
    Cella ..> IndexJS : 'katt' CustomEvent-et küld