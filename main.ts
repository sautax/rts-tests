let x = 100
let y = 100
let s = 0
let f = 0
let cir: circle
let game = new app()
let rect = game.createRect(x, y, 50, 50, [true, "#FFFFFF"])
cir = new circle(500, 500, 60, game.context,[true,"#FF00FF"])
function setup() {
}

function draw() {
    f += 1
    s += 0.01
    rect.x = Math.floor(Math.sin(s) * 100 + 200)
    rect.y = Math.floor(Math.cos(s) * 100 + 200)
    
    let l = game.rectangles.length
    for (let i = 0; i < l; i++) {
        game.rectangles[i].draw()
    }
    cir.draw()
}
game.start()