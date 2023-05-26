// [Easy] 1437. Check If All 1's Are at Least Length K Places Away
// 1437_check_if_all_1's_are_at_least_length_k_places_away

// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away
// Runtime: 100 ms, faster than 29.63% of TypeScript online submissions for Check If All 1's Are at Least Length K Places Away.
// Memory Usage: 48.4 MB, less than 5.56% of TypeScript online submissions for Check If All 1's Are at Least Length K Places Away.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
function kLengthApart(nums: number[], k: number): boolean {
  const indexOfOneArr: number[] = []
  let min: number = nums.length
  nums.forEach((num: number, index: number) => {
    if (num === 1) {
      indexOfOneArr.push(index)
    }
  })
  if (indexOfOneArr.length === 0) {
    return true
  }
  indexOfOneArr.reduce((prev: number, cur: number) => {
    const diff: number = cur - prev - 1
    min = Math.min(diff, min)
    return cur
  })

  return min >= k
}
