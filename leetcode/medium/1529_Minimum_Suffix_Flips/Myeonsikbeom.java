class Solution {
    public int minFlips(String target) {
        /**뒤집는 규칙은 무조건 i에서 끝까지 뒤집어야한다.
         i번 전구의 선택이 증가하는 전략을 생각해 보세요. 이러한 전략에서는 더 이상 왼쪽에 설치된 전구에 대해 걱정할 필요가 없습니다.

         i = 0
         target[i]  prev
         1       0 answer++
         i=1
         0       1 answer++
         i=2
         1       0 answer++
         i=3
         1       1
         i=4
         1       1
         */
        int answer = 0;
        char prev = '0';
        for(int i = 0 ; i<target.length();i++){
            if(prev != target.charAt(i)){ // 인접한 숫자가 target의 숫자와 다르다면 answer +1
                answer ++;
            }
            prev = target.charAt(i);
        }
        return answer;



    }
}