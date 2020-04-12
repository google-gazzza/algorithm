/**
  * https://leetcode.com/problems/student-attendance-record-i/
  *
  * Runtime: 444 ms, faster than 15.38% of Scala online submissions for Student Attendance Record I.
  * Memory Usage: 51.7 MB, less than 100.00% of Scala online submissions for Student Attendance Record I.
  */
  object Solution {
    def checkRecord(s: String): Boolean = {
        val absent           = "A"
        val tooLate          = "LLL"
        val isContainAbasent = s.indexOf(absent) != s.lastIndexOf(absent)
        val isContinueLate   = s.indexOf(tooLate) > -1

        !(isContainAbasent || isContinueLate)
    }
}
