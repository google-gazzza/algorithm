class Solution {

    // 문제에 제시된 그대로 풀면 되는 문제 ( 문제의 그림보단 직각삼각형 형태로 생각하는 게 편함 )
// Point 1 ) 가변배열을 선언해 아래 이동 -> 우측 이동 -> 대각 이동을 반복하며 값을 다 채우면 됨
// Point 2 ) 값을 다 채운지 확인은 마지막 번호를 체크해서 판단
// Point 3 ) 2차원 가변배열을 1차원 배열로 변환하기 위해 리스트를 사용함
    public int[] solution(int n) {
        int[] down = {1,0,-1};
        int[] right = {0,1,-1};

        int[][] intArr = new int[n][n];
        int step = 1;
        int x=0,y=0;
        int direction = 0;//0:아래,1:오른쪽,2:대각선
        while(true){
            intArr[y][x]=step++;
            int nx = x + right[direction];
            int ny = y + down[direction];
            if(nx == n || ny == n || intArr[ny][nx] != 0){
                //방향전환이 필요할때.
                direction = (direction+1)%3;
                nx = x + right[direction];
                ny = y + down[direction];
                if(nx == n || ny == n || intArr[ny][nx] != 0){
                    break;
                }
            }
            x = nx;
            y = ny;
        }
        int[] answer = new int[step-1];
        int index = 0;
        for(int i = 0; i < n; i++){
            for(int j = 0; j <= i; j++){
                answer[index++] = intArr[i][j];
            }
        }
        return answer;
    }
}