// leetcode/easy/2706. Buy Two Chocolates
// 2706-buy-two-chocolates
// URL: https://leetcode.com/problems/buy-two-chocolates/description/
//
// NOTE: Description
// NOTE: Constraints
// NOTE: Explanatin
// NOTE: Reference

function buyChoco(prices: number[], money: number): number {
  prices.sort((a, b) => (a - b));

  let count = 0;
  let _money = money;

  for (let i = 0; i < prices.length; i += 1) {
    if (_money >= prices[i]) {
      count += 1;
      _money -= prices[i];
    }

    if (count >= 2) {
      break;
    }
  }

  if (count < 2) {
    return money;
  }

  return _money;
}

let prices = [1, 2, 2];
let money = 3;
console.log(buyChoco(prices, money));
// Output: 0

prices = [3, 2, 3];
money = 3;
console.log(buyChoco(prices, money));
// Output: 3

prices = [2, 12, 93, 52, 91, 86, 81, 1, 79, 64];
money = 43;
console.log(buyChoco(prices, money));
