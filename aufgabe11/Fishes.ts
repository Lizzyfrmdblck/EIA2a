namespace seaworld {
    export class Fishes {
        fillColor: string;
        strokeColor: string;
        rotation: number;
        rightside: boolean;
        x: number;
        y: number;
        constructor() {
            this.fillColor = "#DEB887";
            this.strokeColor = "#ffff00";
            this.rotation = 15;
            this.rightside = true;
            this.x = (Math.random() * (100) + 0);
            this.y = (Math.random() * (100) + 275);
          

            this.drawFishes();
        }


        //Funktion, dass die Fische nach rechts oder links schwimmen
        drawFishes(): void {
            if (this.rightside == true) {
                this.drawFishRight();
            }
            if (this.rightside == false) {
                this.drawFishLeft();
            }



        }
        drawFishRight(): void {
            function drawFish2(_x: number, _y: number) {
                let fishHead = new Path2D();
                fishHead.ellipse(_x, _y, 40, 40, 1.5, 0, 2 * Math.PI);
                ctx.fillStyle = "rgb(211, 2, 124)";
                ctx.fill(fishHead);
            
                let fishEye: Path2D = new Path2D();
                fishEye.arc(_x + 20, _y - 2, 8, 0, 2 * Math.PI);
                ctx.fillStyle = "white";
                ctx.fill(fishEye);
            
            
                let fishEyeIris: Path2D = new Path2D();
                fishEyeIris.arc(_x + 20, _y - 2, 5, 0, 2 * Math.PI);
                ctx.fillStyle = "black";
                ctx.fill(fishEyeIris);
            
                let fishTail = new Path2D();
                fishTail.moveTo(_x - 32, _y + 2);
                fishTail.lineTo(_x - 59, _y + 30);
                fishTail.lineTo(_x - 60, _y - 20);
                fishTail.closePath();
            
                ctx.fillStyle = "rgb(211, 2, 124)";
                ctx.fill(fishTail);
            
              }

        }


        //Fisch nach links schwimmend
        drawFishLeft(): void {

            function drawFish2(_x: number, _y: number) {
                let fishHead = new Path2D();
                fishHead.ellipse(_x, _y, 40, 40, 1.5, 0, 2 * Math.PI);
                ctx.fillStyle = "rgb(211, 2, 124)";
                ctx.fill(fishHead);
            
                let fishEye: Path2D = new Path2D();
                fishEye.arc(_x + 20, _y - 2, 8, 0, 2 * Math.PI);
                ctx.fillStyle = "white";
                ctx.fill(fishEye);
            
            
                let fishEyeIris: Path2D = new Path2D();
                fishEyeIris.arc(_x + 20, _y - 2, 5, 0, 2 * Math.PI);
                ctx.fillStyle = "black";
                ctx.fill(fishEyeIris);
            
                let fishTail = new Path2D();
                fishTail.moveTo(_x - 32, _y + 2);
                fishTail.lineTo(_x - 59, _y + 30);
                fishTail.lineTo(_x - 60, _y - 20);
                fishTail.closePath();
            
                ctx.fillStyle = "rgb(211, 2, 124)";
                ctx.fill(fishTail);
            
              }

        }

        //Funktion, damit Fische den Bildschirm nicht verlassen
        move(): void {
            if (this.y >= 450) {
                this.rightside = false;
            }
            if (this.y <= 300) {
                this.rightside = true;
            }
            if (this.rightside == true) {
                this.x += 4;
                this.y += 2;
            }
            if (this.rightside == false) {
                this.x -= 4;
                this.y -= 2;
            }
//            this.drawFishes();
        }

    }
}
