/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/896/
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const isPalindrome = (str, start, len) => {
        let l = start, r = start + len - 1;
        while (l <= r) {
            if (str[l] != str[r]) {
                return false;
            }
            l++;
            r--;
        }
        return true;
    }
    let maxLen = 1,
        startPos = 0,
        strLen = s.length;
    for (let i = 0; i + maxLen < strLen; i++) {
        for (let tmpLen = strLen - i; tmpLen > maxLen; tmpLen--) {
            if (isPalindrome(s, i, tmpLen)) {
                startPos = i;
                maxLen = tmpLen;
                break;
            }
        }
    }
    return s.substr(startPos, maxLen);
};

console.log(longestPalindrome("cbbd"))