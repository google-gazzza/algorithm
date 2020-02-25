/**
  * https://leetcode.com/problems/reverse-words-in-a-string-iii/
  *
  * Runtime: 4140 ms, faster than 85.71% of Scala online submissions for Reverse Words in a String III.
  * Memory Usage: 55.4 MB, less than 100.00% of Scala online submissions for Reverse Words in a String III.
  */
object Solution {
    def reverseWords(s: String): String = {
        val words  = s.split(" ")
        var result = List[String]()
        words.foreach(word => {result = word.reverse :: result})

        result.reverse.mkString(" ")
    }
}
