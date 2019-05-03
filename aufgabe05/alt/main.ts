namespace iceice {

    window.addEventListener("load", init);

    let inputs: NodeListOf<HTMLInputElement> = document.getElementsByTagName("input");

    function init(): void {

        createFormular(products);

        let checkButton: HTMLButtonElement = <HTMLButtonElement>document.getElementById("check");
        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");

        checkButton.addEventListener("click", checkInput);

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleCart);
        }
    }
    // Formelemente______________________________________________________________________________
    function createFormular(_products: ProductList): void {

        //für jeden key in _products (Behälter, Fruchteis, Milcheis...)
        for (let key in _products) {

            let fieldsetId: HTMLFieldSetElement = document.createElement("fieldset");
            fieldsetId.setAttribute("id", key);

            document.getElementById("allProducts").appendChild(fieldsetId);

            let legend: HTMLLegendElement = document.createElement("legend");
            legend.innerText = key;
            fieldsetId.appendChild(legend);

            let productList: Product[] = _products[key];

            // dürchläuft innere Arrays
            // für key == Fruchteis >> Mango, Erdbeere, Banane...
        for (let i: number = 0; i < productList.length; i++) {

                let input: HTMLInputElement = document.createElement("input");
                let label: HTMLLabelElement = document.createElement("label");


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
    function handleCart(_event: Event): void {

        let cart: HTMLFieldSetElement = <HTMLFieldSetElement>document.getElementById("cart");

        cart.innerHTML = "";

        let cartArray: number[] = [];

        for (let i: number = 0; i < inputs.length; i++) {

            let cartElement: HTMLParagraphElement = document.createElement("p");
            let price: string = inputs[i].getAttribute("price");
            let name: string = inputs[i].getAttribute("name");
            let id: string = inputs[i].getAttribute("id");
            let value: string = inputs[i].getAttribute("value");
            let amount: number = Number(inputs[i].value);
            let finalPrice: number = Number(price) * amount;

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

        let priceDiv: HTMLDivElement = document.createElement("div");
        cart.appendChild(document.createElement("hr"));
        cart.appendChild(priceDiv);
        let endPrice: number = 0;

        for (let i: number = 0; i < cartArray.length; i++) {

            endPrice += cartArray[i];

        }

        priceDiv.innerHTML = "Gesamtpreis: " + String(endPrice) + "€";
    }

    // Überprüfen Button________________________________________________________________________________
    function checkInput(): void {
        for (let i: number = 0; i < inputs.length; i++) {
            if (inputs[i].value == "" && inputs[i].type == "text") {
                alert("Du hast noch nicht alles ausgefüllt.");
                break
            
            else {
                alert("Danke für deine Bestellung.");
                location.reload();
                break
    
            }
        }

}