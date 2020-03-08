/*
https://leetcode.com/problems/factorial-trailing-zeroes/
Runtime: 4 ms, faster than 58.79% of C++ online submissions for Factorial Trailing Zeroes.
Memory Usage: 8.3 MB, less than 71.43% of C++ online submissions for Factorial Trailing Zeroes.
*/

class Solution {
public:
    int trailingZeroes(int n) {
        
        int fivenum = 0;
        
        while(n > 0)
        {
            fivenum += n/5;
            n = n/5;
        }
        
        return fivenum;
    }
};