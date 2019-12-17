"""
https://app.codility.com/programmers/lessons/4-counting_elements/missing_integer/
result : https://app.codility.com/demo/results/trainingGQ7NQ2-DY6/
Task Score :100%
Correctness:100%
"""
// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] A) {
        int result = 1;
        Arrays.sort(A);
        for(int i : A){
            if(i > 0 && i == result){
                result++;
            }
        }
        return result;
    }
}