// [Medium] 901. Online Stock Span
// 901_online_stock_span

// https://leetcode.com/problems/online-stock-span
// Runtime: 612 ms, faster than 20.00% of JavaScript online submissions for Online Stock Span.
// Memory Usage: 49.3 MB, less than 64.44% of JavaScript online submissions for Online Stock Span.

const StockSpanner = function () {
  this.arr = []
}

/**
 * @param {number} price
 * @return {number}
 */
StockSpanner.prototype.next = function (price) {
  this.arr.push(price)
  const arrLen = this.arr.length
  let result = 1
  for (let i = arrLen - 2; i >= 0; i -= 1 || 0) {
    if (this.arr[i] <= price) {
      result += 1
    } else {
      break
    }
  }
  return result
}

/**
 * Your StockSpanner object will be instantiated and called as such:
 * var obj = new StockSpanner()
 * var param_1 = obj.next(price)
 */

const obj = new StockSpanner()
obj.next(100) //?
obj.next(80) //?
obj.next(60) //?
obj.next(70) //?
obj.next(60) //?
obj.next(75) //?
obj.next(85) //?
