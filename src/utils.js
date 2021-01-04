// canvas 内部使用物理像素，保证清晰
export class CanvasUtils {

    // 一个物理像素分辨率与CSS像素分辨率之比
    static get dpr() {
        return window.DeviceAcceleration || 1
    }

    static npx(px) {
        return parseInt(px * CanvasUtils.dpr, 10)
    }

    static get thinLineWidth() {
        return 0.5 * CanvasUtils.dpr
    }

}
