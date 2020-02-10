namespace Birdsnest {
    export class SnowBall  {

        factor: number;
        x: number;
        y: number;
        dx: number;
        dy: number;
        fillColor: string;
        strokeColor: string;
        size: number; 
        radius: number;
        scoreNumber: number;


    constructor(x: number, y: number) {
            this.x = x;
            this.y = y;
            this.dx = 10;
            this.dy = 10;
            this.fillColor = "white";
            this.strokeColor = "white";
            this.size = this.radius * 2; 
            this.radius = 50;
            this.factor = 0.9;
            this.scoreNumber = 0;
    
    }

        scale(): void {
            this.radius *= this.factor;
            this.radius *= this.factor;
        } 

        
       draw(): void {
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.fillStyle = this.fillColor;
            ctx.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
            ctx.closePath();
            ctx.fill();
            ctx.stroke();
            //console.log("Größe Snowball" + (this.radius * 2) );
        }

        
        move(): void { 

            this.y += this.dy;

            if (this.y > ctx.canvas.height) {
                this.dy = 0;
            }
        }

        
        eliminateBird(ranbirds: Bird[]): number {     
            for (let i: number = 0; i < ranbirds.length; i++) {                         
                if (   ranbirds[i].x < this.x + 20 
                    && ranbirds[i].x > this.x - 20 
                    && ranbirds[i].y > this.y - 20 
                    && ranbirds[i].y < this.y + 20 
                    && ranbirds[i].radius < this.radius) {

                        //this.scoreNumber = ranbirds[i].dx;   

                console.log("Eliminatebirds");
                //snowballs.splice(i, 1);

                ranbirds.splice(i, 1);
                } else {
                    this.scoreNumber = 0;
                }
            }
            return this.scoreNumber;
        }

        eliminateEagle(eagle: Eagle): number {     
                                     
                if (   eagle.x < this.x + 20 
                    && eagle.x > this.x - 20  
                    && eagle.y > this.y - 20
                    && eagle.y < this.y + 20 
                    && eagle.radius < this.radius) {
    
                               
                console.log("Eliminateeagles");
                this.scoreNumber = 100;
                eagle = null;

                } else {
                    this.scoreNumber = 0;
                }
                return this.scoreNumber;

            
        }

        
    }

}