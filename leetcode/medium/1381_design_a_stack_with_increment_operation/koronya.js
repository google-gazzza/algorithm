// https://leetcode.com/problems/design-a-stack-with-increment-operation
// Runtime: 100 ms, faster than 96.88% of JavaScript online submissions for Design a Stack With Increment Operation.
// Memory Usage: 41.8 MB, less than 100.00% of JavaScript online submissions for Design a Stack With Increment Operation.

/**
 * @param {number} maxSize
 */
var CustomStack = function(maxSize) {
  this.arr = []
  this.maxSize = maxSize
}

/** 
 * @param {number} x
 * @return {void}
 */
CustomStack.prototype.push = function(x) {
  if (this.maxSize > this.arr.length) {
    this.arr.push(x)
  }
}

/**
 * @return {number}
 */
CustomStack.prototype.pop = function() {
  if (this.arr.length > 0) {
    return this.arr.pop()
  }
  return -1
}

/** 
 * @param {number} k 
 * @param {number} val
 * @return {void}
 */
CustomStack.prototype.increment = function(k, val) {
  const arrLen = this.arr.length
  for (let i = 0; i < k && i < arrLen; i = i + 1 | 0) {
    this.arr[i] += val
  }
}

/** 
 * Your CustomStack object will be instantiated and called as such:
 * var obj = new CustomStack(maxSize)
 * obj.push(x)
 * var param_2 = obj.pop()
 * obj.increment(k,val)
 */
