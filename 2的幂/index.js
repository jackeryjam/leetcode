/**
 * https://leetcode-cn.com/leetbook/read/tencent/x5yjhd/
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function(n) {
    if(n <= 0) return false;
    return (n&(n-1))==0;
};

console.log(isPowerOfTwo(1024))