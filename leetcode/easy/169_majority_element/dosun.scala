/**
  * https://leetcode.com/problems/majority-element/
  *
  * Runtime: 624 ms, faster than 10.95% of Scala online submissions for Majority Element.
  * Memory Usage: 58.7 MB, less than 100.00% of Scala online submissions for Majority Element.
  */
object Solution {
    def majorityElement(nums: Array[Int]): Int = {
        val numsMap  = nums.groupBy(num => num).mapValues(_.length)
        val maxValue = numsMap.values.max
        
        return numsMap.filter(_._2 == maxValue).keys.toList(0)
    }
}
