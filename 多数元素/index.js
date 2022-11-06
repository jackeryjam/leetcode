/**
 * https://leetcode-cn.com/leetbook/read/tencent/x5yxxs/
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
    let i = 0,
        j = 0,
        len = nums.length,
        res = nums[0];
    while (i < len && j < len) {
        if (nums[i] == null || i == j || nums[i] == nums[j]) {
            i++;
            continue;
        }
        if (nums[j] == null) {
            j++;
            continue;
        }
        if (nums[i] != nums[j]) {
            nums[i] = null;
            nums[j] = null;
            i++;
            j++;
        }
    }
    for (; j < len; j++) {
        if (nums[j] == null) {
            continue;
        }
        return nums[j];
    }
};

console.log(majorityElement([8,8,7,7,7]))