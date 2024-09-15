// [Medium] 398. Random Pick Index
// 398_random_pick_index

// https://leetcode.com/problems/random-pick-index
// Runtime: 156 ms, faster than 66.07% of JavaScript online submissions for Random Pick Index.
// Memory Usage: 58.7 MB, less than 71.43% of JavaScript online submissions for Random Pick Index.
const getRandomVal = arr => arr[Math.floor(Math.random() * arr.length)]
const Solution = function(nums) {
  this.indexMap = new Map()
  nums.map((num, index) => {
    if (this.indexMap.has(num)) {
      this.indexMap.get(num).push(index)
    } else {
      this.indexMap.set(num, [index])
    }
  })
}

Solution.prototype.pick = function(target) {
  const indexArr = this.indexMap.get(target)
  return getRandomVal(indexArr)
}
