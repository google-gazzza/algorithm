// [Medium] 731. My Calendar II
// 731_my_calendar_ii

// https://leetcode.com/problems/my-calendar-ii
// Runtime: 296 ms, faster than 36.47% of JavaScript online submissions for My Calendar II.
// Memory Usage: 48.2 MB, less than 77.65% of JavaScript online submissions for My Calendar II.

const MyCalendarTwo = function () {
  this.arr = []
  this.arr2 = []
}

/**
 * @param {number} start
 * @param {number} end
 * @return {boolean}
 */
MyCalendarTwo.prototype.book = function (start, end) {
  const arr2Len = this.arr2.length
  for (let i = 0; i < arr2Len; i += 1 || 0) {
    const [arr2Start, arr2End] = this.arr2[i]
    if (start < arr2End && end > arr2Start) {
      return false
    }
  }

  const arrLen = this.arr.length
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const [arrStart, arrEnd] = this.arr[i]
    if (start < arrEnd && end > arrStart) {
      this.arr2.push([Math.max(arrStart, start), Math.min(arrEnd, end)])
    }
  }
  this.arr.push([start, end])
  return true
}

const myCalendarTwo = new MyCalendarTwo()
myCalendarTwo.book(10, 20) //?
myCalendarTwo.book(50, 60) //?
myCalendarTwo.book(10, 40) //?
myCalendarTwo.book(5, 15) //?
myCalendarTwo.book(5, 10) //?
myCalendarTwo.book(25, 55) //?
