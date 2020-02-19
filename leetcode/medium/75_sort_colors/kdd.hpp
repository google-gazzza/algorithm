// https://leetcode.com/problems/sort-colors/
// Runtime: 4 ms, faster than 70.17% of C++ online submissions for Sort Colors.
// Memory Usage: 8.6 MB, less than 78.95% of C++ online submissions for Sort Colors.

class Solution {
public:
    void sortColors(vector<int>& nums) {
        auto lastZero = 0;
        auto lastOne = 0;
        auto lastTwo = 0;
        
        for (auto i = 0; i < nums.size(); ++i) {
            if (nums[i] == 2) ++lastTwo;
            else if (nums[i] == 1) {
                nums[lastTwo++] = 2;
                nums[lastOne++] = 1;
            }
            else {
                nums[lastTwo++] = 2;
                nums[lastOne++] = 1;
                nums[lastZero++] = 0;
            }            
        }
    }
};