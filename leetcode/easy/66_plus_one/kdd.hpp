// https://leetcode.com/problems/plus-one/
// Runtime: 4 ms, faster than 66.86% of C++ online submissions for Plus One.
// Memory Usage: 8.5 MB, less than 100.00% of C++ online submissions for Plus One.

class Solution {
public:
    vector<int> plusOne(vector<int>& digits) {
        for (int32_t i = digits.size() - 1; i >= 0; --i) {
            if (digits[i] != 9) {
                ++digits[i];
                return digits;
            }
            digits[i] = 0;
        }
        digits[0] = 1;
        digits.emplace_back(0);
        return digits;
    }
};
