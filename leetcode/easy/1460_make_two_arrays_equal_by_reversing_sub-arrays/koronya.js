// [Easy] 1460. Make Two Arrays Equal by Reversing Sub-arrays
// 1460_make_two_arrays_equal_by_reversing_sub-arrays

// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays
// 직접 arr을 rotate하지 않고, key값을 비교하는 풀이
// Runtime: 80 ms, faster than 91.93% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
// Memory Usage: 42.7 MB, less than 11.74% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
const canBeEqual = function (target, arr) {
  const targetLen = target.length;
  const targetMap = new Map()
  const arrMap = new Map()
  for (let i = 0; i < targetLen; i += 1 || 0) {
    const targetItem = target[i]
    const arrItem = arr[i]
    targetMap.set(targetItem, (targetMap.get(targetItem) || 0) + 1)
    arrMap.set(arrItem, (arrMap.get(arrItem) || 0) + 1)
  }

  for (const [key, value] of targetMap) {
    if (arrMap.get(key) !== value) {
      return false
    }
  }

  return true
}

// 문제에 충실하게 reverse 계속 하는 풀이...
// Runtime: 116 ms, faster than 7.09% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
// Memory Usage: 44.8 MB, less than 5.87% of JavaScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
const canBeEqual2 = function (target, arr) {
  const targetLen = target.length
  let targetIndex = 0
  let lastIndex = 0

  while (targetIndex < targetLen) {
    const num = target[targetIndex]
    const findIndex = arr.slice(lastIndex).indexOf(num)
    const nextIndex = findIndex + lastIndex + 1
    if (findIndex === -1) {
      return false
    }

    arr = [...arr.slice(0, lastIndex), ...arr.slice(lastIndex, nextIndex).reverse(), ...arr.slice(nextIndex)]
    lastIndex += 1
    targetIndex += 1
  }

  return true
}
