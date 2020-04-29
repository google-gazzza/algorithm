// https://leetcode.com/problems/palindrome-number/submissions/
// Runtime: 10 ms, faster than 22.19% of Java online submissions for Palindrome Number.
// Memory Usage: 38.6 MB, less than 5.02% of Java online submissions for Palindrome Number.

class Solution {
    public boolean isPalindrome(int x) {

        if(x < 0)
            return false;
        
        if(x == 0)
            return true;
        
        final int divisor = 10;

        int quotient = x;
        int remainder = 0;
        double total = 0;

        final List<Integer> integers = new ArrayList<Integer>();

        while(true){

            remainder = quotient % divisor;
            quotient = quotient / divisor;
            integers.add(remainder);

            if(quotient == 0)
                break;
        }

        for(int i=0; i<integers.size();i++){

            int power = integers.size()-i;
            total += integers.get(i) * Math.pow(10, power-1);
        }
        
        return x == total;
    }
}