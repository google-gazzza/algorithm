// https://leetcode.com/problems/number-complement/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Number Complement.
// Memory Usage: 8.4 MB, less than 33.33% of C++ online submissions for Number Complement.

class Solution {
public:
    int findComplement(int num) {
        int size = static_cast<int>(log2(num) + 1);
        int64_t tmp = (static_cast<int64_t>(1) << size) - 1;
        return tmp ^ num;
    }
};