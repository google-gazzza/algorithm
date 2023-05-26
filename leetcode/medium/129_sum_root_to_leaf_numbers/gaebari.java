//https://leetcode.com/problems/word-ladder
//Runtime: 70 ms, faster than 49.53% of Java online submissions for Word Ladder.
//Memory Usage: 42.8 MB, less than 32.12% of Java online submissions for Word Ladder.

class Solution {
    public int ladderLength(String beginWord, String endWord, List<String> wordList) {
        //연산에 필요한 값들을 초기화한다. 이후에 포함하는지를 검사하기 위해서 사용한다.
        Set<String> dict = new HashSet<>(wordList), vis = new HashSet<>();
        Queue<String> q = new LinkedList<>();
        // 시작 단어를 넣어준다.
        q.offer(beginWord);
        // q 가 빌때까지 진행한다. len으로 횟수를 기록한다.
        for (int len = 1; !q.isEmpty(); len++) {
            // q의 사이즈만큼 반복문을 돌린다.
            for (int i = q.size(); i > 0; i--) {
                //q의 들어가 있는 녀석을 가져와서 endWord랑 같으면 len을 return
                String w = q.poll();
                if (w.equals(endWord)) return len;

                // 현재 단어에서 a-z까지 값을 전부 대입해서 dict에 존재하는지 검사한다, vis에 이미 들어가 있지 않다면 q 에 추가.
                for (int j = 0; j < w.length(); j++) {
                    char[] ch = w.toCharArray();
                    for (char c = 'a'; c <= 'z'; c++) {
                        if (c == w.charAt(j)) continue;
                        ch[j] = c;
                        String nb = String.valueOf(ch);
                        if (dict.contains(nb) && vis.add(nb)) q.offer(nb);
                    }
                }
            }
        }
        return 0;
    }
}