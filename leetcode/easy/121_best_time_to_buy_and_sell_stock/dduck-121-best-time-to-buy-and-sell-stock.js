/*
121-best-time-to-buy-and-sell-stock

# leetcode/easy/121. Best Time to Buy and Sell Stock
Difficulty: easy
URL: https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function maxProfit(prices) {
  const candidates = [];
  
  let min = prices[0];
  let max = 0;
  
  for (let i = 1; i < prices.length; i += 1) {
    if (prices[i] < min) {
      candidates.push(Math.max(0, max - min));
      min = prices[i];
      max = prices[i];
    }
    if (prices[i] > max) {
      max = prices[i];
    }
  }
  candidates.push(Math.max(0, max - min));
  
  return Math.max(...candidates);
}

// brute-force
function maxProfitBruteForce(prices) {
  return Math.max(0, ...prices.map((e, i, arr) => {
    return Math.max(...arr.slice(i + 1)) - e;
  }));
}

test('test', () => {
  expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  expect(maxProfit([7, 6, 4, 3, 1])).toBe(0);
});
