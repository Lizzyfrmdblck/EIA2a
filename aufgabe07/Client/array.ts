/*  
Aufgabe 7: Ice Dealer ReReLoaded
Name: Elyssia-Sofie Dürr
Matrikel: 254764
Datum: 12.05.2019
    
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe. 
Er wurde nicht kopiert und auch nicht diktiert. 
*/

namespace BecomeKing {

    export interface Product {
        name: string;
        price: number;
        typ: string;
    }

    export interface ProductList {
        [key: string]: Product[];
    }

    export let products: ProductList
        = {

        "Behaelter": [
            { typ: "behaelter", name: "Waffel", price: 0.5 },
            { typ: "behaelter", name: "Becher", price: 0.5 }
        ],

        "Fruchteis": [
            { typ: "frucht", name: "Apfel", price: 1.5 },
            { typ: "frucht", name: "Mango", price: 1.5 },
            { typ: "frucht", name: "Banane", price: 1.5 },
            { typ: "frucht", name: "Ananas", price: 1.5 },
            { typ: "frucht", name: "Zitrone", price: 1.5 },
            { typ: "frucht", name: "Erdbeere", price: 1.5 },
            { typ: "frucht", name: "Honigmelone", price: 1.5 },
            { typ: "frucht", name: "Wassermelone", price: 1.5 },
            { typ: "frucht", name: "Passionsfrucht", price: 1.5 }
        ],

        "Milcheis": [
            { typ: "milch", name: "Choco", price: 2 },
            { typ: "milch", name: "Sorbet", price: 2 },
            { typ: "milch", name: "Walnut", price: 2 },
            { typ: "milch", name: "Alpenkaramell", price: 2.5 },
            { typ: "milch", name: "Weihnachtszimt", price: 2.5 },
            { typ: "milch", name: "Schwarzwaelder Kirsch", price: 3 }
        ],

        "Extras": [
            { typ: "top", name: "Sahne", price: 0.5 },
            { typ: "top", name: "Smarties", price: 0.5 },
            { typ: "top", name: "Chocosauce", price: 0.7 },
            { typ: "top", name: "Erdbeersauce", price: 0.7 },
            { typ: "top", name: "Kokosraspeln", price: 0.6 },
            { typ: "top", name: "kleine Oreos", price: 0.6 },
            { typ: "top", name: "kleine Cookies", price: 0.6 },
            { typ: "top", name: "bunte Streusel", price: 0.6 }

        ],

        "Lieferung": [
            { typ: "ship", name: "Express", price: 5 },
            { typ: "ship", name: "Standard", price: 2.5 },
            { typ: "ship", name: "unter Wasser", price: 7 }
        ]

    };
}