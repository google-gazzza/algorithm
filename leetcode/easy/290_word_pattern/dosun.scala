/**
  * https://leetcode.com/problems/word-pattern/
  *
  * Runtime: 440 ms, faster than 20.00% of Scala online submissions for Word Pattern.
  * Memory Usage: 51.8 MB, less than 100.00% of Scala online submissions for Word Pattern.
  */
import scala.collection.mutable.HashMap

object Solution {
    def wordPattern(pattern: String, str: String): Boolean = {
        val strArray = str.split(" ")
        if (pattern.length != strArray.length) return false

        val map1 = HashMap.empty[String, Int]
        val map2 = HashMap.empty[String, Int]
        val patternSize = pattern.split("").length
        for(i <- 0 to patternSize - 1) {
          map1(pattern.charAt(i).toString) = i
          map2(strArray(i)) = i
        }
        
        if (map1.values.toList.sorted != map2.values.toList.sorted) {
          return false
        }
        true
    }
}
