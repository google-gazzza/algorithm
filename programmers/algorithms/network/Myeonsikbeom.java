/*https://school.programmers.co.kr/learn/courses/30/lessons/43162*/
class Solution {

    public void recursive(int n,int[][] computers,boolean[] visited, int i){
        visited[i] = true;
        for(int j=0;j<n;j++){
            if(computers[i][j]==1 && !visited[j] && i != j){
                recursive(n,computers,visited, j);
            }
        }
    }
    public int solution(int n, int[][] computers) {
        int answer = 0;
        boolean[] visited = new boolean[n];

        for(int i=0;i<n;i++){
            if(!visited[i]){
                recursive(n,computers,visited,i);
                answer++;
            }

        }

        return answer;
    }
}