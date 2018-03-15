"use strict";
let canvases = 0;
class app {
    constructor(backgound = "#000000", canvas = null, size = null, autoresize = true) {
        this.backgound = backgound;
        this.rectangles = [];
        this.autoresize = autoresize;
        if (canvas != null) {
            this.canvas = canvas;
        }
        else {
            canvases += 1;
            let cv = document.createElement('canvas');
            cv.setAttribute('id', '' + canvases);
            document.body.appendChild(cv);
            this.canvas = document.getElementById('' + canvases);
        }
        this.context = this.canvas.getContext("2d");
        this.oldsize = [];
        if (size === null || autoresize === true) {
            this.canvas.width = document.body.clientWidth;
            this.canvas.height = document.body.clientHeight;
            this.oldsize = [document.body.clientWidth, document.body.clientHeight];
        }
        else {
            this.canvas.width = size[0];
            this.canvas.height = size[0];
        }
    }
    start() {
        setup();
        this.update();
    }
    update() {
        if (this.autoresize && (document.body.clientWidth != this.oldsize[0] || document.body.clientHeight != this.oldsize[1])) {
            this.canvas.width = document.body.clientWidth;
            this.canvas.height = document.body.clientHeight;
            console.log("moved");
        }
        this.context.fillStyle = this.backgound;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        draw();
        requestAnimationFrame(() => this.update());
    }
    createRect(x, y, w, h, fStyle = [true, "#000000"], sStyle = [false, "#000000", 1]) {
        this.rectangles.push(new rectangle(x, y, w, h, this.context, fStyle, sStyle));
        return this.rectangles[this.rectangles.length - 1];
    }
}
class rectangle {
    constructor(x, y, w, h, context, fStyle = [true, "#000000"], sStyle = [false, "#000000", 1]) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.context = context;
        this.fStyle = fStyle;
        this.sStyle = sStyle;
        this.show = true;
    }
    draw() {
        if (this.show) {
            if (this.fStyle[0]) {
                this.context.fillStyle = this.fStyle[1];
                this.context.fillRect(this.x, this.y, this.w, this.h);
            }
            if (this.sStyle[0]) {
                this.context.strokeStyle = this.sStyle[1];
                this.context.strokeRect(this.x, this.y, this.w, this.h);
            }
        }
    }
}
class circle {
    constructor(x, y, r, context, fStyle = [true, "#000000"], sStyle = [false, "#000000", 1]) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.context = context;
        this.fStyle = fStyle;
        this.sStyle = sStyle;
        this.show = true;
    }
    draw() {
        if (this.show) {
            if (this.fStyle[0]) {
                this.context.beginPath();
                this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
                this.context.fillStyle = this.fStyle[1];
                this.context.fill();
            }
            if (this.sStyle[0]) {
                this.context.beginPath();
                this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
                this.context.strokeStyle = this.sStyle[1];
                this.context.lineWidth = this.sStyle[2];
                this.context.stroke();
            }
        }
    }
}
let x = 100;
let y = 100;
let s = 0;
let f = 0;
let cir;
let game = new app();
let rect = game.createRect(x, y, 50, 50, [true, "#FFFFFF"]);
cir = new circle(500, 500, 60, game.context, [true, "#FF00FF"]);
function setup() {
}
function draw() {
    f += 1;
    s += 0.01;
    rect.x = Math.floor(Math.sin(s) * 100 + 200);
    rect.y = Math.floor(Math.cos(s) * 100 + 200);
    let l = game.rectangles.length;
    for (let i = 0; i < l; i++) {
        game.rectangles[i].draw();
    }
    cir.draw();
}
game.start();
