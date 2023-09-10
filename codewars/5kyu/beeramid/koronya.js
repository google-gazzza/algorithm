// [JS][5kyu] Beeramid
// beeramid
// https://www.codewars.com/kata/51e04f6b544cf3f6550000c1/train/javascript

// Returns number of complete beeramid levels
const beeramid = (bonus, price) => {
  let totalPrice = price * 1
  let level = 1
  while (totalPrice <= bonus) {
    level += 1
    totalPrice += level ** 2 * price
  }
  return level - 1
}

beeramid(1500, 2)
beeramid(9, 2) === 1
beeramid(10, 2) === 2
beeramid(11, 2) === 2
beeramid(21, 1.5) === 3
beeramid(454, 5) === 5
beeramid(455, 5) === 6
beeramid(4, 4) === 1
beeramid(3, 4) === 0
beeramid(0, 4) === 0
beeramid(-1, 4) === 0
