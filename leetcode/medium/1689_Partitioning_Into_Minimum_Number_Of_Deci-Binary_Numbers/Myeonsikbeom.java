/**
 https://leetcode.com/problems/partitioning-into-minimum-number-of-deci-binary-numbers/submissions/1140895125/
 */
class Solution {
    public int minPartitions(String n) {
        char answer = '0';
        //내가 푼거
        // int len = n.length();

        // for(int i=0;i<len;i++){
        //     answer = Math.max(answer,Integer.parseInt(n.substring(i,i+1)));
        // }
        //효율적으로 나온 답
        for(char c : n.toCharArray()){
            if(c > answer){
                answer = c;
            }
        }
        return answer-'0';
    }
}