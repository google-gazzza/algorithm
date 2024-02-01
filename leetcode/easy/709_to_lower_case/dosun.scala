/**
  * https://leetcode.com/problems/to-lower-case/
  *
  * Runtime: 404 ms, faster than 70.00% of Scala online submissions for To Lower Case.
  * Memory Usage: 51.6 MB, less than 100.00% of Scala online submissions for To Lower Case.
  */

object Solution {
  def toLowerCase(str: String): String = {
    var result = ""
    str.map(c =>
      c.isUpper match {
        case true => result += (c + 32).toChar
        case _    => result += c
      })
    result
  }
}