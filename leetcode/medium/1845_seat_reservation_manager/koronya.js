// [Medium] 1845. Seat Reservation Manager
// 1845_seat_reservation_manager

// https://leetcode.com/problems/seat-reservation-manager
// Runtime: 8576 ms, faster than 5.26% of JavaScript online submissions for Seat Reservation Manager.
// Memory Usage: 78.6 MB, less than 49.12% of JavaScript online submissions for Seat Reservation Manager.

/**
 * @param {number} n
 */
const SeatManager = function (n) {
  this.arr = Array.from({ length: n }).map((_, index) => index + 1)
}

/**
 * @return {number}
 */
SeatManager.prototype.reserve = function () {
  return this.arr.shift()
}

/**
 * @param {number} seatNumber
 * @return {void}
 */
SeatManager.prototype.unreserve = function (seatNumber) {
  const arrLen = this.arr.length
  if (arrLen === 0) {
    this.arr.push(seatNumber)
    return
  }
  for (let i = 0; i < arrLen; i += 1 || 0) {
    const num = this.arr[i]
    if (num > seatNumber) {
      this.arr.splice(i, 0, seatNumber)
      return
    }
  }
  return
}

// 아래 방법은 TLE

// /**
//  * @param {number} n
//  */
// const SeatManager = function (n) {
//   this.arr = Array.from({ length: n }).map((item) => false)
//   this.arrLen = n
// }

// /**
//  * @return {number}
//  */
// SeatManager.prototype.reserve = function () {
//   const arrLen = this.arrLen
//   for (let i = 0; i < arrLen; i += 1 || 0) {
//     if (this.arr[i] === false) {
//       this.arr[i] = true
//       return i + 1
//     }
//   }
// }

// /**
//  * @param {number} seatNumber
//  * @return {void}
//  */
// SeatManager.prototype.unreserve = function (seatNumber) {
//   this.arr[seatNumber - 1] = false
// }

/**
 * Your SeatManager object will be instantiated and called as such:
 * var obj = new SeatManager(n)
 * var param_1 = obj.reserve()
 * obj.unreserve(seatNumber)
 */

// const obj = new SeatManager(5)
// obj.reserve() //?
// obj.reserve() //?
// obj.unreserve(2) //?
// obj.reserve() //?
// obj.reserve() //?
// obj.reserve() //?
// obj.reserve() //?
// obj.unreserve(5) //?

// const obj = new SeatManager(3)
// obj.reserve() //?
// obj.reserve() //?
// obj.unreserve(1)
// obj.unreserve(2)
// obj.reserve() //?
// obj.unreserve(1)
// obj.reserve() //?
// obj.unreserve(1)

const obj = new SeatManager(2)
obj.reserve() //?
obj.unreserve(1) //?
obj.reserve() //?
obj.reserve() //?
obj.unreserve(2) //?
obj.reserve() //?
obj.unreserve(1) //?
obj.reserve() //?
obj.unreserve(2) //?
obj.reserve() //?
