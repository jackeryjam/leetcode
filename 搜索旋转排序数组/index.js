/**
 * 搜索旋转排序数组
 * https://leetcode-cn.com/explore/interview/card/bytedance/243/array-and-sorting/1017/
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {

    let len = nums.length;
    const find = (left, right) => {
        if (left === right) {
            return nums[left] === target ? left + 1 : 0;
        }
        if (nums[left] <= nums[right] && (nums[left] > target || nums[right] < target)) {
            return 0;
        }

        let mid = Math.floor((left + right) * 0.5);
        return find(left, mid) || find(mid + 1, right);
    }

    return find(0, nums.length) - 1;
};

console.log(search([4,5,6,7,0,1,2], 3))