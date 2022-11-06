/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/912/
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if(matrix.length == 0) return []
    const traverse = (matrix, [x1, y1], [x2, y2]) => {
        let res = []
        if (y1 == y2) {
            for (let i = x1; i <= x2; i++) {
                res.push(matrix[y2][i]);
            }
            return res;
        }
        if (x1 == x2) {
            for (let i = y1; i <= y2; i++) {
                res.push(matrix[i][x1]);
            }
            return res;
        }
        for (let i = x1; i < x2; i++) {
            res.push(matrix[y1][i]);
        }
        for (let i = y1; i < y2; i++) {
            res.push(matrix[i][x2]);
        }
        for (let i = x2; i > x1; i--) {
            res.push(matrix[y2][i]);
        }
        for (let i = y2; i > y1; i--) {
            res.push(matrix[i][x1]);
        }
        return res;
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
    return res.flat();
};
console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9,10,11,12]
  ]))