/*https://school.programmers.co.kr/learn/courses/30/lessons/12987*/
import java.util.*;
class Solution {
    public int solution(int[] A, int[] B) {
        Arrays.sort(A);
        Arrays.sort(B);
        int answer = 0;
        int len = A.length;
        int Bi=0;
        int Ai=0;
        while(Ai < len && Bi<len){
            if(A[Ai]>=B[Bi]){
                Bi++;
                continue;
            }
            if(A[Ai]<B[Bi]){
                Ai++;
                Bi++;
                answer++;
            }
        }

        return answer;
    }
}