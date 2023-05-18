import Kartya from "./Kartya.js";

class Jatekter {
    #kartyaLista = [];
    #kivalasztottKartyaLista = [];

    constructor(kartyaLista) {
        this.#kartyaLista = kartyaLista;
        const szuloELEM = $(".szuloELEM");

        this.#kever();
        for (let index = 0; index < this.#kartyaLista.length; index++) {
            new Kartya(this.#kartyaLista[index].kep, szuloELEM);
        }
       
        $(window).on("fordit", (event) => {
            console.log("A kattintást érzékeli")
            console.log(event.detail);
            let aktElem = event.detail;
            

        });
    }

    #init() {
        /**új játékteret hoz létre, alapértékre állítja az adattagokat
         * Így tudunk új játékot kezdeni, létrehozza a játékteret
         */
    }
    #kever() {
        let index = 0;
        while (index < this.#kartyaLista.length - 1) {
            let velSzam = Math.floor(Math.random() * this.#kartyaLista.length);
            let kepTarto = this.#kartyaLista[velSzam];
            this.#kartyaLista[velSzam] = this.#kartyaLista[index];
            this.#kartyaLista[index] = kepTarto;
            index++;
        }
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
