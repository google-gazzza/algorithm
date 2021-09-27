// https://leetcode.com/problems/min-stack
// Runtime: 184 ms, faster than 26.03% of JavaScript online submissions for Min Stack.
// Memory Usage: 45.4 MB, less than 6.25% of JavaScript online submissions for Min Stack.
const insertionSort = (arr, insertItem) => {
  let index = -1
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i += 1) {
    const {value} = arr[i]
    if (insertItem.value <= value) {
      index = i
      break
    }
  }
  if (index === -1) {
    arr.push(insertItem)
  } else {
    arr.splice(index, 0, insertItem)
  }
}

const MinStack = function() {
  this.stack = []
  this.ascendSortedStack = []
  this.uniqueIndex = -1
}

MinStack.prototype.push = function(x) {
  this.uniqueIndex += 1
  this.stack.push({value: x, index: this.uniqueIndex})
  insertionSort(this.ascendSortedStack, {value: x, index: this.uniqueIndex})
}

MinStack.prototype.pop = function() {
  const {value: popValue, index: popIndex} = this.stack.pop()
  const ascStackLen = this.ascendSortedStack.length
  let removeIndex = -1
  for (let i = 0; i < ascStackLen; i += 1) {
    if (this.ascendSortedStack[i].index === popIndex) {
      removeIndex = i
      break
    }
  }
  this.ascendSortedStack.splice(removeIndex, 1)
  return popValue
}

MinStack.prototype.top = function() {
  return this.stack[this.stack.length - 1].value
}

MinStack.prototype.getMin = function() {
  return this.ascendSortedStack[0].value
}
