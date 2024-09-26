// [JS][6kyu] Casino chips
// casino-chips
// https://www.codewars.com/kata/5e0b72d2d772160011133654/train/javascript

const solve = (arr) => {
  const [a, b, c] = arr.sort((a, b) => a - b)
  return Math.min(a + b, Math.floor((a + b + c) / 2))
}

const solve2 = (arr) => {
  let count = 0
  let [a, b, c] = arr.sort((a, b) => a - b)

  while (true) {
    console.log(`a, b, c: ${a}, ${b}, ${c}`)
    if (a <= 0 && b > 0 && c > 0) {
      b -= 1
      c -= 1
      ;[a, b, c] = [a, b, c].sort((a, b) => a - b)
      count += 1
    } else if (a > 0 && b > 0 && c > 0) {
      a -= 1
      c -= 1
      ;[a, b, c] = [a, b, c].sort((a, b) => a - b)
      count += 1
    } else {
      break
    }
  }

  return count
}

solve([1, 1, 1]) === 1
solve([1, 2, 1]) === 2
solve([4, 1, 1]) === 2
solve([8, 2, 8]) === 9
solve([8, 1, 4]) === 5
solve([7, 4, 10]) === 10
solve([12, 12, 12]) === 18
solve([1, 23, 2]) === 3
