/**
 https://leetcode.com/problems/divisible-and-non-divisible-sums-difference/
 runtime : 1ms
 memory : 39.25MB
 */
class Solution {
    public int differenceOfSums(int n, int m) {
        int n1=0;
        int n2=0;
        for(int i=1;i<=n;i++){
            if(i%m == 0){
                n2+=i;
            }else{
                n1+=i;
            }

        }
        return n1-n2;
    }
}