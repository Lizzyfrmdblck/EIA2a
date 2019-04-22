/*
Aufgabe: 4 Ice Dealer
Name: Elyssia-Sofie Dürr
Matrikel: 254764
Datum: 21.04.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. Teile der Aufgabe zusammen mit Jacqueline und Selina erstellt*/

namespace Ice {

    window.addEventListener("load", init);

    // Arrays mit allen Auswahlmöglichkeiten_________________________________________________________

    let fruchtsorten: string[] = ["Mango", "Wassermelone", "Erdbeer", "Apfel", "Banane",
        "Zitrone", "Passionsfrucht", "Ananas", "Honigmelone"];

    let milchsorten: string[] = ["Choco", "Alpenkaramell", "Weihnachtszimt", "Walnut", "Schwarzwälder Kirsch", "Sorbet"];

    let toppings: string[] = ["Sahnetopping", "Chocosauce", "Erdbeersauce", "Kokosraspeln",
        "Smarties", "kleine Cookies", "kleine Oreos", "bunte Streusel"];


    //Preise deklarieren_____________________________________________________________________________
    let fruchtsortenPrice: number = 1;
    let toppingPrice: number = 0.50;

    let fruchtInputs: HTMLInputElement[] = [];
    let milchInputs: HTMLInputElement[] = [];
    let topInputs: HTMLInputElement[] = [];
    let fieldsetTopping: HTMLElement;
    let fieldsetEissorte: HTMLElement;
    let fieldsetMilchsorte: HTMLElement;


    let step: HTMLInputElement = document.createElement("input");


    // init__________________________________________________________________________________________
    function init(_event: Event): void {

        let fieldsets: NodeListOf<HTMLFieldSetElement> = document.getElementsByTagName("fieldset");
        let button: HTMLElement = document.getElementById("button");

        for (let i: number = 0; i < fieldsets.length; i++) {
            let fieldset: HTMLFieldSetElement = fieldsets[i];
            fieldset.addEventListener("change", handleChange);
            fieldset.addEventListener("change", showSum);
            button.addEventListener("click", clickButton);
        }

        fieldsetEissorte = document.getElementById("fruchteis");
        fieldsetMilchsorte = document.getElementById("milcheis");
        fieldsetTopping = document.getElementById("toppings");

        for (let i: number = 0; i < fruchtsorten.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");
            // HTML Elementen werden Attribute zugewiesen
            input.setAttribute("type", "number");
            input.setAttribute("value", "0");
            input.min = "0";
            //input.max = "5";
            label.innerText = fruchtsorten[i];
            label.appendChild(input);
            fruchtInputs.push(input);
            fieldsetEissorte.appendChild(label);

            input.className = "checkbox";

            console.log(fruchtsorten[i]);

        }

        for (let i: number = 0; i < milchsorten.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

            input.setAttribute("type", "number");
            input.setAttribute("value", "0");
            input.min = "0";
            label.innerText = milchsorten[i];
            label.appendChild(input);
            milchInputs.push(input);
            fieldsetMilchsorte.appendChild(label);

            input.className = "checkbox";

            console.log(milchsorten[i]);
        }

        for (let i: number = 0; i < toppings.length; i++) {

            let input: HTMLInputElement = document.createElement("input");
            let label: HTMLLabelElement = document.createElement("label");

            input.setAttribute("type", "checkbox");
            label.innerText = toppings[i];
            label.appendChild(input);
            topInputs.push(input);
            fieldsetTopping.appendChild(label);

            input.className = "toppings";

            console.log(toppings[i]);
        }
    }
    //Übersicht wenn Auswahl getätigt wird__________________________________________________________
    function handleChange(_event: Event): void {
        console.log(_event);
        let bestellung: HTMLElement = document.getElementById("bestellung");
        bestellung.innerText = "";

        for (let i: number = 0; i < fruchtInputs.length; i++) {
            if (parseInt(fruchtInputs[i].value) > 0) {
                bestellung.innerText += fruchtsorten[i] + " " + ": " + (parseInt(fruchtInputs[i].value) * 1) + "\n";
            }
        }
        for (let i: number = 0; i < milchInputs.length; i++) {
            if (parseInt(milchInputs[i].value) > 0) {
                bestellung.innerText += milchsorten[i] + " " + ": " + (parseInt(milchInputs[i].value) * 1) + "\n";
            }
        }
        for (let i: number = 0; i < topInputs.length; i++) {
            if (topInputs[i].checked) {
                bestellung.innerText += "+" + toppings[i] + "\n";
            }
        }
    }
    // Warenkorb Summe_______________________________________________________________________________
    function showSum(_event: Event): void {
        let summe: number = 0;

        for (let i: number = 0; i < fruchtInputs.length; i++) {
            summe += parseInt(fruchtInputs[i].value);
        }
        for (let i: number = 0; i < milchInputs.length; i++) {
            summe += parseInt(milchInputs[i].value);
        }
        for (let i: number = 0; i < topInputs.length; i++) {
            if (topInputs[i].checked)
                summe += 0.5;
        }
        console.log(summe);

        document.getElementById("sum").innerText = summe.toString() + " €";

    }

    //Bestellung prüfen_______________________________________________________________________________
    function clickButton(_event: Event): void {

        let proof: HTMLInputElement[] = [];
        for (let i: number = 0; i < 5; i++) {
            let inputs: HTMLInputElement = <HTMLInputElement>document.getElementsByClassName("proof")[i];
            proof.push(inputs);
            console.log(inputs);
        }

        for (let i: number = 0; i < proof.length; i++) {
            console.log(proof.length);
            if (proof[i].validity.valid == false) {
                alert("Du hast noch nicht alles ausgefuellt.");
                console.log("Angaben fehlen");      
            }

            else (proof[i].validity.valid == true) {
                alert("Danke für deine Bestellung.");
                location.reload();
            }
        }
    }

}
