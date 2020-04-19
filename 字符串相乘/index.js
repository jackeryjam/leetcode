/**
 * 字符串相乘
 * https://leetcode-cn.com/explore/interview/card/bytedance/242/string/1015/
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var multiply = function (num1, num2) {
    // str1为长的，str2为短的
    let str1 = num1.length > num2.length ? num1 : num2;
    let str2 = num1.length > num2.length ? num2 : num1;
    str1 = str1.split("").reverse().map(Number);
    str2 = str2.split("").reverse().map(Number);
    let res = "0".repeat(str1.length * 2).split("").map(() => 0);

    let str1len = str1.length;
    let str2len = str2.length;
    for (let i = 0; i < str2len; i++) {
        for (let j = 0; j < str1len; j++) {
            res[i + j] += str1[j] * str2[i];
        }
    }
    let resLen = res.length;
    for (let i = 0; i < resLen - 1; i++) {
        res[i + 1] += Math.floor(res[i] / 10);
        res[i] = res[i] % 10;
    }
    let result = res.reverse().join("").replace(/^0+/, "");
    return result.length ? result : "0";

};

console.log(multiply("1234567890".repeat(100), "1234567890".repeat(100)))