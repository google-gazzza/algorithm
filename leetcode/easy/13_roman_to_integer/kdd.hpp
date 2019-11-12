// https://leetcode.com/problems/roman-to-integer/
// Runtime: 8 ms, faster than 92.07% of C++ online submissions for Roman to Integer.
// Memory Usage: 8.8 MB, less than 42.16% of C++ online submissions for Roman to Integer.

class Solution {
public:
    int romanToInt(string s) {
        std::vector<int> values;
        values.reserve(s.size());
        std::transform(s.cbegin(), s.cend(), std::back_inserter(values), [](auto&& ch) {
            switch (ch) {
                case 'I': return 1;
                case 'V': return 5;
                case 'X': return 10;
                case 'L': return 50;
                case 'C': return 100;
                case 'D': return 500;
                case 'M': return 1000;
                default: return 0;
            }
        });
        
        for (auto i = 0; i < values.size() - 1; ++i) {
            if (values[i] < values[i + 1]) values[i] *= (-1);
        }        
        return std::accumulate(values.begin(), values.end(), 0);
    }
};
