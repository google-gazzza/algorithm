// [Easy] 1656. Design an Ordered Stream
// 1656_design_an_ordered_stream

// https://leetcode.com/problems/design-an-ordered-stream
// Runtime: 192 ms, faster than 71.43% of TypeScript online submissions for Design an Ordered Stream.
// Memory Usage: 51 MB, less than 42.86% of TypeScript online submissions for Design an Ordered Stream.
class OrderedStream {
  arr: string[]
  ptr: number

  constructor(n: number) {
    this.arr = Array.from({length: n})
    this.ptr = 0
  }

  insert (id: number, value: string): string[] {
    const insertIndex: number = id - 1
    this.arr[insertIndex] = value
    const chunkArr: string[] = []
    if (this.ptr === insertIndex) {
      while (this.arr[this.ptr] !== undefined) {
        chunkArr.push(this.arr[this.ptr])
        this.ptr += 1
      }
      return chunkArr
    } else {
      return []
    }
  }
}
