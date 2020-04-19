/** https://leetcode.com/problems/missing-number/
  * 
  * Runtime: 524 ms, faster than 24.39% of Scala online submissions for Missing Number.
  * Memory Usage: 57.5 MB, less than 100.00% of Scala online submissions for Missing Number.
  */
  object Solution {
    def missingNumber(nums: Array[Int]): Int = {
        val n = nums.length
        (n * (n + 1) / 2) - nums.sum
    }
}
