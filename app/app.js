var ui = document.getElementById('ui')
var ctx = ui.getContext('2d')
var WIDTH = 450
var HEIGHT = 450
var me = true;

var chessArrays = []


// 初始化棋盘数据
var chessdata = (function () {
        for (var i = 0; i < 15; i++) {
            chessArrays[i] = []
            for (var j = 0; j < 15; j++) {
                chessArrays[i][j] = 0
            }
        }
    })()

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

// 创建棋子
var pieces = function (x, y, color) {
    var tempX = 15 + x * 30
    var tempY = 15 + y * 30
    //  x y 坐标，圆半径  x y 坐标  圆半径
    var gradient = ctx.createRadialGradient(tempX + 2, tempY - 2, 13, tempX + 2, tempY -2, 0)
    if (color) {
        // 第一个圆的颜色
        gradient.addColorStop(0, '#0a0a0a')
        // 第二个圆的颜色
        gradient.addColorStop(1, '#636766')
    } else {
        // 同上创建白子
        gradient.addColorStop(0, '#f1f1f1')
        gradient.addColorStop(1, '#d1d1d1')
    }

    ctx.beginPath()
    // 定义圆 x y 坐标，半径13，弧度0， 2*PI
    ctx.arc(tempX, tempY, 13, 0, 2 * Math.PI)
    ctx.closePath()
    ctx.fillStyle = gradient
    ctx.fill()
}

// 落子
var drop = (function () {
    ui.onclick = function (e) {
        var x =Math.floor(e.offsetX / 30)
        var y =Math.floor(e.offsetY / 30)
        // 该点没有数据才能落子
        if (chessArrays[x][y] === 0) {
            pieces(x, y, me)
            me ? chessArrays[x][y] = 1 : chessArrays[x][y] = 2
            me = !me
        }

    }
})()


var logo = new Image()
logo.src = 'logo.png'
logo.onload = function () {
    ctx.drawImage(logo, 0, 0, 450, 450)
    // 画元一个 450 * 450 无填充的边框
    ctx.strokeRect(0, 0, WIDTH, HEIGHT)
    ctx.stroke()
    initLine()

}




