/**
  * https://leetcode.com/problems/base-7/submissions/
  *
  * Runtime: 380 ms, faster than 40.00% of Scala online submissions for Base 7.
  * Memory Usage: 50.4 MB, less than 100.00% of Scala online submissions for Base 7.
  */
  object Solution {
    def convertToBase7(num: Int): String = {
        BigInt(num).toString(7)
    }
}
