// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
// Runtime: 56 ms, faster than 87.36% of JavaScript online submissions for Best Time to Buy and Sell Stock.
// Memory Usage: 35.2 MB, less than 96.30% of JavaScript online submissions for Best Time to Buy and Sell Stock.

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=Number.MAX_VALUE;
    let maxProfit=0;

    prices.forEach(value=>{
        if(value < min){
            min=value;
        }else{
            if(value-min>maxProfit){
                maxProfit=value-min;
            }
        }
    })
    return maxProfit;
};