"""
https://app.codility.com/programmers/lessons/5-prefix_sums/passing_cars/
result : https://app.codility.com/demo/results/trainingZFRM9M-A9Y/
Task Score :100%
Correctness:100%
Performance:100%
"""
// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int[] A) {
        // write your code in Java SE 8
        int returnValue = 0;
        int count = 0;

        for(int i=0; i< A.length; i++){
            if(A[i] == 1){
                count++;
            }
        }

        for(int j=0; j<A.length; j++){
            if(A[j] == 0){
                returnValue += count;
            }else{
                count--;
            }

            if(returnValue > 1000000000){
                returnValue = -1;
                break;
            }
        }

        return returnValue;
    }
}