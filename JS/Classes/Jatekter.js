import Kartya from "./Kartya.js";

class Jatekter {
    #kartyaLista = [];
    #kivalasztottKartyaLista = [];

    constructor(kartyaLista) {
        this.#kartyaLista = kartyaLista;        
        const szuloELEM = $(".szuloELEM");

        for (let index = 0; index < this.#kartyaLista.length; index++) {
            new Kartya(this.#kartyaLista[index].kep, false, szuloELEM);
        }
    }

    #init() { }
    #kever() { }
    #ellenorzes() { }
    #TriggerBlocked() { }
    #TriggerUnBlocked() { }
}
export default Jatekter;
