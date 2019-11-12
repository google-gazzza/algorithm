// https://leetcode.com/problems/jewels-and-stones/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Jewels and Stones.
// Memory Usage: 8.4 MB, less than 76.25% of C++ online submissions for Jewels and Stones.

class Solution {
public:
    int numJewelsInStones(string J, string S) {
        auto result = 0;
        for (auto i = 0; i < J.size(); ++i) {
            for (auto j = 0; j < S.size(); ++j) {
                if (J[i] == S[j]) ++result;
            }
            S.erase(std::remove(S.begin(), S.end(), J[i]), S.end());
        }
        
        return result;
    }
};
