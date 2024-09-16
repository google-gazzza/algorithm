// [Easy] 225. Implement Stack using Queues
// 225_implement_stack_using_queues

// https://leetcode.com/problems/implement-stack-using-queues
// Runtime: 76 ms, faster than 65.23% of JavaScript online submissions for Implement Stack using Queues.
// Memory Usage: 38.6 MB, less than 22.66% of JavaScript online submissions for Implement Stack using Queues.
const MyStack = function() {
  this.stack = []
}

MyStack.prototype.push = function(x) {
  this.stack.push(x)
}

MyStack.prototype.pop = function() {
  return this.stack.pop()
}

MyStack.prototype.top = function() {
  return this.stack[this.stack.length - 1]
}

MyStack.prototype.empty = function() {
  return this.stack.length === 0
}
