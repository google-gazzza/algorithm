// https://leetcode.com/problems/min-stack/submissions/
// Runtime: 92 ms, faster than 97.97% of JavaScript online submissions for Min Stack.
// Memory Usage: 44.6 MB, less than 25.00% of JavaScript online submissions for Min Stack.
/**
 * initialize your data structure here.
 */
var MinStack = function() {
    this._stack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this._stack.push( {
        val: x,
        min: !this._stack.length ? x: Math.min(this.getMin(), x)
    });
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    return this._stack.pop().val;
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this._stack[this._stack.length -1].val;
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this._stack[this._stack.length -1].min;
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */