/*
* https://leetcode.com/problems/distribute-candies/
* Runtime: 32 ms, faster than 86.21% of Java online submissions for Distribute Candies.
* Memory Usage: 42.5 MB, less than 78.95% of Java online submissions for Distribute Candies.
*/

class Solution {
    public int distributeCandies(int[] candies) {
        int result = 1;
        Arrays.sort(candies);
        int lastCandy = candies[0];
        for(int candy : candies){
            if(lastCandy != candy){
                result++;
                lastCandy = candy;
            }
        }
        if(result > candies.length/2) return candies.length/2;
        return result;
    }
}
