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
                { name: "Waffel", price: 0 },
                { name: "Becher", price: 0 }
            ],

            "Fruchteis": [
                { name: "Mango", price: 1 },
                { name: "Wassermelone", price: 1 },
                { name: "Erdbeer", price: 5 },
                { name: "Apfel", price: 1 },
                { name: "Banane", price: 1 },
                { name: "Zitrone", price: 1 },
                { name: "Passionsfrucht", price: 1 },
                { name: "Ananas", price: 1 },
                { name: "Honigmelone", price: 1 }


            ],

            "Milcheis": [
                { name: "Choco", price: 4 },
                { name: "Alpenkaramell", price: 6 },
                { name: "Weihnachtszimt", price: 8 },
                { name: "Walnut", price: 8 },
                { name: "Schwarzwälder Kirsch", price: 8 },
                { name: "Sorbet", price: 8 }

            ],

            "Extras": [
                { name: "Sahnetopping", price: 0 },
                { name: "Chocosauce", price: 0 },
                { name: "Erdbeersauce", price: 0 },
                { name: "Kokosraspeln", price: 0 },
                { name: "Smarties", price: 0 },
                { name: "kleine Cookies", price: 0 },
                { name: "kleine Oreos", price: 0 },
                { name: "bunte Streusel", price: 0 }

            ],

            "Lieferung": [
                { name: "Standard", price: 0.5 },
                { name: "Express", price: 4 },
                { name: "unter Wasser", price: 9 }
            ]

        };
}