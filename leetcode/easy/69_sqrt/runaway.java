// https://leetcode.com/problems/sqrtx/
// Runtime: 1 ms, faster than 100.00% of Java online submissions for Sqrt(x).
// Memory Usage: 33.6 MB, less than 5.00% of Java online submissions for Sqrt(x).

class Solution {

    public int mySqrt(int x) {
        if (x == 0 || x == 1)
            return x;
        
        int start = 0, end = x, value = 0;
        
        while (start <= end) {
            int mid = (start + end) / 2;
            
            long n = (long)mid * (long)mid;
            
            if (n == x)
                return mid;
            
            if (n < x) {
                start = mid + 1;
                value = mid;
            }
            else {
                end = mid - 1;
            }
        }
        
        return value;
    }

    public int mySqrtSimple(int x) {
        if (x == 0 || x == 1)
            return x;

        long i = 0;
        long result = 0;

        while (result <= x) {
            i++;
            result = i * i;
        }

        return (int) i - 1;
    }
}