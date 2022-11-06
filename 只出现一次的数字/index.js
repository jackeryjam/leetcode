/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
    let res = nums[0],
        len = nums.length;
    for (let i = 1; i < len; i++) {
        res ^= nums[i];
    }
    return res;
};

console.log(singleNumber([2,2,1]))