// https://leetcode.com/problems/maximum-69-number/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Maximum 69 Number.
// Memory Usage: 5.9 MB, less than 100.00% of C++ online submissions for Maximum 69 Number.

class Solution {
public:
    int maximum69Number (int num) {
        auto intStr = std::to_string(num);
        for (auto& c : intStr) {
            if (c == '6') {
                c = '9';
                break;
            }
        }
        
        return std::stoi(intStr);
    }
};