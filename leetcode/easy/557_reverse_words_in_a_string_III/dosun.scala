/**
  * https://leetcode.com/problems/reverse-words-in-a-string-iii/
  *
  * Runtime: 4008 ms, faster than 92.86% of Scala online submissions for Reverse Words in a String III.
  * Memory Usage: 55.1 MB, less than 100.00% of Scala online submissions for Reverse Words in a String III.
  */
object Solution {
    def reverseWords(s: String): String = {
        s.split(" ").map(_.reverse).mkString(" ")
    }
}
