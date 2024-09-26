/*https://school.programmers.co.kr/learn/courses/30/lessons/17687*/
import java.util.*;
class Solution {
    Map<Integer,String> map = new HashMap<>();

    public String returnChar(int num){
        switch(num){
            case 10:
                return "A";
            case 11:
                return "B";
            case 12:
                return "C";
            case 13:
                return "D";
            case 14:
                return "E";
            case 15:
                return "F";
            default:
                return String.valueOf(num);
        }
    }
    public String getNString(int n, int num){
        String returnData = map.getOrDefault(num,"");
        Stack<String> s = new Stack<>();
        if(!returnData.equals("")){
            return returnData;
        }
        while(n <= num){
            int rest = num % n ;
            s.push(returnChar(rest));
            num = (int) num / n;
        }
        s.push(returnChar(num%n));

        while(s.size() > 0){
            String p = s.pop();
            returnData += p;
        }
        map.put(num,returnData);
        return returnData;
    }
    public String solution(int n, int t, int m, int p) {
        StringBuilder answer = new StringBuilder();
        StringBuilder nString = new StringBuilder("0");

        for(int i=1;i<=99999;i++){
            nString.append(getNString(n,i));
        }
        int j = 0;
        while(answer.length() < t){
            if(j%m == (p-1)){
                answer.append(String.valueOf(nString.toString().charAt(j)).toUpperCase());
            }
            j++;
        }
        return answer.toString();
    }
}