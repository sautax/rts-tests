let canvases = 0

interface Style {
    fill : boolean
    fillStyle : string
    stroke : boolean
    strokeStyle: string
    strokeWeight : number 
}
class app {
    backgound: string
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
    autoresize: boolean
    oldsize: number[]
    rectangles: rectangle[]
    size : number[]|null
    scale : number
    constructor(backgound: string = "#000000", canvas: HTMLCanvasElement | null = null, size: number[] | null = null, autoresize = true) {
        this.backgound = backgound
        this.rectangles = []
        this.size = size
        this.autoresize = autoresize
        if (canvas != null) {
            this.canvas = canvas
        } else {
            canvases += 1
            let cv = document.createElement('canvas')
            cv.setAttribute('id', '' + canvases)
            document.body.appendChild(cv)
            this.canvas = <HTMLCanvasElement>document.getElementById('' + canvases)
        }
        this.context = <CanvasRenderingContext2D>this.canvas.getContext("2d")
        
        this.oldsize = []
        
        if (size === null || autoresize === true) {
            this.canvas.width = document.body.clientWidth
            this.canvas.height = document.body.clientHeight
            this.oldsize = [document.body.clientWidth, document.body.clientHeight]
            
        } else {
            this.canvas.width = size[0]
            this.canvas.height = size[1]
        }
        this.scale = 0
        if (size!=null) {
            //this.scle()
            
        }
        this.context.save()
    }
    scle () {
        this.context.restore()
        this.context.save()
        this.size = <number[]>this.size
        if (Math.abs(this.size[0]-document.body.clientWidth)<=Math.abs(this.size[1]-document.body.clientHeight)){
            //this.context.translate((this.scale* document.body.clientWidth)/2,0)
            this.scale = Math.abs(document.body.clientWidth/this.size[0])
        } else {
            //this.context.translate(0,(this.scale* document.body.clientHeight)/2)
            this.scale = Math.abs(document.body.clientHeight/this.size[1])
        }
        //this.scale = 1/ this.scale
        
        console.log(this.scale)
        this.context.scale(this.scale,this.scale)
    }
    start() {
        setup()
        this.update()
    }
    update() {
        if (this.autoresize && (document.body.clientWidth != this.oldsize[0] || document.body.clientHeight != this.oldsize[1])) {
            this.canvas.width = document.body.clientWidth
            this.canvas.height = document.body.clientHeight
            
            this.oldsize[0] = document.body.clientWidth
            this.oldsize[1] = document.body.clientHeight
            this.canvas.width = document.body.clientWidth
            this.canvas.height = document.body.clientHeight
            
            this.oldsize[0] = document.body.clientWidth
            this.oldsize[1] = document.body.clientHeight
            this.size = <number[]>this.size
            //this.scle()
            onWMove()
        }
        if (this.autoresize && this.size != null){

        }
        this.context.fillStyle = this.backgound
        this.context.fillRect(0, 0, this.canvas.width, this.canvas.height)


        draw()
        requestAnimationFrame(() => this.update());
    }
    createRect(x: number, y: number, w: number, h: number, style : Style) {
        this.rectangles.push(new rectangle(x, y, w, h, this.context,style ))
        return this.rectangles[this.rectangles.length - 1]
    }
}
class rectangle {
    x: number
    y: number
    w: number
    h: number
    context: CanvasRenderingContext2D
    style : Style
    show: boolean
    constructor(x: number, y: number, w: number, h: number, context: CanvasRenderingContext2D, style : Style = {fill : true,fillStyle : "#FFFFFF", stroke : false , strokeStyle : "#000000",strokeWeight : 2}) {
        this.x = x
        this.y = y
        this.w = w
        this.h = h
        this.context = context
        this.style = style
        this.show = true

    }
    draw() {
        if (this.show) {
            if (this.style.fill) {
                this.context.fillStyle = this.style.fillStyle
                this.context.fillRect(this.x, this.y, this.w, this.h)
            }
            if (this.style.stroke) {
                this.context.strokeStyle = this.style.strokeStyle
                this.context.lineWidth = this.style.strokeWeight
                this.context.strokeRect(this.x, this.y, this.w, this.h)
            }
        }
    }
}
class circle {
    x: number
    y: number
    r: number
    context: CanvasRenderingContext2D
    fStyle: (string | boolean)[]
    sStyle: (boolean | string | number)[]
    show: boolean
    constructor(x: number, y: number, r: number, context: CanvasRenderingContext2D, fStyle = [true, "#000000"], sStyle = [false, "#000000", 1]) {
        this.x = x
        this.y = y
        this.r = r
        this.context = context
        this.fStyle = fStyle
        this.sStyle = sStyle
        this.show = true

    }
    draw() {
        if (this.show) {
            if (this.fStyle[0]) {
                this.context.beginPath()
                this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
                this.context.fillStyle = <string>this.fStyle[1]
                this.context.fill()


            }
            if (this.sStyle[0]) {
                this.context.beginPath()
                this.context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false)
                this.context.strokeStyle = <string>this.sStyle[1]
                this.context.lineWidth = <number>this.sStyle[2]
                this.context.stroke()
            }
        }
    }
}