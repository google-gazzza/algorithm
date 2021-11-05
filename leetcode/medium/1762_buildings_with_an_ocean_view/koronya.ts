// [Medium] 1762. Buildings With an Ocean View
// 1762_buildings_with_an_ocean_view

// https://leetcode.com/problems/buildings-with-an-ocean-view
// Runtime: 992 ms, faster than 28.13% of TypeScript online submissions for Buildings With an Ocean View.
// Memory Usage: 60.2 MB, less than 48.44% of TypeScript online submissions for Buildings With an Ocean View.

function findBuildings(heights: number[]): number[] {
  const heightsLen = heights.length
  const result: number[] = [heightsLen - 1]
  let max = heights[heightsLen - 1]
  for (let i: number = heightsLen - 2; i >= 0; i -= 1) {
    const height = heights[i]
    if (max < height) {
      max = height
      result.unshift(i)
    }
  }
  return result
}

findBuildings([4, 2, 3, 1]) //?
// findBuildings([4,3,2,1])//?
// findBuildings([1,3,2,4])//?
// findBuildings( [2,2,2,2])//?
