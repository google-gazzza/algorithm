"""
https://app.codility.com/programmers/lessons/4-counting_elements/frog_river_one/
result : https://app.codility.com/demo/results/trainingQU68ZB-3MH/
Task Score :100%
Correctness:100%
"""
// you can also use imports, for example:
import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int X, int[] A) {
        Set<Integer> hashSet = new HashSet<>();

        for(int i = 0; i < A.length; i++){
            if(A[i] <= X){
                hashSet.add(A[i]);
                if(hashSet.size() == X){
                    return i;
                }
            }
        }
        return -1;
    }
}