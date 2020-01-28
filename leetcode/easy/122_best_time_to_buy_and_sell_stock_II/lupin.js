// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
// Runtime: 60 ms, faster than 62.22% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
// Memory Usage: 38.6 MB, less than 19.05% of JavaScript online submissions for Best Time to Buy and Sell Stock II.
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min = Number.MAX_VALUE;
    let maxProfits = 0;
    let profit;

    prices.forEach((value,index)=>{
        if(value<min){
            min=value;
        }else{
            profit = value-min;
            if(profit>maxProfits){
                maxProfits=profit+ maxProfit(prices.slice(index));
            }
        }
    })

    return maxProfits;
};