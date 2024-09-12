// [Medium] 1845. Seat Reservation Manager
// 1845_seat_reservation_manager

// https://leetcode.com/problems/seat-reservation-manager
// Runtime: 8612 ms, faster than 6.67% of TypeScript online submissions for Seat Reservation Manager.
// Memory Usage: 78.6 MB, less than 73.33% of TypeScript online submissions for Seat Reservation Manager.

class SeatManager {
  arr: number[]
  constructor(n: number) {
    this.arr = Array.from({ length: n }).map((_, index) => index + 1)
  }

  reserve(): number {
    return this.arr.shift() || 0
  }

  unreserve(seatNumber: number): void {
    const arrLen: number = this.arr.length
    if (arrLen === 0) {
      this.arr.push(seatNumber)
      return
    }
    for (let i: number = 0; i < arrLen; i += 1) {
      const num: number = this.arr[i]
      if (num > seatNumber) {
        this.arr.splice(i, 0, seatNumber)
        return
      }
    }
    return
  }
}
