/**
 * 接雨水
 * https://leetcode-cn.com/explore/interview/card/bytedance/243/array-and-sorting/1047/
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const len = height.length;
    if (len <= 1) return 0;
    const leftMax = "a".repeat(len).split("").map(() => 0);
    const rightMax = "a".repeat(len).split("").map(() => 0);
    let sum = 0,
        max = 0;
    for (let i = 1; i < len; i++) {
        max = max > height[i - 1] ? max : height[i - 1];
        leftMax[i] = max;
    }
    max = 0;
    for (let i = len - 2; i >= 0; i--) {
        max = max > height[i + 1] ? max : height[i + 1];
        rightMax[i] = max;
    }
    for (let i = 1; i < len; i++) {
        const min = leftMax[i] < rightMax[i] ? leftMax[i] : rightMax[i];
        if (min > height[i]) {
            sum += min - height[i];
        }
    }
    return sum;
};

console.log(trap([0,1,0,2,1,0,1,3,2,1,2,1]))