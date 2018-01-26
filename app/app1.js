var shootGame = function () {
    var SHOOTS = 12;  // 投篮总数量
    var HITLENGTH = 8; // 命中数量

    var shootsArray = [] // 投篮数组
    var hitLengthArray = [] // 命中有多少中排列
    var count = 0

    var hit = (function () {
        var moveX = 0
        for (var i = 0; i < HITLENGTH; i++) {
            shootsArray[i] = []
            for (var j = 0; j < SHOOTS; j++) {
                shootsArray[i][j] = []


                for (var k = 0; k < SHOOTS - HITLENGTH; k++) {
                    moveX = k
                    for ( var z = 0; z < HITLENGTH; z++) {
                        shootsArray[i][j][count] = true

                    }
                }Å
                count += 1
            }
        }



        console.log(shootsArray)
        console.log(hitLengthArray)
    })()

}

shootGame()