// [Easy] 575. Distribute Candies
// 575_distribute_candies

// https://leetcode.com/problems/distribute-candies
// Runtime: 132 ms, faster than 84.19% of JavaScript online submissions for Distribute Candies.
// Memory Usage: 52.3 MB, less than 56.13% of JavaScript online submissions for Distribute Candies.
const distributeCandies = function (candyType) {
  const typeSet = new Set()
  candyType.forEach(type => typeSet.add(type))

  return Math.min(typeSet.size, candyType.length / 2)
}

// 처음에 이렇게 풀었지만, 바로 위 풀이로 전환함!
// Runtime: 164 ms, faster than 41.11% of JavaScript online submissions for Distribute Candies.
// Memory Usage: 53.5 MB, less than 26.09% of JavaScript online submissions for Distribute Candies.
const distributeCandies2 = function (candyType) {
  const typeMap = new Map()
  candyType.forEach(type => {
    typeMap.set(type, (typeMap.get(type) || 0) + 1)
  })
  return Math.min([...typeMap].length, candyType.length / 2)
}
