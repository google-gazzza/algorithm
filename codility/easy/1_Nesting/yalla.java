"""
https://app.codility.com/programmers/lessons/7-stacks_and_queues/nesting/
result : https://app.codility.com/demo/results/trainingRFHXNH-SY6/
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
        int result = 0;
        for(Character c : S.toCharArray()){
            if(c == '('){
                result++;
            }
            if(c == ')'){
                result--;
            }
            if(result < 0){
                return 0;
            }
        }
        return result == 0 ? 1 : 0;
    }
}