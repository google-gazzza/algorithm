// https://leetcode.com/problems/fibonacci-number/
// Runtime: 12 ms, faster than 25.53% of C++ online submissions for Fibonacci Number.
// Memory Usage: 7.6 MB, less than 100.00% of C++ online submissions for Fibonacci Number.

class Solution {
public:
    int fib(int N) {
        if (N == 0) return 0;
        else if (N == 1) return 1;
        else return fib(N - 1) + fib(N - 2);
    }
};