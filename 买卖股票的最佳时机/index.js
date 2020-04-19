/**
 * 买卖股票的最佳时机
 * https://leetcode-cn.com/explore/interview/card/bytedance/246/dynamic-programming-or-greedy/1042/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0;
    let min = prices[0];
    for(let price of prices) {
        let tmp = price - min;
        max = tmp > max ? tmp : max;
        min = price < min ? price : min;
    }
    return max;
};

console.log(maxProfit([7,6,4,3,1]))