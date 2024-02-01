// https://leetcode.com/problems/nim-game/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Nim Game.
// Memory Usage: 6.2 MB, less than 100.00% of C++ online submissions for Nim Game.

class Solution {
public:
    bool canWinNim(int n) {
        return n % 4 != 0;
    }
};