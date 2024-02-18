import java.util.*;
class Solution {
    public int solution(int[] order) {
        int answer = 0;
        Stack<Integer> subBelt = new Stack<>();
        int i=0;
        for(int box=1;box<=order.length;box++){
            subBelt.push(box);
            while(subBelt.size() > 0 && subBelt.peek() == order[i]){
                subBelt.pop();
                answer++;
                i++;
            }
        }
        return answer;
    }
}