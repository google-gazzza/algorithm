/**
 https://leetcode.com/problems/number-of-lines-to-write-string/submissions/1232585003/
 Runtime:0ms
 Memory: 41.42MB
 */
class Solution {
    public int[] numberOfLines(int[] widths, String s) {
        int[] answer = {1,0};
        char[] cArr = s.toCharArray();
        int sum = 0;
        for(int i=0;i<cArr.length;i++){
            int width = widths[(cArr[i]-97)];
            sum += width;
            if(sum > 100){
                answer[0]++;
                sum = width;
            }
        }
        answer[1] = sum;
        return answer;
    }
}