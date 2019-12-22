// https://leetcode.com/problems/permutation-sequence/
// Runtime: 324 ms, faster than 17.98% of C++ online submissions for Permutation Sequence.
// Memory Usage: 8.3 MB, less than 68.42% of C++ online submissions for Permutation Sequence.

class Solution {
public:
    string getPermutation(int n, int k) {
        std::vector<int> seq;
        seq.resize(n, 0);
        std::iota(seq.begin(), seq.end(), 1);
        while (k > 1) {
            std::next_permutation(seq.begin(), seq.end());
            --k;
        }
        
        std::string result;
        for (auto& s : seq) result += std::to_string(s);
        
        return result;
    }
};