"use strict";
let canvases = 0;
class app {
    constructor(backgound = "000000", canvas = null, size = null, autoresize = false) {
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
        if (size === null || autoresize === true) {
            this.canvas.width = window.outerWidth;
            this.canvas.height = window.outerHeight;
        }
        else {
            this.canvas.width = size[0];
            this.canvas.height = size[0];
        }
        updt();
    }
}
function updt() {
    window.requestAnimationFrame(function () {
        updt();
        draw();
    });
}
let game = new app();
function draw() {
    console.log('gg');
}
