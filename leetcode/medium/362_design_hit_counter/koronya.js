// [Medium] 362. Design Hit Counter
// 362_design_hit_counter

// https://leetcode.com/problems/design-hit-counter
// Runtime: 64 ms, faster than 96.00% of JavaScript online submissions for Design Hit Counter.
// Memory Usage: 40.2 MB, less than 11.67% of JavaScript online submissions for Design Hit Counter.

const HitCounter = function () {
  this.map = new Map()
}

/**
 * @param {number} timestamp
 * @return {void}
 */
HitCounter.prototype.hit = function (timestamp) {
  this.map.set(timestamp, (this.map.get(timestamp) || 0) + 1)
}

/**
 * @param {number} timestamp
 * @return {number}
 */
HitCounter.prototype.getHits = function (timestamp) {
  return [...this.map].filter((item) => item[0] > timestamp - 300).reduce((acc, cur) => acc + cur[1], 0)
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */

const obj = new HitCounter()
obj.hit(1)
obj.hit(2)
obj.hit(3)
obj.getHits(4) //?
obj.hit(300)
obj.getHits(300) //?
obj.getHits(301) //?
