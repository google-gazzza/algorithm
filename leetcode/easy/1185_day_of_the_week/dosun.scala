/**
  * https://leetcode.com/problems/day-of-the-week/
  *
  * Runtime: 412 ms, faster than 50.00% of Scala online submissions for Day of the Week.
  * Memory Usage: 51.6 MB, less than 100.00% of Scala online submissions for Day of the Week.
  */
import java.time.format.DateTimeFormatter
import java.time.LocalDate

object Solution {
    def zeroPadding(num: Int): String = {
         f"${num}%02d"
    }
    
    def dayOfTheWeek(day: Int, month: Int, year: Int): String = {
        val dateFormat   = DateTimeFormatter.ofPattern("MM/dd/yyyy")
        val paddingMonth = zeroPadding(month)
        val paddingDay   = zeroPadding(day)
        val date         = LocalDate.parse(s"$paddingMonth/$paddingDay/$year", dateFormat)
        date.getDayOfWeek.toString.toLowerCase().capitalize
    }
}
