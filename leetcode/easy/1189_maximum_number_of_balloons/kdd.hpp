// https://leetcode.com/problems/maximum-number-of-balloons/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Maximum Number of Balloons.
// Memory Usage: 8.8 MB, less than 100.00% of C++ online submissions for Maximum Number of Balloons.

class Solution {
public:
    int maxNumberOfBalloons(string text) {
        std::size_t m[5] = {0,};
        for (auto& ch : text) {
            if (ch == 'b') ++m[0];
            else if (ch == 'a') ++m[1];
            else if (ch == 'l') ++m[2];
            else if (ch == 'o') ++m[3];
            else if (ch == 'n') ++m[4];
        }
        return std::min(m[0], std::min(m[1], std::min(m[2] / 2, std::min(m[3] / 2, m[4]))));
    }
};