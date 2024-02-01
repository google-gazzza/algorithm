/**
  * https://leetcode.com/problems/group-anagrams/
  *
  * Runtime: 1896 ms, faster than 63.38% of Scala online submissions for Group Anagrams.
  * Memory Usage: 73 MB, less than 100.00% of Scala online submissions for Group Anagrams.
  */
  object Solution {
    def groupAnagrams(strs: Array[String]): List[List[String]] = {
        strs
          .map(s => s.sorted -> s)
          .groupBy(_._1)
          .mapValues(_.map(_._2).toList)
          .values
          .toList
    }
}
