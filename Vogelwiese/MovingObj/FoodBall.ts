namespace Birdsnest {
    export class FoodBall {
        //Endlich kompiliert!mtf


        fillColor: string;
        strokeColor: string;
        size: number; 
        foodradius: number;
        x: number;
        y: number;
        dy: number;
        factor: number;

        

        constructor(x: number, y: number) {
            //super (x, y);
            this.size = this.foodradius * 2;
            this.fillColor = "#DF7401";
            this.strokeColor = "#DF7401";
            this.foodradius = 10 * Math.random() + 3;
            this.x = x;
            this.y = y;
            this.dy = 5 * Math.random() + 4;
            this.factor = 0.99;
        }

        
        scale(): void {
            this.foodradius *= this.factor;
        } 


        drawBall(): void {

            ctx.strokeStyle = "#white";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.fillStyle = this.fillColor;
            ctx.arc(this.x, this.y, this.foodradius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            //console.log ("FUTTER");
        }


        move(): void {
            
            this.y += this.dy;
        }



    }

}
    