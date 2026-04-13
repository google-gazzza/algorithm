// [JS][7kyu] Max-min arrays
// max-min-arrays
// https://www.codewars.com/kata/5a090c4e697598d0b9000004/train/javascript

const solve = (arr) => {
  const result = []
  arr.sort((a, b) => b - a)
  while (arr.length > 0) {
    result.push(arr.shift())
    if (arr.length > 0) {
      result.push(arr.pop())
    }
  }
  return result
}

solve([15, 11, 10, 7, 12])
solve([91, 75, 86, 14, 82])
solve([84, 79, 76, 61, 78])
solve([52, 77, 72, 44, 74, 76, 40])
solve([1, 6, 9, 4, 3, 7, 8, 2])
solve([78, 79, 52, 87, 16, 74, 31, 63, 80])
