// https://www.codewars.com/kata/564d0490e96393fc5c000029/

const coinCombo = (cents) => [25, 10, 5, 1].map((coin) => {
  const coinCount = Math.floor(cents / coin);
  cents -= coin * coinCount;
  return coinCount;
}).reverse();

console.log(coinCombo(1), [1, 0, 0, 0]);
console.log(coinCombo(6), [1, 1, 0, 0]);
console.log(coinCombo(11), [1, 0, 1, 0]);
