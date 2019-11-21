"""
https://app.codility.com/programmers/lessons/3-time_complexity/frog_jmp/
result : https://app.codility.com/demo/results/trainingXWMNFM-3J8/
Task Score :100%
Correctness:100%
"""
// you can also use imports, for example:
// import java.util.*;

// you can write to stdout for debugging purposes, e.g.
// System.out.println("this is a debug message");

class Solution {
    public int solution(int X, int Y, int D) {
        // write your code in Java SE 8
        int returnValue = Y - X;
        return (returnValue / D) + (returnValue % D == 0 ? 0 : 1);
    }
}