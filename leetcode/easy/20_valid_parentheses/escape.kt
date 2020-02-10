import java.util.*

// https://leetcode.com/problems/valid-parentheses/submissions/
// Runtime: 160 ms, faster than 25.52% of Kotlin online submissions for Valid Parentheses.
// Memory Usage: 32.7 MB, less than 100.00% of Kotlin online submissions for Valid Parentheses.
class ValidParentheses {
    var parentheses = hashMapOf('(' to ')', '{' to '}', '[' to ']')
    fun isValid(s: String): Boolean {

        var stack = Stack<Char>()
        for (current in s.toCharArray()) {
            if (parentheses.containsKey(current))
                stack.push(current)
            else if (stack.isNotEmpty() && parentheses[stack.peek()] == current)
                stack.pop()
            else if (stack.isEmpty() || parentheses[stack.peek()] != current)
                return false
        }

        return stack.isEmpty()
    }
}