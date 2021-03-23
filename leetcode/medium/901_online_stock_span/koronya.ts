// [Medium] 901. Online Stock Span
// 901_online_stock_span

// https://leetcode.com/problems/online-stock-span
// Runtime: 624 ms, faster than 33.33% of TypeScript online submissions for Online Stock Span.
// Memory Usage: 49.5 MB, less than 66.67% of TypeScript online submissions for Online Stock Span.

class StockSpanner {
  arr: number[]
  constructor() {
    this.arr = []
  }

  next(price: number): number {
    this.arr.push(price)
    const arrLen: number = this.arr.length
    let result: number = 1
    for (let i: number = arrLen - 2; i >= 0; i -= 1) {
      if (this.arr[i] <= price) {
        result += 1
      } else {
        break
      }
    }
    return result
  }
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
