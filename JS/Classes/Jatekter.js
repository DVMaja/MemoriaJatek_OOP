import Kartya from "./Kartya.js";

class Jatekter {
    #kartyaLista = [];
    #kivalasztottKartyaLista = [];

    constructor(kartyaLista) {
        this.#kartyaLista = kartyaLista;
        const szuloELEM = $(".szuloELEM");

        //this.#kever();
        for (let index = 0; index < this.#kartyaLista.length; index++) {
            new Kartya(this.#kartyaLista[index].kep, false, szuloELEM);
        }

        $(window).on("fordit", (event) => {
            //console.log("A kattintást érzékeli")
            console.log(event.detail);
            this.#kivalasztottKartyaLista.push(event.detail);
            if (this.#kivalasztottKartyaLista.length === 2) {
                this.#ellenorzes();
            }
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
        console.log(this.#kivalasztottKartyaLista);
        let elsoKartya = this.#kivalasztottKartyaLista[0];
        let masodikKartya = this.#kivalasztottKartyaLista[1];

        if (elsoKartya.getFajlnev() === masodikKartya.getFajlnev()) {
            console.log("A két kép egyforma");
        } else {
            console.log("A két kép nem egyforma");
            setTimeout(function () {
                console.log("Nézzük az időt");
                elsoKartya.setAllapot();
                masodikKartya.setAllapot();
            }, 1000)
        }


    }
    #TriggerBlocked() {
        /**feladata hogy kártyák kattintását blokkolja */
    }
    #TriggerUnBlocked() {

    }
}
export default Jatekter;
