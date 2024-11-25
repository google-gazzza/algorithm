// [JS][6kyu] Pack Some Chocolates
// pack-some-chocolates
// https://www.codewars.com/kata/5f5daf1a209a64001183af9b/train/javascript

// return the number of small chocolates required to achieve
// the desired goal. Return -1 if the goal cannot be achieved
const makeChocolates = (small, big, goal) => {
  let sum = 0
  let bigCount = big
  while (sum !== goal) {
    sum = 0
    if (bigCount === 0) {
      const diff = goal - sum
      if (diff % 2 === 0 && diff / 2 <= small) {
        return diff / 2
      } else {
        return -1
      }
    } else {
      if (bigCount * 5 > goal) {
        bigCount -= 1
      } else {
        bigCount
        sum += bigCount * 5
        bigCount -= 1
        const diff = goal - sum
        if (diff % 2 === 0 && diff / 2 <= small) {
          return diff / 2
        }
      }
    }
  }
  return 0
}

// makeChocolates(4, 1, 13) === 4
// makeChocolates(4, 1, 14) === -1
// makeChocolates(2, 1, 7) === 1

// makeChocolates(3, 1, 6) === 3
// makeChocolates(8, 0, 7) === -1
// makeChocolates(8, 0, 7) === -1

// mustBe 4 but 54
// makeChocolates(58, 156, 283)
