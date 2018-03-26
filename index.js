"use strict";
let canvases = 0;
class app {
    constructor(backgound = "#000000", canvas = null, size = null, autoresize = true) {
        this.backgound = backgound;
        this.rectangles = [];
        this.size = size;
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
            this.canvas.height = size[1];
        }
        this.scale = 0;
        if (size != null) {
            //this.scle()
        }
        this.context.save();
    }
    scle() {
        this.context.restore();
        this.context.save();
        this.size = this.size;
        if (Math.abs(this.size[0] - document.body.clientWidth) <= Math.abs(this.size[1] - document.body.clientHeight)) {
            //this.context.translate((this.scale* document.body.clientWidth)/2,0)
            this.scale = Math.abs(document.body.clientWidth / this.size[0]);
        }
        else {
            //this.context.translate(0,(this.scale* document.body.clientHeight)/2)
            this.scale = Math.abs(document.body.clientHeight / this.size[1]);
        }
        //this.scale = 1/ this.scale
        console.log(this.scale);
        this.context.scale(this.scale, this.scale);
    }
    start() {
        setup();
        this.update();
    }
    update() {
        if (this.autoresize && (document.body.clientWidth != this.oldsize[0] || document.body.clientHeight != this.oldsize[1])) {
            this.canvas.width = document.body.clientWidth;
            this.canvas.height = document.body.clientHeight;
            this.oldsize[0] = document.body.clientWidth;
            this.oldsize[1] = document.body.clientHeight;
            this.canvas.width = document.body.clientWidth;
            this.canvas.height = document.body.clientHeight;
            this.oldsize[0] = document.body.clientWidth;
            this.oldsize[1] = document.body.clientHeight;
            this.size = this.size;
            //this.scle()
            onWMove();
        }
        if (this.autoresize && this.size != null) {
        }
        this.context.fillStyle = this.backgound;
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height);
        draw();
        requestAnimationFrame(() => this.update());
    }
    createRect(x, y, w, h, style) {
        this.rectangles.push(new rectangle(x, y, w, h, this.context, style));
        return this.rectangles[this.rectangles.length - 1];
    }
}
class rectangle {
    constructor(x, y, w, h, context, style = { fill: true, fillStyle: "#FFFFFF", stroke: false, strokeStyle: "#000000", strokeWeight: 2 }) {
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        this.context = context;
        this.style = style;
        this.show = true;
    }
    draw() {
        if (this.show) {
            if (this.style.fill) {
                this.context.fillStyle = this.style.fillStyle;
                this.context.fillRect(this.x, this.y, this.w, this.h);
            }
            if (this.style.stroke) {
                this.context.strokeStyle = this.style.strokeStyle;
                this.context.lineWidth = this.style.strokeWeight;
                this.context.strokeRect(this.x, this.y, this.w, this.h);
            }
        }
    }
}
class circle {
    constructor(x, y, r, context, style = { fill: true, fillStyle: "#FFFFFF", stroke: false, strokeStyle: "#000000", strokeWeight: 2 }) {
        this.x = x;
        this.y = y;
        this.r = r;
        this.context = context;
        this.Style = style;
        this.show = true;
    }
    draw() {
        if (this.show) {
            if (this.Style.fill) {
                this.context.beginPath();
                this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
                this.context.fillStyle = this.Style.fillStyle;
                this.context.fill();
            }
            if (this.Style.stroke) {
                this.context.beginPath();
                this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
                this.context.strokeStyle = this.Style.strokeStyle;
                this.context.lineWidth = this.Style.strokeWeight;
                this.context.stroke();
            }
        }
    }
}
let f = 0;
let cir;
let resolution = [1920, 1080];
let game = new app("#000000", null, resolution, false);
let tiles = [];
let whidth = game.canvas.width;
let height = game.canvas.height;
function setup() {
    tiles.push(game.createRect(0, 0, game.canvas.width, game.canvas.height, { fill: true, fillStyle: "#FFFFFF", stroke: false, strokeStyle: "", strokeWeight: 0 }));
    // for(let x= 0; x<whidth;x+=40) {
    //     for (let y = 0; y< height ; y+=40){
    //         tiles.push(game.createRect(x,y,40,40,{fill : true , fillStyle : "#FFFFFF", stroke:true,strokeStyle:"#000000",strokeWeight:1}))
    //     }
    // }
}
function draw() {
    f += 1;
    let l = tiles.length;
    for (let i = 0; i < l; i++) {
        tiles[i].draw();
    }
}
function onWMove() {
    tiles = [];
    height = game.canvas.height;
    whidth = game.canvas.width;
    tiles.push(game.createRect(0, 0, 1280, 720, { fill: true, fillStyle: "#FFFFFF", stroke: false, strokeStyle: "", strokeWeight: 0 }));
    // for(let x= 0; x<whidth;x+=40) {
    //     for (let y = 0; y< height ; y+=40){
    //         tiles.push(game.createRect(x,y,40,40,{fill : true , fillStyle : "#FFFFFF", stroke:true,strokeStyle:"#000000",strokeWeight:1}))
    //     }
    // }
}
addEventListener("mousemove", function (e) {
    for (let i = 0; i < tiles.length; i++) {
    }
});
game.start();
