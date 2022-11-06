/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function (matrix) {
    if (matrix.length == 0) return 0;
    let m = matrix.length - 1, n = matrix[0].length - 1;
    let max = 0;
    let preLayer = matrix.map(arr => arr.map(val => {
        if(val == "1") {
            max = 1;
        }
        return val == "1";
    }));
    for (let h = 2; m > 0 && n > 0; h++) {
        let layer = [];
        for (let i = 0; i < m; i++) {
            let arr = new Array(n);
            for (let j = 0; j < n; j++) {
                try {
                    let tmp = preLayer[i][j] && preLayer[i + 1][j] && preLayer[i][j + 1] && preLayer[i + 1][j + 1];
                    if (tmp && h > max) {
                        max = h;
                    }
                    arr[j] = tmp;
                } catch (e) {
                    console.log(h, i, j)
                    throw e
                }
            }
            layer.push(arr);
        }
        preLayer = layer;
        m--;
        n--;
    }
    return max * max;
};

console.log(maximalSquare([
    [1, 0, 1, 0, 0],
    [1, 0, 1, 1, 1],
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 0]
]))