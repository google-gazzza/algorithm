// [Easy] 1213. Intersection of Three Sorted Arrays
// 1213_intersection_of_three_sorted_arrays

// https://leetcode.com/problems/intersection-of-three-sorted-arrays
// Runtime: 81 ms, faster than 55.45% of JavaScript online submissions for Intersection of Three Sorted Arrays.
// Memory Usage: 39.8 MB, less than 95.54% of JavaScript online submissions for Intersection of Three Sorted Arrays.

/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number[]} arr3
 * @return {number[]}
 */
const arraysIntersection = function (arr1, arr2, arr3) {
  const arr1Set = new Set()
  const arr2Set = new Set()
  const resultArr = []
  arr1.forEach((item1) => arr1Set.add(item1))
  arr2.forEach((item2) => {
    if (arr1Set.has(item2) === true) {
      arr2Set.add(item2)
    }
  })
  arr3.forEach((item3) => {
    if (arr2Set.has(item3) === true) {
      resultArr.push(item3)
    }
  })

  return resultArr
}

arraysIntersection([1, 2, 3, 4, 5], [1, 2, 5, 7, 9], [1, 3, 4, 5, 8]) //?
arraysIntersection([197, 418, 523, 876, 1356], [501, 880, 1593, 1710, 1870], [521, 682, 1337, 1395, 1764]) //?
