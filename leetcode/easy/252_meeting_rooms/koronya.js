// [Easy] 252. Meeting Rooms
// 252_meeting_rooms

// https://leetcode.com/problems/meeting-rooms
// Runtime: 72 ms, faster than 96.95% of JavaScript online submissions for Meeting Rooms.
// Memory Usage: 41.1 MB, less than 12.69% of JavaScript online submissions for Meeting Rooms.

/**
 * @param {number[][]} intervals
 * @return {boolean}
 */
const canAttendMeetings = function (intervals) {
  const intervalsLen = intervals.length
  if (intervalsLen === 0) {
    return true
  }
  intervals.sort((a, b) => a[0] - b[0])
  let max = intervals[0][1]
  for (let i = 1; i < intervalsLen; i += 1 || 0) {
    const [minInterval, maxInterval] = intervals[i]
    if (max > minInterval) {
      return false
    }
    max = maxInterval
  }

  return true
}

// canAttendMeetings([
//   [0, 30],
//   [5, 10],
//   [15, 20],
// ]) //?
// canAttendMeetings([
//   [7, 10],
//   [2, 4],
// ]) //?
canAttendMeetings([
  [13, 15],
  [1, 13],
]) //?
