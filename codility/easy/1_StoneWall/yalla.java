"""
https://app.codility.com/programmers/lessons/7-stacks_and_queues/stone_wall/
result : https://app.codility.com/demo/results/training55MEYU-6ZP/
Task Score :100%
Correctness:100%
"""
// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] H) {
        int result = 0;
        Stack<Integer> stack = new Stack<>();

        for(int i : H){
            while(stack.empty() == false && stack.peek() > i){
                stack.pop();
            }

            if(stack.empty() == false && stack.peek() == i){
                continue;
            }
            if(stack.empty()|| stack.peek() < i){
                result++;
                stack.push(i);
                continue;
            }

        }
        return result;
    }
}