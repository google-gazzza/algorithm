// [JS][7kyu] Geometric Mean I
// geometric-mean-i
// https://www.codewars.com/kata/56ebcea1b9d927f9bf000544/train/javascript

const geometricMeanI = (arr) => {
  const filteredArr = arr.filter((n) => typeof n === 'number' && n > 0)
  const filteredArrLen = filteredArr.length
  const invalidLen = arr.length - filteredArrLen
  if (invalidLen > 1) {
    return 0
  }
  return Math.pow(
    filteredArr.reduce((acc, cur) => acc * cur, 1),
    1 / filteredArrLen,
  )
}

// geometricMeanI([2, 3, 4, 6])
// geometricMeanI([2, 3, 4, 6, -5])
// geometricMeanI([2, 3, 4, 6, '5'])
// geometricMeanI([2, 3, 4, 6, -5, '5'])
// geometricMeanI([2, 2, 3, 4, 10, 8, 1, 4, 6, 7, 2])
// geometricMeanI([2, 2, 3, 0, 4, 10, -4, 8, 1, 4, 6, 7, 2])
// geometricMeanI([2, 2, 3, 4, 10, -4, 8, 1, 4, 6, 7, 2, ''])
