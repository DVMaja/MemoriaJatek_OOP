class Kartya {
    #fajlNev; //String
    #allapot; //boolean
    #blokkolt; //boolean
    #divELEM;
    #imgELEM;

    constructor(fajlNev, allapot, szuloELEM) {
        this.#fajlNev = fajlNev;
        this.#allapot = allapot;
        this.#blokkolt;
        szuloELEM.append(`<div class="kartya"> <img src="Stilus/kepek/${this.#fajlNev}" alt=""></div>`);

        this.#divELEM = szuloELEM;
        this.#imgELEM;


    }

    #setAllapot() { 
        
    }
    getFajlnev() { 

    }

    #setLap() { 

    }

    #kattintasTrigger() {
        //forditnevű sajat esemeny
        const esemeny = new CustomEvent("fordit", { detail: this });
        window.dispatchEvent(esemeny);
    }
}

export default Kartya;
