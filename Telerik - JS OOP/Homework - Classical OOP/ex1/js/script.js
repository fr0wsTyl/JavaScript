function getCanvas(canvas) {
    var canvas,
        ctx;
    canvas = document.querySelector(canvas);
    ctx = canvas.getContext('2d');
    return {
        ctx: ctx
    }
}
function Rect(canvas, x, y, w, h) {
    getCanvas(canvas).ctx.beginPath();
    getCanvas(canvas).ctx.rect(x, y, w, h);
    getCanvas(canvas).ctx.stroke();
}

function Circle(canvas, x, y, r) {
    getCanvas(canvas).ctx.beginPath();
    getCanvas(canvas).ctx.arc(x, y, r, 0, Math.PI * 2);
    getCanvas(canvas).ctx.stroke();
}

function Line(canvas, x1, y1, x2, y2) {
    getCanvas(canvas).ctx.beginPath();
    getCanvas(canvas).ctx.lineTo(x1, y1);
    getCanvas(canvas).ctx.lineTo(x2, y2);
    getCanvas(canvas).ctx.stroke();
}

var rect = new Rect('#my-canvas', 20, 20, 200, 200);
var circle = new Circle('#my-canvas', 300, 300, 50);
var line = new Line('#my-canvas', 150, 300, 500, 80);