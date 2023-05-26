// [Easy] 1287. Element Appearing More Than 25% In Sorted Array
// 1287_element_appearing_more_than_25%_in_sorted_array

// https://leetcode.com/problems/element-appearing-more-than-25-in-sorted-array
// Runtime: 80 ms, faster than 70.61% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
// Memory Usage: 37.5 MB, less than 81.42% of JavaScript online submissions for Element Appearing More Than 25% In Sorted Array.
const findSpecialInteger = arr => {
  const arrLen = arr.length
  if (arrLen === 1) {
    return arr[0]
  }
  const limit = arrLen / 4
  let prevNumber = arr[0]
  let prevCount = 1

  for (let i = 1; i < arrLen; i = i + 1 | 0) {
    const number = arr[i]
    if (prevNumber !== number) {
      prevCount = 1
    } else {
      prevCount += 1
    }
    prevNumber = number

    if (prevCount > limit) {
      return prevNumber
    }
  }
}
