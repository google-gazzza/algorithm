// [JS][7kyu] Sort Numbers
// sort-numbers
// https://www.codewars.com/kata/5174a4c0f2769dd8b1000003/train/javascript

const solution = (nums) => {
  if (!nums) {
    return []
  }
  return nums.sort((a, b) => a - b)
}

solution([1, 2, 10, 50, 5])
