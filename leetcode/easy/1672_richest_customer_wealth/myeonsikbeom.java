/**
 https://leetcode.com/problems/richest-customer-wealth/
 Runtime:3 ms Beats 10.21%
 Memory:43.1 MB Beats 7.64%
 */
class Solution {
    public int maximumWealth(int[][] accounts) {
        int[] result = new int[accounts.length];
        for(int i=0;i<accounts.length;i++){
            int[] moneyArr = accounts[i];
            result[i]=Arrays.stream(moneyArr).reduce((x,y)->x+y).getAsInt();

        }
        return Arrays.stream(result).max().getAsInt();

    }
}