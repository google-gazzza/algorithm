// [JS][7kyu] Calculator: Coin Combination
// calculator-coin-combination
// https://www.codewars.com/kata/564d0490e96393fc5c000029/train/javascript

const COINS = [25, 10, 5, 1]
const coinCombo = (cents) => {
  const result = []
  COINS.forEach((coin) => {
    result.push(Math.floor(cents / coin))
    cents %= coin
  })
  return result.reverse()
}

coinCombo(1)
coinCombo(2)
coinCombo(5)
coinCombo(6)
coinCombo(10)
coinCombo(11)
