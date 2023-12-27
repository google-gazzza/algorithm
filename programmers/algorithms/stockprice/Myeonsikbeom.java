/*https://school.programmers.co.kr/learn/courses/30/lessons/42584*/
import java.util.Arrays;
import java.util.Stack;
class Solution {
    public int[] solution(int[] prices) {
        int[] answer = new int[prices.length];
        Stack<Integer[]> s = new Stack<>();

        Arrays.fill(answer,0);
        for(int i=prices.length-2;i>=0;i--){
            int day = 0;

            while(!s.isEmpty() && s.peek()[0] >= prices[i]){
                day += s.pop()[1];
            }
            answer[i]= s.push(new Integer[]{prices[i],day+1})[1];

        }
        return answer;
    }
}