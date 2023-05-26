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
        Queue<Integer> integersQue = new LinkedList<Integer>();

        while(true){
            remainder = quotient % divisor;
            quotient = quotient / divisor;
            integersQue.offer(remainder);

            if(quotient == 0)
                break;
        }

        int power = integersQue.size()-1;
        while(!integersQue.isEmpty()){
            total += integersQue.poll() * Math.pow(10, power--);
        }
        
        return x == total;
    }
}