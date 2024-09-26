// [Easy] 1460. Make Two Arrays Equal by Reversing Sub-arrays
// 1460_make_two_arrays_equal_by_reversing_sub-arrays

// https://leetcode.com/problems/make-two-arrays-equal-by-reversing-sub-arrays
// Runtime: 92 ms, faster than 84.62% of TypeScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
// Memory Usage: 43.4 MB, less than 7.69% of TypeScript online submissions for Make Two Arrays Equal by Reversing Sub-arrays.
function canBeEqual (target: number[], arr: number[]): boolean {
  const targetLen: number = target.length;
  const targetMap = new Map<number, number>()
  const arrMap = new Map<number, number>()
  for (let i: number = 0; i < targetLen; i += 1 || 0) {
    const targetItem: number = target[i]
    const arrItem: number = arr[i]
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
