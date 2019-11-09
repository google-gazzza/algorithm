// https://leetcode.com/problems/count-primes/
// Runtime: 20 ms, faster than 95.61% of C++ online submissions for Count Primes.
// Memory Usage: 11.7 MB, less than 8.33% of C++ online submissions for Count Primes.

class Solution {
public:
    int countPrimes(int n) {
        if (n <= 2) return 0;
        std::vector<uint8_t> checked(n, 1);
        for (auto i = 2; i * i < n; ++i) {
            if (checked[i]) {
                for (auto j = 2 * i; j < n; j = j + i) {
                    checked[j] = 0;
                }
            }
        } 
        
        return std::accumulate(checked.begin(), checked.end(), 0) - 2;        
    }
};
