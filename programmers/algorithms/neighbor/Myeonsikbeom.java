class Solution {
    public int solution(String[][] board, int h, int w) {
        int answer = 0;
        String color = board[h][w];
        int[][] dirctions = {{0,-1},{0,1},{1,0},{-1,0}};
        for(int[] d : dirctions){
            int _h = d[0]+h;
            int _w = d[1]+w;
            if(_h >= 0 && _h<board.length
                    && _w >= 0 && _w<board[w].length
                    && board[_h][_w].equals(color)
            ){
                answer++;
            }
        }

        return answer;
    }
}