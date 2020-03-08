/*
https://leetcode.com/problems/implement-queue-using-stacks/
Runtime: 52 ms, faster than 74.03% of JavaScript online submissions for Implement Queue using Stacks.
Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Implement Queue using Stacks.
*/

/**
 * Initialize your data structure here.
 */
var MyQueue = function() {
    this.arr = []

};

/**
 * Push element x to the back of queue.
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.arr.push(x);

};

/**
 * Removes the element from in front of queue and returns that element.
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    return this.arr.shift();

};

/**
 * Get the front element.
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.arr[0]
};

/**
 * Returns whether the queue is empty.
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if(this.arr && this.arr.length > 0){
        return false
    }else{
        return true
    }

};

/**
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */
