"""
https://leetcode.com/problems/reverse-integer/
Runtime: 1 ms, faster than 100.00% of Java online submissions for Reverse Integer.
Memory Usage: 33.5 MB, less than 11.66% of Java online submissions for Reverse Integer.
"""
class Solution {
    public int reverse(int x) {
        int result = 0;
        while(x != 0){
            if( result > Integer.MAX_VALUE/10 || result < Integer.MIN_VALUE/10 ) return 0;
            result = result*10 + x % 10;
            x = x/10;
        }
        return result;
    }
}