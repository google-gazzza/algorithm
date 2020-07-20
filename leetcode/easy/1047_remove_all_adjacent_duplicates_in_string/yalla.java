//https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string
//Runtime: 38 ms, faster than 36.94% of Java online submissions for Remove All Adjacent Duplicates In String.
//Memory Usage: 39.9 MB, less than 72.11% of Java online submissions for Remove All Adjacent Duplicates In String.
class Solution {
    public String removeDuplicates(String S) {
        StringBuilder sb = new StringBuilder();
        Stack<Character> stack = new Stack<>();
        for(char c : S.toCharArray()){
            if(!stack.isEmpty() && stack.peek() == c){
                stack.pop();
            }else{
                stack.push(c);
            }
        }
        while(!stack.isEmpty()){
            sb.append(stack.pop());
        }
        return sb.reverse().toString();
    }
}