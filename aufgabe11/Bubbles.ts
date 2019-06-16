namespace seaworld {
    export class Bubbles {
        fillColor: string;
        strokeColor: string;
        rotation: number;
        downhill: boolean;
        x: number;
        y: number;

      push(bubbles: Bubbles) {
        throw new Error("Method not implemented."); //hmmm...
      }
        
        constructor() {
            this.fillColor = "#FFFFFF";
            this.strokeColor = "#FFFFFF";
            this.x = (Math.random() * 414);
            this.y = (Math.random() * 700);
            
        }



        drawBubble(): void {
            ctx.strokeStyle = "#FFFFFF";
            ctx.lineWidth = 6;
            ctx.beginPath();
            ctx.fillStyle = this.fillColor;
            ctx.arc(this.x, this.y, 2, 0, 2 * Math.PI);
            ctx.closePath();
            //ctx.stroke();
            ctx.fill();
            ctx.stroke();
        }

        moveBubble(): void {
            this.y += 2;
            
            if (this.y > ctx.canvas.height) {
                this.x = Math.random() * ctx.canvas.width;
                this.y = -1;

            }
        }

    }
}
