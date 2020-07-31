

/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/913/
* @param {number} n
* @return {number[][]}
*/
var generateMatrix = function (n) {
    let res = [];
    for (let i = 0; i < n; i++) {
        res.push(new Array(n))
    }
    let num = 1
    function spiralOrder(matrix) {
        if (matrix.length == 0) return []
        const traverse = (matrix, [x1, y1], [x2, y2]) => {
            if (y1 == y2) {
                for (let i = x1; i <= x2; i++) {
                    matrix[y2][i]= num++;
                }
                return;
            }
            if (x1 == x2) {
                for (let i = y1; i <= y2; i++) {
                    matrix[i][x1] = num++;
                }
                return;
            }
            for (let i = x1; i < x2; i++) {
                matrix[y1][i] = num++;
            }
            for (let i = y1; i < y2; i++) {
                matrix[i][x2] = num++;
            }
            for (let i = x2; i > x1; i--) {
                matrix[y2][i] = num++;
            }
            for (let i = y2; i > y1; i--) {
                matrix[i][x1] = num++;
            }
        }
        let xLen = matrix[0].length,
            yLen = matrix.length,
            x = 0, y = 0;
        let res = [];
        while (xLen > 0 && yLen > 0) {
            res.push(traverse(matrix, [x, y], [x + xLen - 1, y + yLen - 1]))
            x++;
            y++;
            xLen -= 2;
            yLen -= 2;
        }
    };

    spiralOrder(res)
    return res;
};

console.log(generateMatrix(3))