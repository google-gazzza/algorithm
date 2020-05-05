// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/
// Runtime: 56 ms, faster than 85.48% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 35.6 MB, less than 25.93% of JavaScript online submissions for Best Time to Buy and Sell Stock.
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (prices.length === 0) return 0;
    if (prices.length === 1) return 0;
    
    let maxProfit = 0;
    let currProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        currProfit += prices[i] - prices[i-1];
        if (currProfit < 0) {
            currProfit = 0;
        } else {
            maxProfit = Math.max(maxProfit, currProfit);
        }
    }
    return maxProfit;
};