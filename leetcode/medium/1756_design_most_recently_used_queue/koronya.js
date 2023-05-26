// [Medium] 1756. Design Most Recently Used Queue
// 1756_design_most_recently_used_queue

// https://leetcode.com/problems/design-most-recently-used-queue
// Runtime: 599 ms, faster than 7.14% of JavaScript online submissions for Design Most Recently Used Queue.
// Memory Usage: 80 MB, less than 7.14% of JavaScript online submissions for Design Most Recently Used Queue.

/**
 * @param {number} n
 */
const MRUQueue = function (n) {
  this.n = n
  this.queue = Array.from({ length: n }).map((_, index) => index + 1)
}

/**
 * @param {number} k
 * @return {number}
 */
MRUQueue.prototype.fetch = function (k) {
  if (this.n === k) {
    return this.queue[this.n - 1]
  }
  const num = this.queue[k - 1]
  this.queue = [...this.queue.slice(0, k - 1), ...this.queue.slice(k), num]

  return num
}

/**
 * Your MRUQueue object will be instantiated and called as such:
 * var obj = new MRUQueue(n)
 * var param_1 = obj.fetch(k)
 */

// const dd = new MRUQueue(8)
// dd.fetch(3) // Moves the 3rd element (3) to the end of the queue to become [1,2,4,5,6,7,8,3] and returns it.
// dd.fetch(5) // Moves the 5th element (6) to the end of the queue to become [1,2,4,5,7,8,3,6] and returns it.
// dd.fetch(2) // Moves the 2nd element (2) to the end of the queue to become [1,4,5,7,8,3,6,2] and returns it.
// dd.fetch(8) // The 8th element (2) is already at the end of the queue so just return it.

const d2 = new MRUQueue(3)
d2.fetch(2)
d2.fetch(1)
d2.fetch(2)
d2.fetch(2)

