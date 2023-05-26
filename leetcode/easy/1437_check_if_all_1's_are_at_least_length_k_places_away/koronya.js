// [Easy] 1437. Check If All 1's Are at Least Length K Places Away
// 1437_check_if_all_1's_are_at_least_length_k_places_away

// https://leetcode.com/problems/check-if-all-1s-are-at-least-length-k-places-away
// Runtime: 104 ms, faster than 14.52% of JavaScript online submissions for Check If All 1's Are at Least Length K Places Away.
// Memory Usage: 47 MB, less than 21.72% of JavaScript online submissions for Check If All 1's Are at Least Length K Places Away.

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
const kLengthApart = function (nums, k) {
  const indexOfOneArr = []
  let min = nums.length
  nums.forEach((num, index) => {
    if (num === 1) {
      indexOfOneArr.push(index)
    }
  })
  if (indexOfOneArr.length === 0) {
    return true
  }
  indexOfOneArr.reduce((prev, cur) => {
    const diff = cur - prev - 1
    min = Math.min(diff, min)
    return cur
  })

  return min >= k
}

kLengthApart([0, 0, 0], 2) //?
kLengthApart([1, 0, 0, 0, 1, 0, 0, 1], 2) //?
kLengthApart([1, 0, 0, 1, 0, 1], 2) //?
