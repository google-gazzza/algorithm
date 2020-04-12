
/**
  * https://leetcode.com/problems/remove-element/
  * 
  * Runtime: 456 ms, faster than 38.24% of Scala online submissions for Remove Element.
  * Memory Usage: 57.2 MB, less than 100.00% of Scala online submissions for Remove Element.
  */
  object Solution {
    def removeElement(nums: Array[Int], `val`: Int): Int = {
        var count = 0
        for (num <- nums) {
            if (num != `val`) {
                nums(count) = num
                count += 1
            }
        }
        count
    }
}
