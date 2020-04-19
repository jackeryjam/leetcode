/** 
 * 岛屿的最大面积
 * https://leetcode-cn.com/explore/interview/card/bytedance/243/array-and-sorting/1034/
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function (grid) {
    let xLen = grid[0].length;
    let yLen = grid.length;
    // 记录走过的地方
    let map = {};
    function go(x, y) {
        if (0 <= x && x < xLen && 0 <= y && y < yLen && grid[y][x] && !map[x + "_" + y]) {
            map[x + "_" + y] = true;
            return 1 + go(x + 1, y) + go(x - 1, y) + go(x, y + 1) + go(x, y - 1);
        } else {
            return 0;
        }
    }
    let max = 0;
    for (let y = 0; y < yLen; y++) {
        for (let x = 0; x < xLen; x++) {
            if (!grid[y][x] || map[x + "_" + y]) continue;
            let tmp = go(x, y);
            max = max > tmp ? max : tmp;
        }
    }
    return max;
};

console.log(maxAreaOfIsland([
    [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 1, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 0, 1, 0, 0],
    [0, 1, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0]]))