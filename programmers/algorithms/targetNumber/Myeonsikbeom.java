/*
https://school.programmers.co.kr/learn/courses/30/lessons/43165
*/
class Solution {
    int answer = 0;
    public void calculate(int[] numbers,int target,int sum,int start){
        if(start == numbers.length && sum != target){
            return;
        }else if(start == numbers.length && sum == target){
            answer ++;
            return;
        }

        calculate(numbers,target,sum+ numbers[start], start+1);
        calculate(numbers,target,sum+ (numbers[start]*-1), start+1);


    }
    public int solution(int[] numbers, int target) {
        calculate(numbers,target,0,0);
        return answer;
    }
}