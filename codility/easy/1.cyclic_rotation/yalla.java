"""
https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
result : https://app.codility.com/demo/results/trainingDCH4FQ-UJ4/
Task Score :100%
Correctness:100%
Performance:Not assessed
"""
// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int[] solution(int[] A, int K) {
        // write your code in Java SE 8
        int[] returnValue = new int[A.length];

        for (int i = 0; i < A.length; i++) {
            returnValue[(i + K) % A.length] = A[i];
        }

        return returnValue;
    }
}