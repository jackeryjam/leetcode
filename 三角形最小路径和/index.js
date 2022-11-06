/**
 * https://leetcode-cn.com/explore/interview/card/bytedance/246/dynamic-programming-or-greedy/1030/
 * 
 * @param {number[][]} triangle
 * @return {number}
 */
var minimumTotal = function (triangle) {
    let pre = triangle.pop();
    if (pre == null) {
        return 0;
    } else if (pre.length == 1) {
        return pre[0];
    }
    let arr = triangle.pop();
    while (arr) {
        for (let i = 0; i < arr.length; i++) {
            arr[i] += pre[i] < pre[i + 1] ? pre[i] : pre[i + 1];
        }
        pre = arr;
        arr = triangle.pop();
    }
    return pre[0];
};

console.log(minimumTotal([
    [2],
   [3,4],
  [6,5,7],
 [4,1,8,3]
]))