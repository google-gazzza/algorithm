/**
  * https://leetcode.com/problems/valid-parentheses/
  *
  * Runtime: 480 ms, faster than 13.82% of Scala online submissions for Valid Parentheses.
  * Memory Usage: 54.3 MB, less than 100.00% of Scala online submissions for Valid Parentheses.
  */
import scala.collection.mutable.Stack

object Solution {
    def isValid(s: String): Boolean = {
        if (s.isEmpty) return true
        val charMap = Map(
          ")" -> "(",
          "}" -> "{",
          "]" -> "["
        )

        val stack     = Stack[String]()
        val charArray = s.split("")
        for(c <- charArray) {
          if (!charMap.contains(c)) {
            stack.push(c)
          } else {
            if (stack.isEmpty || stack.pop() != charMap.get(c).get) {
              return false
            }
          }
        }
        stack.isEmpty
    }
}
