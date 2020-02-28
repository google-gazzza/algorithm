/**
  * https://leetcode.com/problems/unique-morse-code-words/
  * 
  * Runtime: 492ms, faster than 40.00% of Scala online submissions for Unique Morse Code Words.
  * Memory Usage: 52.9 MB, less than 100.00% of Scala online submissions for Unique Morse Code Words.
  */
object Solution {
    def uniqueMorseRepresentations(words: Array[String]): Int = {
        if (words.isEmpty) return 0
        val morseTable = List(
          ".-",
          "-...",
          "-.-.",
          "-..",
          ".",
          "..-.",
          "--.",
          "....",
          "..",
          ".---",
          "-.-",
          ".-..",
          "--",
          "-.",
          "---",
          ".--.",
          "--.-",
          ".-.",
          "...",
          "-",
          "..-",
          "...-",
          ".--",
          "-..-",
          "-.--",
          "--.."
        )
        var uniqueMorseCodes = scala.collection.mutable.Set[String]()
        words.toSet.toArray.foreach { word =>
          var result = ""
          word.map(w => result += morseTable(w.toInt - 97))
          uniqueMorseCodes += result
        }
        uniqueMorseCodes.size
    }
}
