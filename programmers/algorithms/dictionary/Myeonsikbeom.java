/*https://school.programmers.co.kr/learn/courses/30/lessons/84512*/
import java.util.*;
class Solution {
    public static String[] words = {"A","E","I","O","U"};
    List<String> dictionary = new ArrayList<>();
    public void makeDictionary(String w, int length){
        dictionary.add(w);
        if(length == 5){
            return;
        }
        for(int i=0;i<5;i++){
            makeDictionary(w+words[i], length+1);
        }

    }
    public int solution(String word) {
        int answer = 0;
        makeDictionary("", 0);
        for(int i=0;i<dictionary.size();i++){
            if(dictionary.get(i).equals(word)){
                return i;
            }
        }
        return answer;
    }
}