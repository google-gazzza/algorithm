/**
 https://leetcode.com/problems/sort-the-students-by-their-kth-score/
 Runtime: 3 ms
 Memory: 48.8 MB
 */
class Solution {
    public int[][] sortTheStudents(int[][] score, int k) {
        int studentsLen = score.length;

        int start = 0,end = 1;
        while(start<end){
            if(end==studentsLen){
                break;
            }
            if(score[start][k]<score[end][k]){
                int[] tmp = score[start];
                score[start] = score[end];
                score[end] = tmp;
            }
            if(end==studentsLen-1){
                start++;
                end = start+1;
            }else{
                end++;
            }

        }
        return score;

    }
}