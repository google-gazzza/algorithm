// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/
// Runtime: 4 ms, faster than 96.58% of C++ online submissions for Two Sum II - Input array is sorted.
// Memory Usage: 9.4 MB, less than 88.24% of C++ online submissions for Two Sum II - Input array is sorted.

class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        auto start = numbers.begin();
        auto end = numbers.end() - 1;
        while (start < end) {
            auto val = *start + *end;
            if (val == target) 
                return std::vector<int>{std::distance(numbers.begin(), start) + 1, std::distance(numbers.begin(), end) + 1};  
            else if (val < target) ++start;
            else --end;
        };
        
        return std::vector<int>();
    }
};