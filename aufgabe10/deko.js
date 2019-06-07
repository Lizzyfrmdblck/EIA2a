var A9;
(function (A9) {
    window.addEventListener("load", init);
    let ctx;
    // init
    function init(_event) {
        console.log("Canvas started");
        let canvas = document.getElementsByTagName("canvas")[0];
        ctx = canvas.getContext("2d");
        console.log(ctx);
        //FUNKTIONSAUFRUFE_________________________________________________________________
        drawStar(200, 500);
        //Funktionen
        //Seestern
        function drawStar() {
            ctx.save();
            // layer1/Group/Compound Path
            ctx.save();
            ctx.beginPath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(79.2, 59.7);
            ctx.bezierCurveTo(76.0, 59.8, 72.9, 59.8, 69.7, 60.3);
            ctx.bezierCurveTo(68.8, 60.5, 67.8, 60.7, 66.9, 61.1);
            ctx.bezierCurveTo(64.6, 61.9, 63.4, 63.7, 62.5, 65.8);
            ctx.bezierCurveTo(61.5, 68.3, 60.9, 70.9, 60.4, 73.6);
            ctx.bezierCurveTo(59.7, 77.0, 59.1, 80.5, 58.3, 84.0);
            ctx.bezierCurveTo(57.7, 86.3, 57.1, 88.6, 55.7, 90.6);
            ctx.bezierCurveTo(55.1, 91.5, 54.3, 92.3, 53.2, 92.7);
            ctx.bezierCurveTo(51.6, 93.2, 50.3, 92.7, 49.1, 91.7);
            ctx.bezierCurveTo(48.0, 90.7, 47.2, 89.5, 46.5, 88.2);
            ctx.bezierCurveTo(45.2, 85.6, 44.2, 82.8, 43.3, 80.0);
            ctx.bezierCurveTo(42.1, 76.4, 41.0, 72.9, 39.4, 69.5);
            ctx.bezierCurveTo(39.0, 68.4, 38.4, 67.5, 37.8, 66.5);
            ctx.bezierCurveTo(36.6, 64.5, 34.6, 63.6, 32.4, 63.3);
            ctx.bezierCurveTo(30.0, 62.9, 27.5, 63.1, 25.1, 63.3);
            ctx.bezierCurveTo(21.2, 63.8, 17.3, 64.3, 13.3, 64.8);
            ctx.bezierCurveTo(10.7, 65.0, 8.1, 65.1, 5.6, 64.5);
            ctx.bezierCurveTo(2.7, 63.7, 1.5, 61.2, 2.8, 58.5);
            ctx.bezierCurveTo(3.1, 57.7, 3.5, 57.0, 4.1, 56.4);
            ctx.bezierCurveTo(5.8, 54.3, 7.9, 52.6, 10.1, 51.0);
            ctx.bezierCurveTo(13.2, 48.7, 16.4, 46.5, 19.4, 44.0);
            ctx.bezierCurveTo(20.5, 43.0, 21.6, 42.0, 22.6, 40.8);
            ctx.bezierCurveTo(24.4, 38.7, 25.0, 36.3, 24.3, 33.6);
            ctx.bezierCurveTo(23.5, 30.6, 22.2, 27.8, 21.0, 24.9);
            ctx.bezierCurveTo(19.4, 21.5, 17.7, 18.1, 16.4, 14.6);
            ctx.bezierCurveTo(15.7, 12.5, 15.0, 10.4, 15.1, 8.1);
            ctx.bezierCurveTo(15.2, 5.7, 16.6, 4.0, 19.0, 3.7);
            ctx.bezierCurveTo(20.1, 3.6, 21.1, 3.8, 22.1, 4.1);
            ctx.bezierCurveTo(24.5, 4.9, 26.7, 6.2, 28.8, 7.6);
            ctx.bezierCurveTo(32.0, 9.7, 35.1, 11.9, 38.2, 14.0);
            ctx.bezierCurveTo(40.0, 15.3, 41.9, 16.3, 43.9, 17.2);
            ctx.bezierCurveTo(46.5, 18.4, 48.9, 18.2, 51.3, 16.7);
            ctx.bezierCurveTo(53.7, 15.2, 55.8, 13.4, 57.8, 11.5);
            ctx.bezierCurveTo(60.6, 8.8, 63.3, 6.0, 66.3, 3.5);
            ctx.bezierCurveTo(67.8, 2.3, 69.4, 1.1, 71.3, 0.4);
            ctx.bezierCurveTo(74.3, -0.7, 76.8, 0.7, 77.3, 3.9);
            ctx.bezierCurveTo(77.6, 5.8, 77.4, 7.6, 77.1, 9.4);
            ctx.bezierCurveTo(76.2, 13.7, 74.8, 17.8, 73.6, 22.0);
            ctx.bezierCurveTo(72.6, 25.3, 71.7, 28.5, 71.7, 32.0);
            ctx.bezierCurveTo(71.8, 33.6, 72.3, 34.9, 73.4, 36.1);
            ctx.bezierCurveTo(74.8, 37.7, 76.5, 38.8, 78.2, 39.9);
            ctx.bezierCurveTo(81.6, 42.0, 85.1, 43.7, 88.6, 45.6);
            ctx.bezierCurveTo(90.9, 46.9, 93.3, 48.3, 95.2, 50.1);
            ctx.bezierCurveTo(95.9, 50.7, 96.4, 51.4, 96.8, 52.1);
            ctx.bezierCurveTo(97.9, 54.1, 97.4, 56.3, 95.5, 57.5);
            ctx.bezierCurveTo(94.0, 58.6, 92.2, 59.0, 90.4, 59.3);
            ctx.bezierCurveTo(87.8, 59.6, 85.2, 59.7, 82.5, 59.7);
            ctx.bezierCurveTo(81.4, 59.7, 80.3, 59.7, 79.2, 59.7);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(52.6, 85.3);
            ctx.bezierCurveTo(52.7, 85.5, 52.3, 85.5, 52.3, 85.7);
            ctx.bezierCurveTo(52.6, 85.8, 52.8, 85.6, 53.1, 85.8);
            ctx.bezierCurveTo(53.0, 85.5, 52.8, 85.3, 52.6, 85.2);
            ctx.bezierCurveTo(52.5, 85.0, 52.9, 84.8, 52.6, 84.6);
            ctx.bezierCurveTo(52.3, 84.3, 51.6, 84.4, 51.2, 84.7);
            ctx.bezierCurveTo(50.8, 85.0, 50.7, 85.6, 50.8, 86.0);
            ctx.bezierCurveTo(50.9, 86.1, 51.0, 86.3, 51.2, 86.1);
            ctx.bezierCurveTo(51.4, 86.0, 51.7, 86.0, 52.0, 86.1);
            ctx.bezierCurveTo(51.9, 85.4, 52.0, 85.3, 52.6, 85.3);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(52.1, 42.1);
            ctx.lineTo(52.1, 42.1);
            ctx.bezierCurveTo(52.2, 42.4, 52.5, 42.7, 52.3, 43.1);
            ctx.bezierCurveTo(52.0, 43.5, 51.6, 43.5, 51.2, 43.4);
            ctx.bezierCurveTo(51.2, 44.0, 51.3, 44.1, 51.8, 44.0);
            ctx.bezierCurveTo(52.6, 43.9, 53.1, 43.4, 53.6, 42.8);
            ctx.bezierCurveTo(53.7, 43.1, 53.7, 43.3, 53.8, 43.5);
            ctx.bezierCurveTo(54.1, 44.6, 55.2, 45.4, 56.2, 45.3);
            ctx.bezierCurveTo(57.2, 45.3, 58.4, 44.5, 58.6, 43.2);
            ctx.bezierCurveTo(58.9, 41.5, 57.5, 40.0, 55.7, 40.4);
            ctx.bezierCurveTo(55.4, 40.4, 54.7, 40.5, 55.1, 41.2);
            ctx.bezierCurveTo(55.2, 41.3, 55.1, 41.3, 55.1, 41.4);
            ctx.bezierCurveTo(55.0, 41.4, 54.9, 41.4, 54.9, 41.3);
            ctx.bezierCurveTo(54.8, 41.2, 54.7, 41.1, 54.5, 41.0);
            ctx.bezierCurveTo(54.5, 41.3, 54.3, 41.6, 54.0, 41.4);
            ctx.bezierCurveTo(53.6, 41.2, 53.2, 40.8, 53.0, 40.3);
            ctx.bezierCurveTo(52.9, 40.1, 52.9, 39.9, 53.2, 40.1);
            ctx.bezierCurveTo(53.4, 40.3, 53.5, 40.2, 53.6, 40.1);
            ctx.bezierCurveTo(53.8, 39.9, 53.6, 39.8, 53.5, 39.7);
            ctx.bezierCurveTo(52.9, 38.9, 52.0, 38.6, 51.0, 38.7);
            ctx.bezierCurveTo(49.8, 38.8, 49.1, 39.6, 48.8, 40.6);
            ctx.bezierCurveTo(48.5, 41.5, 48.8, 42.7, 49.5, 43.3);
            ctx.bezierCurveTo(49.6, 43.3, 49.7, 43.5, 49.8, 43.4);
            ctx.bezierCurveTo(50.1, 43.1, 50.3, 42.9, 50.8, 43.0);
            ctx.bezierCurveTo(50.9, 43.0, 50.9, 42.9, 50.9, 42.8);
            ctx.bezierCurveTo(51.1, 42.0, 51.2, 42.0, 52.1, 42.1);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(48.6, 44.8);
            ctx.bezierCurveTo(48.6, 44.8, 48.6, 44.8, 48.7, 44.8);
            ctx.bezierCurveTo(48.6, 44.8, 48.6, 44.8, 48.6, 44.8);
            ctx.bezierCurveTo(48.7, 44.6, 48.7, 44.4, 48.8, 44.3);
            ctx.bezierCurveTo(49.0, 44.0, 48.9, 43.8, 48.7, 43.6);
            ctx.bezierCurveTo(48.1, 42.9, 47.4, 42.5, 46.4, 42.6);
            ctx.bezierCurveTo(45.1, 42.8, 44.2, 43.7, 44.0, 45.2);
            ctx.bezierCurveTo(43.8, 46.2, 44.6, 47.3, 45.7, 47.8);
            ctx.bezierCurveTo(45.9, 47.9, 46.1, 47.9, 46.2, 48.1);
            ctx.bezierCurveTo(44.9, 49.1, 44.5, 50.1, 45.0, 51.3);
            ctx.bezierCurveTo(45.4, 52.3, 46.5, 52.9, 47.6, 52.8);
            ctx.bezierCurveTo(48.7, 52.7, 49.5, 51.9, 49.8, 50.8);
            ctx.bezierCurveTo(49.9, 50.3, 49.8, 49.7, 49.6, 49.2);
            ctx.bezierCurveTo(49.2, 48.5, 48.6, 48.1, 47.8, 47.8);
            ctx.bezierCurveTo(47.9, 47.7, 48.1, 47.6, 48.2, 47.5);
            ctx.bezierCurveTo(48.7, 47.1, 49.1, 46.6, 49.2, 46.0);
            ctx.bezierCurveTo(49.3, 45.8, 49.6, 45.5, 49.2, 45.4);
            ctx.bezierCurveTo(48.8, 45.3, 49.0, 45.7, 48.9, 45.8);
            ctx.bezierCurveTo(48.8, 46.1, 48.6, 46.4, 48.3, 46.4);
            ctx.bezierCurveTo(47.9, 46.4, 47.7, 46.3, 47.5, 45.9);
            ctx.bezierCurveTo(47.4, 45.6, 47.4, 45.3, 47.7, 45.1);
            ctx.bezierCurveTo(48.0, 44.9, 48.0, 44.7, 47.7, 44.4);
            ctx.bezierCurveTo(47.6, 44.3, 47.6, 44.2, 47.7, 44.1);
            ctx.bezierCurveTo(47.9, 44.0, 48.0, 44.1, 48.0, 44.2);
            ctx.bezierCurveTo(48.2, 44.4, 48.4, 44.6, 48.6, 44.8);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(38.5, 30.1);
            ctx.lineTo(38.5, 30.1);
            ctx.bezierCurveTo(38.5, 30.0, 38.6, 29.8, 38.7, 29.7);
            ctx.bezierCurveTo(39.2, 28.7, 38.9, 27.6, 38.1, 26.9);
            ctx.bezierCurveTo(37.4, 26.3, 36.2, 26.2, 35.4, 26.8);
            ctx.bezierCurveTo(34.4, 27.4, 34.3, 28.5, 34.5, 29.4);
            ctx.bezierCurveTo(34.9, 30.4, 35.9, 31.1, 37.0, 30.9);
            ctx.bezierCurveTo(37.3, 30.8, 37.5, 30.7, 37.8, 30.7);
            ctx.bezierCurveTo(37.8, 30.8, 37.8, 30.8, 37.8, 30.8);
            ctx.bezierCurveTo(37.2, 31.7, 37.1, 32.6, 37.6, 33.5);
            ctx.bezierCurveTo(38.1, 34.4, 38.9, 34.9, 40.0, 34.8);
            ctx.bezierCurveTo(40.5, 34.7, 40.4, 35.0, 40.3, 35.3);
            ctx.bezierCurveTo(40.0, 36.4, 40.4, 37.6, 41.4, 38.3);
            ctx.bezierCurveTo(42.2, 38.9, 43.6, 38.8, 44.4, 38.2);
            ctx.bezierCurveTo(45.4, 37.5, 45.8, 36.3, 45.4, 35.1);
            ctx.bezierCurveTo(45.0, 34.0, 44.1, 33.3, 42.7, 33.4);
            ctx.bezierCurveTo(42.2, 33.4, 42.0, 33.3, 42.2, 32.8);
            ctx.bezierCurveTo(42.6, 31.2, 41.1, 29.8, 39.8, 29.9);
            ctx.bezierCurveTo(39.4, 29.9, 38.9, 30.0, 38.5, 30.1);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(50.0, 32.8);
            ctx.bezierCurveTo(49.6, 32.7, 49.3, 32.7, 49.0, 32.7);
            ctx.bezierCurveTo(47.9, 32.7, 46.9, 33.5, 46.5, 34.7);
            ctx.bezierCurveTo(46.1, 35.8, 46.5, 36.9, 47.5, 37.7);
            ctx.bezierCurveTo(48.2, 38.3, 49.5, 38.3, 50.4, 37.8);
            ctx.bezierCurveTo(51.6, 37.0, 52.1, 35.6, 51.6, 34.2);
            ctx.bezierCurveTo(51.4, 33.9, 51.5, 33.8, 51.8, 33.8);
            ctx.bezierCurveTo(51.9, 33.8, 52.0, 33.8, 52.2, 33.8);
            ctx.bezierCurveTo(54.0, 33.8, 55.3, 31.8, 54.5, 30.1);
            ctx.bezierCurveTo(54.0, 29.1, 52.9, 28.6, 51.8, 28.8);
            ctx.bezierCurveTo(50.6, 29.0, 49.8, 30.1, 49.7, 31.2);
            ctx.bezierCurveTo(49.6, 31.7, 49.8, 32.2, 50.0, 32.8);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(39.2, 44.1);
            ctx.bezierCurveTo(40.9, 45.1, 42.0, 45.0, 43.1, 43.9);
            ctx.bezierCurveTo(44.0, 43.1, 44.2, 41.8, 43.7, 40.9);
            ctx.bezierCurveTo(43.0, 39.7, 41.8, 39.1, 40.5, 39.5);
            ctx.bezierCurveTo(39.2, 39.8, 38.4, 40.9, 38.4, 42.5);
            ctx.bezierCurveTo(36.5, 41.7, 35.5, 41.8, 34.7, 42.8);
            ctx.bezierCurveTo(34.0, 43.6, 33.8, 44.8, 34.3, 45.7);
            ctx.bezierCurveTo(34.9, 46.6, 36.1, 47.1, 37.1, 46.8);
            ctx.bezierCurveTo(38.4, 46.5, 39.1, 45.6, 39.2, 44.1);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(29.7, 46.8);
            ctx.bezierCurveTo(29.7, 48.1, 30.6, 49.0, 31.9, 49.0);
            ctx.bezierCurveTo(33.2, 49.0, 34.3, 48.0, 34.4, 46.7);
            ctx.bezierCurveTo(34.4, 45.5, 33.3, 44.5, 32.1, 44.5);
            ctx.bezierCurveTo(30.7, 44.5, 29.7, 45.5, 29.7, 46.8);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(55.4, 24.9);
            ctx.bezierCurveTo(54.2, 24.8, 53.0, 25.8, 53.0, 27.3);
            ctx.bezierCurveTo(53.0, 28.5, 54.0, 29.5, 55.2, 29.5);
            ctx.bezierCurveTo(56.5, 29.5, 57.6, 28.4, 57.6, 27.1);
            ctx.bezierCurveTo(57.6, 25.8, 56.7, 24.9, 55.4, 24.9);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(60.9, 46.5);
            ctx.bezierCurveTo(62.3, 46.5, 63.3, 45.6, 63.3, 44.2);
            ctx.bezierCurveTo(63.3, 43.0, 62.3, 42.0, 61.0, 42.0);
            ctx.bezierCurveTo(59.7, 41.9, 58.7, 42.9, 58.7, 44.2);
            ctx.bezierCurveTo(58.7, 45.6, 59.6, 46.5, 60.9, 46.5);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(50.3, 55.4);
            ctx.bezierCurveTo(50.4, 53.9, 49.0, 53.1, 48.1, 53.1);
            ctx.bezierCurveTo(46.8, 53.0, 45.7, 54.1, 45.7, 55.4);
            ctx.bezierCurveTo(45.7, 56.7, 46.6, 57.6, 48.0, 57.6);
            ctx.bezierCurveTo(49.4, 57.6, 50.3, 56.7, 50.3, 55.4);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(48.6, 62.5);
            ctx.bezierCurveTo(49.8, 62.5, 50.8, 61.6, 50.8, 60.5);
            ctx.bezierCurveTo(50.8, 59.3, 49.8, 58.3, 48.7, 58.3);
            ctx.bezierCurveTo(47.5, 58.3, 46.5, 59.2, 46.5, 60.4);
            ctx.bezierCurveTo(46.5, 61.6, 47.4, 62.5, 48.6, 62.5);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(67.9, 45.8);
            ctx.bezierCurveTo(67.9, 44.4, 67.1, 43.6, 65.8, 43.6);
            ctx.bezierCurveTo(64.6, 43.6, 63.7, 44.5, 63.7, 45.7);
            ctx.bezierCurveTo(63.7, 46.9, 64.6, 47.8, 65.8, 47.8);
            ctx.bezierCurveTo(66.8, 47.8, 68.0, 47.1, 67.9, 45.8);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(27.3, 51.1);
            ctx.bezierCurveTo(28.6, 51.2, 29.5, 50.2, 29.6, 49.0);
            ctx.bezierCurveTo(29.6, 47.9, 28.6, 47.0, 27.4, 47.0);
            ctx.bezierCurveTo(26.3, 47.0, 25.3, 48.0, 25.3, 49.1);
            ctx.bezierCurveTo(25.3, 50.3, 26.1, 51.1, 27.3, 51.1);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(60.5, 22.9);
            ctx.bezierCurveTo(60.5, 21.7, 59.6, 20.9, 58.4, 21.0);
            ctx.bezierCurveTo(57.3, 21.0, 56.3, 21.9, 56.3, 23.1);
            ctx.bezierCurveTo(56.3, 24.2, 57.2, 25.1, 58.3, 25.1);
            ctx.bezierCurveTo(59.6, 25.1, 60.5, 24.2, 60.5, 22.9);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(33.6, 22.9);
            ctx.bezierCurveTo(32.4, 22.9, 31.5, 23.8, 31.5, 24.9);
            ctx.bezierCurveTo(31.5, 26.1, 32.5, 27.1, 33.6, 27.0);
            ctx.bezierCurveTo(34.7, 27.0, 35.6, 26.1, 35.6, 25.0);
            ctx.bezierCurveTo(35.7, 23.8, 34.8, 22.9, 33.6, 22.9);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(51.2, 65.5);
            ctx.bezierCurveTo(51.2, 64.4, 50.4, 63.4, 49.4, 63.5);
            ctx.bezierCurveTo(48.2, 63.6, 47.5, 64.3, 47.4, 65.4);
            ctx.bezierCurveTo(47.3, 66.5, 48.3, 67.4, 49.1, 67.4);
            ctx.bezierCurveTo(50.4, 67.4, 51.2, 66.7, 51.2, 65.5);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(70.6, 49.0);
            ctx.bezierCurveTo(71.7, 49.1, 72.5, 48.3, 72.5, 47.2);
            ctx.bezierCurveTo(72.5, 46.1, 71.7, 45.2, 70.6, 45.2);
            ctx.bezierCurveTo(69.5, 45.2, 68.7, 46.0, 68.7, 47.1);
            ctx.bezierCurveTo(68.7, 48.3, 69.4, 49.0, 70.6, 49.0);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(61.4, 20.8);
            ctx.bezierCurveTo(62.5, 20.8, 63.4, 19.9, 63.4, 18.8);
            ctx.bezierCurveTo(63.4, 17.8, 62.6, 17.0, 61.5, 17.0);
            ctx.bezierCurveTo(60.5, 17.0, 59.6, 17.9, 59.6, 19.0);
            ctx.bezierCurveTo(59.6, 19.9, 60.5, 20.9, 61.4, 20.8);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(24.7, 51.3);
            ctx.bezierCurveTo(24.8, 50.4, 23.7, 49.5, 22.8, 49.5);
            ctx.bezierCurveTo(21.8, 49.6, 20.9, 50.4, 20.9, 51.4);
            ctx.bezierCurveTo(20.9, 52.4, 21.7, 53.3, 22.7, 53.3);
            ctx.bezierCurveTo(23.8, 53.3, 24.7, 52.4, 24.7, 51.3);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(30.5, 19.4);
            ctx.bezierCurveTo(29.4, 19.4, 28.7, 20.2, 28.7, 21.3);
            ctx.bezierCurveTo(28.7, 22.3, 29.5, 23.1, 30.4, 23.1);
            ctx.bezierCurveTo(31.5, 23.1, 32.4, 22.3, 32.4, 21.2);
            ctx.bezierCurveTo(32.4, 20.3, 31.5, 19.4, 30.5, 19.4);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(77.1, 48.6);
            ctx.bezierCurveTo(77.1, 47.6, 76.5, 46.9, 75.5, 46.8);
            ctx.bezierCurveTo(74.5, 46.8, 73.6, 47.6, 73.6, 48.6);
            ctx.bezierCurveTo(73.6, 49.5, 74.4, 50.3, 75.4, 50.3);
            ctx.bezierCurveTo(76.4, 50.4, 77.1, 49.7, 77.1, 48.6);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(50.0, 72.2);
            ctx.bezierCurveTo(50.9, 72.3, 51.7, 71.4, 51.7, 70.5);
            ctx.bezierCurveTo(51.8, 69.6, 51.0, 68.8, 50.0, 68.7);
            ctx.bezierCurveTo(49.1, 68.7, 48.3, 69.5, 48.3, 70.5);
            ctx.bezierCurveTo(48.2, 71.5, 48.9, 72.2, 50.0, 72.2);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(64.5, 16.4);
            ctx.bezierCurveTo(65.4, 16.5, 66.3, 15.7, 66.3, 14.6);
            ctx.bezierCurveTo(66.3, 13.8, 65.5, 13.1, 64.7, 13.0);
            ctx.bezierCurveTo(63.8, 13.0, 63.0, 13.8, 63.0, 14.8);
            ctx.bezierCurveTo(63.0, 15.7, 63.6, 16.4, 64.5, 16.4);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(19.9, 53.7);
            ctx.bezierCurveTo(20.0, 52.8, 19.0, 52.1, 18.3, 52.1);
            ctx.bezierCurveTo(17.4, 52.1, 16.5, 52.9, 16.5, 53.7);
            ctx.bezierCurveTo(16.5, 54.7, 17.2, 55.4, 18.2, 55.4);
            ctx.bezierCurveTo(19.2, 55.4, 19.9, 54.7, 19.9, 53.7);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(81.8, 50.0);
            ctx.bezierCurveTo(81.8, 49.1, 81.1, 48.5, 80.2, 48.5);
            ctx.bezierCurveTo(79.3, 48.5, 78.7, 49.2, 78.6, 50.1);
            ctx.bezierCurveTo(78.6, 50.8, 79.4, 51.6, 80.2, 51.6);
            ctx.bezierCurveTo(81.1, 51.6, 81.8, 50.9, 81.8, 50.0);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(52.2, 75.5);
            ctx.bezierCurveTo(52.2, 74.6, 51.5, 73.9, 50.7, 73.9);
            ctx.bezierCurveTo(49.9, 73.9, 49.1, 74.7, 49.1, 75.6);
            ctx.bezierCurveTo(49.1, 76.4, 49.8, 77.1, 50.8, 77.1);
            ctx.bezierCurveTo(51.6, 77.1, 52.2, 76.3, 52.2, 75.5);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(12.2, 56.1);
            ctx.bezierCurveTo(12.2, 56.9, 12.7, 57.5, 13.6, 57.5);
            ctx.bezierCurveTo(14.4, 57.5, 15.1, 56.9, 15.1, 56.0);
            ctx.bezierCurveTo(15.1, 55.3, 14.4, 54.6, 13.6, 54.6);
            ctx.bezierCurveTo(12.9, 54.6, 12.2, 55.3, 12.2, 56.1);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(69.2, 10.6);
            ctx.bezierCurveTo(69.2, 9.7, 68.5, 9.1, 67.7, 9.1);
            ctx.bezierCurveTo(67.0, 9.1, 66.3, 9.8, 66.3, 10.6);
            ctx.bezierCurveTo(66.3, 11.5, 66.8, 12.0, 67.6, 12.1);
            ctx.bezierCurveTo(68.5, 12.1, 69.2, 11.4, 69.2, 10.6);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(27.4, 16.0);
            ctx.bezierCurveTo(26.7, 15.9, 26.1, 16.3, 25.9, 16.9);
            ctx.bezierCurveTo(25.6, 17.5, 25.8, 18.2, 26.2, 18.7);
            ctx.bezierCurveTo(26.4, 18.9, 26.6, 19.2, 26.8, 18.8);
            ctx.bezierCurveTo(26.9, 18.6, 27.0, 18.7, 27.1, 18.8);
            ctx.bezierCurveTo(27.2, 18.9, 27.3, 19.0, 27.4, 19.1);
            ctx.bezierCurveTo(27.5, 19.2, 27.6, 19.3, 27.7, 19.2);
            ctx.bezierCurveTo(27.9, 19.0, 27.7, 18.9, 27.6, 18.9);
            ctx.bezierCurveTo(27.5, 18.8, 27.3, 18.7, 27.3, 18.6);
            ctx.bezierCurveTo(27.1, 18.4, 27.0, 18.2, 27.1, 18.0);
            ctx.bezierCurveTo(27.2, 17.8, 27.4, 18.2, 27.7, 18.1);
            ctx.bezierCurveTo(27.9, 18.0, 27.8, 18.2, 27.7, 18.4);
            ctx.bezierCurveTo(27.7, 18.6, 28.0, 18.8, 28.1, 18.9);
            ctx.bezierCurveTo(28.2, 19.0, 28.3, 19.0, 28.4, 18.9);
            ctx.bezierCurveTo(28.6, 18.6, 28.3, 18.5, 28.3, 18.4);
            ctx.bezierCurveTo(28.0, 17.8, 28.1, 17.4, 28.7, 17.2);
            ctx.bezierCurveTo(28.9, 17.1, 28.9, 17.0, 28.8, 16.8);
            ctx.bezierCurveTo(28.7, 16.3, 28.1, 16.0, 27.4, 16.0);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(22.9, 13.9);
            ctx.bezierCurveTo(22.9, 14.6, 23.5, 15.3, 24.2, 15.3);
            ctx.bezierCurveTo(25.1, 15.3, 25.7, 14.7, 25.7, 13.9);
            ctx.bezierCurveTo(25.7, 13.1, 25.1, 12.5, 24.3, 12.5);
            ctx.bezierCurveTo(23.5, 12.5, 22.9, 13.0, 22.9, 13.9);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(51.3, 81.9);
            ctx.bezierCurveTo(52.1, 81.9, 52.6, 81.4, 52.6, 80.6);
            ctx.bezierCurveTo(52.7, 79.8, 52.2, 79.2, 51.4, 79.2);
            ctx.bezierCurveTo(50.7, 79.1, 49.9, 79.8, 49.9, 80.5);
            ctx.bezierCurveTo(49.9, 81.3, 50.4, 81.9, 51.3, 81.9);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(86.4, 51.5);
            ctx.bezierCurveTo(86.4, 50.7, 85.9, 50.1, 85.1, 50.1);
            ctx.bezierCurveTo(84.3, 50.1, 83.6, 50.7, 83.6, 51.5);
            ctx.bezierCurveTo(83.6, 52.2, 84.3, 52.8, 85.0, 52.8);
            ctx.bezierCurveTo(85.8, 52.9, 86.3, 52.3, 86.4, 51.5);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(70.8, 7.7);
            ctx.bezierCurveTo(71.5, 7.7, 72.1, 7.1, 72.1, 6.4);
            ctx.bezierCurveTo(72.1, 5.8, 71.5, 5.2, 70.9, 5.2);
            ctx.bezierCurveTo(70.2, 5.2, 69.6, 5.8, 69.6, 6.5);
            ctx.bezierCurveTo(69.6, 7.2, 70.1, 7.7, 70.8, 7.7);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(9.0, 59.6);
            ctx.bezierCurveTo(9.8, 59.6, 10.3, 59.1, 10.3, 58.3);
            ctx.bezierCurveTo(10.3, 57.7, 9.7, 57.2, 9.1, 57.2);
            ctx.bezierCurveTo(8.4, 57.2, 7.8, 57.7, 7.8, 58.4);
            ctx.bezierCurveTo(7.8, 59.2, 8.2, 59.6, 9.0, 59.6);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(21.2, 11.4);
            ctx.bezierCurveTo(21.9, 11.4, 22.4, 10.9, 22.4, 10.2);
            ctx.bezierCurveTo(22.5, 9.6, 21.9, 9.0, 21.3, 9.0);
            ctx.bezierCurveTo(20.5, 9.0, 20.0, 9.5, 20.0, 10.2);
            ctx.bezierCurveTo(20.0, 10.9, 20.5, 11.4, 21.2, 11.4);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(91.0, 53.0);
            ctx.bezierCurveTo(91.0, 52.2, 90.6, 51.8, 89.9, 51.7);
            ctx.bezierCurveTo(89.2, 51.7, 88.6, 52.3, 88.6, 52.9);
            ctx.bezierCurveTo(88.6, 53.6, 89.2, 54.1, 89.8, 54.1);
            ctx.bezierCurveTo(90.5, 54.2, 91.0, 53.6, 91.0, 53.0);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(3.5, 60.8);
            ctx.bezierCurveTo(3.4, 61.4, 3.8, 61.8, 4.5, 61.8);
            ctx.bezierCurveTo(5.0, 61.7, 5.5, 61.3, 5.5, 60.8);
            ctx.bezierCurveTo(5.5, 60.3, 5.0, 59.7, 4.5, 59.7);
            ctx.bezierCurveTo(3.9, 59.7, 3.5, 60.1, 3.5, 60.8);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(74.9, 2.3);
            ctx.bezierCurveTo(74.9, 1.7, 74.6, 1.3, 73.9, 1.3);
            ctx.bezierCurveTo(73.4, 1.3, 73.0, 1.8, 73.0, 2.4);
            ctx.bezierCurveTo(73.0, 3.0, 73.3, 3.3, 73.9, 3.3);
            ctx.bezierCurveTo(74.5, 3.4, 74.9, 2.9, 74.9, 2.3);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(53.6, 90.7);
            ctx.bezierCurveTo(53.7, 90.0, 53.1, 89.6, 52.7, 89.6);
            ctx.bezierCurveTo(52.1, 89.6, 51.6, 90.1, 51.6, 90.6);
            ctx.bezierCurveTo(51.6, 91.2, 52.1, 91.7, 52.6, 91.6);
            ctx.bezierCurveTo(53.2, 91.6, 53.6, 91.3, 53.6, 90.7);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(18.1, 7.5);
            ctx.bezierCurveTo(18.7, 7.5, 19.1, 7.1, 19.1, 6.5);
            ctx.bezierCurveTo(19.1, 5.9, 18.7, 5.5, 18.1, 5.5);
            ctx.bezierCurveTo(17.5, 5.5, 17.1, 5.9, 17.1, 6.5);
            ctx.bezierCurveTo(17.1, 7.1, 17.5, 7.5, 18.1, 7.5);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(95.6, 54.4);
            ctx.bezierCurveTo(95.6, 53.8, 95.3, 53.4, 94.7, 53.4);
            ctx.bezierCurveTo(94.1, 53.4, 93.6, 53.8, 93.6, 54.4);
            ctx.bezierCurveTo(93.6, 54.9, 94.1, 55.4, 94.7, 55.4);
            ctx.bezierCurveTo(95.3, 55.4, 95.6, 55.0, 95.6, 54.4);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(52.1, 42.8);
            ctx.bezierCurveTo(52.0, 42.5, 51.9, 42.3, 51.7, 42.3);
            ctx.bezierCurveTo(51.4, 42.3, 51.2, 42.4, 51.2, 42.7);
            ctx.bezierCurveTo(51.2, 43.0, 51.3, 43.1, 51.6, 43.1);
            ctx.bezierCurveTo(51.9, 43.2, 52.0, 43.0, 52.1, 42.8);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(50.9, 43.6);
            ctx.bezierCurveTo(50.8, 43.4, 50.7, 43.3, 50.5, 43.3);
            ctx.bezierCurveTo(50.2, 43.3, 50.1, 43.4, 50.1, 43.7);
            ctx.bezierCurveTo(50.1, 43.9, 50.2, 44.1, 50.5, 44.1);
            ctx.bezierCurveTo(50.7, 44.1, 50.9, 43.9, 50.9, 43.6);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(48.6, 45.5);
            ctx.bezierCurveTo(48.6, 45.3, 48.5, 45.2, 48.2, 45.2);
            ctx.bezierCurveTo(47.9, 45.2, 47.8, 45.4, 47.8, 45.6);
            ctx.bezierCurveTo(47.8, 45.9, 48.0, 46.0, 48.2, 46.0);
            ctx.bezierCurveTo(48.5, 46.0, 48.6, 45.9, 48.6, 45.5);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(28.8, 17.5);
            ctx.bezierCurveTo(28.6, 17.5, 28.5, 17.6, 28.5, 17.9);
            ctx.bezierCurveTo(28.5, 18.1, 28.6, 18.3, 28.8, 18.3);
            ctx.bezierCurveTo(29.1, 18.3, 29.0, 17.9, 29.1, 17.7);
            ctx.bezierCurveTo(29.1, 17.5, 29.0, 17.5, 28.8, 17.5);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(51.7, 86.8);
            ctx.bezierCurveTo(51.9, 86.8, 52.0, 86.7, 52.0, 86.6);
            ctx.bezierCurveTo(51.9, 86.4, 51.8, 86.3, 51.6, 86.3);
            ctx.bezierCurveTo(51.5, 86.3, 51.3, 86.4, 51.4, 86.5);
            ctx.bezierCurveTo(51.4, 86.7, 51.6, 86.7, 51.7, 86.8);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(52.4, 86.8);
            ctx.bezierCurveTo(52.5, 86.5, 52.6, 86.3, 52.8, 86.3);
            ctx.bezierCurveTo(52.8, 86.2, 52.9, 86.1, 52.8, 86.1);
            ctx.bezierCurveTo(52.6, 86.0, 52.4, 86.1, 52.3, 86.1);
            ctx.bezierCurveTo(52.1, 86.3, 52.3, 86.5, 52.4, 86.8);
            ctx.closePath();
            ctx.fillStyle = "rgb(228, 48, 96)";
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(38.5, 30.1);
            ctx.bezierCurveTo(38.9, 30.0, 39.4, 29.9, 39.8, 29.9);
            ctx.bezierCurveTo(41.1, 29.8, 42.6, 31.2, 42.2, 32.8);
            ctx.bezierCurveTo(42.0, 33.3, 42.2, 33.4, 42.7, 33.4);
            ctx.bezierCurveTo(44.1, 33.3, 45.0, 34.0, 45.4, 35.1);
            ctx.bezierCurveTo(45.8, 36.3, 45.4, 37.5, 44.4, 38.2);
            ctx.bezierCurveTo(43.6, 38.8, 42.2, 38.9, 41.4, 38.3);
            ctx.bezierCurveTo(40.4, 37.6, 40.0, 36.4, 40.3, 35.3);
            ctx.bezierCurveTo(40.4, 35.0, 40.5, 34.7, 40.0, 34.8);
            ctx.bezierCurveTo(38.9, 34.9, 38.1, 34.4, 37.6, 33.5);
            ctx.bezierCurveTo(37.1, 32.6, 37.2, 31.7, 37.8, 30.8);
            ctx.bezierCurveTo(37.8, 30.8, 37.8, 30.8, 37.8, 30.7);
            ctx.bezierCurveTo(37.5, 30.7, 37.3, 30.8, 37.0, 30.9);
            ctx.bezierCurveTo(35.9, 31.1, 34.9, 30.4, 34.5, 29.4);
            ctx.bezierCurveTo(34.3, 28.5, 34.4, 27.4, 35.4, 26.8);
            ctx.bezierCurveTo(36.2, 26.2, 37.4, 26.3, 38.1, 26.9);
            ctx.bezierCurveTo(38.9, 27.6, 39.2, 28.7, 38.7, 29.7);
            ctx.bezierCurveTo(38.6, 29.8, 38.5, 30.0, 38.5, 30.1);
            ctx.bezierCurveTo(38.5, 30.1, 38.4, 30.1, 38.4, 30.2);
            ctx.bezierCurveTo(38.4, 30.1, 38.5, 30.1, 38.5, 30.1);
            ctx.closePath();
            ctx.fillStyle = "rgb(153, 27, 54)";
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(50.0, 32.8);
            ctx.bezierCurveTo(49.8, 32.2, 49.6, 31.7, 49.7, 31.2);
            ctx.bezierCurveTo(49.8, 30.1, 50.6, 29.0, 51.8, 28.8);
            ctx.bezierCurveTo(52.9, 28.6, 54.0, 29.1, 54.5, 30.1);
            ctx.bezierCurveTo(55.3, 31.8, 54.0, 33.8, 52.2, 33.8);
            ctx.bezierCurveTo(52.0, 33.8, 51.9, 33.8, 51.8, 33.8);
            ctx.bezierCurveTo(51.5, 33.8, 51.4, 33.9, 51.6, 34.2);
            ctx.bezierCurveTo(52.1, 35.6, 51.6, 37.0, 50.4, 37.8);
            ctx.bezierCurveTo(49.5, 38.3, 48.2, 38.3, 47.5, 37.7);
            ctx.bezierCurveTo(46.5, 36.9, 46.1, 35.8, 46.5, 34.7);
            ctx.bezierCurveTo(46.9, 33.5, 47.9, 32.7, 49.0, 32.7);
            ctx.bezierCurveTo(49.3, 32.7, 49.6, 32.7, 50.0, 32.8);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(39.2, 44.1);
            ctx.bezierCurveTo(39.1, 45.6, 38.4, 46.5, 37.1, 46.8);
            ctx.bezierCurveTo(36.1, 47.1, 34.9, 46.6, 34.3, 45.7);
            ctx.bezierCurveTo(33.8, 44.8, 34.0, 43.6, 34.7, 42.8);
            ctx.bezierCurveTo(35.5, 41.8, 36.5, 41.7, 38.4, 42.5);
            ctx.bezierCurveTo(38.4, 40.9, 39.2, 39.8, 40.5, 39.5);
            ctx.bezierCurveTo(41.8, 39.1, 43.0, 39.7, 43.7, 40.9);
            ctx.bezierCurveTo(44.2, 41.8, 44.0, 43.1, 43.1, 43.9);
            ctx.bezierCurveTo(42.0, 45.0, 40.9, 45.1, 39.2, 44.1);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(48.6, 44.8);
            ctx.bezierCurveTo(48.4, 44.6, 48.2, 44.4, 48.0, 44.2);
            ctx.bezierCurveTo(48.0, 44.1, 47.9, 44.0, 47.7, 44.1);
            ctx.bezierCurveTo(47.6, 44.2, 47.6, 44.3, 47.7, 44.4);
            ctx.bezierCurveTo(48.0, 44.7, 48.0, 44.9, 47.7, 45.1);
            ctx.bezierCurveTo(47.4, 45.3, 47.4, 45.6, 47.5, 45.9);
            ctx.bezierCurveTo(47.7, 46.3, 47.9, 46.4, 48.3, 46.4);
            ctx.bezierCurveTo(48.6, 46.4, 48.8, 46.1, 48.9, 45.8);
            ctx.bezierCurveTo(49.0, 45.7, 48.8, 45.3, 49.2, 45.4);
            ctx.bezierCurveTo(49.6, 45.5, 49.3, 45.8, 49.2, 46.0);
            ctx.bezierCurveTo(49.1, 46.6, 48.7, 47.1, 48.2, 47.5);
            ctx.bezierCurveTo(48.1, 47.6, 47.9, 47.7, 47.8, 47.8);
            ctx.bezierCurveTo(48.6, 48.1, 49.2, 48.5, 49.6, 49.2);
            ctx.bezierCurveTo(49.8, 49.7, 49.9, 50.3, 49.8, 50.8);
            ctx.bezierCurveTo(49.5, 51.9, 48.7, 52.7, 47.6, 52.8);
            ctx.bezierCurveTo(46.5, 52.9, 45.4, 52.3, 45.0, 51.3);
            ctx.bezierCurveTo(44.5, 50.1, 44.9, 49.1, 46.2, 48.1);
            ctx.bezierCurveTo(46.1, 47.9, 45.9, 47.9, 45.7, 47.8);
            ctx.bezierCurveTo(44.6, 47.3, 43.8, 46.2, 44.0, 45.2);
            ctx.bezierCurveTo(44.2, 43.7, 45.1, 42.8, 46.4, 42.6);
            ctx.bezierCurveTo(47.4, 42.5, 48.1, 42.9, 48.7, 43.6);
            ctx.bezierCurveTo(48.9, 43.8, 49.0, 44.0, 48.8, 44.3);
            ctx.bezierCurveTo(48.7, 44.4, 48.7, 44.6, 48.6, 44.8);
            ctx.lineTo(48.6, 44.8);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(52.1, 42.1);
            ctx.bezierCurveTo(51.2, 42.0, 51.1, 42.0, 50.9, 42.8);
            ctx.bezierCurveTo(50.9, 42.9, 50.9, 43.0, 50.8, 43.0);
            ctx.bezierCurveTo(50.3, 42.9, 50.1, 43.1, 49.8, 43.4);
            ctx.bezierCurveTo(49.7, 43.5, 49.6, 43.3, 49.5, 43.3);
            ctx.bezierCurveTo(48.8, 42.7, 48.5, 41.5, 48.8, 40.6);
            ctx.bezierCurveTo(49.1, 39.6, 49.8, 38.8, 51.0, 38.7);
            ctx.bezierCurveTo(52.0, 38.6, 52.9, 38.9, 53.5, 39.7);
            ctx.bezierCurveTo(53.6, 39.8, 53.8, 39.9, 53.6, 40.1);
            ctx.bezierCurveTo(53.5, 40.2, 53.4, 40.3, 53.2, 40.1);
            ctx.bezierCurveTo(52.9, 39.9, 52.9, 40.1, 53.0, 40.3);
            ctx.bezierCurveTo(53.2, 40.8, 53.6, 41.2, 54.0, 41.4);
            ctx.bezierCurveTo(54.3, 41.6, 54.5, 41.3, 54.5, 41.0);
            ctx.bezierCurveTo(54.7, 41.1, 54.8, 41.2, 54.9, 41.3);
            ctx.bezierCurveTo(54.9, 41.4, 55.0, 41.4, 55.1, 41.4);
            ctx.bezierCurveTo(55.1, 41.3, 55.2, 41.3, 55.1, 41.2);
            ctx.bezierCurveTo(54.7, 40.5, 55.4, 40.4, 55.7, 40.4);
            ctx.bezierCurveTo(57.5, 40.0, 58.9, 41.5, 58.6, 43.2);
            ctx.bezierCurveTo(58.4, 44.5, 57.2, 45.3, 56.2, 45.3);
            ctx.bezierCurveTo(55.2, 45.4, 54.1, 44.6, 53.8, 43.5);
            ctx.bezierCurveTo(53.7, 43.3, 53.7, 43.1, 53.6, 42.8);
            ctx.bezierCurveTo(53.1, 43.4, 52.6, 43.9, 51.8, 44.0);
            ctx.bezierCurveTo(51.3, 44.1, 51.2, 44.0, 51.2, 43.4);
            ctx.bezierCurveTo(51.6, 43.5, 52.0, 43.5, 52.3, 43.1);
            ctx.bezierCurveTo(52.5, 42.7, 52.2, 42.4, 52.1, 42.1);
            ctx.bezierCurveTo(52.3, 42.1, 52.6, 42.0, 52.8, 42.1);
            ctx.bezierCurveTo(52.8, 42.3, 52.5, 42.3, 52.6, 42.5);
            ctx.bezierCurveTo(52.6, 42.6, 52.6, 42.6, 52.7, 42.6);
            ctx.bezierCurveTo(52.9, 42.6, 53.0, 42.5, 53.1, 42.4);
            ctx.bezierCurveTo(53.2, 42.3, 53.2, 42.1, 53.3, 42.0);
            ctx.bezierCurveTo(53.4, 42.0, 53.5, 42.1, 53.7, 42.0);
            ctx.bezierCurveTo(53.8, 41.8, 53.6, 41.7, 53.6, 41.6);
            ctx.bezierCurveTo(53.4, 41.4, 53.2, 41.2, 53.0, 41.0);
            ctx.bezierCurveTo(52.9, 40.9, 52.9, 40.7, 52.7, 40.8);
            ctx.bezierCurveTo(52.6, 40.9, 52.6, 41.0, 52.6, 41.2);
            ctx.bezierCurveTo(52.0, 41.3, 51.9, 41.4, 52.1, 42.1);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(29.7, 46.8);
            ctx.bezierCurveTo(29.7, 45.5, 30.7, 44.5, 32.1, 44.5);
            ctx.bezierCurveTo(33.3, 44.5, 34.4, 45.5, 34.4, 46.7);
            ctx.bezierCurveTo(34.3, 48.0, 33.2, 49.0, 31.9, 49.0);
            ctx.bezierCurveTo(30.6, 49.0, 29.7, 48.1, 29.7, 46.8);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(55.4, 24.9);
            ctx.bezierCurveTo(56.7, 24.9, 57.6, 25.8, 57.6, 27.1);
            ctx.bezierCurveTo(57.6, 28.4, 56.5, 29.5, 55.2, 29.5);
            ctx.bezierCurveTo(54.0, 29.5, 53.0, 28.5, 53.0, 27.3);
            ctx.bezierCurveTo(53.0, 25.8, 54.2, 24.8, 55.4, 24.9);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(60.9, 46.5);
            ctx.bezierCurveTo(59.6, 46.5, 58.7, 45.6, 58.7, 44.2);
            ctx.bezierCurveTo(58.7, 42.9, 59.7, 41.9, 61.0, 42.0);
            ctx.bezierCurveTo(62.3, 42.0, 63.3, 43.0, 63.3, 44.2);
            ctx.bezierCurveTo(63.3, 45.6, 62.3, 46.5, 60.9, 46.5);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(50.3, 55.4);
            ctx.bezierCurveTo(50.3, 56.7, 49.4, 57.6, 48.0, 57.6);
            ctx.bezierCurveTo(46.6, 57.6, 45.7, 56.7, 45.7, 55.4);
            ctx.bezierCurveTo(45.7, 54.1, 46.8, 53.0, 48.1, 53.1);
            ctx.bezierCurveTo(49.0, 53.1, 50.4, 53.9, 50.3, 55.4);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(48.6, 62.5);
            ctx.bezierCurveTo(47.4, 62.5, 46.5, 61.6, 46.5, 60.4);
            ctx.bezierCurveTo(46.5, 59.2, 47.5, 58.3, 48.7, 58.3);
            ctx.bezierCurveTo(49.8, 58.3, 50.8, 59.3, 50.8, 60.5);
            ctx.bezierCurveTo(50.8, 61.6, 49.8, 62.5, 48.6, 62.5);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(67.9, 45.8);
            ctx.bezierCurveTo(68.0, 47.1, 66.8, 47.8, 65.8, 47.8);
            ctx.bezierCurveTo(64.6, 47.8, 63.7, 46.9, 63.7, 45.7);
            ctx.bezierCurveTo(63.7, 44.5, 64.6, 43.6, 65.8, 43.6);
            ctx.bezierCurveTo(67.1, 43.6, 67.9, 44.4, 67.9, 45.8);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(27.3, 51.1);
            ctx.bezierCurveTo(26.1, 51.1, 25.3, 50.3, 25.3, 49.1);
            ctx.bezierCurveTo(25.3, 48.0, 26.3, 47.0, 27.4, 47.0);
            ctx.bezierCurveTo(28.6, 47.0, 29.6, 47.9, 29.6, 49.0);
            ctx.bezierCurveTo(29.5, 50.2, 28.6, 51.2, 27.3, 51.1);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(60.5, 22.9);
            ctx.bezierCurveTo(60.5, 24.2, 59.6, 25.1, 58.3, 25.1);
            ctx.bezierCurveTo(57.2, 25.1, 56.3, 24.2, 56.3, 23.1);
            ctx.bezierCurveTo(56.3, 21.9, 57.3, 21.0, 58.4, 21.0);
            ctx.bezierCurveTo(59.6, 20.9, 60.5, 21.7, 60.5, 22.9);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(33.6, 22.9);
            ctx.bezierCurveTo(34.8, 22.9, 35.7, 23.8, 35.6, 25.0);
            ctx.bezierCurveTo(35.6, 26.1, 34.7, 27.0, 33.6, 27.0);
            ctx.bezierCurveTo(32.5, 27.1, 31.5, 26.1, 31.5, 24.9);
            ctx.bezierCurveTo(31.5, 23.8, 32.4, 22.9, 33.6, 22.9);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(51.2, 65.5);
            ctx.bezierCurveTo(51.2, 66.7, 50.4, 67.4, 49.1, 67.4);
            ctx.bezierCurveTo(48.3, 67.4, 47.3, 66.5, 47.4, 65.4);
            ctx.bezierCurveTo(47.5, 64.3, 48.2, 63.6, 49.4, 63.5);
            ctx.bezierCurveTo(50.4, 63.4, 51.2, 64.4, 51.2, 65.5);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(70.6, 49.0);
            ctx.bezierCurveTo(69.4, 49.0, 68.7, 48.3, 68.7, 47.1);
            ctx.bezierCurveTo(68.7, 46.0, 69.5, 45.2, 70.6, 45.2);
            ctx.bezierCurveTo(71.7, 45.2, 72.5, 46.1, 72.5, 47.2);
            ctx.bezierCurveTo(72.5, 48.3, 71.7, 49.1, 70.6, 49.0);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(61.4, 20.8);
            ctx.bezierCurveTo(60.5, 20.9, 59.6, 19.9, 59.6, 19.0);
            ctx.bezierCurveTo(59.6, 17.9, 60.5, 17.0, 61.5, 17.0);
            ctx.bezierCurveTo(62.6, 17.0, 63.4, 17.8, 63.4, 18.8);
            ctx.bezierCurveTo(63.4, 19.9, 62.5, 20.8, 61.4, 20.8);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(24.7, 51.3);
            ctx.bezierCurveTo(24.7, 52.4, 23.8, 53.3, 22.7, 53.3);
            ctx.bezierCurveTo(21.7, 53.3, 20.9, 52.4, 20.9, 51.4);
            ctx.bezierCurveTo(20.9, 50.4, 21.8, 49.6, 22.8, 49.5);
            ctx.bezierCurveTo(23.7, 49.5, 24.8, 50.4, 24.7, 51.3);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(30.5, 19.4);
            ctx.bezierCurveTo(31.5, 19.4, 32.4, 20.3, 32.4, 21.2);
            ctx.bezierCurveTo(32.4, 22.3, 31.5, 23.1, 30.4, 23.1);
            ctx.bezierCurveTo(29.5, 23.1, 28.7, 22.3, 28.7, 21.3);
            ctx.bezierCurveTo(28.7, 20.2, 29.4, 19.4, 30.5, 19.4);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(77.1, 48.6);
            ctx.bezierCurveTo(77.1, 49.7, 76.4, 50.4, 75.4, 50.3);
            ctx.bezierCurveTo(74.4, 50.3, 73.6, 49.5, 73.6, 48.6);
            ctx.bezierCurveTo(73.6, 47.6, 74.5, 46.8, 75.5, 46.8);
            ctx.bezierCurveTo(76.5, 46.9, 77.1, 47.6, 77.1, 48.6);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(50.0, 72.2);
            ctx.bezierCurveTo(48.9, 72.2, 48.2, 71.5, 48.3, 70.5);
            ctx.bezierCurveTo(48.3, 69.5, 49.1, 68.7, 50.0, 68.7);
            ctx.bezierCurveTo(51.0, 68.8, 51.8, 69.6, 51.7, 70.5);
            ctx.bezierCurveTo(51.7, 71.4, 50.9, 72.3, 50.0, 72.2);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(64.5, 16.4);
            ctx.bezierCurveTo(63.6, 16.4, 63.0, 15.7, 63.0, 14.8);
            ctx.bezierCurveTo(63.0, 13.8, 63.8, 13.0, 64.7, 13.0);
            ctx.bezierCurveTo(65.5, 13.1, 66.3, 13.8, 66.3, 14.6);
            ctx.bezierCurveTo(66.3, 15.7, 65.4, 16.5, 64.5, 16.4);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(19.9, 53.7);
            ctx.bezierCurveTo(19.9, 54.7, 19.2, 55.4, 18.2, 55.4);
            ctx.bezierCurveTo(17.2, 55.4, 16.5, 54.7, 16.5, 53.7);
            ctx.bezierCurveTo(16.5, 52.9, 17.4, 52.1, 18.3, 52.1);
            ctx.bezierCurveTo(19.0, 52.1, 20.0, 52.8, 19.9, 53.7);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(81.8, 50.0);
            ctx.bezierCurveTo(81.8, 50.9, 81.1, 51.6, 80.2, 51.6);
            ctx.bezierCurveTo(79.4, 51.6, 78.6, 50.8, 78.6, 50.1);
            ctx.bezierCurveTo(78.7, 49.2, 79.3, 48.5, 80.2, 48.5);
            ctx.bezierCurveTo(81.1, 48.5, 81.8, 49.1, 81.8, 50.0);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(52.2, 75.5);
            ctx.bezierCurveTo(52.2, 76.3, 51.6, 77.1, 50.8, 77.1);
            ctx.bezierCurveTo(49.8, 77.1, 49.1, 76.4, 49.1, 75.6);
            ctx.bezierCurveTo(49.1, 74.7, 49.9, 73.9, 50.7, 73.9);
            ctx.bezierCurveTo(51.5, 73.9, 52.2, 74.6, 52.2, 75.5);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(12.2, 56.1);
            ctx.bezierCurveTo(12.2, 55.3, 12.9, 54.6, 13.6, 54.6);
            ctx.bezierCurveTo(14.4, 54.6, 15.1, 55.3, 15.1, 56.0);
            ctx.bezierCurveTo(15.1, 56.9, 14.4, 57.5, 13.6, 57.5);
            ctx.bezierCurveTo(12.7, 57.5, 12.2, 56.9, 12.2, 56.1);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(69.2, 10.6);
            ctx.bezierCurveTo(69.2, 11.4, 68.5, 12.1, 67.6, 12.1);
            ctx.bezierCurveTo(66.8, 12.0, 66.3, 11.5, 66.3, 10.6);
            ctx.bezierCurveTo(66.3, 9.8, 67.0, 9.1, 67.7, 9.1);
            ctx.bezierCurveTo(68.5, 9.1, 69.2, 9.7, 69.2, 10.6);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(27.4, 16.0);
            ctx.bezierCurveTo(28.1, 16.0, 28.7, 16.3, 28.8, 16.8);
            ctx.bezierCurveTo(28.9, 17.0, 28.9, 17.1, 28.7, 17.2);
            ctx.bezierCurveTo(28.1, 17.4, 28.0, 17.8, 28.3, 18.4);
            ctx.bezierCurveTo(28.3, 18.5, 28.6, 18.6, 28.4, 18.9);
            ctx.bezierCurveTo(28.3, 19.0, 28.2, 19.0, 28.1, 18.9);
            ctx.bezierCurveTo(28.0, 18.8, 27.7, 18.6, 27.7, 18.4);
            ctx.bezierCurveTo(27.8, 18.2, 27.9, 18.0, 27.7, 18.1);
            ctx.bezierCurveTo(27.4, 18.2, 27.2, 17.8, 27.1, 18.0);
            ctx.bezierCurveTo(27.0, 18.2, 27.1, 18.4, 27.3, 18.6);
            ctx.bezierCurveTo(27.3, 18.7, 27.5, 18.8, 27.6, 18.9);
            ctx.bezierCurveTo(27.7, 18.9, 27.9, 19.0, 27.7, 19.2);
            ctx.bezierCurveTo(27.6, 19.3, 27.5, 19.2, 27.4, 19.1);
            ctx.bezierCurveTo(27.3, 19.0, 27.2, 18.9, 27.1, 18.8);
            ctx.bezierCurveTo(27.0, 18.7, 26.9, 18.6, 26.8, 18.8);
            ctx.bezierCurveTo(26.6, 19.2, 26.4, 18.9, 26.2, 18.7);
            ctx.bezierCurveTo(25.8, 18.2, 25.6, 17.5, 25.9, 16.9);
            ctx.bezierCurveTo(26.1, 16.3, 26.7, 15.9, 27.4, 16.0);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(22.9, 13.9);
            ctx.bezierCurveTo(22.9, 13.0, 23.5, 12.5, 24.3, 12.5);
            ctx.bezierCurveTo(25.1, 12.5, 25.7, 13.1, 25.7, 13.9);
            ctx.bezierCurveTo(25.7, 14.7, 25.1, 15.3, 24.2, 15.3);
            ctx.bezierCurveTo(23.5, 15.3, 22.9, 14.6, 22.9, 13.9);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(51.3, 81.9);
            ctx.bezierCurveTo(50.4, 81.9, 49.9, 81.3, 49.9, 80.5);
            ctx.bezierCurveTo(49.9, 79.8, 50.7, 79.1, 51.4, 79.2);
            ctx.bezierCurveTo(52.2, 79.2, 52.7, 79.8, 52.6, 80.6);
            ctx.bezierCurveTo(52.6, 81.4, 52.1, 81.9, 51.3, 81.9);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(86.4, 51.5);
            ctx.bezierCurveTo(86.3, 52.3, 85.8, 52.9, 85.0, 52.8);
            ctx.bezierCurveTo(84.3, 52.8, 83.6, 52.2, 83.6, 51.5);
            ctx.bezierCurveTo(83.6, 50.7, 84.3, 50.1, 85.1, 50.1);
            ctx.bezierCurveTo(85.9, 50.1, 86.4, 50.7, 86.4, 51.5);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(70.8, 7.7);
            ctx.bezierCurveTo(70.1, 7.7, 69.6, 7.2, 69.6, 6.5);
            ctx.bezierCurveTo(69.6, 5.8, 70.2, 5.2, 70.9, 5.2);
            ctx.bezierCurveTo(71.5, 5.2, 72.1, 5.8, 72.1, 6.4);
            ctx.bezierCurveTo(72.1, 7.1, 71.5, 7.7, 70.8, 7.7);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(9.0, 59.6);
            ctx.bezierCurveTo(8.2, 59.6, 7.8, 59.2, 7.8, 58.4);
            ctx.bezierCurveTo(7.8, 57.7, 8.4, 57.2, 9.1, 57.2);
            ctx.bezierCurveTo(9.7, 57.2, 10.3, 57.7, 10.3, 58.3);
            ctx.bezierCurveTo(10.3, 59.1, 9.8, 59.6, 9.0, 59.6);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(21.2, 11.4);
            ctx.bezierCurveTo(20.5, 11.4, 20.0, 10.9, 20.0, 10.2);
            ctx.bezierCurveTo(20.0, 9.5, 20.5, 9.0, 21.3, 9.0);
            ctx.bezierCurveTo(21.9, 9.0, 22.5, 9.6, 22.4, 10.2);
            ctx.bezierCurveTo(22.4, 10.9, 21.9, 11.4, 21.2, 11.4);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(91.0, 53.0);
            ctx.bezierCurveTo(91.0, 53.6, 90.5, 54.2, 89.8, 54.1);
            ctx.bezierCurveTo(89.2, 54.1, 88.6, 53.6, 88.6, 52.9);
            ctx.bezierCurveTo(88.6, 52.3, 89.2, 51.7, 89.9, 51.7);
            ctx.bezierCurveTo(90.6, 51.8, 91.0, 52.2, 91.0, 53.0);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(3.5, 60.8);
            ctx.bezierCurveTo(3.5, 60.1, 3.9, 59.7, 4.5, 59.7);
            ctx.bezierCurveTo(5.0, 59.7, 5.5, 60.3, 5.5, 60.8);
            ctx.bezierCurveTo(5.5, 61.3, 5.0, 61.7, 4.5, 61.8);
            ctx.bezierCurveTo(3.8, 61.8, 3.4, 61.4, 3.5, 60.8);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(74.9, 2.3);
            ctx.bezierCurveTo(74.9, 2.9, 74.5, 3.4, 73.9, 3.3);
            ctx.bezierCurveTo(73.3, 3.3, 73.0, 3.0, 73.0, 2.4);
            ctx.bezierCurveTo(73.0, 1.8, 73.4, 1.3, 73.9, 1.3);
            ctx.bezierCurveTo(74.6, 1.3, 74.9, 1.7, 74.9, 2.3);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(53.6, 90.7);
            ctx.bezierCurveTo(53.6, 91.3, 53.2, 91.6, 52.6, 91.6);
            ctx.bezierCurveTo(52.1, 91.7, 51.6, 91.2, 51.6, 90.6);
            ctx.bezierCurveTo(51.6, 90.1, 52.1, 89.6, 52.7, 89.6);
            ctx.bezierCurveTo(53.1, 89.6, 53.7, 90.0, 53.6, 90.7);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(18.1, 7.5);
            ctx.bezierCurveTo(17.5, 7.5, 17.1, 7.1, 17.1, 6.5);
            ctx.bezierCurveTo(17.1, 5.9, 17.5, 5.5, 18.1, 5.5);
            ctx.bezierCurveTo(18.7, 5.5, 19.1, 5.9, 19.1, 6.5);
            ctx.bezierCurveTo(19.1, 7.1, 18.7, 7.5, 18.1, 7.5);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(95.6, 54.4);
            ctx.bezierCurveTo(95.6, 55.0, 95.3, 55.4, 94.7, 55.4);
            ctx.bezierCurveTo(94.1, 55.4, 93.6, 54.9, 93.6, 54.4);
            ctx.bezierCurveTo(93.6, 53.8, 94.1, 53.4, 94.7, 53.4);
            ctx.bezierCurveTo(95.3, 53.4, 95.6, 53.8, 95.6, 54.4);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(52.6, 85.3);
            ctx.bezierCurveTo(52.0, 85.3, 51.9, 85.4, 52.0, 86.1);
            ctx.bezierCurveTo(51.7, 86.0, 51.4, 86.0, 51.2, 86.1);
            ctx.bezierCurveTo(51.0, 86.3, 50.9, 86.1, 50.8, 86.0);
            ctx.bezierCurveTo(50.7, 85.6, 50.8, 85.0, 51.2, 84.7);
            ctx.bezierCurveTo(51.6, 84.4, 52.3, 84.3, 52.6, 84.6);
            ctx.bezierCurveTo(52.9, 84.8, 52.5, 85.0, 52.6, 85.2);
            ctx.lineTo(52.6, 85.3);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(52.1, 42.8);
            ctx.bezierCurveTo(52.0, 43.0, 51.9, 43.2, 51.6, 43.1);
            ctx.bezierCurveTo(51.3, 43.1, 51.2, 43.0, 51.2, 42.7);
            ctx.bezierCurveTo(51.2, 42.4, 51.4, 42.3, 51.7, 42.3);
            ctx.bezierCurveTo(51.9, 42.3, 52.0, 42.5, 52.1, 42.8);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(50.9, 43.6);
            ctx.bezierCurveTo(50.9, 43.9, 50.7, 44.1, 50.5, 44.1);
            ctx.bezierCurveTo(50.2, 44.1, 50.1, 43.9, 50.1, 43.7);
            ctx.bezierCurveTo(50.1, 43.4, 50.2, 43.3, 50.5, 43.3);
            ctx.bezierCurveTo(50.7, 43.3, 50.8, 43.4, 50.9, 43.6);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(48.6, 45.5);
            ctx.bezierCurveTo(48.6, 45.9, 48.5, 46.0, 48.2, 46.0);
            ctx.bezierCurveTo(48.0, 46.0, 47.8, 45.9, 47.8, 45.6);
            ctx.bezierCurveTo(47.8, 45.4, 47.9, 45.2, 48.2, 45.2);
            ctx.bezierCurveTo(48.5, 45.2, 48.6, 45.3, 48.6, 45.5);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(28.8, 17.5);
            ctx.bezierCurveTo(29.0, 17.5, 29.1, 17.5, 29.1, 17.7);
            ctx.bezierCurveTo(29.0, 17.9, 29.1, 18.3, 28.8, 18.3);
            ctx.bezierCurveTo(28.6, 18.3, 28.5, 18.1, 28.5, 17.9);
            ctx.bezierCurveTo(28.5, 17.6, 28.6, 17.5, 28.8, 17.5);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(51.7, 86.8);
            ctx.bezierCurveTo(51.6, 86.7, 51.4, 86.7, 51.4, 86.5);
            ctx.bezierCurveTo(51.3, 86.4, 51.5, 86.3, 51.6, 86.3);
            ctx.bezierCurveTo(51.8, 86.3, 51.9, 86.4, 52.0, 86.6);
            ctx.bezierCurveTo(52.0, 86.7, 51.9, 86.8, 51.7, 86.8);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(52.4, 86.8);
            ctx.bezierCurveTo(52.3, 86.5, 52.1, 86.3, 52.3, 86.1);
            ctx.bezierCurveTo(52.4, 86.1, 52.6, 86.0, 52.8, 86.1);
            ctx.bezierCurveTo(52.9, 86.1, 52.8, 86.2, 52.8, 86.3);
            ctx.bezierCurveTo(52.6, 86.3, 52.5, 86.5, 52.4, 86.8);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(52.6, 85.2);
            ctx.bezierCurveTo(52.8, 85.3, 53.0, 85.5, 53.1, 85.8);
            ctx.bezierCurveTo(52.8, 85.6, 52.6, 85.8, 52.3, 85.7);
            ctx.bezierCurveTo(52.3, 85.5, 52.7, 85.5, 52.6, 85.3);
            ctx.lineTo(52.6, 85.2);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(48.6, 44.8);
            ctx.bezierCurveTo(48.6, 44.8, 48.6, 44.8, 48.7, 44.8);
            ctx.bezierCurveTo(48.6, 44.8, 48.6, 44.8, 48.6, 44.8);
            ctx.lineTo(48.6, 44.8);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(38.5, 30.1);
            ctx.bezierCurveTo(38.5, 30.1, 38.4, 30.1, 38.4, 30.2);
            ctx.bezierCurveTo(38.4, 30.1, 38.5, 30.1, 38.5, 30.1);
            ctx.lineTo(38.5, 30.1);
            ctx.closePath();
            ctx.fillStyle = "rgb(228, 48, 96)";
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(53.3, 42.0);
            ctx.bezierCurveTo(53.2, 42.1, 53.2, 42.3, 53.1, 42.4);
            ctx.bezierCurveTo(53.0, 42.5, 52.9, 42.6, 52.7, 42.6);
            ctx.bezierCurveTo(52.6, 42.6, 52.6, 42.6, 52.6, 42.5);
            ctx.bezierCurveTo(52.5, 42.3, 52.8, 42.3, 52.8, 42.1);
            ctx.bezierCurveTo(52.6, 42.0, 52.3, 42.1, 52.1, 42.1);
            ctx.lineTo(52.1, 42.1);
            ctx.bezierCurveTo(51.9, 41.4, 52.0, 41.3, 52.6, 41.2);
            ctx.lineTo(52.6, 41.2);
            ctx.bezierCurveTo(52.7, 41.5, 52.4, 41.5, 52.3, 41.7);
            ctx.bezierCurveTo(52.6, 41.8, 52.8, 41.7, 53.1, 41.7);
            ctx.lineTo(53.1, 41.7);
            ctx.bezierCurveTo(53.1, 41.8, 53.1, 41.8, 53.2, 41.8);
            ctx.lineTo(53.2, 41.8);
            ctx.bezierCurveTo(53.2, 41.9, 53.2, 42.0, 53.3, 42.0);
            ctx.lineTo(53.3, 42.0);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(52.6, 41.2);
            ctx.bezierCurveTo(52.6, 41.0, 52.6, 40.9, 52.7, 40.8);
            ctx.bezierCurveTo(52.9, 40.7, 52.9, 40.9, 53.0, 41.0);
            ctx.bezierCurveTo(53.2, 41.2, 53.4, 41.4, 53.6, 41.6);
            ctx.bezierCurveTo(53.6, 41.7, 53.8, 41.8, 53.7, 42.0);
            ctx.bezierCurveTo(53.5, 42.1, 53.4, 42.0, 53.3, 42.0);
            ctx.lineTo(53.3, 42.0);
            ctx.bezierCurveTo(53.3, 41.9, 53.2, 41.8, 53.2, 41.8);
            ctx.lineTo(53.2, 41.8);
            ctx.bezierCurveTo(53.2, 41.8, 53.1, 41.7, 53.1, 41.7);
            ctx.lineTo(53.1, 41.7);
            ctx.bezierCurveTo(53.0, 41.5, 52.8, 41.3, 52.6, 41.2);
            ctx.lineTo(52.6, 41.2);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Compound Path
            ctx.beginPath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(1.2, 102.5);
            ctx.bezierCurveTo(0.9, 102.8, 0.5, 102.9, 0.2, 102.6);
            ctx.bezierCurveTo(-0.1, 102.3, -0.1, 102.0, 0.2, 101.7);
            ctx.lineTo(0.2, 101.7);
            ctx.bezierCurveTo(0.2, 101.7, 0.2, 101.8, 0.2, 101.9);
            ctx.bezierCurveTo(0.3, 101.8, 0.3, 101.7, 0.3, 101.7);
            ctx.lineTo(0.3, 101.7);
            ctx.bezierCurveTo(0.4, 101.7, 0.5, 101.7, 0.4, 101.6);
            ctx.lineTo(0.4, 101.6);
            ctx.bezierCurveTo(0.6, 101.6, 0.8, 101.6, 1.1, 101.6);
            ctx.lineTo(1.1, 101.6);
            ctx.bezierCurveTo(1.0, 101.7, 1.1, 101.7, 1.2, 101.7);
            ctx.lineTo(1.2, 101.7);
            ctx.bezierCurveTo(1.2, 101.9, 1.2, 102.2, 1.2, 102.4);
            ctx.lineTo(1.2, 102.4);
            ctx.bezierCurveTo(1.1, 102.3, 1.0, 102.4, 1.0, 102.5);
            ctx.bezierCurveTo(1.0, 102.6, 1.1, 102.5, 1.2, 102.5);
            ctx.lineTo(1.2, 102.5);
            ctx.closePath();
            // layer1/Group/Compound Path/Path
            ctx.moveTo(0.2, 102.1);
            ctx.bezierCurveTo(0.2, 102.0, 0.2, 102.0, 0.2, 102.0);
            ctx.bezierCurveTo(0.1, 102.0, 0.1, 102.0, 0.1, 102.0);
            ctx.bezierCurveTo(0.1, 102.1, 0.1, 102.1, 0.1, 102.1);
            ctx.bezierCurveTo(0.2, 102.1, 0.2, 102.1, 0.2, 102.1);
            ctx.closePath();
            ctx.fillStyle = "rgb(254, 253, 254)";
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(0.4, 101.4);
            ctx.bezierCurveTo(0.6, 101.3, 0.9, 101.2, 1.1, 101.4);
            ctx.bezierCurveTo(1.1, 101.4, 1.1, 101.5, 1.1, 101.5);
            ctx.bezierCurveTo(0.8, 101.5, 0.6, 101.5, 0.4, 101.5);
            ctx.lineTo(0.4, 101.4);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(0.2, 101.7);
            ctx.bezierCurveTo(0.2, 101.6, 0.2, 101.5, 0.3, 101.6);
            ctx.lineTo(0.3, 101.6);
            ctx.bezierCurveTo(0.3, 101.6, 0.3, 101.6, 0.3, 101.7);
            ctx.lineTo(0.3, 101.7);
            ctx.bezierCurveTo(0.3, 101.7, 0.2, 101.7, 0.2, 101.7);
            ctx.lineTo(0.2, 101.7);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(0.3, 101.6);
            ctx.bezierCurveTo(0.2, 101.5, 0.3, 101.4, 0.4, 101.4);
            ctx.bezierCurveTo(0.4, 101.4, 0.4, 101.5, 0.4, 101.5);
            ctx.bezierCurveTo(0.4, 101.5, 0.4, 101.5, 0.4, 101.6);
            ctx.lineTo(0.4, 101.6);
            ctx.bezierCurveTo(0.4, 101.6, 0.3, 101.6, 0.3, 101.6);
            ctx.lineTo(0.3, 101.6);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(52.6, 41.2);
            ctx.bezierCurveTo(52.8, 41.3, 53.0, 41.5, 53.1, 41.7);
            ctx.bezierCurveTo(52.8, 41.7, 52.6, 41.8, 52.3, 41.7);
            ctx.bezierCurveTo(52.4, 41.5, 52.7, 41.5, 52.6, 41.2);
            ctx.closePath();
            ctx.fillStyle = "rgb(153, 27, 54)";
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(53.1, 41.7);
            ctx.bezierCurveTo(53.1, 41.7, 53.2, 41.8, 53.2, 41.8);
            ctx.bezierCurveTo(53.1, 41.8, 53.1, 41.8, 53.1, 41.7);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(53.2, 41.8);
            ctx.bezierCurveTo(53.2, 41.8, 53.3, 41.9, 53.3, 42.0);
            ctx.bezierCurveTo(53.2, 42.0, 53.2, 41.9, 53.2, 41.8);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(0.4, 101.6);
            ctx.bezierCurveTo(0.4, 101.5, 0.4, 101.5, 0.4, 101.5);
            ctx.bezierCurveTo(0.6, 101.5, 0.8, 101.5, 1.1, 101.5);
            ctx.bezierCurveTo(1.1, 101.5, 1.1, 101.5, 1.1, 101.6);
            ctx.bezierCurveTo(0.8, 101.6, 0.6, 101.6, 0.4, 101.6);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(1.2, 102.4);
            ctx.bezierCurveTo(1.2, 102.5, 1.2, 102.5, 1.2, 102.5);
            ctx.bezierCurveTo(1.1, 102.5, 1.0, 102.6, 1.0, 102.5);
            ctx.bezierCurveTo(1.0, 102.4, 1.1, 102.3, 1.2, 102.4);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(0.2, 101.7);
            ctx.bezierCurveTo(0.2, 101.7, 0.3, 101.7, 0.3, 101.7);
            ctx.bezierCurveTo(0.3, 101.7, 0.3, 101.8, 0.2, 101.9);
            ctx.bezierCurveTo(0.2, 101.8, 0.2, 101.7, 0.2, 101.7);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(1.1, 101.6);
            ctx.bezierCurveTo(1.1, 101.6, 1.2, 101.6, 1.2, 101.7);
            ctx.bezierCurveTo(1.1, 101.7, 1.0, 101.7, 1.1, 101.6);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(0.3, 101.6);
            ctx.bezierCurveTo(0.3, 101.6, 0.4, 101.6, 0.4, 101.6);
            ctx.bezierCurveTo(0.5, 101.7, 0.4, 101.7, 0.3, 101.7);
            ctx.bezierCurveTo(0.3, 101.6, 0.3, 101.6, 0.3, 101.6);
            ctx.closePath();
            ctx.fill("evenodd");
            // layer1/Group/Path
            ctx.beginPath();
            ctx.moveTo(0.2, 102.1);
            ctx.bezierCurveTo(0.2, 102.1, 0.2, 102.1, 0.1, 102.1);
            ctx.bezierCurveTo(0.1, 102.1, 0.1, 102.1, 0.1, 102.0);
            ctx.bezierCurveTo(0.1, 102.0, 0.1, 102.0, 0.2, 102.0);
            ctx.bezierCurveTo(0.2, 102.0, 0.2, 102.0, 0.2, 102.1);
            ctx.closePath();
            ctx.fill("evenodd");
            ctx.restore();
            ctx.restore();
        }
    }
})(A9 || (A9 = {}));
//# sourceMappingURL=deko.js.map