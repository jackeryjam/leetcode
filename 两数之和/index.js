/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/894/
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let set = {};
    nums.forEach((item, index) => set[item] = index);
    let len = nums.length;
    for (let i = 0; i < len; i++) {
        let tmp = target - nums[i];
        if (set[tmp] == null) continue;
        if (i == set[tmp]) continue;
        return [i, set[tmp]];
    }
};