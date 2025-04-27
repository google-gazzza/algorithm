// [JS][4kyu] Bob's Signs
// bob-s-signs
// https://www.codewars.com/kata/52fd0a86f721478c8f00080a/train/javascript

class SignMaster {
  constructor() {
    this.prices = { add: 0, rem: 0 }
  }

  changePrices(prices) {
    this.prices = prices
  }

  estimatePrice(oldSign, newSign) {
    const { add, rem } = this.prices
    const oldSignLen = oldSign.length
    const newSignLen = newSign.length
    const dp = Array.from({ length: oldSignLen + 1 }, () => Array(newSignLen + 1).fill(0))
    for (let i = 1; i <= oldSignLen; i += 1) {
      for (let j = 1; j <= newSignLen; j += 1) {
        if (oldSign[i - 1] === newSign[j - 1]) {
          dp[i][j] = dp[i - 1][j - 1] + 1
        } else {
          dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
        }
      }
    }

    const reusableCount = dp[oldSignLen][newSignLen]
    const removeCount = oldSignLen - reusableCount
    const addCount = newSignLen - reusableCount
    return removeCount * rem + addCount * add
  }
}

// const sign = new SignMaster()
// sign.changePrices({ add: 5, rem: 4 })

// sign.estimatePrice('totes', 'toes') === 4
// sign.estimatePrice('totes', 'oats') === 13
