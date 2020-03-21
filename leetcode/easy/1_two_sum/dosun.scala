/**
  * https://leetcode.com/problems/two-sum/
  *
  * Runtime: 524 ms, faster than 40.27% of Scala online submissions for Two Sum.
  * Memory Usage: 57.4 MB, less than 25.00% of Scala online submissions for Two Sum.
  */
import scala.collection.mutable.Map

object Solution {
    def twoSum(nums: Array[Int], target: Int): Array[Int] = {
        val map = Map[Int, Int]()
        var count = 0
        nums.foreach { num =>
            val diff = target - num
            val optIndex = map.get(diff)
            optIndex match {
                case Some(x) => return Array(x, count)
                case _ => map.put(num, count)
            }
        count = count + 1
        }
        Array.empty
    }
}
