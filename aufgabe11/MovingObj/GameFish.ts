namespace Abschlussaufgabe {
    export class GameFish {
        fillColor: string;
        strokeColor: string;
        size: number;
        rotation: number;
        rightside: boolean;
        playerradius: number = 40;
        x: number;
        y: number;


        constructor() {
            this.fillColor = "#DEB887";
            this.strokeColor = "#ffff00";
            this.rotation = 15;
            this.rightside = true;
            this.x = 1200;
            this.y = 300;
            // this.draw();
        }

        update(): void {
            //this.checkKey(KeyboardEvent);
            this.draw();
        }


        //Funktion Fisch wird gezeichnet
        draw(): void {
            let fishHead: Path2D = new Path2D();
            fishHead.ellipse(this.x, this.y, 40, this.playerradius, 0, 0, 6 * Math.PI);
            ctx.fillStyle = "#8904B1";
            ctx.fill(fishHead);


            let fishEye: Path2D = new Path2D();
            fishEye.arc(this.x - 15, this.y - 2, 8, 0, 2 * Math.PI);
            ctx.fillStyle = "white";
            ctx.fill(fishEye);


            let fishEyeIris: Path2D = new Path2D();
            fishEyeIris.arc(this.x + - 15, this.y - 2, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "black";
            ctx.fill(fishEyeIris);

            let fishTail: Path2D = new Path2D();
            fishTail.moveTo(this.x + 35, this.y + 2);
            fishTail.lineTo(this.x + 65, this.y + 30);
            fishTail.lineTo(this.x + 65, this.y - 20);
            fishTail.closePath();

            ctx.fillStyle = "#8904B1";
            ctx.fill(fishTail);
            //console.log("Größe GameFish" + this.size);
        }




        //Fisch wird größer sobald er anderen Fisch trifft
        touchFish(_ranFishes: RanFishes): void {
            var dx: number = this.x - _ranFishes.x;
            var dy: number = this.y - _ranFishes.y;


            gameOver();
        }



        //Game Over






    }




}
