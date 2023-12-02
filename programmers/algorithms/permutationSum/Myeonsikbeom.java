import java.util.*;
class Solution {
    public int solution(int[] elements) {
        List<Integer> list = new ArrayList<>();

        Set<Integer> answers = new HashSet<>();
        int len = elements.length;

        for(int i=0;i<len;i++){
            list.add(elements[i]);
        }
        for(int i=0;i<len-1;i++){
            list.add(elements[i]);
        }
        for(int i=0;i<len;i++){
            int num=0;
            for(int j =0 ;j<len;j++){
                num += list.get(i+j);
                answers.add(num);
            }
        }
        return answers.size();
    }
}