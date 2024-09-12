/*https://school.programmers.co.kr/learn/courses/30/lessons/132265*/
import java.util.Map;
import java.util.HashMap;
class Solution {
    public int solution(int[] toppings) {
        int answer = 0;
        Map<Integer,Integer> toppingMap1 = new HashMap<>();
        Map<Integer,Integer> toppingMap2 = new HashMap<>();
        for(int i=0;i<toppings.length;i++){
            toppingMap1.put(toppings[i],toppingMap1.getOrDefault(toppings[i],0)+1);
        }
        for(int i=0;i<toppings.length;i++){
            toppingMap2.put(toppings[i],toppingMap2.getOrDefault(toppings[i],0)+1);
            int topping1Cnt = toppingMap1.getOrDefault(toppings[i],0)-1;
            toppingMap1.put(toppings[i],topping1Cnt);
            if(topping1Cnt == 0){
                toppingMap1.remove(toppings[i]);
            }
            if(toppingMap2.size() == toppingMap1.size()){
                answer++;
            }
            if(toppingMap2.size() > toppingMap1.size()){
                break;
            }
        }
        return answer;
    }
}