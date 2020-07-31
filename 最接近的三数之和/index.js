/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/900/
 * 
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    nums = nums.sort((a, b) => a - b)
    let len = nums.length;
    let bios = nums[0] + nums[1] + nums[2] - target;
    for (let i = 0; i < len - 2; i++) {
        let num1 = nums[i];
        let j = i + 1, k = len - 1;
        while (j < k) {
            let num2 = nums[j], num3 = nums[k];
            let tmp = num1 + num2 + num3 - target;
            if (tmp == 0) return target;
            if (Math.abs(tmp) < Math.abs(bios)) {
                bios = tmp;
            }
            if (tmp > 0) {
                k--;
            } else {
                j++;
            }
        }
    }
    return bios + target;
};

console.log(threeSumClosest([-1,2,1,-4], 1))