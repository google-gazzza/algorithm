/*https://leetcode.com/problems/find-maximum-number-of-string-pairs
runtime:1ms
memory:42.02mb
 */
class Solution {
    public int maximumNumberOfStringPairs(String[] words) {
        int answer = 0;
        for(int i=0;i<words.length-1;i++){
            String word1 = words[i];
            for(int j=i+1;j<words.length;j++){
                String word2 = words[j];
                if(word2.charAt(1)== word1.charAt(0)
                        && word2.charAt(0)== word1.charAt(1)){
                    answer++;
                }
            }
        }
        return answer;
    }
}