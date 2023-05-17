import Kartya from "./Kartya.js";

class Jatekter {
    #kartyaLista = [];
    #kivalasztottKartyaLista = [];

    constructor(kartyaLista) {
        this.#kartyaLista = kartyaLista;        
        const szuloELEM = $(".szuloELEM");

        for (let index = 0; index < this.#kartyaLista.length; index++) {
            new Kartya(this.#kartyaLista[index].kep, szuloELEM);
        }
    }

    #init() {         
        /**új játékteret hoz létre, alapértékre állítja az adattagokat
         * Így tudunk új játékot kezdeni, létrehozza a játékteret
         */
    }
    #kever() { 
        /**véletlen sorrendbe állítja a kartyaLista elemeit */
    }
    #ellenorzes() { 
        /**megnézi hogy a két kiválasztott kártya egyforma-e?
         * ha igen akkor nem fordítja vissza, ha nem akkor 1000sec után visszafordítja
         */
    }
    #TriggerBlocked() {
        /**feladata hogy kártyák kattintását blokkolja */
     }
    #TriggerUnBlocked() { 

    }
}
export default Jatekter;
