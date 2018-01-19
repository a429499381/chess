var ui = document.getElementById('ui')
var ctx = ui.getContext('2d')
var WIDTH = 450
var HEIGHT = 450


//  绘制棋盘
var initLine = function () {
    for (var i = 0; i < 15; i++) {
        ctx.moveTo(15 + i * 30, 15)
        ctx.lineTo(15 + i * 30, 435)
        ctx.stroke()
        ctx.moveTo(15, 15 + i * 30)
        ctx.lineTo(435, 15 + i * 30)
        ctx.stroke()
    }
}

// 画元一个 450 * 450 无填充的边框
ctx.strokeRect(0, 0, WIDTH, HEIGHT)
ctx.stroke()

initLine()

