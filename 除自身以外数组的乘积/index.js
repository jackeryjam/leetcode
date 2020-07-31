/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/907/
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    let len = nums.length;
    let res = new Array(len),
        tmp = 1;
    res[0] = 1;
    for (let i = 1; i < len; i++) {
        res[i] = res[i - 1] * nums[i - 1];
    }
    for (let i = len - 2; i >= 0; i--) {
        tmp *= nums[i + 1];
        res[i] = tmp * res[i];
    }
    return res;
};
console.log(productExceptSelf([1, 2, 3, 4]))