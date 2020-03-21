/**
  * https://leetcode.com/problems/add-digits/
  *
  * Runtime: 500 ms, faster than 28.57% of Scala online submissions for Add Digits.
  * Memory Usage: 55.9 MB, less than 100.00% of Scala online submissions for Add Digits.
  */
  object Solution {
    def toIntList(num: Int): List[Int] = {
        num.toString.split("").map(_.toInt).toList
    }

    def addDigits(num: Int): Int = {
        val sumNumbers1 = toIntList(num).sum
        val sumNumbers2 = toIntList(sumNumbers1).sum
        val result = toIntList(sumNumbers2).sum
        result
    }
}
