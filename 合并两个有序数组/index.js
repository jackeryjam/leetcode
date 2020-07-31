/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/914/
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    const insert = (arr, len, pos, num) => {
        while (pos < len && arr[pos] <= num) {
            pos++;
        }
        for (let i = len; i > pos; i--) {
            arr[i] = arr[i - 1];
        }
        arr[pos] = num;
        return pos;
    }
    for (let i = 0, pos = 0; i < n; i++, m++) {
        pos = insert(nums1, m, pos, nums2[i]) + 1;
    }
};

merge([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3)