namespace Birdsnest {
    export class Eagle extends Bird {

        foodball: FoodBall;
        /*snowball: SnowBall;*/

        constructor(x: number, y: number, lastball: FoodBall) {
            super ();
            this.size = this.radius * 2;
            this.strokeColor = "black";
            this.radius = 20;      
            this.y = -100;
            this.dx = 1; 
            this.dy = 15;
            this.draw();
            this.movedown();
            this.moveright();
            /* this.snowball = snowball;
            this.foodball = foodball;*/
            this.foodball = lastball;
            this.x = this.foodball.x;
        }
        
        
    flyEagle(): void {

        console.log("flyeagle");

        if  (
            this.foodball.y > 450
            && this.y + 30 < this.foodball.y) { // wenn der Foodball auf Höhe des Grases ist 

            this.x = this.foodball.x;
            this.movedown();  //soll der Adler nach unten fliegen / er bekommt dabei den y Paramter des Foodballs/Maus
            }    
        if (this.foodball.foodradius < 10) {
            this.moveright();
        }
        this.draw();



    }

    
    //Richtungsfunktionen 
    movedown(): void {     
        this.y += this.dy;
        }


    moveright(): void {
        this.x += this.dx;
        }

    
    draw(): void {
        ctx.strokeStyle = "black";
        ctx.lineWidth = 0.6;
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        ctx.arc(this.x, this.y, 5., 4, 1 * Math.PI);
        ctx.closePath();
        ctx.fill();
        ctx.stroke();
        }
    
    }


}

