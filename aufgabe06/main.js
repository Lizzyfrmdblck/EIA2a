var iceice;
(function (iceice) {
    window.addEventListener("load", init);
    let inputs = document.getElementsByTagName("input");
    function init() {
        createFormular();
        let checkButton = document.getElementById("check");
        let fieldsets = document.getElementsByTagName("fieldset");
        checkButton.addEventListener("click", checkInput);
        //      für jedes fieldset in der node list event listener hinzufügen
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleClick);
        }
    }
    // fieldset und input elemente erstellen____________________________________________________________________________________
    function createFormular() {
        //für jeden key in _products (Behälter, Fruchteis, Milcheis...)
        for (let key in iceice.products) {
            let fieldsetId = document.createElement("fieldset");
            fieldsetId.setAttribute("id", key);
            document.getElementById("allProducts").appendChild(fieldsetId);
            let legend = document.createElement("legend");
            legend.innerText = key;
            fieldsetId.appendChild(legend);
            let productList = iceice.products[key];
            // dürchläuft innere Arrays
            // für key == Fruchteis >> Mango, Erdbeere, Banane...
            for (let i = 0; i < productList.length; i++) {
                let input = document.createElement("input");
                let label = document.createElement("label"); //"apfel"
                input.id = key + "_" + productList[i].name;
                input.setAttribute("key", key);
                input.setAttribute("product", productList[i].name);
                input.setAttribute("price", productList[i].price.toString());
                input.setAttribute("basket", "false");
                switch (key) {
                    case ("Behälter"):
                    case ("Lieferung"):
                        input.setAttribute("type", "radio");
                        input.setAttribute("name", "radioGroup_" + key);
                        break;
                    case ("Extras"):
                        input.setAttribute("type", "checkbox");
                        input.setAttribute("name", "checkGroup_" + key);
                        break;
                    case ("Fruchteis"):
                    case ("Milcheis"):
                        input.setAttribute("type", "number");
                        input.setAttribute("name", "stepGroup_" + key);
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
    function handleClick(_event) {
        //Variable Target ist das Element, das verändert wurde
        let target = _event.target;
        //Nodelist von allen Input Elementen
        let inputs = document.getElementsByTagName("input");
        //Fallunterscheidung: Wenn das target ein radio ist 
        if (target.type == "radio") {
            for (let i = 0; i < inputs.length; i++) {
                if (inputs[i].name == target.name) {
                    inputs[i].setAttribute("basket", "false"); //wenn ein Radiobutton ausgewählt wurde, wird alles wieder auf false gesetzt und dann das ausgewählte auf true (aktualisiert)
                }
            }
            target.setAttribute("basket", "true");
            writeBasket(); //nach jeder Veränderung, Neu Auswählung wird Warenkorb neu geschrieben
        }
        else if (target.type == "checkbox") {
            if (target.checked == true) {
                target.setAttribute("basket", "true");
            }
            else {
                target.setAttribute("basket", "false");
            }
            writeBasket();
        }
        else if (target.type == "number") {
            if (target.value == "0") {
                target.setAttribute("basket", "false");
            }
            else {
                target.setAttribute("basket", "true");
            }
            writeBasket();
        }
        //"text"
        else {
            if (target.checkValidity() == false) {
                target.setAttribute("write", "false");
            } //checkt Pattern
            else {
                target.setAttribute("write", "true");
            }
            writeAdress();
        }
    }
    // Warenkorb wird geschrieben________________________________________________________________________________
    function writeBasket() {
        let basketFs = document.getElementById("basketFs");
        let basketDiv = document.getElementById("basketDiv");
        let inputs = document.getElementsByTagName("input");
        basketDiv.innerText = "";
        for (let i = 0; i < inputs.length; i++) { //durchläuft jedes input element
            if (inputs[i].getAttribute("basket") == "true") { //wählt Elemente mit Attribut basket "true"
                if (inputs[i].type == "radio" || inputs[i].type == "number" || inputs[i].type == "checkbox") { // entweder radio, number oder checkbox
                    let basketElement = document.createElement("p"); //und fügt paragraph attribute hinzu
                    basketElement.setAttribute("key", inputs[i].getAttribute("key")); //jedem p-Element wird key zugeordnet
                    let singlePrice = parseFloat(inputs[i].getAttribute("price")); //input -> number -> price
                    if (inputs[i].type == "number") { //wenn input ne number ist...
                        let value = Number(inputs[i].value); //...wird 
                        let pPrice = singlePrice * value;
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
        let priceDiv = document.getElementById("priceDiv");
        basketFs.appendChild(priceDiv);
        let priceParts = basketDiv.getElementsByTagName("p");
        priceDiv.innerHTML = "";
        let endPrice = 0;
        for (let i = 0; i < priceParts.length; i++) {
            let tempPrice = parseFloat(priceParts[i].getAttribute("pPrice"));
            endPrice += tempPrice;
        }
        priceDiv.innerHTML = "Gesamtpreis: " + endPrice.toFixed(2).toString() + " €";
    }
    //Adresse im Warenkorb prüfen und anzeigen
    function writeAdress() {
        let adressDiv = document.getElementById("adressDiv");
        let adressFs = document.getElementById("adress");
        let adressInputs = document.getElementById("adress").getElementsByTagName("input");
        let adressP = document.createElement("p");
        let check = 0;
        let adressString = "";
        adressDiv.innerText = "";
        for (let i = 0; i < adressInputs.length; i++) {
            if (adressInputs[i].getAttribute("write") == "true") {
                check++;
            }
        }
        if (check == 6) {
            adressString += "\n" + "Deine Lieferadresse:" + "\n";
            adressString += adressInputs[0].value + ", " + adressInputs[1].value + "\n" + adressInputs[2].value + "\n" + adressInputs[3].value + "  " + adressInputs[4].value + "\n" + adressInputs[5].value;
        }
        else {
            adressString += "Daten sind falsch || unvollständig";
        }
        adressP.innerText = adressString;
        adressDiv.appendChild(adressP); //Anzeige
    }
    //Prüft bestellte Artikel auf Vollständigkeit
    function checkInput(_event) {
        let basketPs = document.getElementById("basketDiv").getElementsByTagName("p");
        let checkDiv = document.getElementById("checkDiv");
        let checkArray = [];
        checkDiv.innerText = "";
        for (let i = 0; i < basketPs.length; i++) {
            let attribute = basketPs[i].getAttribute("key");
            checkArray.push(attribute);
        }
        for (let key in iceice.products) {
            if (checkArray.indexOf(key) == -1) {
                let p = document.createElement("p");
                checkDiv.appendChild(p);
                p.innerText = "Du musst noch " + key + " auswählen!";
            }
        }
    }
})(iceice || (iceice = {}));
//# sourceMappingURL=main.js.map