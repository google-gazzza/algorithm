import java.util.*;

class Solution {
    public int[] solution(String[] operations) {
        int max = Integer.MIN_VALUE;
        int min = Integer.MAX_VALUE;
        Queue<Integer> q = new PriorityQueue<>((k,l)->Integer.compare(l, k));
        for(String operation:operations){
            String operate = operation.split(" ")[0];
            String num = operation.split(" ")[1];
            if(operate.equals("I")){
                q.offer(Integer.parseInt(num));
                continue;
            }
            if(operate.equals("D")){
                if(q.size() == 0){
                    continue;
                }
                if(num.equals("1")){
                    q.poll();
                }else{
                    Queue<Integer> reverseQ = new PriorityQueue<>((k,l)->Integer.compare(k, l));
                    reverseQ.addAll(q);
                    reverseQ.poll();
                    q.clear();
                    q.addAll(reverseQ);
                }
            }
        }
        if(q.size() == 0){
            return new int[]{0,0};
        }
        while(q.size() > 0) {
            int value = q.poll();
            max = Math.max(max, value);
            min = Math.min(min, value);
        }
        return new int[]{max,min};
    }
}