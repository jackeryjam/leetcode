/**
 * https://leetcode-cn.com/explore/interview/card/bytedance/246/dynamic-programming-or-greedy/1029/
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    if(nums.length == 1) {
        return nums[0];
    }
    let max = Math.max(...nums);
    let pre1 = nums;
    let pre2 = new Array(nums.length - 1);
    for (let i = 0, len = pre2.length; i < len; i++) {
        let tmp = pre2[i] = pre1[i] + pre1[i + 1];
        if (tmp > max) {
            max = tmp;
        }
    }
    while (pre2.length > 1) {
        let arr = new Array(pre2.length - 1);
        for (let j = 0, len = arr.length; j < len; j++) {
            let tmp = arr[j] = pre2[j] + pre2[j + 1] - pre1[j + 1];
            if (tmp > max) {
                max = tmp;
            }
        }
        pre1 = pre2;
        pre2 = arr;
    }
    return max;
};

console.log(maxSubArray([-2,1,-3,4,-1,2,1,-5,4]))