let canvases = 0
class app {
    backgound: string
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
    autoresize: boolean
    oldsize: number[]
    constructor(backgound: string = "#000000", canvas: HTMLCanvasElement | null = null, size: number[] | null = null, autoresize = true) {
        this.backgound = backgound
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
            this.canvas.height = size[0]
        }
        this.update()
    }
    update() {
        if(this.autoresize && (document.body.clientWidth!= this.oldsize[0]||document.body.clientHeight!= this.oldsize[1])){
            this.canvas.width = document.body.clientWidth
            this.canvas.height = document.body.clientHeight
            console.log("moved")
        }
        draw()
        requestAnimationFrame(()=>this.update());
    }
}
