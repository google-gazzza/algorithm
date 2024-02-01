/**
  * https://leetcode.com/problems/valid-perfect-square/
  *
  * Runtime: 368 ms, faster than 66.67% of Scala online submissions for Valid Perfect Square.
  * Memory Usage: 50 MB, less than 100.00% of Scala online submissions for Valid Perfect Square.
  */
object Solution {
    def isPerfectSquare(num: Int): Boolean = {
        val sqrt  = math.sqrt(num)
        val floor = math.floor(sqrt)
        sqrt - floor == 0
    }
}
