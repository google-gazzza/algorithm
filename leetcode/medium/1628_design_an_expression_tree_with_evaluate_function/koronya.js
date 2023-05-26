// [Medium] 1628. Design an Expression Tree With Evaluate Function
// 1628_design_an_expression_tree_with_evaluate_function

// https://leetcode.com/problems/design-an-expression-tree-with-evaluate-function
// Runtime: 101 ms, faster than 31.63% of JavaScript online submissions for Design an Expression Tree With Evaluate Function.
// Memory Usage: 41.8 MB, less than 93.88% of JavaScript online submissions for Design an Expression Tree With Evaluate Function.

/**
 * This is the interface for the expression tree Node.
 * You should not remove it, and you can define some classes to implement it.
 */

const opFnc = {
  '+': (x, y) => x + y,
  '-': (x, y) => x - y,
  '*': (x, y) => x * y,
  '/': (x, y) => x / y,
}

const Node = function (val = 0, left = null, right = null) {
  this.val = val
  this.left = left
  this.right = right
}

Node.prototype.evaluate = function () {
  const { val, left, right } = this
  if (!left && !right) {
    return val
  }
  const fnc = opFnc[val]
  return fnc(left.evaluate(), right.evaluate())
}

/**
 * This is the TreeBuilder class.
 * You can treat it as the driver code that takes the postinfix input
 * and returns the expression tree represnting it as a Node.
 */

class TreeBuilder {
  /**
   * @param {string[]} s
   * @return {Node}
   */
  buildTree(postfix) {
    const stack = []
    postfix.forEach((item) => {
      if (item in opFnc) {
        const right = stack.pop()
        const left = stack.pop()
        stack.push(new Node(item, left, right))
      } else {
        stack.push(new Node(Number(item)))
      }
    })
    return stack.pop()
  }
}

/**
 * Your TreeBuilder object will be instantiated and called as such:
 * var obj = new TreeBuilder();
 * var expTree = obj.buildTree(postfix);
 * var ans = expTree.evaluate();
 */
