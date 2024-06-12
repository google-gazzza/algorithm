// [Medium] 253. Meeting Rooms II
// 253_meeting_rooms_ii

// https://leetcode.com/problems/meeting-rooms-ii
// Runtime: 84 ms, faster than 76.07% of JavaScript online submissions for Meeting Rooms II.
// Memory Usage: 40.6 MB, less than 92.90% of JavaScript online submissions for Meeting Rooms II.

/**
 * @param {number[][]} intervals
 * @return {number}
 */
const minMeetingRooms = function (intervals) {
  const intervalsLen = intervals.length
  const startArr = [...intervals].sort((a, b) => a[0] - b[0])
  const endArr = [...intervals].sort((a, b) => a[1] - b[1])
  let count = 0
  let endIndex = 0
  for (let i = 0; i < intervalsLen; i += 1 || 0) {
    if (startArr[i][0] < endArr[endIndex][1]) {
      count += 1
    } else {
      endIndex += 1
    }
  }

  return count
}

minMeetingRooms([
  [0, 30],
  [5, 10],
  [15, 20],
]) //?
minMeetingRooms([
  [7, 10],
  [2, 4],
]) //?
minMeetingRooms([
  [13, 15],
  [1, 13],
]) //?
// expect 2 but 3
minMeetingRooms([
  [9, 10],
  [4, 9],
  [4, 17],
]) //?
minMeetingRooms([
  [9, 10],
  [4, 17],
  [4, 9],
]) //?
