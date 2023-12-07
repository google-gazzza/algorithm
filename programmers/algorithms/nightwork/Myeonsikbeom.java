/*https://school.programmers.co.kr/learn/courses/30/lessons/12927*/
import java.util.*;
class Solution {
    public long solution(int n, int[] works) {
        long answer = 0;
        Queue<Integer> q = new PriorityQueue<>(Collections.reverseOrder());
        for(int work : works){
            q.add(work);
        }
        for(int i=0;i<n;i++){
            int work = q.poll();
            if(work == 0 ){
                return 0;
            }
            q.add(work-1);
        }
        while(q.size() > 0){
            answer += Math.pow(q.poll(),2);
        }
        return answer;
    }
}