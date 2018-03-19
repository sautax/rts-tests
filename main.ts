let f = 0
let cir: circle
let resolution = [1920,1080]
let game = new app("#000000",null,resolution,false)

let tiles : rectangle[] = []
let whidth = game.canvas.width
let height = game.canvas.height

function setup( ){
    tiles.push(game.createRect(0,0,game.canvas.width,game.canvas.height,{fill : true, fillStyle:"#FFFFFF",stroke : false , strokeStyle : "",strokeWeight : 0}))
    // for(let x= 0; x<whidth;x+=40) {
    //     for (let y = 0; y< height ; y+=40){
    //         tiles.push(game.createRect(x,y,40,40,{fill : true , fillStyle : "#FFFFFF", stroke:true,strokeStyle:"#000000",strokeWeight:1}))
    //     }
    // }
}


function draw() {
    f += 1
    let l = tiles.length
    for (let i = 0; i < l; i++) {
        tiles[i].draw()
    }
}
function onWMove() {
    tiles = []
    height = game.canvas.height
    whidth = game.canvas.width
    tiles.push(game.createRect(0,0,1280,720,{fill : true, fillStyle:"#FFFFFF",stroke : false , strokeStyle : "",strokeWeight : 0}))

    // for(let x= 0; x<whidth;x+=40) {
    //     for (let y = 0; y< height ; y+=40){
    //         tiles.push(game.createRect(x,y,40,40,{fill : true , fillStyle : "#FFFFFF", stroke:true,strokeStyle:"#000000",strokeWeight:1}))
    //     }
    // }
}
addEventListener("mousemove",function(e){
    for (let i = 0 ; i<tiles.length;i++){
    }
})
game.start()