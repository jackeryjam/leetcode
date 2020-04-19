/**
 *  最长连续递增序列
 * https://leetcode-cn.com/explore/interview/card/bytedance/243/array-and-sorting/1035/
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
    let start = 0;
    let len = 1;
    let numLen = nums.length;
    let tmpLen = 1;
    if(numLen < 2) {
        return nums.length;
    }
    let i = 1
    for (; i < numLen; i++) {
        if (nums[i] > nums[i - 1]) {
            tmpLen++;
        } else {
            if (tmpLen > len) {
                start = i - tmpLen;
                len = tmpLen;
            }
            tmpLen = 1;
        }
    }
    if (tmpLen > len) {
        start = i - tmpLen;
        len = tmpLen;
    }
    return len;
};

console.log(findLengthOfLCIS([1,3,5,7]))