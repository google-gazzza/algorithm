// https://leetcode.com/problems/reverse-string/
// Do not allocate extra space for another array, you must do this by modifying the input array in-place with O(1) extra memory.
// Runtime: 48 ms, faster than 74.90% of C++ online submissions for Reverse String.
// Memory Usage: 15.3 MB, less than 51.22% of C++ online submissions for Reverse String.

class Solution {
public:
    void reverseString(vector<char>& s) {
       std::reverse(s.begin(), s.end());
    }
};
