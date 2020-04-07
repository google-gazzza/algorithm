/**
  * https://leetcode.com/problems/uncommon-words-from-two-sentences/
  *
  * Runtime: 488 ms, faster than 11.11% of Scala online submissions for Uncommon Words from Two Sentences.
  * Memory Usage: 52.8 MB, less than 100.00% of Scala online submissions for Uncommon Words from Two Sentences.
  */
object Solution {
    def uncommonFromSentences(A: String, B: String): Array[String] = {
        val sentences     = List.concat(A.split(" "), B.split(" "))
        val words         = sentences.groupBy(c => c).mapValues(_.length)
        val uncommonWords = words.filter(_._2 == 1).keys
        uncommonWords.toArray
    }
}
