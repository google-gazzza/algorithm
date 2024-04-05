/**https://school.programmers.co.kr/learn/courses/30/lessons/178870*/
class Solution {
    public int[] solution(int[] sequence, int k) {
        int[] answer = {0,1000000};

        int end = 0;
        int start = 0;

        int len = sequence.length;
        int sum = 0;
        while(start<=end && end < len){
            if(sequence[end] > k){
                break;
            }
            sum += sequence[end];
            if(sum<k){
                end++;
            }else{
                if(sum == k ){
                    if(answer[1]-answer[0] > end-start){
                        answer = new int[]{start,end};
                    }else if (answer[1]-answer[0] == end-start && start < answer[0]){
                        answer = new int[]{start,end};
                    }
                }
                sum -= sequence[start];
                sum -= sequence[end];
                start++;

            }
        }
        return answer;
    }
}
