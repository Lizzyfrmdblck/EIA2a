namespace Birdsnest {

    /* interface Vector {
        x: number;
        y: number;

    }*/

    // Background
    export function drawBackground(): void {
        
       

        drawSky("#5882FA", 600, 800); //Wo isch meine Sonne?
       
        drawSun(400, 450);

        drawMountains2("#white", 0, 0); 

        drawMountains1("#CEF6F5", 0, 0); 

        drawGround("#0E6E40", 600, 800); 

        drawHouse(150, 450);
        
        drawTree();


     
       




    }

   

    // Sky
    export function drawSky(_c1: string, _x: number, _y: number): void {

        
        ctx.beginPath();
        ctx.rect(0, 0, 800, 600);
        ctx.strokeStyle = _c1;
        ctx.stroke();
        ctx.fillStyle = _c1;
        ctx.fill();

    }
// Boden
    export function drawGround(_c1: string, _x: number, _y: number): void {

        
        ctx.beginPath();
        ctx.rect(0, 400, 800, 200);
        ctx.strokeStyle = _c1;
        ctx.stroke();
        ctx.fillStyle = _c1;
        ctx.fill();

    }

    //vogelhaus 
    export function drawHouse(x: number, y: number): void {
 
        let r1: number = 25;
        let colorHouse: string = "#4F1124";
        let colorPlatform: string = "#5D1236";
        let colorHole: string = "black";
        let colorInHouse: string = "#AD1746";

        ctx.save();
        ctx.translate(x, y);
        ctx.fillStyle = colorHouse;
        ctx.fillRect(-25, 0, 50, 175);
        ctx.fillRect(0, 23, 175, 45);
        ctx.fillRect(0, 23, -175, 45);




        ctx.beginPath();
        ctx.moveTo(-175, 25);
        ctx.lineTo(-125, -25);
        ctx.lineTo(125, -25);
        ctx.lineTo(175, 25);
        ctx.closePath();
        ctx.fillStyle = colorPlatform;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(175, 25);
        ctx.lineTo(600, 600);
        ctx.lineTo(600, 600);
        ctx.closePath();
        ctx.fillStyle = colorHouse;
        ctx.fill();


        ctx.beginPath();
        ctx.moveTo(-100, 0);
        ctx.lineTo(-120, -150);
        ctx.lineTo(0, -225);
        ctx.lineTo(120, -150);
        ctx.lineTo(100, 0);
        ctx.closePath();
        ctx.fillStyle = colorInHouse;
        ctx.fill();


        ctx.beginPath();
        ctx.arc(0, -75, r1, 0, 2 * Math.PI);
        ctx.closePath();
        ctx.stroke();
        ctx.fillStyle = colorHole;
        ctx.fill();


        ctx.restore();

    }
    
        

     //Sun
    export function drawSun(_x: number, _y: number): void {
   
        ctx.beginPath();
        ctx.arc(400, 260, 100, 0, 2 * Math.PI);
        
        ctx.fillStyle = "#F4FA58";
        ctx.fill();
        ctx.strokeStyle = "#F7FE2E";
        ctx.stroke();
        ctx.closePath();

     }



    // BERGE
    export function drawMountains1(_c1: string, _x: number, _y: number): void {

        ctx.beginPath();
        ctx.moveTo(_x, _y + 300);
        ctx.lineTo(_x + 100, _y + 320); //1
        ctx.lineTo(_x + 150, _y + 300); //2 
        ctx.lineTo(_x + 300, _y + 250); //3
        ctx.lineTo(_x + 360, _y + 300); //4
        ctx.lineTo(_x + 400, _y + 250); //5
        ctx.lineTo(_x + 450, _y + 300); //6
        ctx.lineTo(_x + 520, _y + 200); //7
        ctx.lineTo(_x + 600, _y + 300); //8
        ctx.lineTo(_x + 700, _y + 250); //9
        ctx.lineTo(_x + 750, _y + 300); //10
        ctx.lineTo(_x + 800, _y + 300); //10
        ctx.lineTo(_x + 800, _y + 600); //11
        ctx.lineTo(_x + 0, _y + 600);
        ctx.lineTo(_x, _y + 100);
        ctx.strokeStyle = _c1;
        ctx.stroke();
        ctx.fillStyle = _c1;
        ctx.fill();
        ctx.closePath();

    }

    export function drawMountains2(_c1: string, _x: number, _y: number): void {

        ctx.beginPath();
        ctx.moveTo(_x, _y + 200);
        ctx.lineTo(_x + 50, _y + 250);
        ctx.lineTo(_x + 200, _y + 300);
        ctx.lineTo(_x + 250, _y + 250);
        ctx.lineTo(_x + 300, _y + 300);
        ctx.lineTo(_x + 350, _y + 250);
        ctx.lineTo(_x + 400, _y + 300);
        ctx.lineTo(_x + 450, _y + 250);
        ctx.lineTo(_x + 500, _y + 300);
        ctx.lineTo(_x + 550, _y + 250);
        ctx.lineTo(_x + 600, _y + 300);
        ctx.lineTo(_x + 650, _y + 250);
        ctx.lineTo(_x + 700, _y + 300);
        ctx.lineTo(_x + 750, _y + 250);
        ctx.lineTo(_x + 800, _y + 300);
        ctx.lineTo(_x + 800, _y + 600);
        ctx.lineTo(_x + 0, _y + 600);
        ctx.lineTo(_x, _y + 100);
        ctx.strokeStyle = "white";
        ctx.stroke();
        ctx.fillStyle = "white";
        ctx.fill();
        ctx.closePath();

    }

   
    //Trees
    export function drawTree(): void {

        console.log("Tree");
        let transform: DOMMatrix = ctx.getTransform();

        let blaetterZahl: number = 20;
        let maxRadius: number = 30;
        let blaetter: Path2D = new Path2D();
        blaetter.arc(680, 500, maxRadius, 0, 2 * Math.PI);

        // Baumstamm
        ctx.fillStyle = "#e37830";
        ctx.fillRect(660, 350, 50, 80);
        ctx.save();
        ctx.translate(0, -120);

        do {
            let y: number = Math.random() * 190; //y Bereich der Blaetter
            let x: number = (Math.random() - 0.5) * 2 * maxRadius; // x Bereich der Blaetter

            ctx.save();
            ctx.translate(x, -y);

            ctx.fillStyle = "#0da75d";
            ctx.fill(blaetter);
            ctx.restore();
        } while (--blaetterZahl > 0);

        ctx.restore();
        ctx.setTransform(transform);

    }







}