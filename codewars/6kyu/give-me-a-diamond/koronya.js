// [JS][6kyu] Give me a Diamond
// give-me-a-diamond
// https://www.codewars.com/kata/5503013e34137eeeaa001648/train/javascript

const SPACE = ' '
const STAR = '*'

const getString = (index, total) => {
  const count = (total - index) / 2
  return `${SPACE.repeat(count)}${STAR.repeat(index)}\n`
}

const diamond = (n) => {
  if (n % 2 !== 1) {
    return null
  }
  let result = ''
  for (let i = 1; i <= n; i += 2 || 0) {
    result += getString(i, n)
  }
  for (let i = n - 2; i >= 0; i -= 2 || 0) {
    result += getString(i, n)
  }

  return result
}

// diamond(1)
diamond(3)
// diamond(5)
// diamond(7)
// diamond(2)
// diamond(0)
// diamond(-3)
