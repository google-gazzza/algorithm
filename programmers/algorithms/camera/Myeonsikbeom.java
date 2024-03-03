import java.util.*;
class Solution {
    public int solution(int[][] routes) {
        int answer = 0;
        boolean[] visited = new boolean[routes.length];
        Arrays.sort(routes, (a,b)->{
            return a[1]-b[1];
        });
        for(int i=0;i<routes.length;i++){
            if(visited[i]){
                continue;
            }
            visited[i]=true;
            for(int j=i;j<routes.length-1;j++){
                if(routes[i][1]>=routes[j+1][0] && routes[i][1]<=routes[j+1][1]){
                    visited[j+1]=true;
                }
            }
            answer++;
        }
        return answer;
    }
}