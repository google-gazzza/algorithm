// [Medium] 528. Random Pick with Weight
// 528_random_pick_with_weight

// https://leetcode.com/problems/random-pick-with-weight
// Runtime: 416 ms, faster than 24.19% of JavaScript online submissions for Random Pick with Weight.
// Memory Usage: 47.8 MB, less than 10.71% of JavaScript online submissions for Random Pick with Weight.
const Solution = function (w) {
  this.sum = 0
  this.matchMap = new Map()
  w.forEach((num, index) => {
    this.sum += num
    this.matchMap.set(this.sum, index)
  })
}

Solution.prototype.pickIndex = function () {
  const randomVal = Math.random() * this.sum
  for (key of this.matchMap.keys()) {
    if (randomVal < key) {
      return this.matchMap.get(key)
    }
  }
}
