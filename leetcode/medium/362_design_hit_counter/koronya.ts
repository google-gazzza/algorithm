// [Medium] 362. Design Hit Counter
// 362_design_hit_counter

// https://leetcode.com/problems/design-hit-counter
// Runtime: 84 ms, faster than 38.46% of TypeScript online submissions for Design Hit Counter.
// Memory Usage: 40.9 MB, less than 23.08% of TypeScript online submissions for Design Hit Counter.

class HitCounter {
  map: Map<number, number>
  constructor() {
    this.map = new Map()
  }

  hit(timestamp: number): void {
    this.map.set(timestamp, (this.map.get(timestamp) || 0) + 1)
  }

  getHits(timestamp: number): number {
    return [...this.map].filter((item) => item[0] > timestamp - 300).reduce((acc, cur) => acc + cur[1], 0)
  }
}

/**
 * Your HitCounter object will be instantiated and called as such:
 * var obj = new HitCounter()
 * obj.hit(timestamp)
 * var param_2 = obj.getHits(timestamp)
 */
