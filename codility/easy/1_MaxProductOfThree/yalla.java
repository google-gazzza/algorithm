"""
https://app.codility.com/programmers/lessons/6-sorting/max_product_of_three/
result : https://app.codility.com/demo/results/training2DFUBD-S8Y/
Task Score :100%
Correctness:100%
Performance:100%
"""
// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] A) {
        int result;
        int arrayIndex = A.length -1;

        Arrays.sort(A);
        int defaultResult = A[arrayIndex] * A[arrayIndex -1] * A[arrayIndex -2];
        int minusResult = A[arrayIndex] * A[0] * A[1];

        if(defaultResult > minusResult){
            result = defaultResult;
        }else{
            result = minusResult;
        }
        return result;
    }
}