namespace Birdsnest {
    export class Flake {
        fillColor: string;
        strokeColor: string;
        rotation: number;
        x: number; 
        y: number;
        dy: number;
        angle: number;




        constructor() {
            this.fillColor = "rgba(255,255,255,0.7)";
            this.strokeColor = "#FFFFFF";
            this.x = (Math.random() * 800);
            this.y = (Math.random() * 600);
            this.dy = ((-2) + Math.random() * (-5));
        }



        drawFlake(): void {
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.fillStyle = this.fillColor;
            ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
            ctx.closePath();
            //ctx.stroke();
            ctx.fill();
            ctx.stroke();
        }

        moveFlake(): void {
            this.y -= this.dy;

            if (this.y > ctx.canvas.height) {
                this.y = 0;


            }
            this.drawFlake();
        }

    }
}
