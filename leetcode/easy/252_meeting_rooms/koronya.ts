// [Easy] 252. Meeting Rooms
// 252_meeting_rooms

// https://leetcode.com/problems/meeting-rooms
// Runtime: 84 ms, faster than 70.00% of TypeScript online submissions for Meeting Rooms.
// Memory Usage: 41.5 MB, less than 16.67% of TypeScript online submissions for Meeting Rooms.

function canAttendMeetings(intervals: number[][]): boolean {
  const intervalsLen: number = intervals.length
  if (intervalsLen === 0) {
    return true
  }
  intervals.sort((a, b) => a[0] - b[0])
  let max: number = intervals[0][1]
  for (let i: number = 1; i < intervalsLen; i += 1) {
    const [minInterval, maxInterval] = intervals[i]
    if (max > minInterval) {
      return false
    }
    max = maxInterval
  }

  return true
}
