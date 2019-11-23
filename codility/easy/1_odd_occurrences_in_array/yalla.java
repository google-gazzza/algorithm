"""
https://app.codility.com/programmers/lessons/2-arrays/odd_occurrences_in_array/
result : https://app.codility.com/demo/results/trainingVCMA4Y-4UA/
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
        // write your code in Java SE 8
        Set<Integer> hashSet = new HashSet<>();
        for (int i : A){
            if (hashSet.contains(i)){
                hashSet.remove(i);
            }else{
                hashSet.add(i);
            }
        }
        return hashSet.iterator().next();
    }
}