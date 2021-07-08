// [Medium] 729. My Calendar I
// 729_my_calendar_i

// https://leetcode.com/problems/my-calendar-i
// Runtime: 172 ms, faster than 92.38% of JavaScript online submissions for My Calendar I.
// Memory Usage: 47.9 MB, less than 36.05% of JavaScript online submissions for My Calendar I.

const findIndex = (arr, start) => {
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

const MyCalendar = function () {
  this.arr = []
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendar.prototype.book = function (start, end) {
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

/**
 * Your MyCalendar object will be instantiated and called as such:
 * var obj = new MyCalendar()
 * var param_1 = obj.book(start,end)
 */

// const myCalendar = new MyCalendar()
// myCalendar.book(10, 20) //?
// myCalendar.book(15, 25) //?
// myCalendar.book(20, 30) //?

const myCalendar = new MyCalendar()
myCalendar.book(47, 50) //?
myCalendar.book(33, 41) //?
// myCalendar.book(20, 30) //?
