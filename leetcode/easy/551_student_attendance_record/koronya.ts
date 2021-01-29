// [Easy] 551. Student Attendance Record I
// 551_student_attendance_record_i

// https://leetcode.com/problems/student-attendance-record-i
// Runtime: 84 ms, faster than 60.00% of TypeScript online submissions for Student Attendance Record I.
// Memory Usage: 39.2 MB, less than 100.00% of TypeScript online submissions for Student Attendance Record I.
function checkRecord(s: string): boolean {
  const sLen: number = s.length
  let absentCount: number = 0
  let lateCount: number = 0
  for (let i: number = 0; i < sLen; i += 1 || 0) {
    const str: string = s[i]
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
