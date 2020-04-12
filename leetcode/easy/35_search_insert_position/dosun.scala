/**
  * https://leetcode.com/problems/search-insert-position/
  *
  * Runtime: 484 ms, faster than 75.68% of Scala online submissions for Search Insert Position.
  * Memory Usage: 52.7 MB, less than 100.00% of Scala online submissions for Search Insert Position.
  */
object Solution {
  def searchInsert(nums: Array[Int], target: Int): Int = {
    val numsSize = nums.length
    if (target > nums.last) {
      return numsSize
    }

    for (i <- 0.until(numsSize)) {
      if (nums(i) >= target) {
        return i
      }
    }
    numsSize
  }
}
