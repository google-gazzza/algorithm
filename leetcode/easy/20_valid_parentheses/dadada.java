//https://leetcode.com/problems/valid-parentheses/submissions/
//Runtime: 4 ms, faster than 24.81% of Java online submissions for Valid Parentheses.
//Memory Usage: 42.2 MB, less than 30.85% of Java online submissions for Valid Parentheses.


class Solution {
    public boolean isValid(String s) {
        Deque<Character> stack = new ArrayDeque<>();
        List<Character> openChar = Arrays.asList('(', '{', '[');
        List<Character> closeChar = Arrays.asList(')', '}', ']');

        for (char ch : s.toCharArray()) {
            if (openChar.contains(ch)) {
                stack.push(ch);
            }
            if (closeChar.contains(ch)) {
                if (stack.isEmpty()) {
                    return false;
                }
                char temp = stack.peek();
                if ('(' == temp && ch == ')' || '{' == temp && ch == '}' || '[' == temp && ch == ']') {
                    stack.pop();
                } else {
                    return false;
                }
           }
        }
        return stack.isEmpty();
    }
}
