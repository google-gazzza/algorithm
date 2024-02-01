/**
  * https://leetcode.com/problems/permutations/
  *
  * Runtime: 536 ms, faster than 54.76% of Scala online submissions for Permutations.
  * Memory Usage: 57.1 MB, less than 100.00% of Scala online submissions for Permutations.
  */
import scala.collection.mutable.ListBuffer

object Solution {
  private def swap(nums: Array[Int], i: Int, j: Int): Unit = {
    if (i == j) return
    val temp = nums(i)
    nums(i) = nums(j)
    nums(j) = temp
  }

  private def backtracking(i: Int, nums: Array[Int], result: ListBuffer[List[Int]]): Unit = {
    if (i == nums.length - 1) {
      val list = new ListBuffer[Int]()
      nums.foreach(list += _)
      result += list.toList
    }
    for(j <- i to nums.length - 1) {
      swap(nums, j, i)
      backtracking(i + 1, nums, result)
      swap(nums, j, i)
    }
  }
  def permute(nums: Array[Int]): List[List[Int]] = {
    val result = new ListBuffer[List[Int]]()
    backtracking(0, nums, result)
    result.toList
  }
}
