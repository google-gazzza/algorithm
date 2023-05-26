// [Easy] 575. Distribute Candies
// 575_distribute_candies

// https://leetcode.com/problems/distribute-candies
// Runtime: 148 ms, faster than 40.00% of TypeScript online submissions for Distribute Candies.
// Memory Usage: 52.5 MB, less than 60.00% of TypeScript online submissions for Distribute Candies.
function distributeCandies (candyType: number[]): number {
  const typeSet = new Set<number>()
  candyType.forEach(type => typeSet.add(type))

  return Math.min(typeSet.size, candyType.length / 2)
}
