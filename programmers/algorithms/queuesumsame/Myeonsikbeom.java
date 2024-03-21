import java.util.*;
class Solution {
    public int solution(int[] queue1, int[] queue2) {
        int answer = 0;
        Queue<Integer> q1 = new LinkedList<>();
        Queue<Integer> q2 = new LinkedList<>();
        long q1Sum = 0;
        long q2Sum = 0;
        for(int i=0;i<queue1.length;i++){
            q1.add(queue1[i]);
            q1Sum += queue1[i];
            q2.add(queue2[i]);
            q2Sum += queue2[i];
        }
        if((q1Sum + q2Sum) % 2 != 0){
            return -1;
        }
        while(q1Sum != q2Sum){
            if(answer > (q1.size() + q2.size())*2){
                answer = -1;
                break;
            }
            if(q1Sum > q2Sum){
                int pollData = q1.poll();
                q2.add(pollData);
                q1Sum -=pollData;
                q2Sum +=pollData;
            }else{
                int pollData = q2.poll();
                q1.add(pollData);
                q2Sum -=pollData;
                q1Sum +=pollData;
            }
            answer++;
        }
        if(q1.size() == 0 || q2.size() == 0){
            return -1;
        }

        return answer;
    }
}