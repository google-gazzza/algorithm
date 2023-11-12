/**
 https://leetcode.com/problems/maximum-nesting-depth-of-the-parentheses/
 runtime: 1ms
 memory: 40.39mb
 */
class Solution {
    public int maxDepth(String s) {
        Stack<Character> stack = new Stack<>();
        int answer = 0;
        for(int i=0;i<s.length();i++){
            char c = s.charAt(i);
            if(c == '('){
                stack.push(c);
            }else if(c == ')' && !stack.isEmpty()){
                answer = Math.max(answer,stack.size());
                stack.pop();
            }
        }
        return answer;
    }
}