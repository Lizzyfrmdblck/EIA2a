

namespace BecomeKing {


    let address: string = "https://eia2a-aufgabe6.herokuapp.com";

    //Test
    window.addEventListener("load", init);

    let testAdresse: boolean = false;
    let testBestellung: boolean = false;
    let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");

    function init(): void {

        createFormular();

        let fieldsets: HTMLCollectionOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        document.getElementById("checkButton").addEventListener("click", checkInput);
        console.log("addTestEvent");

        // für jedes fieldset in der node list event listener hinzufügen
        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleClick);
        }
    }

    // fieldset und input elemente erstellen____________________________________________________________________________________

    function createFormular(): void {

        //für jeden key in _products (Behälter, Fruchteis, Milcheis...)
        for (let key in products) {

            let fieldsetId: HTMLFieldSetElement = document.createElement("fieldset");
            fieldsetId.setAttribute("id", key);

            document.getElementById("allProducts").appendChild(fieldsetId);

            let legend: HTMLLegendElement = document.createElement("legend");
            legend.innerText = key;
            fieldsetId.appendChild(legend);

            let productList: Product[] = products[key];

            // dürchläuft innere Arrays
            // für key == Fruchteis >> Mango, Erdbeere, Banane...
            for (let i: number = 0; i < productList.length; i++) {

                let input: HTMLInputElement = document.createElement("input");
                let label: HTMLLabelElement = document.createElement("label"); //"apfel"

                input.id = key + "_" + productList[i].name;
                input.setAttribute("key", key);
                input.setAttribute("product", productList[i].name);
                input.setAttribute("price", productList[i].price.toString());
                input.setAttribute("basket", "false");

                switch (key) {
                    case ("Behaelter"):
                    case ("Lieferung"):
                        input.setAttribute("type", "radio");
                        input.setAttribute("name", "radioGroup_" + key);
                        input.setAttribute("value", productList[i].name);

                        break;
                    case ("Extras"):
                        input.setAttribute("type", "checkbox");
                        input.setAttribute("name", productList[i].name);
                        //  input.setAttribute("value", productList[i].price + "");

                        break;
                    case ("Fruchteis"):
                    case ("Milcheis"):
                        input.setAttribute("type", "number");
                        input.setAttribute("name", productList[i].name);
                        input.setAttribute("min", "0");
                        input.setAttribute("max", "10");
                        input.setAttribute("step", "1");
                        break;
                    default: break;
                }

                label.setAttribute("for", input.id); //Du Label gehörst jetzt zu dem Input Element
                label.innerText = productList[i].name;
                // Elter ruft Kind  
                fieldsetId.appendChild(input);
                fieldsetId.appendChild(label);
            }
        }
    }

    //Funktion für jede Veränderung in den Fieldsets_________________________________________________________
    function handleClick(_event: Event): void {

        //Variable Target ist das Element, das verändert wurde
        let target: HTMLInputElement = <HTMLInputElement>_event.target;
        //Nodelist von allen Input Elementen
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");


        //Fallunterscheidung: Wenn das target ein radio ist 
        if (target.type == "radio") {
            for (let i: number = 0; i < inputs.length; i++) {
                if (inputs[i].name == target.name) {
                    inputs[i].setAttribute("basket", "false"); //wenn ein Radiobutton ausgewählt wurde, wird alles wieder auf false gesetzt und dann das ausgewählte auf true (aktualisiert)
                }
            }
            target.setAttribute("basket", "true");
            writeBasket(); //nach jeder Veränderung, Neu Auswählung wird Warenkorb neu geschrieben
        }

        else if (target.type == "checkbox") {
            if (target.checked == true) { target.setAttribute("basket", "true"); }
            else { target.setAttribute("basket", "false"); }
            writeBasket();
        }

        else if (target.type == "number") {
            if (target.value == "0") { target.setAttribute("basket", "false"); }
            else { target.setAttribute("basket", "true"); }
            writeBasket();
        }

        //"text"
        else {
            if (target.checkValidity() == false) { target.setAttribute("write", "false"); } //checkt Pattern
            else { target.setAttribute("write", "true"); }
            writeAdress();
        }
    }

    // Warenkorb wird geschrieben________________________________________________________________________________
    function writeBasket(): void {

        let basketFs: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("basketFs");
        let basketDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("basketDiv");
        let inputs: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input");

        basketDiv.innerText = "";

        for (let i: number = 0; i < inputs.length; i++) { //durchläuft jedes input element

            if (inputs[i].getAttribute("basket") == "true") { //wählt Elemente mit Attribut basket "true"

                if (inputs[i].type == "radio" || inputs[i].type == "number" || inputs[i].type == "checkbox") { // entweder radio, number oder checkbox
                    let basketElement: HTMLParagraphElement = document.createElement("p") //und fügt paragraph attribute hinzu
                    basketElement.setAttribute("key", inputs[i].getAttribute("key")); //jedem p-Element wird key zugeordnet

                    let singlePrice: number = parseFloat(inputs[i].getAttribute("price")); //input -> number -> price
                    if (inputs[i].type == "number") { //wenn input ne number ist...

                        let value: number = Number(inputs[i].value); //...wird 
                        let pPrice: number = singlePrice * value;
                        basketElement.innerText = "- " + inputs[i].value + "x " + inputs[i].getAttribute("product") + " " + pPrice.toFixed(2).toString() + " €";
                        basketElement.setAttribute("pPrice", pPrice.toFixed(2).toString());
                    }

                    else {
                        basketElement.innerText = "- " + inputs[i].getAttribute("product") + " " + singlePrice.toFixed(2).toString() + " €";
                        basketElement.setAttribute("pPrice", singlePrice.toFixed(2).toString());
                    }
                    basketDiv.appendChild(basketElement);
                }
            }

        }

        let priceDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("priceDiv");
        basketFs.appendChild(priceDiv);
        let priceParts: HTMLCollectionOf<HTMLParagraphElement> = basketDiv.getElementsByTagName("p");

        priceDiv.innerHTML = "";
        let endPrice: number = 0;
        for (let i: number = 0; i < priceParts.length; i++) {
            let tempPrice: number = parseFloat(priceParts[i].getAttribute("pPrice"));
            endPrice += tempPrice;
        }
        priceDiv.innerHTML = "Gesamtpreis: " + endPrice.toFixed(2).toString() + " €";

    }

    //Adresse im Warenkorb prüfen und anzeigen
    function writeAdress(): void {
        let adressDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("adressDiv");
        let adressFs: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("adress");
        let adressInputs: HTMLCollectionOf<HTMLInputElement> = document.getElementById("adress").getElementsByTagName("input");
        let adressP: HTMLParagraphElement = document.createElement("p");

        let check: number = 0;
        let adressString: string = "";
        adressDiv.innerText = "";

        for (let i: number = 0; i < adressInputs.length; i++) {
            if (adressInputs[i].getAttribute("write") == "true") { check++; }
        }

        if (check == 6) {
            adressString += "\n" + "Deine Lieferadresse:" + "\n";
            adressString += adressInputs[0].value + ", " + adressInputs[1].value + "\n" + adressInputs[2].value + "\n" + adressInputs[3].value + "  " + adressInputs[4].value + "\n" + adressInputs[5].value;
            testAdresse = true;

            if (testAdresse == true && testBestellung == true) {
                console.log("add Send Event");

                document.getElementById("submitButton").addEventListener("click", sendOrder);
            }
        }

        else {
            adressString += "Daten sind falsch || unvollständig";
        }

        adressP.innerText = adressString;
        adressDiv.appendChild(adressP); //Anzeige
    }


    //Prüft bestellte Artikel auf Vollständigkeit
    function checkInput(_event: Event): void {
        console.log("start Test");

        let basketPs: HTMLCollectionOf<HTMLParagraphElement> = document.getElementById("basketDiv").getElementsByTagName("p");
        let checkDiv: HTMLDivElement = <HTMLDivElement>document.getElementById("checkDiv");
        let checkArray: string[] = [];
        let checkInput: number = 0;
        checkDiv.innerText = "";

        for (let i: number = 0; i < basketPs.length; i++) {
            let attribute: string = basketPs[i].getAttribute("key");
            checkArray.push(attribute);
        }

        for (let key in products) {
            if (checkArray.indexOf(key) == -1) {
                let p: HTMLParagraphElement = document.createElement("p");
                checkDiv.appendChild(p);
                p.innerText = "Du musst noch " + key + " auswählen!";
            }
            else {
                checkInput++;
            }
        }

        if (checkInput == 5) {
            testBestellung = true;

            if (testAdresse == true && testBestellung == true) {
                console.log("add Send Event");

                document.getElementById("submitButton").addEventListener("click", sendOrder);
            }
        }
    }


    // zeug was an server geschickt wurde anzeigen 
    function sendOrder(): void {
        console.log("fire Request");

        let url: string = "https://eia2a-aufgabe6.herokuapp.com/?";

        let inputAll: HTMLCollectionOf<HTMLInputElement> = document.getElementsByTagName("input")
        for (let input of inputAll) {

            if (input.checked == true) {
                url += `${input.name}=${input.value}&`;
            }
            if (input.type == "checkbox") {
                url += `${input.getAttribute("key")}=${input.name}&`;
            }

            console.log(input.basket);
            if (input.type == "number" && input.basket === "true") {
                url += `${input.name}=${input.price}&`;
            }

            if (input.type == "text") {
                url += `${input.name}=${input.value}&`;
            }

        }

        sendRequestWithCustomData(url);
    }

    function sendRequestWithCustomData(_url: string): void {
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open("GET", _url, true);
        xhr.addEventListener("readystatechange", handleStateChange);
        xhr.send();


    }

    function handleStateChange(_event: ProgressEvent): void {
        let xhr: XMLHttpRequest = (<XMLHttpRequest>_event.target);
        if (xhr.readyState == XMLHttpRequest.DONE) {
            document.getElementById("submitÜbersicht").innerHTML = xhr.response;
        }
    }
}
