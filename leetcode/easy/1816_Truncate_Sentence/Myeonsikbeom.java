/**
 https://leetcode.com/problems/truncate-sentence/
 runtime: 2ms
 memory: 41.99MB
 */
class Solution {
    public String truncateSentence(String s, int k) {
        String answer = "";
        String[] sentences = s.split(" ");
        for(int i=0;i<k;i++){
            answer += sentences[i];
            if(i < k-1){
                answer +=" ";
            }

        }
        return answer;
    }
}