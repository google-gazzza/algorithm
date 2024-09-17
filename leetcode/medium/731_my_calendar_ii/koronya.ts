// [Medium] 731. My Calendar II
// 731_my_calendar_ii

// https://leetcode.com/problems/my-calendar-ii
// Runtime: 204 ms, faster than 100.00% of TypeScript online submissions for My Calendar II.
// Memory Usage: 49.3 MB, less than 75.00% of TypeScript online submissions for My Calendar II.

class MyCalendarTwo {
  arr: number[][]
  arr2: number[][]

  constructor() {
    this.arr = []
    this.arr2 = []
  }

  book(start: number, end: number): boolean {
    const arr2Len: number = this.arr2.length
    for (let i: number = 0; i < arr2Len; i += 1) {
      const [arr2Start, arr2End] = this.arr2[i]
      if (start < arr2End && end > arr2Start) {
        return false
      }
    }

    const arrLen: number = this.arr.length
    for (let i: number = 0; i < arrLen; i += 1) {
      const [arrStart, arrEnd] = this.arr[i]
      if (start < arrEnd && end > arrStart) {
        this.arr2.push([Math.max(arrStart, start), Math.min(arrEnd, end)])
      }
    }
    this.arr.push([start, end])
    return true
  }
}
