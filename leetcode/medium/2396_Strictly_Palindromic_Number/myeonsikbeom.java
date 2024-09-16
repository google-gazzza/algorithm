/** https://leetcode.com/problems/strictly-palindromic-number/
 Runtime: 0 ms
 Memory: 39.7 MB
 */
class Solution {
    public boolean isConvertPalindromic(int n,int base){
        int param = n;
        String palindromic = Integer.toString(n,base);
        int limit = (int)(palindromic.length()/2);

        for(int i=0,right=;i<limit;i++){
            if(palindromic.charAt(i) != palindromic.charAt(palindromic.length()-i-1)){
                return false;
            }
        }
        return true;
    }
    public boolean isStrictlyPalindromic(int n) {
        for(int i=2;i<n-1;i++){
            if(!isConvertPalindromic(n,i)){
                return false;
            }
        }
        return true;
    }
}