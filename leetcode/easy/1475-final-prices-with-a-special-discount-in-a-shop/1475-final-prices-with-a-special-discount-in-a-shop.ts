/*
1475-final-prices-with-a-special-discount-in-a-shop
leetcode/easy/1475. Final Prices With a Special Discount in a Shop
Difficulty: easy
URL: https://leetcode.com/problems/maximum-units-on-a-truck/
*/


function finalPrices(prices: number[]): number[] {
    for (let i = 0; i < prices.length; i++) {
      for (let j = i + 1; j < prices.length; j++) {
        if (prices[j] <= prices[i]) {
          prices[i] -= prices[j];
          break;
        }
      }
    }
  
    return prices;
  };
  
  console.log(finalPrices([8, 4, 6, 2, 3]));
  console.log(finalPrices([1, 2, 3, 4, 5]));
  
  