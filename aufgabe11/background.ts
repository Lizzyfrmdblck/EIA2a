namespace Abschlussaufgabe {

    // Background
    export function drawBackground(): void {
        drawWater("#084B8A", "#084B8A", ctx.canvas.width, ctx.canvas.height, 600, 1400);

        drawSand("#C88937", 0, 500);

        drawAlga("#04B486", "transparent", 670, 510);
        drawAlga("#088A4B", "transparent", 530, 560);
        drawAlga("#04B486", "transparent", 350, 580);

        drawAlga("#04B486", "transparent", 1200, 600);
        drawAlga("#04B486", "transparent", 1500, 590);
        drawAlga("#04B486", "transparent", 100, 620);

        drawBow("black", "transparent", 1000, 500);





    }


    // Wasser
    export function drawWater(_c1: string, _c2: string, _x: number, _y: number, _r1: number, _r2: number): void {

        var gradient: CanvasGradient = ctx.createRadialGradient(_x - 700, _y - 50, _r1, _x - 700, _y - 100, _r2);
        gradient.addColorStop(0, _c1);
        gradient.addColorStop(1, _c2);
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, _x, _y);
        ctx.strokeRect(0, 0, _x, _y);
    }



    // Sand
    export function drawSand(_c1: string, _x: number, _y: number): void {

        ctx.beginPath();
        ctx.moveTo(_x, _y + 70);
        ctx.quadraticCurveTo(_x + 1000, _y - 100, _x + 1400, _y + 50);
        ctx.lineTo(_x + 1400, _y + 100);
        ctx.lineTo(_x, _y + 100);
        ctx.strokeStyle = _c1;
        ctx.stroke();
        ctx.fillStyle = _c1;
        ctx.fill();
        ctx.closePath();

    }

    //draw alge nach rechts geneigt
    export function drawAlga(_c1: string, _c2: string, _x: number, _y: number): void {

        ctx.beginPath();
        ctx.moveTo(_x, _y);
        ctx.quadraticCurveTo(_x - 40, _y - 185, _x + 20, _y - 230);
        ctx.quadraticCurveTo(_x + 60, _y - 185, _x + 20, _y);
        ctx.closePath();
        ctx.fillStyle = _c1;
        ctx.fill();
        ctx.strokeStyle = _c2;
        ctx.stroke();

    }

    export function drawBow(_c1: string, _c2: string, _x: number, _y: number): void {

        ctx.beginPath();
        ctx.moveTo(_x, _y);
        ctx.quadraticCurveTo(_x - 100, _y - 200, _x + 50, _y - 200);
        ctx.quadraticCurveTo(_x + 100, _y - 210, _x + 120, _y);
        ctx.quadraticCurveTo(_x + 20, _y - 280, _x, _y - 10);


        ctx.closePath();
        ctx.fillStyle = "#E3BE67";
        ctx.fill();
        ctx.strokeStyle = "white";
        ctx.stroke();

    }



}