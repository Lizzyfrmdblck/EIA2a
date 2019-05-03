var iceice;
(function (iceice) {
    window.addEventListener("load", init);
    let inputs = document.getElementsByTagName("input");
    function init() {
        createFormular(iceice.products);
        let checkButton = document.getElementById("check");
        let fieldsets = document.getElementsByTagName("fieldset");
        checkButton.addEventListener("click", checkInput);
        for (let i = 0; i < fieldsets.length; i++) {
            let fieldset = fieldsets[i];
            fieldset.addEventListener("change", handleCart);
        }
    }
    // Formelemente______________________________________________________________________________
    function createFormular(_products) {
        //für jeden key in _products (Behälter, Fruchteis, Milcheis...)
        for (let key in _products) {
            let fieldsetId = document.createElement("fieldset");
            fieldsetId.setAttribute("id", key);
            document.getElementById("allProducts").appendChild(fieldsetId);
            let legend = document.createElement("legend");
            legend.innerText = key;
            fieldsetId.appendChild(legend);
            let productList = _products[key];
            // dürchläuft innere Arrays
            // für key == Fruchteis >> Mango, Erdbeere, Banane...
            for (let i = 0; i < productList.length; i++) {
                let input = document.createElement("input");
                let label = document.createElement("label");
                input.setAttribute("value", input.value);
                input.setAttribute("id", productList[i].name);
                input.setAttribute("price", String(productList[i].price));
                console.groupEnd();
                if (key == "Behälter" || key == "Lieferung") {
                    input.setAttribute("type", "radio");
                    input.setAttribute("name", "radioGroup_" + key);
                }
                else if (key == "Extras") {
                    input.setAttribute("type", "checkbox");
                    input.setAttribute("name", "checkGroup" + key);
                }
                // für key == "Fruchteis" || key == "Milcheis"
                else {
                    input.setAttribute("type", "number");
                    input.setAttribute("name", "stepGroup_" + key);
                    input.setAttribute("min", "0");
                    input.setAttribute("max", "10");
                }
                label.setAttribute("for", input.id);
                label.innerText = productList[i].name;
                label.appendChild(document.createElement("br"));
                fieldsetId.appendChild(input);
                fieldsetId.appendChild(label);
            }
        }
    }
    //Bestellübersicht______________________________________________________________________________
    function handleCart(_event) {
        let cart = document.getElementById("cart");
        cart.innerHTML = "";
        let cartArray = [];
        for (let i = 0; i < inputs.length; i++) {
            let cartElement = document.createElement("p");
            let price = inputs[i].getAttribute("price");
            let name = inputs[i].getAttribute("name");
            let id = inputs[i].getAttribute("id");
            let value = inputs[i].getAttribute("value");
            let amount = Number(inputs[i].value);
            let finalPrice = Number(price) * amount;
            if (inputs[i].checked || finalPrice != 0) {
                if (id == null || inputs[i].getAttribute("type") == "text") {
                    break;
                }
                console.log("Anzahl " + inputs[i].value);
                console.log("PpS " + price);
                console.log("Preis " + finalPrice);
                if (inputs[i].type == "radio") {
                    finalPrice = Number(price);
                }
                cart.appendChild(cartElement);
                cartElement.innerHTML = id + " " + finalPrice + "€";
                cartArray.push(finalPrice);
            }
        }
        let priceDiv = document.createElement("div");
        cart.appendChild(document.createElement("hr"));
        cart.appendChild(priceDiv);
        let endPrice = 0;
        for (let i = 0; i < cartArray.length; i++) {
            endPrice += cartArray[i];
        }
        priceDiv.innerHTML = "Gesamtpreis: " + String(endPrice) + "€";
    }
    // Überprüfen Button________________________________________________________________________________
    function checkInput() {
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i].value == "" && inputs[i].type == "text") {
                alert("Du hast noch nicht alles ausgefüllt.");
                break;
                {
                    alert("Danke für deine Bestellung.");
                    location.reload();
                    break;
                }
            }
        }
    }
})(iceice || (iceice = {}));
//# sourceMappingURL=main.js.map