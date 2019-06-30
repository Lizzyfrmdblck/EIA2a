namespace seaworld {
    window.addEventListener("load", init);
    export let ctx: CanvasRenderingContext2D;
    export let fishes: Fishes[] = [];
    export let fishes2: Fishes2[] = [];
    export let bubbles: Bubbles[] = [];
    export let getImage: ImageData;
    let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];

    function init(_event: Event): void {
        console.log("Canvas started");


        let canvas: HTMLCanvasElement = document.getElementsByTagName("canvas")[0];
        canvas.width = 414;
        canvas.height = 748;
        ctx = canvas.getContext("2d");
        drawBackground2();
        createBubbles();
        //Hintergrund speichern
        getImage = ctx.getImageData(0, 0, 414, 748);
        createFishes();
        setTimeout(animate, 100);

    }

    //Funktion kreiert 5 Fische
    function createFishes(): void {
        for (let i: number = 0; i < 5; i++) {
            let fish: Fishes = new Fishes();
            fishes.push(fish);
            console.log(fishes);
        }
    }

     //Funktion kreiert 5 Fische
    function createFishes2(): void {
        for (let i: number = 0; i < 5; i++) {
            let fish: Fishes2 = new Fishes2();
            fishes2.push(fish);
            console.log(fishes2);
        }
    }

    //Funktion kreiert 20 Luftblasen, pusht Bubbles in Array 
    function createBubbles(): void {
        for (let i: number = 0; i < 20; i++) {
            let bubble: Bubbles = new Bubbles();
            bubbles.push(bubble);

        }
        console.log(bubbles);
    }



    function animate(): void {

        setTimeout(animate, 100);
        ctx.putImageData(getImage, 0, 0);
        //        console.log(fishes.length);
        for (let i: number = 0; i < fishes.length; i++) {
            fishes[i].move();
            fishes[i].drawFish();
        }
        for (let i: number = 0; i < bubbles.length; i++) {
            bubbles[i].moveBubble();
            bubbles[i].drawBubble();

        }
    }




    //Wasser und Sand
    function drawBackground2(): void {
        let gradient: CanvasGradient;
        ctx.beginPath();
        ctx.moveTo(1, 1);
        ctx.lineTo(414, 1);
        ctx.lineTo(414, 734);
        ctx.lineTo(1, 734);
        ctx.lineTo(1, 1);
        ctx.closePath();
        gradient = ctx.createLinearGradient(207, 1, 207, 734);
        gradient.addColorStop(0.00, "rgb(42, 170, 225)");
        gradient.addColorStop(1.00, "rgb(16, 113, 185)");
        ctx.fillStyle = gradient;
        ctx.fill();
        ctx.lineWidth = 1.4;
        ctx.strokeStyle = "rgb(1, 1, 1)";
        ctx.stroke();

        ctx.beginPath();
        ctx.moveTo(2.2, 548.0);
        ctx.bezierCurveTo(2, 548, 219, 489, 413, 548);
        ctx.lineTo(413, 733);
        ctx.lineTo(2, 733);
        ctx.fillStyle = "rgb(229, 202, 144)";
        ctx.fill();
        ctx.restore();

        for (let i: number = 0; i < 150; i++) {

            let randX: number = (Math.random() * (400) + 0);
            let randY: number = (Math.random() * (120) + 500);
            //zeichnet Algen im vorgegebenen Raum
            drawAlga(randX, randY, 10, 20, "#676765", "#676765");
        }
    }




    //Funktion Alge
    function drawAlga(_x: number, _y: number, _w: number, _h: number, _fill1: string, _fill2: string): void {

        ctx.save();
        ctx.beginPath();
        ctx.moveTo(_x + 2.5, _y + 1.0);
        ctx.lineTo(_x + 2.3, _y + 0.0);
        ctx.lineTo(_x + 2.0, _y + 1.0);
        ctx.lineTo(_x + 0.0, _y + 90.0);
        ctx.lineTo(_x + 3.5, _y + 90.0);
        ctx.lineTo(_x + 2.5, _y + 1.0);
        ctx.closePath();
        ctx.fillStyle = "rgb(59, 150, 10)";
        ctx.strokeStyle = "rgb(66, 244, 113)";
        ctx.stroke();
        ctx.fill("evenodd");
        ctx.restore();
    }

}

