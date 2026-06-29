// [JS][7kyu] Reverse list
// reverse-list
// https://www.codewars.com/kata/57a04da9e298a7ee43000111/train/javascript

const reverseList = (arr) => {
  let left = 0
  let right = arr.length - 1
  while (left < right) {
    ;[arr[left], arr[right]] = [arr[right], arr[left]]
    left += 1
    right -= 1
  }

  return arr
}
const reverseList2 = (arr) => {
  const result = []
  while (arr.length > 0) {
    result.push(arr.pop())
  }
  return result
}
const reverseList3 = (arr) => arr.reverse()

reverseList([1, 2, 3])
