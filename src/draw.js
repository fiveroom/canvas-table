import { CanvasUtils } from './utils.js';

export class DrawBox {

    constructor(){

    }

}

export class Draw {

    constructor(cfg) {
        this.w = cfg.w;
        this.h = cfg.h;
        this.data = cfg.data;
        this.ctx =
        this.canvas = document.getElementById('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.init()
    }

    init() {
        this.setSize();
    }

    reset() {

    }

    setSize() {
        let { clientHeight, clientWidth } = this.canvas;
        this.canvas.setAttribute('height',CanvasUtils.npx(clientHeight));
        this.canvas.setAttribute('width', CanvasUtils.npx(clientWidth));
    }

}
