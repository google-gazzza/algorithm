// [Medium] 729. My Calendar I
// 729_my_calendar_i

// https://leetcode.com/problems/my-calendar-i
// Runtime: 240 ms, faster than 47.62% of TypeScript online submissions for My Calendar I.
// Memory Usage: 48.3 MB, less than 50.79% of TypeScript online submissions for My Calendar I.

const findIndex = (arr: number[][], start: number): number => {
  const arrLen = arr.length
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const num = arr[i][0]
    if (num === start) {
      return -1
    }
    if (num > start) {
      return i
    }
  }
  return arrLen
}

class MyCalendar {
  arr: number[][]
  constructor() {
    this.arr = []
  }

  book(start: number, end: number): boolean {
    if (this.arr.length === 0) {
      this.arr.push([start, end])
      return true
    }

    const index = findIndex(this.arr, start)
    if (index === -1) {
      return false
    } else if (index === 0) {
      if (this.arr[0][0] < end) {
        return false
      }
      this.arr.unshift([start, end])
    } else if (index === this.arr.length) {
      if (this.arr[this.arr.length - 1][1] > start) {
        return false
      }
      this.arr.push([start, end])
    } else {
      const prev = this.arr[index - 1]
      const next = this.arr[index]
      if (prev[1] > start || next[0] < end) {
        return false
      }
      this.arr.splice(index, 0, [start, end])
    }

    return true
  }
}
