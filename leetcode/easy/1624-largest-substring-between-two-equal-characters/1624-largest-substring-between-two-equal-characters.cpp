/* leetcode/easy/1624. Largest Substring Between Two Equal Characters
 * 1624-largest-substring-between-two-equal-characters
 * URL: https://leetcode.com/problems/largest-substring-between-two-equal-characters/description/
 *
 */
#include <iostream>

class Solution {
public:
    int maxLengthBetweenEqualCharacters(std::string s) {
        int maxLen = -1;

        for (int i = 0; i < s.size(); ++i) {
            for (int j = s.size() - 1; j > i; --j) {
                if (s[i] == s[j]) {
                    if (j - i - 1 > maxLen) {
                        maxLen = j - i - 1;
                    }
                }
            }
        }

        return maxLen;
    }
};

int main() {
    Solution solution;
    std::string s = "aa";
    std::cout << solution.maxLengthBetweenEqualCharacters(s) << std::endl;
//    Output: 0

    s = "abca";
    std::cout << solution.maxLengthBetweenEqualCharacters(s) << std::endl;
//    Output: 2

    s = "cbzxy";
    std::cout << solution.maxLengthBetweenEqualCharacters(s) << std::endl;
//    Output: -1

    return 0;
}
