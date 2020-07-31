/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/906/
 * @param {string} s
 * @return {string}
 */
var reverseWords = function(s) {
    var reverseString = function (s) {
        s = s.split("");
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
        return s.join("");
    };
    return s.split(" ").map(reverseString).join(" ")
};