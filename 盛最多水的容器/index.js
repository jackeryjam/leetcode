/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/903/
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    const maxArea = (height, start, end) => {
        let tmp = (end - start) * Math.min(height[start], height[end])
        if (end - start === 1) {
            return tmp;
        }
        if (height[start] < height[end]) {
            start++;
        } else {
            end--;
        }
        return Math.max(tmp, maxArea(height, start, end))
    }
    return maxArea(height, 0, height.length - 1);
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))