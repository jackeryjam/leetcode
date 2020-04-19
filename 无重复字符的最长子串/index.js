/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let str = s;
    let len = s.length;
    function findDiffSubStr(startIndex) {
        let map = {};
        let length = 0;
        for(let i = startIndex; i < len; i++) {
            if(map[str[i]]) {
                return length;
            }
            map[str[i]] = true;
            length++;
        }
        return length;
    }

    let maxLen = 0;
    let startIndex = 0;

    for(let i = 0; i < len; i++) {
        let length = findDiffSubStr(i);
        startIndex = maxLen >= length ? startIndex : i;
        maxLen = maxLen >= length ? maxLen : length;
    }

    return maxLen;

};

console.log(lengthOfLongestSubstring("pwwkew"))