/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/912/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const runner = (function (_matrix) {
        let x = 0, y = 0;
        let action = {
            up: () => _matrix[x--][y],
            down: () => _matrix[x++][y],
            left: () => _matrix[x][y--],
            right: () => _matrix[x][y++],
        }
        const run = (mode, time) => {
            let res = [];
            while (time--) {
                res.push(action[mode]())
            }
            return res;
        }
        return {
            up: time => run("up", time),
            down: time => run("down", time),
            left: time => run("left", time),
            right: time => run("right", time),
        }
    })(matrix);
    let nextAction = {
        "right": "down",
        "down": "left",
        "left": "up",
        "up": "right",
    }
    let x = matrix[0].length, y = matrix.length;
    const mLen = (function (xLen, yLen) {
        return {
            getLen: (action) => (action == "right" || action == "left") ? xLen : yLen,
            decrease: action => {
                --xLen;
                --yLen;
            },
        }
    })(x, y)
    let time = 0,
        next = "right",
        res = [];
    while (mLen.getLen(next) > 0) {
        if (time == 0) {
            mLen.decrease()
            if (mLen.getLen(next) == 0) break;
            res.push(runner[next](mLen.getLen(next)));
            next = nextAction[next];
            time = 2;
        } else {
            res.push(runner[next](mLen.getLen(next)));
            next = nextAction[next];
            time--;
        }
    }
    res = res.flat()
    let len = x * y;
    console.log(res.length > x * y)
    if (res.length > x * y) {
        res.splice(len, 1)
    }
    return res;
};

console.log(spiralOrder([
    [1, 2, 3, 4, 14],
    [5, 6, 7, 8, 15],
    [9, 10, 11, 12, 16]
]))