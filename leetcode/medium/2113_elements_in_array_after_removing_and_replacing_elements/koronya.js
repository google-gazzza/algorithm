// [Medium] 2113. Elements in Array After Removing and Replacing Elements
// 2113_elements_in_array_after_removing_and_replacing_elements

// https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements
// Runtime: 336 ms, faster than 62.50% of JavaScript online submissions for Elements in Array After Removing and Replacing Elements.
// Memory Usage: 76.2 MB, less than 100.00% of JavaScript online submissions for Elements in Array After Removing and Replacing Elements.

/**
 * @param {number[]} nums
 * @param {number[][]} queries
 * @return {number[]}
 */
const elementInNums = function (nums, queries) {
  const arr = []
  const numsLen = nums.length
  const nums2 = [...nums]
  const nums3 = [...nums]
  for (let i = 0; i < numsLen; i += 1 || 0) {
    const tempArr = [...nums2]
    arr.push(tempArr)
    nums2.shift()
  }
  arr.push([])
  let tempArr2 = []
  for (let i = 0; i < numsLen; i += 1 || 0) {
    tempArr2.push(nums3.shift())
    arr.push([...tempArr2])
  }
  const getNthItem = (n) => arr[n % (numsLen * 2)]

  return queries.map((item) => {
    const [time, index] = item
    const value = getNthItem(time)[index]
    return value === undefined ? -1 : value
  })
}

elementInNums(
  [0, 1, 2],
  [
    [0, 2],
    [2, 0],
    [3, 2],
    [5, 0],
  ],
) //?

elementInNums(
  [2],
  [
    [0, 0],
    [1, 0],
    [2, 0],
    [3, 0],
  ],
) //?
