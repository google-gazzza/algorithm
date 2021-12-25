// [Medium] 253. Meeting Rooms II
// 253_meeting_rooms_ii

// https://leetcode.com/problems/meeting-rooms-ii
// Runtime: 80 ms, faster than 98.53% of TypeScript online submissions for Meeting Rooms II.
// Memory Usage: 41 MB, less than 88.24% of TypeScript online submissions for Meeting Rooms II.

function minMeetingRooms(intervals: number[][]): number {
  const intervalsLen: number = intervals.length
  const startArr = [...intervals].sort((a, b) => a[0] - b[0])
  const endArr = [...intervals].sort((a, b) => a[1] - b[1])
  let count: number = 0
  let endIndex: number = 0
  for (let i: number = 0; i < intervalsLen; i += 1) {
    if (startArr[i][0] < endArr[endIndex][1]) {
      count += 1
    } else {
      endIndex += 1
    }
  }

  return count
}
