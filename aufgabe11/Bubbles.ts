namespace seaworld {
    export class Bubbles {
        fillColor: string;
        strokeColor: string;
        rotation: number;
        x: number;
        y: number;
        dy: number;




        constructor() {
            this.fillColor = "rgba(255,255,255,0.7)";
            this.strokeColor = "#FFFFFF";
            this.x = (Math.random() * 414);
            this.y = (Math.random() * 700);
            this.dy = -5;
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

            if (this.y < 0) {
                this.y = ctx.canvas.height;


            }
        }

    }
}
