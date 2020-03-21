/**
  * https://leetcode.com/problems/ugly-number/
  * 
  * Runtime: 416 ms, faster than 14.29% of Scala online submissions for Ugly Number.
  * Memory Usage: 54 MB, less than 100.00% of Scala online submissions for Ugly Number.
  */
  object Solution {
    def isUgly(num: Int): Boolean = {
        if (num <= 0) return false
        val positiveNumbers = Seq(2, 3, 5)
        if (num == 1 || positiveNumbers.contains(num)) return true
        positiveNumbers.foreach { p =>
          if (num % p == 0) {
            return isUgly(num / p)
          }
        }
        return false
    }
}
