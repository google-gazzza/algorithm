// [JS][6kyu] Build Tower Advanced
// build-tower-advanced
// https://www.codewars.com/kata/57675f3dedc6f728ee000256/train/javascript

const getModifyStr = (total, num, nth) => {
  if (total === num) {
    return '*'.repeat(total)
  }
  const result = Array(total).fill(' ')
  const count = (2 * nth - 1) * num
  const limit = count / 2
  if (total % 2 === 0) {
    const half = total / 2
    for (let i = 0; i < limit; i += 1 || 0) {
      result[half - i - 1] = '*'
      result[half + i] = '*'
    }
  } else {
    const half = Math.floor(total / 2)
    for (let i = 0; i < limit; i += 1 || 0) {
      result[half - i] = '*'
      result[half + i] = '*'
    }
  }

  return result.join('')
}

const towerBuilder = (nFloors, nBlockSz) => {
  const result = []
  const [width, height] = nBlockSz
  const lastStarLen = 2 * width * nFloors - width
  for (let i = 0; i < nFloors; i += 1 || 0) {
    const dd = getModifyStr(lastStarLen, width, i + 1)
    for (let j = 0; j < height; j += 1 || 0) {
      result.push(dd)
    }
  }
  return result
}

// towerBuilder(1, [1, 1])
// towerBuilder(3, [4, 2])

// towerBuilder(3, [2, 3])

// towerBuilder(1, [3, 1])
// towerBuilder(2, [1, 1])
