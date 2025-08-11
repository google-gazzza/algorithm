// [JS][7kyu] Stones on the Table
// stones-on-the-table
// https://www.codewars.com/kata/5f70e4cce10f9e0001c8995a/train/javascript

const solve = (stones) => {
  const stonesLength = stones.length
  if (stonesLength === 0) {
    return 0
  }

  let count = 0
  for (let i = 1; i < stonesLength; i += 1) {
    if (stones[i] === stones[i - 1]) {
      count += 1
    }
  }

  return count
}

solve('') === 0
solve('RRGGBB') === 3
solve('RGBRGB') === 0
solve('BGRBBGGBRRR') === 4
solve('GBBBGGRRGRB') === 4
solve('GBRGGRBBBBRRGGGB') === 7
