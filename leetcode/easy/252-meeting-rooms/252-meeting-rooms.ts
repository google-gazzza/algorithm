/*
252-meeting-rooms
leetcode/easy/252. Meeting Rooms
Difficulty: easy
URL: https://leetcode.com/problems/meeting-rooms/
*/

function canAttendMeetings(intervals: number[][]): boolean {
    intervals = intervals.sort((a, b) => a[0] - b[0]);
  
    return intervals.slice(0, intervals.length - 1)
      .every((e, i) => {
        return e[1] <= intervals[i + 1][0];
      });
  };
  
  
  // // Example 1:
  // //
  let intervals = [[0, 30], [5, 10], [15, 20]];
  console.log(canAttendMeetings(intervals));
  // Output: false
  // Example 2:
  //
  intervals = [[7, 10], [2, 4]];
  console.log(canAttendMeetings(intervals));
  // Output: true
  
  intervals = [[5, 8], [6, 8]];
  console.log(canAttendMeetings(intervals));
  
  intervals = [[13, 15], [1, 13]];
  console.log(canAttendMeetings(intervals));
  
  