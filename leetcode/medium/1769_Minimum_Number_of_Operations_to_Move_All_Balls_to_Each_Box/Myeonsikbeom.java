/**
 https://leetcode.com/problems/minimum-number-of-operations-to-move-all-balls-to-each-box/description/
 Runtime: 132 ms
 Memory: 44.1 MB
 */
class Solution {
    public int[] minOperations(String boxes) {
        int len = boxes.length();
        int[] answer = new int[len];
        for(int i=0;i<len;i++){
            int movecnt=0;
            for(int j=0;j<len;j++){
                if(boxes.charAt(j)=='1'){
                    movecnt = movecnt + Math.abs(j-i);
                }
            }
            answer[i]=movecnt;
        }
        return answer;
    }
}