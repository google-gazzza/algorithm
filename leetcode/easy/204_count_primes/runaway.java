// https://leetcode.com/problems/count-primes
// Runtime: 46 ms, faster than 29.50% of Java online submissions for Count Primes.
// Memory Usage: 36.7 MB, less than 5.66% of Java online submissions for Count Primes.

class Solution {
    public int countPrimes(int n) {
        if (n < 2)
            return 0;
        
        BitSet bits = new BitSet(n);
        bits.set(2, n, true);
        
        for (int m = 2; m * m < n; m++) {
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