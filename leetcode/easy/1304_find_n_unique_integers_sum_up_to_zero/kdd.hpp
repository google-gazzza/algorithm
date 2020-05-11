// https://leetcode.com/problems/find-n-unique-integers-sum-up-to-zero/
// Runtime: 4 ms, faster than 98.16% of C++ online submissions for Find N Unique Integers Sum up to Zero.
// Memory Usage: 6.6 MB, less than 100.00% of C++ online submissions for Find N Unique Integers Sum up to Zero.

class Solution {
public:
    vector<int> sumZero(int n) {
        std::vector<int> result;
        if (n & 1) {
            result.emplace_back(0);
            if (n == 1) return result;
            for (auto i = 1; i <= n / 2; ++i) {
                result.emplace_back(-1 * i);
                result.emplace_back(i);
            }
        }
        else {
            for (auto i = 1; i <= n / 2; ++i) {
                result.emplace_back(-1 * i);
                result.emplace_back(i);
            }
        }
        
        return result;
    }
};