/**
 * https://leetcode-cn.com/explore/interview/card/tencent/221/array-and-strings/897/
 * @param {string} str
 * @return {numStrber}
 */
var myAtoi = function (str) {
    let [, , flag, numStr] = str.match(/^( *)([+-]?)(\d*)/);
    numStr = numStr.replace(/^0+/, "");
    let maxStr = "2147483647";
    let max = 2147483647;
    let minStr = "2147483648";
    let min = -2147483648;
    if (numStr.length > maxStr.length) {
        return flag == "-" ? min : max;
    } else if (numStr.length == maxStr.length) {
        if (flag == "-" && numStr > minStr) {
            return min;
        } else if(flag != "-" && numStr >= maxStr) {
            return max;
        }
    }
    if (numStr == "0") {
        numStr = 0
    }
    return flag == "-" ? (- Number(numStr)) : Number(numStr);
};

console.log(myAtoi("-2147483647"))