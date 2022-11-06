/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/895/
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    const findKthfrom2SortedArrays = (nums1, start1, end1, nums2, start2, end2, k) => {
        let len1 = end1 - start1 + 1;
        let len2 = end2 - start2 + 1;
        if (len2 < len1) {
            return findKthfrom2SortedArrays(nums2, start2, end2, nums1, start1, end1, k);
        }
        if (len1 == 0) {
            return nums2[start2 + k - 1];
        }
        if (k == 1) {
            return nums1[start1] < nums2[start2] ? nums1[start1] : nums2[start2];
        }
        let half = Math.floor(k / 2);
        if(len1 < half) {
            half = len1;
        }
        if(nums1[start1 + half - 1] < nums2[start2 + half - 1]) {
            return findKthfrom2SortedArrays(nums1, start1 + half, end1, nums2, start2, end2, k - half);
        } else {
            return findKthfrom2SortedArrays(nums1, start1, end1, nums2, start2 + half, end2, k - half);
        }
    }
    let len1 = nums1.length;
    let len2 = nums2.length;
    let k1 = Math.ceil((len1 + len2) / 2);
    let k2 = Math.ceil((len1 + len2 + 1) / 2);
    return k1 === k2
        ? findKthfrom2SortedArrays(nums1, 0, len1 - 1, nums2, 0, len2 - 1, k1)
        : ((findKthfrom2SortedArrays(nums1, 0, len1 - 1, nums2, 0, len2 - 1, k1) + findKthfrom2SortedArrays(nums1, 0, len1 - 1, nums2, 0, len2 - 1, k2))) * 0.5;
};
var nums1 = [1, 2]
var nums2 = [3, 4, 5, 6, 7, 8] 
console.log(findMedianSortedArrays(nums1, nums2))
