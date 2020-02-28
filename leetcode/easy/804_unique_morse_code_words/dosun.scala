/**
  * https://leetcode.com/problems/unique-morse-code-words/
  * 
  * Runtime: 496ms, faster than 20.00% of Scala online submissions for Unique Morse Code Words.
  * Memory Usage: 52.9 MB, less than 100.00% of Scala online submissions for Unique Morse Code Words.
  */
  object Solution {
    def uniqueMorseRepresentations(words: Array[String]): Int = {
        if (words.length == 0) return 0
        val morseCodeTable = Map[Char, String](
          'a' -> ".-",
          'b' -> "-...",
          'c' -> "-.-.",
          'd' -> "-..",
          'e' -> ".",
          'f' -> "..-.",
          'g' -> "--.",
          'h' -> "....",
          'i' -> "..",
          'j' -> ".---",
          'k' -> "-.-",
          'l' -> ".-..",
          'm' -> "--",
          'n' -> "-.",
          'o' -> "---",
          'p' -> ".--.",
          'q' -> "--.-",
          'r' -> ".-.",
          's' -> "...",
          't' -> "-",
          'u' -> "..-",
          'v' -> "...-",
          'w' -> ".--",
          'x' -> "-..-",
          'y' -> "-.--",
          'z' -> "--.."
        )

        var uniqueMorseCodes = scala.collection.mutable.Set[String]()
        words.foreach { word =>
          var result = ""
          word.map(result += morseCodeTable.get(_).get)
          uniqueMorseCodes += result
        }
        uniqueMorseCodes.size
    }
}
