/**
  * https://leetcode.com/problems/contains-duplicate/
  *
  * Runtime: 608 ms, faster than 48.84% of Scala online submissions for Contains Duplicate.
  * Memory Usage: 59.5 MB, less than 100.00% of Scala online submissions for Contains Duplicate.
  */
object dosun {
  // Runtime: 608 ms, faster than 48.84%
  // Memory Usage: 59.5 MB, less than 100.00%
  def containsDuplicate(nums: Array[Int]): Boolean = {
    !(nums.toSet.size == nums.size)
  }

  // More faster then containsDuplicate()
  // Runtime: 548 ms, faster than 90.70%
  // Memory Usage: 59 MB, less than 100.00%
  def containsDuplicate2(nums: Array[Int]): Boolean = {
    val sortedNums = nums.sorted
    for (i <- 0 to sortedNums.length - 2) {
      if (sortedNums(i) == sortedNums(i + 1)) return true
    }
    false
  }
}
