// https://leetcode.com/problems/sqrtx/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Sqrt(x).
// Memory Usage: 8.1 MB, less than 100.00% of C++ online submissions for Sqrt(x).

class Solution {
public:
    int mySqrt(int x) {
        if (x == 0 || x == 1) return x;
        auto low = 0;
        auto high = x;
        while (low <= high) {
            auto mid = (low + high) / 2;
            if (mid > x / mid) high = mid - 1;
            else if (mid < x / mid) low = mid + 1;
            else return mid;
        };
        return high;
    }
};