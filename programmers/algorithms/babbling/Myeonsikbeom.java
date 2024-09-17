/*https://school.programmers.co.kr/learn/courses/30/lessons/133499*/
class Solution {
    public int solution(String[] babblings) {
        int answer = 0;
        String[] pronunciations = {"aya","ye","woo","ma"};
        for(String babbling : babblings){

            for(String pronunciation : pronunciations ){
                if(babbling.indexOf(String.format("%s%s",pronunciation,pronunciation)) != -1){
                    break;
                }
                babbling = babbling.replace(pronunciation," ");
            }
            if(babbling.trim().equals("")){
                answer++;
            }
        }
        return answer;
    }
}