/*
coin-change

# leetcode/top-interview-questions/medium/Coin Change
Difficulty: medium
URL: https://leetcode.com/explore/interview/card/top-interview-questions-medium/111/dynamic-programming/809/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
const coinChange = (coins, amount) => {
  const table = [0];
  
  for (let i = 1; i <= amount; i += 1) {
    const candidate = coins.map((coin) => {
      if ((i - coin) > 0 && table[i - coin] !== Number.MAX_SAFE_INTEGER) {
        return 1 + table[i - coin];
      }
      if ((i - coin) === 0) {
        return 1;
      }
      
      return Number.MAX_SAFE_INTEGER;
    });
    
    table[i] = Math.min(...candidate);
  }
  
  const lastElement = table[table.length - 1];
  
  if (lastElement === Number.MAX_SAFE_INTEGER) {
    return -1;
  }
  
  return lastElement;
};

test('coinChange', () => {
  expect(coinChange([1, 2, 5], 11)).toEqual(3);
  expect(coinChange([2], 3)).toEqual(-1);
  expect(coinChange([2], 1)).toEqual(-1);
  expect(coinChange([1], 0)).toEqual(0);
  expect(coinChange([1], 1)).toEqual(1);
  expect(coinChange([1], 2)).toEqual(2);
});
