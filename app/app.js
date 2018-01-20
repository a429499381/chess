var ui = document.getElementById('ui')
var ctx = ui.getContext('2d')
var WIDTH = 450
var HEIGHT = 450
var me = true;

var chessArrays = []

// 赢法数组
var wins = []

// 赢法种类索引
var count = 0;

// 初始化棋盘数据
var chessdata = (function () {
    for (var i = 0; i < 15; i++) {
        chessArrays[i] = []
        wins[i] = []
        for (var j = 0; j < 15; j++) {
            chessArrays[i][j] = 0
            wins[i][j] = []
        }
    }
})()
console.log(wins)
var countData = (function () {

    // 直线 竖线
    var winLine = (function () {
        for (var i = 0; i < 15; i++) {
            for (var j = 0; j < 11; j++) {
                //  wins[0][0][0] = true
                for (var k = 0; k < 5; k++) {
                    wins[i][j + k][count] = true
                }
                count++;
            }
        }

    })()

    // 斜线赢法
    var winSlash = (function () {
        for (var i = 0; i < 11; i++) {
            for (var j = 0; j < 11; j++) {
                for (var k = 0; k < 5; k++) {
                    wins[i + k][j + k][count] = true
                }
                count++;
            }
        }
        // 反斜线赢法

    })()

    // 反斜线
    var winBackSlash = (function () {
        for (var i = 0; i < 11; i++) {
            for (var j = 14; j > 3; j--) {
                for (var k = 0; k < 5; k++) {
                    wins[i + k][j - k][count] = true
                }
                count++;
            }
        }
    })()
})()


//  绘制棋盘
var initLine = function () {
    // x 坐标画横线， y 坐标画竖线
    for (var i = 0; i < 15; i++) {
        // moveTo x y 坐标开始位置
        ctx.moveTo(15 + i * 30, 15)
        // lineTo x y 坐标结束位置
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
    var gradient = ctx.createRadialGradient(tempX + 2, tempY - 2, 13, tempX + 2, tempY - 2, 0)
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
        var x = Math.floor(e.offsetX / 30)
        var y = Math.floor(e.offsetY / 30)
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




