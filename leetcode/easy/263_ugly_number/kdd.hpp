// https://leetcode.com/problems/ugly-number/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Ugly Number.
// Memory Usage: 8 MB, less than 100.00% of C++ online submissions for Ugly Number.

class Solution {
public:
    bool isUgly(int num) {
        if (num == 0) return false;
        if (num == 1) return true;
        while (num % 30 == 0) num /= 30;
        while (num % 15 == 0) num /= 15;
        while (num % 10 == 0) num /= 10;
        while (num % 5 == 0) num /= 5;
        while (num % 3 == 0) num /= 3;
        while (num % 2 == 0) num /= 2;
        if (num == 1) return true;
        else return false;
    }
};