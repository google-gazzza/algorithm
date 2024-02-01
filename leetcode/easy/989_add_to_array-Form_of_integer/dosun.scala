/**
  * https://leetcode.com/problems/add-to-array-form-of-integer/
  *
  * Runtime: 3136 ms, faster than 50.00% of Scala online submissions for Add to Array-Form of Integer.
  * Memory Usage: 64.9 MB, less than 100.00% of Scala online submissions for Add to Array-Form of Integer.
  */
  object Solution {
    def addToArrayForm(A: Array[Int], K: Int): List[Int] = {
        val sumNumbers = BigInt(A.mkString) + K
        val result     = sumNumbers.toString.split("").map(_.toInt).toList
        result
    }
}
