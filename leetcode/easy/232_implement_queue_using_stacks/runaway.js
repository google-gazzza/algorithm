// https://leetcode.com/problems/implement-queue-using-stacks/
// Runtime: 96 ms, faster than 5.25% of JavaScript online submissions for Implement Queue using Stacks.
// Memory Usage: 33.5 MB, less than 100.00% of JavaScript online submissions for Implement Queue using Stacks.

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.stack = [];
};

/**
 * Push element x to the back of queue. 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    const stack = this.stack;
    const tempStack = [];
    while (stack.length > 0) {
        tempStack.push(stack.pop());
    }
    stack.push(x);
    while (tempStack.length > 0) {
        stack.push(tempStack.pop());
    }
};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.stack.pop();
};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.stack[this.stack.length - 1];
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    return this.stack.length === 0;
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */