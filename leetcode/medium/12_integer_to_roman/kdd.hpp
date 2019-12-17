// https://leetcode.com/problems/integer-to-roman/
// Runtime: 4 ms, faster than 94.66% of C++ online submissions for Integer to Roman.
// Memory Usage: 11.8 MB, less than 21.05% of C++ online submissions for Integer to Roman.

class Solution {
private:
    std::vector<std::pair<uint16_t, std::string>> m_vec;
    
public:
    Solution()
        : m_vec{{1000, "M"}, {900, "CM"}, {500, "D"}, {400, "CD"}, 
                {100, "C"}, {90, "XC"}, {50, "L"}, {40, "XL"},
                {10, "X"}, {9, "IX"}, {5, "V"}, {4, "IV"}, 
                {1, "I"}}
    {}
    
    string intToRoman(int num) {
        std::string result;
        result.reserve(10);
        for (const auto& rome : m_vec) {
            auto size = num / rome.first;
            for (auto i = 0; i < size; ++i) result += rome.second;
            num = num % rome.first;
        }
        
        return result;
    }
};