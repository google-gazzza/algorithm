// https://leetcode.com/problems/container-with-most-water/
// Runtime: 16 ms, faster than 96.08% of C++ online submissions for Container With Most Water.
// Memory Usage: 9.8 MB, less than 67.01% of C++ online submissions for Container With Most Water.

class Solution {
public:
    int maxArea(vector<int>& height) {
        int i = 0, j = height.size() - 1;
        int result = std::numeric_limits<int>::min();        
        while (i < j) {
            auto water = (j - i) * std::min(height[i], height[j]);    
            if (result < water) result = water;
            if (height[i] < height[j]) ++i;
            else --j;
        };        
        
        return result;
    }
};