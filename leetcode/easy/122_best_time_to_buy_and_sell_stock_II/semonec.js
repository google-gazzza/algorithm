// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/submissions/
// Runtime: 56 ms, faster than 83.62% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 35.6 MB, less than 28.57% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if (!prices || !prices.length || prices.length === 1) return 0;
    
    let maxProfit = 0;
    let currProfit = 0;
    for (let i = 1; i < prices.length; i++) {
        let gap = prices[i] - prices[i-1];
        if (gap > 0)
            currProfit += gap;
        else {
            maxProfit += currProfit; 
            currProfit = 0;
        }
    }
    maxProfit += currProfit; 
    return maxProfit;
};