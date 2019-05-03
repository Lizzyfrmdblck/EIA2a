namespace iceice {

    export interface Product {
        name: string;
        price: number;
    }

    export interface ProductList {
        [key: string]: Product[];
    }

    export let products: ProductList
        = {

            "Behälter": [
                { name: "Waffel", price: 0.5 },
                { name: "Becher", price: 0.5 }
            ],

            "Fruchteis": [
                { name: "Apfel", price: 1.5 },
                { name: "Mango", price: 1.5 },
                { name: "Banane", price: 1.5 },
                { name: "Ananas", price: 1.5 },
                { name: "Zitrone", price: 1.5 },
                { name: "Erdbeere", price: 1.5 },
                { name: "Honigmelone", price: 1.5 },
                { name: "Wassermelone", price: 1.5 },
                { name: "Passionsfrucht", price: 1.5 }
            ],

            "Milcheis": [
                { name: "Choco", price: 2 },
                { name: "Sorbet", price: 2 },
                { name: "Walnut", price: 2 },
                { name: "Alpenkaramell", price: 2.5 },
                { name: "Weihnachtszimt", price: 2.5 },
                { name: "Schwarzwälder Kirsch", price: 3 }
            ],

            "Extras": [
                { name: "Sahne", price: 0.5 },
                { name: "Smarties", price: 0.5 },
                { name: "Chocosauce", price: 0.7 },
                { name: "Erdbeersauce", price: 0.7 },
                { name: "Kokosraspeln", price: 0.6 },
                { name: "kleine Oreos", price: 0.6 },
                { name: "kleine Cookies", price: 0.6 },
                { name: "bunte Streusel", price: 0.6 }

            ],

            "Lieferung": [
                { name: "Express", price: 5 },
                { name: "Standard", price: 2.5 },
                { name: "unter Wasser", price: 7 }
            ]

        };
}