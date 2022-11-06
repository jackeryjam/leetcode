/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/902/
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let len = nums.length, tmp = nums[0];
    if (len == 1) return 1;
    for (let i = 1; i < len; i++) {
        if (nums[i] === tmp) {
            nums[i] = null;
        } else {
            tmp = nums[i];
        }
    }
    let i = 0, j = 1;
    while (j < len) {
        if (nums[j] === null || i == j) {
            j++;
            continue;
        }
        if (nums[i] === null) {
            nums[i] = nums[j];
            nums[j] = null;
            j++;
        }
        i++;
    }
    if (nums[i] !== null) i++;
    return i;
};

console.log(removeDuplicates([1, 1,2,4]))