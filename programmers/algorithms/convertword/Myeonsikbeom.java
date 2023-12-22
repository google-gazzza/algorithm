import java.util.*;
class Solution {
    private int answer = Integer.MAX_VALUE;
    private List<String> list = new ArrayList<>();
    private static boolean[] isVisited;
    public void dfs(String begin, String target,int cnt){
        if(begin.equals(target)){//target에 있는 단어랑 똑같다면 Return
            answer = Math.min(cnt,answer);
            return;
        }
        for(int i=0;i<list.size();i++){
            String word = list.get(i);
            if(canChange(begin,word) && !isVisited[i]){//주어진 단어에서 한글자만 바꼇는지 확인한다.
                //한글자만 바뀐 단어를 가지고 다시 dfs 함수를 호출
                isVisited[i]=true;
                dfs(word,target,cnt+1);
                isVisited[i]=false;
            }
        }



    }
    private static boolean canChange(String begin, String target) {
        int notEqualsSize = 0;

        for (int i = 0; i < begin.length(); i++) {
            if (begin.charAt(i) != target.charAt(i)) {
                notEqualsSize++;
            }
        }

        return notEqualsSize == 1;
    }
    public int solution(String begin, String target, String[] words) {
        list = Arrays.asList(words);
        if(!list.contains(target)){//target이 word에 없는경우에는 0리턴.
            return 0;
        }


        for(int i=0;i<list.size();i++){
            String word = list.get(i);
            if(canChange(begin,word)){
                isVisited = new boolean[words.length];
                isVisited[i]=true;
                dfs(word,target,1);
            }
        }
        return answer;
    }
}