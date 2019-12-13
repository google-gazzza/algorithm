"""
https://app.codility.com/programmers/lessons/3-time_complexity/tape_equilibrium/
result : https://app.codility.com/demo/results/training8JP2ET-DT4/
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
        int returnValue = Integer.MAX_VALUE;
        int sumFirst = 0;
        int sumLast = 0;
        int temp = 0;


        for(int i=0; i<A.length; i++){
            sumLast +=A[i];
        }

        for(int i=1; i < A.length; i++){
            sumFirst += A[i-1];
            sumLast -= A[i-1];

            temp = Math.abs(sumFirst - sumLast);

            if(temp < returnValue){
                returnValue = temp;
            }
        }
        return returnValue;
    }
}