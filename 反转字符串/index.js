/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/905/
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
    let i = 0,
        j = s.length - 1,
        tmp;
    while (i < j) {
        tmp = s[i];
        s[i] = s[j];
        s[j] = tmp;
        i++;
        j--;
    }
};