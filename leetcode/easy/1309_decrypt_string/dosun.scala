/**
  * https://leetcode.com/problems/decrypt-string-from-alphabet-to-integer-mapping/
  * 
  * Runtime: 468 ms, faster than 21.05% of Scala online submissions for Decrypt String from Alphabet to Integer Mapping.
  * Memory Usage: 52.2 MB, less than 100.00% of Scala online submissions for Decrypt String from Alphabet to Integer Mapping.
  */
import scala.util.matching.Regex

object Solution {
    def freqAlphabets(s: String): String = {
        val pattern    = new Regex("\\d\\d#|\\d")
        val characters = pattern.findAllIn(s)
        var result     = ""
        characters.foreach { char =>
            result += (char.replace("#", "").toInt + 96).toChar
        }
        result
    }
}
