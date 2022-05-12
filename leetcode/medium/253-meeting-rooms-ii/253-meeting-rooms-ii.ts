/*
253-meeting-rooms-ii
leetcode/medium/253. Meeting Rooms II
URL: https://leetcode.com/problems/meeting-rooms-ii/

NOTE: Description
NOTE: Constraints
  - 1 <= intervals.length <= 10^4
  - 0 <= start_i < end_i <= 10^6

NOTE: Explanation
*/

function minMeetingRooms(intervals: number[][]): number {
  let max = 1;

  intervals.sort((a, b) => a[0] - b[0]);
  intervals[0] = [intervals[0][0], intervals[0][1], 1];

  intervals.forEach(([, end], index) => {
    for (let i = index + 1; i < intervals.length; i += 1) {
      intervals[i];
      if (intervals[i][0] >= end) {
        break;
      }
      const [intervalStart, intervalEnd] = intervals[i];
      const count = (intervals[i][2] || 1) + 1;
      max = Math.max(max, count);

      intervals[i] = [intervalStart, intervalEnd, count];
    }
  });

  return max;
}

let intervals = [[0, 30], [5, 10], [15, 20]];
console.log(minMeetingRooms(intervals));
// Output: 2

intervals = [[7, 10], [2, 4]];
console.log(minMeetingRooms(intervals));
// 1

intervals = [
  [6, 15],
  [13, 20],
  [6, 17],
];
console.log(minMeetingRooms(intervals));
// 3
