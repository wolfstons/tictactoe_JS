# Tic-Tac-Toe Játék

Egy klasszikus amőba (Tic-Tac-Toe) játék, amely modern JavaScript (ES6+), objektumorientált szemléletmód és moduláris felépítés használatával készült.

## 🎮 Projekt leírása

A játék egy 3x3-as rácson játszódik, ahol két játékos ("X" és "O") váltja egymást. A cél, hogy vízszintesen, függőlegesen vagy átlósan három azonos jelet juttassunk egymás mellé.

### Főbb funkciók:
* **Interaktív felület:** Kattintásra reagáló cellák.
* **Győzelem ellenőrzés:** Automatikus logika, amely minden lépés után vizsgálja a nyerő kombinációkat.
* **Új játék indítása:** Külön gomb a tábla alaphelyzetbe állításához.
* **Egyedi eseménykezelés:** A komponensek közötti kommunikáció `CustomEvent` használatával történik.

## 🛠️ Technikai részletek

A projekt az alábbi fájlokból áll:

* `index.html`: A játék vázát adó HTML struktúra.
* `style.css`: A vizuális megjelenésért és a reszponzív grid elrendezésért felelős stíluslap.
* `index.js`: A fő vezérlő logika, amely kezeli a játék állapotát és a kattintásokat.
* `Tabla.js`: Az egész játékteret reprezentáló osztály.
* `Cella.js`: Az egyes négyzeteket kezelő osztály, amely felelős a saját megjelenítéséért és a kattintás továbbításáért.
* `ellenorzes.js`: Egy külső modul, amely a nyerési feltételek algoritmusát tartalmazza.

## 🚀 Telepítés és használat

1.  Töltsd le vagy klónozd a projektet.
2.  Mivel a projekt **JavaScript modulokat** (`import/export`) használ, egy egyszerű lokális webszerverre lesz szükséged a futtatáshoz (például VS Code *Live Server* bővítmény).
3.  Nyisd meg az `index.html` fájlt a böngésződben a szerveren keresztül.

## 🏗️ Rendszerfelépítés (UML Osztálydiagram)

Az alábbi ábra szemlélteti a játék logikai felépítését és az osztályok közötti kapcsolatokat:

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
    Cella --|> IndexJS : 'katt' CustomEvent-et küld

## ✒️ Szerző

**Páczi Balázs**
