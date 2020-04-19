/**
 * 朋友圈
 * https://leetcode-cn.com/explore/interview/card/bytedance/243/array-and-sorting/1036/
 * @param {number[][]} M
 * @return {number}
 */
var findCircleNum = function (M) {
    const len = M.length;
    const visit = "a".repeat(len).split("").map(() => false);

    const findCircle = (() => {
        const recursive = (stu) => {
            visit[stu] = true;
            for (let i = 0; i < len; i++) {
                if (!M[stu][i] || stu === i || visit[i]) continue;
                recursive(i);
            }
        }
        return recursive;
    })();

    let sum = 0;
    for (let i = 0; i < len; i++) {
        if (visit[i]) continue;
        findCircle(i);
        sum++;
    }
    return sum;

};

console.log(findCircleNum([
    [1, 1, 0],
    [1, 1, 0],
    [0, 0, 1]]))

console.log(findCircleNum([
    [1, 1, 0],
    [1, 1, 1],
    [0, 1, 1]]))