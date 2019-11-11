"""https://app.codility.com/programmers/lessons/1-iterations/

result : https://app.codility.com/demo/results/trainingFETAYT-RYK/
1. BinaryGap

Task Score :100%
Correctness:100%
Performance:Not assessed
"""

class Solution {
    public int solution(int N) {
        int returnValue = 0;
        int tmp = 0;

        String binaryStringValue = Integer.toBinaryString(N);
        for(int i=0; i<binaryStringValue.length(); i++){
            if(binaryStringValue.charAt(i) == '0'){
                tmp++;
            }else{
                if(tmp > returnValue){
                    returnValue = tmp;
                }
                tmp = 0;
            }
        }
        return returnValue;
    }
}