
/**
 힌트: XOR 연산은 같은 숫자에 대해 수행했을 때 0이 나온다.
 i ~ j - 1까지 XOR한 값과 j ~ k 까지 XOR한 값이 같으려면 i ~ k까지 XOR 한 값이 0이 되어야 한다.
 => 첫번쨰 사례에서 0~1번쨰 xor결과는 2, 1~2까지 xor 결과는 2 이기 떄문에 0~2까지 xor 결과가 0 이면 된다.
 또한 해당 구간 내에 어떤 위치에 j가 있어도 전체 XOR은 0이 되므로 i ~ k까지의 구간만 구하면 (k - i) 내의 모든 j의 갯수를 결과로 반환하면 된다.
 https://leetcode.com/problems/count-triplets-that-can-form-two-arrays-of-equal-xor/
 runtime : 1ms
 memroy: 40.46mb
 */
class Solution {
    public int countTriplets(int[] arr) {
        int answer = 0;
        for(int i=0;i<arr.length-1;i++){
            int a = arr[i];
            for(int j=i+1;j<arr.length;j++){
                a = a^ arr[j];
                if(a == 0){
                    answer += (j-i);
                }
            }
        }
        return answer;
    }
}