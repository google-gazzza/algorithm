// https://leetcode.com/problems/remove-element/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Remove Element.
// Memory Usage: 8.6 MB, less than 92.65% of C++ online submissions for Remove Element.

class Solution {
public:
    template <class Vec, class Iter>
    void unorderedDeleted(Vec&& vec, Iter&& iter) {
        if (iter != std::end(vec)) {
            *iter = std::move(vec.back());
            vec.pop_back();
        }
    }
    
    int removeElement(vector<int>& nums, int val) {
        auto iter = std::begin(nums); 
        while (iter != std::end(nums)) {
            iter = std::find(nums.begin(), nums.end(), val);
            unorderedDeleted(nums, iter);
        }
        
        return nums.size();
    }
};

// https://leetcode.com/problems/remove-element/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Remove Element.
// Memory Usage: 8.6 MB, less than 73.53% of C++ online submissions for Remove Element.

class Solution {
public:   
    int removeElement(vector<int>& nums, int val) {
        nums.erase(std::remove(nums.begin(), nums.end(), val), nums.end());
        return nums.size();
    }
};
