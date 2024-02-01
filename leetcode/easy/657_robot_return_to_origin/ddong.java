//https://leetcode.com/problems/robot-return-to-origin
//Runtime: 4 ms, faster than 96.72% of Java online submissions for Robot Return to Origin.
//Memory Usage: 41.6 MB, less than 5.40% of Java online submissions for Robot Return to Origin.
class Solution {
    public boolean judgeCircle(String moves) {

        int udCount = 0;
        int lrCount = 0;

        for (char direction : moves.toCharArray()) {

            if (direction == 'U') {
                udCount++;
            } else if (direction == 'D') {
                udCount--;
            } else if (direction == 'L') {
                lrCount++;
            } else {
                lrCount--;
            }
        }

        return udCount == 0 && lrCount == 0;
    }
}