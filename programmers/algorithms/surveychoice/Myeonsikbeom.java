import java.util.*;
class Solution {
    public String solution(String[] survey, int[] choices) {
        String answer = "";
        Map<String,Integer> scoreMap = new HashMap<>();
        String[] types = {"RT", "CF", "JM", "AN"};
        for(int i=0;i<survey.length;i++){
            String[] type_arr = survey[i].split("");
            String type = "";
            int score = Math.abs(choices[i]-4);
            if(choices[i]>=4 && choices[i]<=7 ){
                type = type_arr[1];
            }else if(choices[i]>=1 && choices[i]<4 ){
                type = type_arr[0];
            }
            scoreMap.put(type,scoreMap.getOrDefault(type,0)+score);
        }
        for(int i=0;i<types.length;i++){
            String[] type_arr = types[i].split("");
            int type1_score = scoreMap.getOrDefault(type_arr[0],0);
            int type2_score = scoreMap.getOrDefault(type_arr[1],0);
            if(type1_score >= type2_score){
                answer += type_arr[0];
            }else if(type1_score < type2_score){
                answer += type_arr[1];
            }
        }

        return answer;
    }
}