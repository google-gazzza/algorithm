// https://leetcode.com/problems/happy-number/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Happy Number.
// Memory Usage: 8.6 MB, less than 46.15% of C++ online submissions for Happy Number.

class Solution {
public:
    bool isHappy(int n) {
        if (n == 1) return true;
        std::unordered_set<int32_t> mm;
        mm.emplace(n);  
        auto sq = 0;        
        do {        
            sq = 0;   
            while (n > 0) { 
                auto spare = n % 10;
                sq += spare * spare;
                n /= 10;
            };
            if (mm.find(sq) != mm.end()) return false;  
            mm.emplace(sq);
            n = sq;
        } while (sq != 1);
        
        return true;             
    }
};
