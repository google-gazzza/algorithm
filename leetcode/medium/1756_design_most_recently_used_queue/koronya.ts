// [Medium] 1756. Design Most Recently Used Queue
// 1756_design_most_recently_used_queue

// https://leetcode.com/problems/design-most-recently-used-queue
// Runtime: 721 ms, faster than 100.00% of TypeScript online submissions for Design Most Recently Used Queue.
// Memory Usage: 81 MB, less than 100.00% of TypeScript online submissions for Design Most Recently Used Queue.

class MRUQueue {
  n: number
  queue: number[]
  constructor(n: number) {
    this.n = n
    this.queue = Array.from({ length: n }).map((_, index) => index + 1)
  }

  fetch(k: number): number {
    if (this.n === k) {
      return this.queue[this.n - 1]
    }
    const num = this.queue[k - 1]
    this.queue = [...this.queue.slice(0, k - 1), ...this.queue.slice(k), num]

    return num
  }
}
