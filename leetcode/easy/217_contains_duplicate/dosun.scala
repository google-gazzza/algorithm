/**
  * https://leetcode.com/problems/contains-duplicate/
  *
  * Runtime: 608 ms, faster than 48.84% of Scala online submissions for Contains Duplicate.
  * Memory Usage: 59.5 MB, less than 100.00% of Scala online submissions for Contains Duplicate.
  */
object dosun {
  def containsDuplicate(nums: Array[Int]): Boolean = {
    !(nums.toSet.size == nums.size)
  }
}