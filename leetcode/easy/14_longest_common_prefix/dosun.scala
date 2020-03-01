/**
  * https://leetcode.com/problems/longest-common-prefix/
  * 
  * Runtime: 488 ms, faster than 47.57% of Scala online submissions for Longest Common Prefix.
  * Memory Usage: 52.1 MB, less than 100.00% of Scala online submissions for Longest Common Prefix.
  */
object Solution {
    def longestCommonPrefix(strs: Array[String]): String = {
        if (strs.isEmpty) return ""
        val sorted = strs.sorted
        val first  = sorted.head
        val last   = sorted.last
        for(i <- first.indices) {
          if (first(i) != last(i)) {
            return first.substring(0, i)
          }
        }
        first
    }
}
