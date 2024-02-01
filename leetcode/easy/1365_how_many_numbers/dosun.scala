/**
  * https://leetcode.com/problems/how-many-numbers-are-smaller-than-the-current-number/
  *
  * Runtime: 508 ms, faster than 95.83% of Scala online submissions for How Many Numbers Are Smaller Than the Current Number.
  * Memory Usage: 53.1 MB, less than 100.00% of Scala online submissions for How Many Numbers Are Smaller Than the Current Number.
  */
object Solution {
  def smallerNumbersThanCurrent(nums: Array[Int]): Array[Int] = {
    nums.map { num =>
      nums.count(_ < num)
    }
  }
}

