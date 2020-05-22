/**
* https://leetcode.com/problems/set-mismatch/
* 
* Runtime: 676 ms, faster than 40.00% of Scala online submissions for Set Mismatch.
* Memory Usage: 54.9 MB, less than 100.00% of Scala online submissions for Set Mismatch.
*/
object Solution {
    def findErrorNums(nums: Array[Int]): Array[Int] = {
        val uniqueSum    = nums.toSet.sum
        val numSum       = nums.sum
        var listSizeSum  = 0
        for (i <- 0 to nums.length) listSizeSum += i

        val duplicatedNum = numSum - uniqueSum
        val missingNum    = listSizeSum - uniqueSum

        Array(duplicatedNum, missingNum)
    }
}
