/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/908/
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    let map = {}, len = nums.length;
    for (let i = 0; i < len; i++) {
        if (map[nums[i]]) {
            return true;
        }
        map[nums[i]] = true;
    }
    return false;
};