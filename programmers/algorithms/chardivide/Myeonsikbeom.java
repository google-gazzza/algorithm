/*https://school.programmers.co.kr/learn/courses/30/lessons/140108*/
import java.util.Stack;
class Solution {
    public int solution(String s) {
        int answer = 0;

        Stack<String> stack = new Stack<>();
        int count = 0;
        for(int i=0;i<s.length();i++){
            String x = s.substring(i,i+1);
            if(!stack.empty() && !stack.peek().equals(x)){
                stack.pop();
                count--;
                if(count == 0){
                    answer++;
                    continue;
                }
            }else{
                stack.push(x);
                count++;
            }



        }
        return answer + (count > 0 ? 1 : 0);
    }
}