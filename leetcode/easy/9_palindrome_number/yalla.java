// https://leetcode.com/problems/palindrome-number
// Runtime: 14 ms, faster than 9.09% of Java online submissions for Palindrome Number.
// Memory Usage: 46.7 MB, less than 5.02% of Java online submissions for Palindrome Number.
class Solution {
    public boolean isPalindrome(int x) {
        if(x < 0) return false;

        int target = x;
        int reversedNumber = 0;

        while(target != 0){
            int remainNumber = target % 10;
            reversedNumber = reversedNumber * 10 + remainNumber;
            target = target / 10;
        }

        return x == reversedNumber;
    }
}