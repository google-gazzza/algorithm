// [JS][6kyu] Simple Fun #165: Withdraw
// simple-fun-165-withdraw
// https://www.codewars.com/kata/58afce23b0e8046a960000eb/train/javascript

const withdraw = (n) => {
  let count100 = 0
  let count50 = 0
  let count20 = 0
  let isReversed = false
  while (n > 0) {
    if ((isReversed && n >= 120) || (!isReversed && n >= 100)) {
      n -= 100
      count100 += 1
    } else if ((isReversed && n >= 70) || (!isReversed && n >= 50)) {
      n -= 50
      count50 += 1
    } else if (n >= 20) {
      n -= 20
      count20 += 1
    } else {
      if (count50 > 0) {
        n += 50
        count50 -= 1
        isReversed = true
      } else {
        n += 100
        count100 -= 1
        isReversed = true
      }
    }
  }
  return [count100, count50, count20]
}

withdraw(230)
withdraw(40)

withdraw(40)
withdraw(250)
withdraw(260)
withdraw(230)
withdraw(60)
withdraw(370)

withdraw(250)
withdraw(100)
