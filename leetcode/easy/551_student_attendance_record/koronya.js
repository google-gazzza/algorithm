// [Easy] 551. Student Attendance Record I
// 551_student_attendance_record_i

// https://leetcode.com/problems/student-attendance-record-i
// Runtime: 80 ms, faster than 67.53% of JavaScript online submissions for Student Attendance Record I.
// Memory Usage: 38.5 MB, less than 88.31% of JavaScript online submissions for Student Attendance Record I.

/**
 * @param {string} s
 * @return {boolean}
 */
const checkRecord = function (s) {
  const sLen = s.length
  let absentCount = 0
  let lateCount = 0
  for (let i = 0; i < sLen; i += 1 || 0) {
    const str = s[i]
    if (str === 'L') {
      if (lateCount > 1) {
        return false
      }
      lateCount += 1
    } else {
      lateCount = 0
      if (str === 'A') {
        if (absentCount > 0) {
          return false
        }
        absentCount += 1
      }
    }
  }
  return true
}

checkRecord('PPALLP') //?
checkRecord('PPALLL') //?
checkRecord('LALL') //?
checkRecord('PPALLP') //?
