// https://leetcode.com/problems/remove-outermost-parentheses
// Runtime: 2 ms, faster than 97.77% of Java online submissions for Remove Outermost Parentheses.
// Memory Usage: 39.4 MB, less than 63.42% of Java online submissions for Remove Outermost Parentheses.
class Solution {
    public String removeOuterParentheses(String S) {
        StringBuilder sb = new StringBuilder();
        int opened = 0;
        for(char c : S.toCharArray()){
            if(c == '(' && opened++ > 0) sb.append(c);
            if(c == ')' && opened-- > 1) sb.append(c);
        }
        return sb.toString();
    }
}