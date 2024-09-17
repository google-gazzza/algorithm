// [Medium] 2113. Elements in Array After Removing and Replacing Elements
// 2113_elements_in_array_after_removing_and_replacing_elements

// https://leetcode.com/problems/elements-in-array-after-removing-and-replacing-elements
// Runtime: 579 ms, faster than 8.33% of TypeScript online submissions for Elements in Array After Removing and Replacing Elements.
// Memory Usage: 104.1 MB, less than 8.33% of TypeScript online submissions for Elements in Array After Removing and Replacing Elements.

function elementInNums(nums: number[], queries: number[][]): number[] {
  const arr: number[][] = []
  const numsLen: number = nums.length
  const nums2: number[] = [...nums]
  const nums3: number[] = [...nums]
  for (let i: number = 0; i < numsLen; i += 1) {
    const tempArr: number[] = [...nums2]
    arr.push(tempArr)
    nums2.shift()
  }
  arr.push([])
  let tempArr2: number[] = []
  for (let i: number = 0; i < numsLen; i += 1) {
    tempArr2.push(nums3.shift()!)
    arr.push([...tempArr2])
  }
  const getNthItem = (n: number): number[] => arr[n % (numsLen * 2)]

  return queries.map((item) => {
    const [time, index] = item
    const value = getNthItem(time)[index]
    return value === undefined ? -1 : value
  })
}
