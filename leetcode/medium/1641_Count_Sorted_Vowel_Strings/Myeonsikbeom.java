/**
 runtime:0ms
 memory:40.22mb
 */
class Solution {
    public int countVowelStrings(int n) {
        /***************************************
         a   e   i  o   u
         n = 1    1   1   1  1   1
         n = 2    5   4   3  2   1
         n = 3    15  10  6  3   1
         n = 4    35  20  9  4   1
         => answers[j] = answers[j-1]+answers[j-2]+...+answers[0]
         */
        int[] answers = new int[5];
        answers[0]=1;
        for(int i=0;i<n;i++){
            for(int j=1;j<5;j++){
                answers[j] += answers[j-1];
            }
        }
        int answer = 0;
        for(int number : answers){
            answer +=number;
        }
        return answer;

    }
}