// https://leetcode.com/problems/student-attendance-record-i/

// Runtime: 48 ms, faster than 94.57% of JavaScript online submissions for Student Attendance Record I.
// Memory Usage: 33.8 MB, less than 100.00% of JavaScript online submissions for Student Attendance Record I.

const checkRecord = (s) => {
  const absent = s.match(/A/) ? s.match(/A/g).length : 0;
  const late = s.match(/LLL/) ? s.match(/LLL/g).length : 0;
  return absent < 2 && late === 0;
};

console.log(checkRecord('PPALLP'), true);
console.log(checkRecord('PPALLL'), false);
// Input: 'PPALLP'
// Output: True
//
// Input: 'PPALLL'
// Output: False
