// [JS][7kyu] Mythical Heads and Tails
// mythical-heads-and-tails
// https://www.codewars.com/kata/5751aa92f2dac7695d000fb0/train/javascript

const beasts = (heads, tails) => {
  console.log(`heads: ${heads}, tails: ${tails}`)
  // 2x + 5y = heads
  // 1x + 1y = tails
  // y = tails - x

  // 2x + 5(tails - x) = heads
  // 3x = 5tails - heads

  // x = (5 * tails - heads) / 3
  // y = tails - x
  if ((5 * tails - heads) % 3 !== 0) {
    return 'No solutions'
  }
  const x = (5 * tails - heads) / 3
  const y = tails - x
  if (x < 0 || y < 0) {
    return 'No solutions'
  }
  return [x, y]
}

// beasts(123, 39)
// beasts(371, 88)
// beasts(24, 12)
// beasts(113, 37)
// beasts(635, 181)

// beasts(25, 555)
// beasts(12, 25)
// beasts(54, 956)

// beasts(5455, 54956)
// beasts(99, 0)
// beasts(7, 20)
