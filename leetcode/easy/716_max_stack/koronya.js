// [Easy] 716. Max Stack
// 716_max_stack

// https://leetcode.com/problems/max-stack/
// Runtime: 148 ms, faster than 89.68% of JavaScript online submissions for Max Stack.
// Memory Usage: 50.7 MB, less than 18.51% of JavaScript online submissions for Max Stack.

const MaxStack = function () {
  this.arr = []
}

/**
 * @param {number} x
 * @return {void}
 */
MaxStack.prototype.push = function (x) {
  this.arr.push(x)
}

/**
 * @return {number}
 */
MaxStack.prototype.pop = function () {
  return this.arr.pop()
}

/**
 * @return {number}
 */
MaxStack.prototype.top = function () {
  return this.arr[this.arr.length - 1]
}

/**
 * @return {number}
 */
MaxStack.prototype.peekMax = function () {
  return Math.max(...this.arr)
}

/**
 * @return {number}
 */
MaxStack.prototype.popMax = function () {
  const max = Math.max(...this.arr)
  const lastMaxIndex = this.arr.lastIndexOf(max)
  return this.arr.splice(lastMaxIndex, 1)[0]
}

/**
 * Your MaxStack object will be instantiated and called as such:
 * var obj = new MaxStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.peekMax()
 * var param_5 = obj.popMax()
 */

const stack = new MaxStack()
stack.push(5)
stack.push(1)
stack.push(5)
stack.top()
stack.popMax()
stack.top()
stack.peekMax()
stack.pop()
stack.top()
