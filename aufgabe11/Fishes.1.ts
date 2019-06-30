namespace seaworld {
    export class Fishes {
        fillColor: string;
        strokeColor: string;
        rotation: number;
        rightside: boolean;
        x: number;
        y: number;
        dx: number;
        
        constructor() {
            this.fillColor = "#DEB887";
            this.strokeColor = "#ffff00";
            this.rotation = 15;
            this.rightside = true;
            this.x = (Math.random() * 370 + 10);
            this.y = (Math.random() * 700 + 10);
            this.dx = (Math.random() * 6 + 1);
            this.drawFish();
        }


        //Funktion, dass die Fische nach rechts oder links schwimmen
        drawFish(): void {
            let fishHead: Path2D = new Path2D();
            fishHead.ellipse(this.x, this.y, 40, 40, 1.5, 0, 2 * Math.PI);
            ctx.fillStyle = "rgb(211, 2, 124)";
            ctx.fill(fishHead);

            let fishEye: Path2D = new Path2D();
            fishEye.arc(this.x + 20, this.y - 2, 8, 0, 2 * Math.PI);
            ctx.fillStyle = "white";
            ctx.fill(fishEye);


            let fishEyeIris: Path2D = new Path2D();
            fishEyeIris.arc(this.x + 20, this.y - 2, 5, 0, 2 * Math.PI);
            ctx.fillStyle = "black";
            ctx.fill(fishEyeIris);

            let fishTail: Path2D = new Path2D();
            fishTail.moveTo(this.x - 32, this.y + 2);
            fishTail.lineTo(this.x - 59, this.y + 30);
            fishTail.lineTo(this.x - 60, this.y - 20);
            fishTail.closePath();

            ctx.fillStyle = "rgb(211, 2, 124)";
            ctx.fill(fishTail);




        }

        move(): void {
            this.x += this.dx;
            if (this.x > ctx.canvas.width) {
                this.x = -40;
                this.y = Math.random() * 670 + 10;
            }
            
            
            this.drawFish();


        }


    }




}
