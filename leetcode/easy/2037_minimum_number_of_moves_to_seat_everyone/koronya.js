// [Easy] 2037. Minimum Number of Moves to Seat Everyone
// 2037_minimum_number_of_moves_to_seat_everyone

// https://leetcode.com/problems/minimum-number-of-moves-to-seat-everyone
// Runtime: 80 ms, faster than 91.30% of JavaScript online submissions for Minimum Number of Moves to Seat Everyone.
// Memory Usage: 40.4 MB, less than 48.91% of JavaScript online submissions for Minimum Number of Moves to Seat Everyone.

/**
 * @param {number[]} seats
 * @param {number[]} students
 * @return {number}
 */
const minMovesToSeat = function (seats, students) {
  seats.sort((a, b) => a - b)
  students.sort((a, b) => a - b)
  return students.reduce((acc, cur, index) => acc + Math.abs(cur - seats[index]), 0)
}

minMovesToSeat([3, 1, 5], [2, 7, 4]) //?
minMovesToSeat([4, 1, 5, 9], [1, 3, 2, 6]) //?
minMovesToSeat([2, 2, 6, 6], [1, 3, 2, 6]) //?
