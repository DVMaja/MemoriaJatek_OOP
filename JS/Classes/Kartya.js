class Kartya {
    #fajlNev; //String
    #allapot; //boolean
    #blokkolt; //boolean
    #divELEM;
    #imgELEM;

    constructor(fajlNev,allapot, szuloELEM) {
        this.#fajlNev = fajlNev;
        //this.#blokkolt;
        szuloELEM.append(`<div class="kartya"> <img src="Stilus/kepek/hatter.jpg" alt=""></div>`);

        this.#divELEM = szuloELEM.children("div:last-child");
        this.#imgELEM = this.#divELEM.children("img");

        this.#allapot = false;
        //Kezdetben a hátlap látszik, true esetén a kép
        //this.#setLap();      

        //Ne hagyd ki!!!
        this.#imgELEM.on("click", ()=>{
            this.#kattintasTrigger();            
            this.setAllapot();
        })
        

    }

    setAllapot() {  
        //console.log("A setAllapotban vagyok");
        //console.log(this.#allapot);
        this.#allapot = !this.#allapot;      
        //console.log(this.#allapot);
        this.#setLap();
    }

    getFajlnev() {
        return this.#fajlNev;
    }

    #setLap() {
        //console.log(this.#allapot);
        if (this.#allapot) {
            //attribútum beállítása
            this.#imgELEM.attr("src", "Stilus/kepek/" + this.#fajlNev);
        } else {
            //console.log("bement a hamis ágba");
            //console.log(this.#allapot);
            this.#imgELEM.attr("src", "Stilus/kepek/hatter.jpg")
        }

    }

    #kattintasTrigger() {
        //forditnevű sajat esemeny
        const esemeny = new CustomEvent("fordit", { detail: this });
        window.dispatchEvent(esemeny);
    }
}

export default Kartya;
