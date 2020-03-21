//https://leetcode.com/problems/count-primes
//Runtime: 14 ms, faster than 51.34% of Java online submissions for Count Primes.
//Memory Usage: 38.8 MB, less than 5.66% of Java online submissions for Count Primes.

class Solution {
    public int countPrimes(int n) {
        boolean[] tmps = new boolean[n];
        int count = 0;
        for (int i=2; i < n; i++) {
            if(tmps[i] == false) {
                count++;
                for (int j=2; i*j < n; j++) {
                    tmps[i*j] = true;
                }
            }
        }
        return count;
    }
}
