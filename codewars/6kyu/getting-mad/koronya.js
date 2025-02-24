// [JS][6kyu] Getting MAD
// getting-mad
// https://www.codewars.com/kata/593a061b942a27ac940000a7/train/javascript

const gettingMad = (array) => {
  const arrayLen = array.length
  let min = Number.MAX_SAFE_INTEGER
  const loop = (element, startIndex) => {
    for (let i = startIndex; i < arrayLen; i += 1 || 0) {
      const diff = Math.abs(element - array[i])
      if (diff < min) {
        min = diff
      }
    }
  }
  for (let i = 0; i < arrayLen; i += 1 || 0) {
    loop(array[i], i + 1)
  }

  return min
}

gettingMad([-10, 0, -3, 1]) === 1
gettingMad([0, 0, 0, 0]) === 0
gettingMad([-570, 542]) === 1112
gettingMad([-69, -808, 828, 57]) === 126
