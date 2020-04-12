/**
  * https://leetcode.com/problems/count-negative-numbers-in-a-sorted-matrix/
  *
  * Runtime: 568 ms, faster than 6.45% of Scala online submissions for Count Negative Numbers in a Sorted Matrix.
  * Memory Usage: 53.7 MB, less than 100.00% of Scala online submissions for Count Negative Numbers in a Sorted Matrix.
  */
object Solution {
  def countNegatives(grid: Array[Array[Int]]): Int = {
    val negatives = grid.map(_.filter(_ <= -1))
    negatives.flatten.length
  }
}