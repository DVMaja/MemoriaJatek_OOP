class Kartya {
    #fajlNev; //String
    #allapot; //boolean
    #blokkolt; //boolean
    #divELEM;
    #imgELEM;

    constructor(fajlNev, szuloELEM) {
        this.#fajlNev = fajlNev;        
        //this.#blokkolt;
        szuloELEM.append(`<div class="kartya"> <img src="Stilus/kepek/${this.#fajlNev}" alt=""></div>`);

        this.#divELEM = szuloELEM.children("div:last-child");
        this.#imgELEM = this.#divELEM.children("img");
        
        this.#allapot = false;
        //Kezdetben a hátlap látszik, true esetén a kép
        this.#setLap(); 

    }

    #setAllapot() { 
        
    }
    getFajlnev() { 
        return this.#fajlNev;

    }

    #setLap() { 
        if (this.#allapot) {
            this.#imgELEM.attr("src", this.#fajlNev);
        }else{
            this.#imgELEM.attr("scr", "Stilus/kepek/hatter.jpg")
        }

    }

    #kattintasTrigger() {
        //forditnevű sajat esemeny
        const esemeny = new CustomEvent("fordit", { detail: this });
        window.dispatchEvent(esemeny);
    }
}

export default Kartya;
