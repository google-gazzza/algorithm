// https://leetcode.com/problems/count-primes
// Runtime: 75 ms, faster than 24.98% of Java online submissions for Count Primes.
// Memory Usage: 36.6 MB, less than 5.66% of Java online submissions for Count Primes.

class Solution {
    public int countPrimes(int n) {
        if (n < 2)
            return 0;
        
        BitSet bits = new BitSet(n);
        bits.set(2, n, true);
        
        for (int m = 2; m < n; m++) {
            if (!bits.get(m))
                continue;
            int k = 2;
            while (m * k < n) {
                bits.set(m * k, false);
                k++;
            }
        }
        
        return bits.cardinality();
    }
}