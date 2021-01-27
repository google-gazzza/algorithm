/*
122-best-time-to-buy-and-sell-stock-ii

# leetcode/easy/122. Best Time to Buy and Sell Stock II
Difficulty: easy
URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

## Approach

### en

### kr

## Solution
### JavaScript

*/

const maxProfit = (prices) => {
  let maxGap = 0;
  let min = prices[0];
  
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] < min) {
      min = prices[i];
    } else if (prices[i] - min > maxGap) {
      maxGap = prices[i] - min;
    }
  }
  
  return maxGap;
};
