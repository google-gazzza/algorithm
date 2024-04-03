import java.util.*;
class Solution {
    public int[] solution(int[] progresses, int[] speeds) {
        int[] answer = new int[100];
        Queue<Integer> q = new LinkedList<>();

        for(int i=0;i<progresses.length;i++){
            int remain = (100-progresses[i]) / speeds[i];
            int mod = (100-progresses[i]) % speeds[i];
            q.offer( remain + (mod > 0 ? 1 : 0)   );
        }
        int max = q.peek();
        int cnt = 0;
        int i = 0;
        while(q.size() != 0){
            int p = q.poll();
            if(p<=max){
                cnt++;
                continue;
            }
            answer[i++]=cnt;
            cnt = 1;
            max = p;
        }
        answer[i]=cnt;
        return Arrays.stream(answer).filter(value -> value!=0).toArray();
    }
}
