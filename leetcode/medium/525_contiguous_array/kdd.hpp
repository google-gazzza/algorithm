// https://leetcode.com/problems/contiguous-array/
// Runtime: 104 ms, faster than 92.07% of C++ online submissions for Contiguous Array.
// Memory Usage: 20 MB, less than 41.67% of C++ online submissions for Contiguous Array.
class Solution {
public:
    int findMaxLength(vector<int>& nums) {
        std::unordered_map<int, int> map{{0, -1}};
        auto status = 0, result = 0;
        for (auto i = 0; i < nums.size(); ++i) {
            status = status + (nums[i] == 0 ? -1 : 1);                
            if (map.find(status) == map.end()) map[status] = i;
            else result = std::max(result, i - map[status]);
        }
        
        return result;
    }
};
