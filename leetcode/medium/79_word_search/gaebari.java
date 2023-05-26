//https://leetcode.com/problems/word-search
//Runtime: 4 ms, faster than 98.44% of Java online submissions for Word Search.
//Memory Usage: 41.7 MB, less than 23.47% of Java online submissions for Word Search.
class Solution {
    public boolean exist(char[][] board, String word) {
        char[] chars = word.toCharArray();
        for (int y = 0; y < board.length; y++) {
            for (int x = 0; x < board[y].length; x++) {
                if (exist(board, y, x, chars, 0)) return true;
            }
        }
        return false;
    }

    private boolean exist(char[][] board, int y, int x, char[] chars, int i) {
        // word의 길이를 넘너갔다면 탐색을 종료한다.
        if (i == chars.length) return true;
        // board 의 범위를 넘어가지 않도록 제한한다.
        if (y < 0 || x < 0 || y == board.length || x == board[y].length) return false;
        // 탐색한 방향의 값이 word의 값과 다르다면 탐색을 취소한다.
        if (board[y][x] != chars[i]) return false;
        // 마스킹 하는 방법이 매우 인상 깊다. 마스킹을 해야 탐색시에 중복을 피할 수 있다.
        board[y][x] ^= 256;
        // 동적으로 탐색하기 위한 코드
        boolean exist = exist(board, y, x + 1, chars, i + 1)
                || exist(board, y, x - 1, chars, i + 1)
                || exist(board, y + 1, x, chars, i + 1)
                || exist(board, y - 1, x, chars, i + 1);
        // 마스킹을 풀어준다.
        board[y][x] ^= 256;
        return exist;
    }
}