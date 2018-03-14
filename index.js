"use strict";
let canvases = 0;
class app {
    constructor(backgound = "#000000", canvas = null, size = null, autoresize = true) {
        this.backgound = backgound;
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
        this.update();
    }
    update() {
        if (this.autoresize && (document.body.clientWidth != this.oldsize[0] || document.body.clientHeight != this.oldsize[1])) {
            this.canvas.width = document.body.clientWidth;
            this.canvas.height = document.body.clientHeight;
            console.log("moved");
        }
        draw();
        requestAnimationFrame(() => this.update());
    }
}
let game = new app();
function draw() {
    console.log('gg');
}
