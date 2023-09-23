/**
 https://leetcode.com/problems/smallest-even-multiple/
 runtime : 0 ms
 memory : 38.9MB
 */
class Solution {
    public int smallestEvenMultiple(int n) {
        return n%2==0 ? n : n*2;
    }
}