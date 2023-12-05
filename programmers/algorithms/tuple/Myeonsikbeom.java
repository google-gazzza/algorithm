/*https://school.programmers.co.kr/learn/courses/30/lessons/64065*/
import java.util.*;
class Solution {
    public int[] solution(String s) {
        String[] numberStr = s.replaceAll("\\{","").replaceAll("\\}","").split(",");


        Map<String,Integer> tupleMap = new HashMap<>();
        for(int i=0;i<numberStr.length;i++){
            tupleMap.put(numberStr[i],tupleMap.getOrDefault(numberStr[i],0)+1);
        }
        int[] answer = new int[tupleMap.size()];

        int i = 0;
        while(tupleMap.size() != 0){

            String maxKey = "";
            int max = 0;
            for( String key : tupleMap.keySet() ){

                int value = tupleMap.getOrDefault(key,0);
                if(max<=value){
                    max = value;
                    maxKey = key;
                }
            }
            answer[i++] = Integer.parseInt(maxKey);
            tupleMap.remove(maxKey);
        }
        return answer;
    }
}