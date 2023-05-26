// [Easy] 2053. Kth Distinct String in an Array
// 2053_kth_distinct_string_in_an_array

// https://leetcode.com/problems/kth-distinct-string-in-an-array
// Runtime: 84 ms, faster than 100.00% of TypeScript online submissions for Kth Distinct String in an Array.
// Memory Usage: 44.2 MB, less than 45.45% of TypeScript online submissions for Kth Distinct String in an Array.

function kthDistinct(arr: string[], k: number): string {
  const strMap = new Map<string, number>()
  arr.forEach((item) => strMap.set(item, (strMap.get(item) || 0) + 1))
  const distinctArr = [...strMap].filter((item) => item[1] === 1)
  const distinctArrLen = distinctArr.length
  if (distinctArrLen < k) {
    return ''
  }
  return distinctArr[k - 1][0]
}

kthDistinct(['d', 'b', 'c', 'b', 'c', 'a'], 2) //?
kthDistinct(['aaa', 'aa', 'a'], 1) //?
kthDistinct(['a', 'b', 'a'], 3) //?
