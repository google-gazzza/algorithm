// [Medium] 284. Peeking Iterator
// 284_peeking_iterator

// https://leetcode.com/problems/peeking-iterator
// Runtime: 76 ms, faster than 100.00% of TypeScript online submissions for Peeking Iterator.
// Memory Usage: 40.2 MB, less than 66.67% of TypeScript online submissions for Peeking Iterator.

class PeekingIterator {
  list: Iterator
  top: number | null

  constructor(iterator: Iterator) {
    this.list = iterator
    this.top = iterator.next()
  }

  peek(): number {
    if (this.top !== null) {
      return this.top
    }
    if (this.list.hasNext() === true) {
      this.top = this.list.next()
      return this.top
    }
    return -1
  }

  next(): number {
    if (this.top !== null) {
      const temp = this.top
      this.top = null
      return temp
    }
    return this.list.next()
  }

  hasNext(): boolean {
    if (this.top !== null) {
      return true
    }
    return this.list.hasNext()
  }
}
