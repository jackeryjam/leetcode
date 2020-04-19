/**
 * 买卖股票的最佳时机
 * https://leetcode-cn.com/explore/interview/card/bytedance/246/dynamic-programming-or-greedy/1043/
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
    let max = 0;
    let profit = 0;
    let len = prices.length;
    if (len < 2) {
        return 0;
    } else if (len == 2) {
        return prices[1] - prices[0] > 0 ? prices[1] - prices[0] : 0;
    }
    // 先假设长度大于三
    let last = prices[0];
    for (let i = 1; i < len - 1; i++) {
        if (prices[i] > prices[i - 1] && prices[i] >= prices[i + 1]) {
            profit += prices[i] - last;
            last = prices[i];
        }
        else if (prices[i] < prices[i - 1] && prices[i] <= prices[i + 1]) {
            last = prices[i];
        }
    }
    if (prices[len - 1] - last > 0) {
        profit += prices[len - 1] - last;
    }
    return profit;
};

console.log(maxProfit([7,6,4,3,1,2, 3,1, 0,4]))