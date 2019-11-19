"""
https://app.codility.com/programmers/lessons/3-time_complexity/perm_missing_elem/
result : https://app.codility.com/demo/results/trainingXRWTU5-GHQ/
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

        for(int i = 0; i< A.length; i++){
            if(A[i] != i+1){
                return i + 1;
            }
        }
        return A.length +1;
    }
}