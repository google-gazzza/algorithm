/**
  * https://leetcode.com/problems/unique-number-of-occurrences/
  * 
  * Runtime: 496 ms, faster than 22.22% of Scala online submissions for Unique Number of Occurrences.
  * Memory Usage: 53.2 MB, less than 100.00% of Scala online submissions for Unique Number of Occurrences.
  */
 object Solution {
    def uniqueOccurrences(arr: Array[Int]): Boolean = {
        val map     = arr.groupBy(c => c).mapValues(_.length)
        val counter = map.values
        counter.toSet.size == counter.size
    }
}
