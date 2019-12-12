"""
https://app.codility.com/programmers/lessons/7-stacks_and_queues/brackets/
result : https://app.codility.com/demo/results/training3NFDC9-B4S/
Task Score :100%
Correctness:100%
Performance:100%
"""
// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(String S) {
        // write your code in Java SE 8
        Stack<Character> stack = new Stack<>();
        for (Character c : S.toCharArray()) {
            if (c == '{' || c == '[' || c == '(') {
                stack.push(c);
            } else if (c == ')') {
                if (stack.size() == 0 || stack.pop() != '(') {
                    return 0;
                }
            } else if (c == ']') {
                if (stack.size() == 0 || stack.pop() != '[') {
                    return 0;
                }
            } else if (c == '}') {
                if (stack.size() == 0 || stack.pop() != '{') {
                    return 0;
                }
            } else {
                return 0;
            }
        }

        if(stack.size() != 0) return 0;

        return 1;
    }
}