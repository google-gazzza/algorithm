/* https://school.programmers.co.kr/learn/courses/30/lessons/131127 */
import java.util.*;

class Solution {
    public int solution(String[] want, int[] number, String[] discount) {
        int answer = 0;
        Map<String,Integer> wantMap = new HashMap<>();

        for(int i=0;i<want.length;i++){
            wantMap.put(want[i],number[i]);
        }

        for(int i=0;i<discount.length-9;i++){

            Map<String,Integer> discountMap = new HashMap<String,Integer>();
            for(int j=0;j<10;j++){
                discountMap.put(discount[i+j],discountMap.getOrDefault(discount[i+j],0) + 1);
            }

            Iterator<String> keys = discountMap.keySet().iterator();
            boolean isAllDiscount = true;
            while( keys.hasNext() ){
                String key = keys.next();
                if(wantMap.get(key) == null){
                    isAllDiscount = false;
                    break;
                }
                if(wantMap.getOrDefault(key,0) != discountMap.getOrDefault(key,0) ){
                    isAllDiscount = false;
                    break;
                }

            }
            if(isAllDiscount){
                answer++;
            }

        }
        return answer;
    }
}