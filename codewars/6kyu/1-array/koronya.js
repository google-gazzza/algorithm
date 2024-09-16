// [JS][6kyu] +1 Array
// 1-array
// https://www.codewars.com/kata/5514e5b77e6b2f38e0000ca9/train/javascript

const upArray = (arr) => {
  if (arr.length === 0 || arr.some((item) => item < 0 || item > 9) === true) {
    return null
  }
  const result = []
  let lastIndex = -1
  for (let i = arr.length - 1; i >= 0; i--) {
    const cur = arr[i]
    if (cur === 9) {
      result.push(0)
    } else {
      result.push(cur + 1)
      lastIndex = i
      break
    }
  }
  return lastIndex === -1 ? [1, ...result.reverse()] : [...arr.slice(0, lastIndex), ...result.reverse()]
}

upArray([4, 3, 2, 5])
upArray([4, 3, 2, 9])
upArray([2, 3, 9, 9])
upArray([9, 9])
upArray([0, 7])
upArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0])

upArray([1, -9])
upArray([1, 10])
upArray([1])
upArray([])
