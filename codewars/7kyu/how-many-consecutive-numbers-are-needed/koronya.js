// [JS][7kyu] How many consecutive numbers are needed?
// how-many-consecutive-numbers-are-needed
// https://www.codewars.com/kata/559cc2d2b802a5c94700000c/train/javascript

const consecutive = (array) => {
  const arrayLen = array.length
  if (arrayLen === 0) {
    return 0
  }
  const max = Math.max(...array)
  const min = Math.min(...array)
  return max - min - arrayLen + 1
}

consecutive([4, 8, 6])
consecutive([-1, -5])
