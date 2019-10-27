// https://leetcode.com/problems/reverse-string/
// Runtime: 11 ms, faster than 5.48% of Java online submissions for Reverse String.
// Memory Usage: 41.7 MB, less than 100.00% of Java online submissions for Reverse String.

class Solution {
  public void reverseString(char[] s) {
    Stack<Character> stack = new Stack<Character>();
    for (int i = 0; i < s.length; i++){
      stack.push(s[i]);
    }
    int j = 0;
    while(!stack.isEmpty()){
      s[j++] = stack.pop();
    }
  }
}