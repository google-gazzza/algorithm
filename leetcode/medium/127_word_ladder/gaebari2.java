//https://leetcode.com/problems/word-ladder
//Runtime: 13 ms, faster than 96.88% of Java online submissions for Word Ladder.
//Memory Usage: 40.1 MB, less than 78.83% of Java online submissions for Word Ladder.

class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordAsList) {
        if (!wordAsList.contains(endWord)) return 0;

        Set<String> wordList = new HashSet<String>(wordAsList);
        Set<String> start = new HashSet<String>();
        Set<String> end = new HashSet<String>();
        int count = 1;

        wordList.remove(beginWord);
        wordList.remove(endWord);
        start.add(beginWord);
        end.add(endWord);

        while (!start.isEmpty()) {
            Set<String> next = new HashSet<String>();
            for ( String word : start ) {
                char[] charArray = word.toCharArray();
                for(int i = 0; i< charArray.length; i++) {
                    char old = charArray[i];
                    for(char c = 'a'; c <= 'z'; c++) {
                        charArray[i] = c;
                        String str = String.valueOf(charArray);
                        if ( end.contains(str) ) return ++count;
                        if ( wordList.contains(str)) {
                            next.add(str);
                            wordList.remove(str);
                        }
                    }
                    charArray[i] = old;
                }
            }
            start = next.size() < end.size() ? next: end;
            end = start.size() < end.size() ? end : next;
            count++;
        }
        return 0;
    }
}
