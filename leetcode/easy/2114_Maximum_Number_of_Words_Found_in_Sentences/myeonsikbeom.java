/**
 https://leetcode.com/problems/maximum-number-of-words-found-in-sentences/
 Runtime : 5 ms
 Memory : 43.5 MB
 */
class Solution {
    public int mostWordsFound(String[] sentences) {
        List<Integer> sentenceCnt = new ArrayList<Integer>();
        for(int i=0;i<sentences.length;i++){
            sentenceCnt.add(sentences[i].split(" ").length);
        }
        return sentenceCnt.stream()
                .mapToInt(x->x)
                .max().getAsInt();
    }
}