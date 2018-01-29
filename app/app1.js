var shootGame = function () {
    var SHOOTS = 12;  // 投篮总数量
    var HITLENGTH = 8; // 命中数量

    var shootsArray = [] // 投篮数组
    var hitLengthArray = [] // 命中有多少中排列
    var count = 0

    var shoot = function () {
        for (var i = 0; i < 12 * 12; i++) {
            shootsArray[i] = []
            for (var k = 0; k < 12; k++) {
                shootsArray[i][k] = 1
            }
        }

        // [0][0 + 0] = 0
        // [1][0 + 1] = 0
        // [2][0 + 2] = 0
        // [3][0 + 3] = 0
        // [4][1 + 0] = 0
        // [5][1 + 1] = 0
        // [6][1 + 2] = 0
        // [7][1 + 3] = 0
        for (var j = 0; j < 8; j++) {
            for (var k = 0; k < 8; k++) {
                for (var i = 0; i <= 4; i++) {
                    shootsArray[count][i + k] = 0
                }
                count += 1
            }

            for (var k = 0; k < 8; k++) {
                for (var i = 0; i <= 4; i++) {
                    shootsArray[count][i + k] = 0

                    for(var z = 1; z <= 0; z--) {
                        shootsArray[count][z] = 1
                    }
                }
                count += 1
            }

        }
    }
    shoot()

    console.log(shootsArray)

}

shootGame()
