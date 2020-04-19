/**
 *  x 的平方根
 * https://leetcode-cn.com/explore/interview/card/bytedance/247/bonus/1045/
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    if(x === 0) return 0;
    else if(x === 1) return 1;
    for(let i = 1; i <= x; i++) {
        if(i * i > x) {
            return i - 1;
        }
    }
};

console.log(mySqrt(2))