let canvases = 0
class app {
    backgound: string
    canvas: HTMLCanvasElement
    context: CanvasRenderingContext2D
    autoresize: boolean
    constructor(backgound: string = "000000", canvas: HTMLCanvasElement | null = null, size: number[] | null = null, autoresize = false) {
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
        if (size === null || autoresize === true) {
            this.canvas.width = window.outerWidth
            this.canvas.height = window.outerHeight
        } else {
            this.canvas.width = size[0]
            this.canvas.height = size[0]
        }
        updt()
    }
}
function updt(): void {
    window.requestAnimationFrame(function () {
        updt()
        draw()
    })
}
