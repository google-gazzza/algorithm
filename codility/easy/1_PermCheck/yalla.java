
"""
https://app.codility.com/programmers/lessons/4-counting_elements/perm_check/
result : https://app.codility.com/demo/results/trainingD8Q7KG-WQA/
Task Score :100%
Correctness:100%
"""
// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] A) {
        Arrays.sort(A);
        for(int i=1; i<=A.length; i++){
            if(A[i-1] != i){
                return 0;
            }
        }
        return 1;
    }
}