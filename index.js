"use strict";
let type = "WebGL";
if (!PIXI.utils.isWebGLSupported()) {
    type = "canvas";
}
PIXI.utils.sayHello(type);
let app = new PIXI.Application({
    width: 256,
    height: 256,
    antialias: true,
    transparent: false,
    resolution: 1 // default: 1
});
app.renderer.autoResize = true;
app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoResize = true;
app.renderer.resize(window.innerWidth, window.innerHeight);
document.body.appendChild(app.view);
