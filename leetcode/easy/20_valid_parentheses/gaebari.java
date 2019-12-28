// https://leetcode.com/problems/valid-parentheses/
// Runtime: 11 ms, faster than 5.25% of Java online submissions for Valid Parentheses.
// Memory Usage: 36.2 MB, less than 6.33% of Java online submissions for Valid Parentheses.
class Solution {
    public boolean isValid(String s) {
        if (s.equals("")) {
            return true;
        }

        Stack<String> stack = new Stack<String>();
        String tmp;

        for (String i : s.split("")) {
            if (i.equals("(") || i.equals("[") || i.equals("{")) {
                stack.push(i);
            } else {
                if (stack.size() <= 0) {
                    return false;
                }

                tmp = stack.peek();

                if ((tmp.equals("[") && i.equals("]")) || (tmp.equals("{") && i.equals("}")) || (tmp.equals("(") && i.equals(")"))) {
                    stack.pop();
                } else {
                    return false;
                }
            }
        }

        return stack.size() == 0;
    }
}