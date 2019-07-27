namespace Abschlussaufgabe {
    export class Bubbles {
        fillColor: string;
        strokeColor: string;
        rotation: number;
        x: number;
        y: number;
        dy: number;
        r: number;
        angle: number;




        constructor() {
            this.fillColor = "rgba(255,255,255,0.7)";
            this.strokeColor = "#FFFFFF";
            this.x = (Math.random() * 1400);
            this.y = (Math.random() * 650);
            this.dy = ((-2) + Math.random() * (-5));
        }



        drawBubble(): void {
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

        moveBubble(): void {
            this.y += this.dy;

            if (this.y < -10) {
                this.y = ctx.canvas.height;


            }
        }

    }
}
