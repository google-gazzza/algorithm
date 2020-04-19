//https://leetcode.com/problems/house-robber
//Runtime: 0 ms, faster than 100.00% of Java online submissions for House Robber.
//Memory Usage: 37.1 MB, less than 5.26% of Java online submissions for House Robber.

class Solution {
    public int rob(int[] nums) {
        if (nums.length == 0) return 0;
        int[] tmps = new int[nums.length + 1];
        tmps[0] = 0; // length 를 넘어가면 0을 반환하기 위해 tmps 의 0 번을 0 으로 초기화해 준다.
        tmps[1] = nums[0]; // tmps의 1번부터 시작한다.
        for (int i = 1; i < nums.length ; i++) {
            // 짝수, 홀수합과 한번 건너뛰는 연산까지 가능하다.
            tmps[i+1] = Math.max(tmps[i], tmps[i-1] + nums[i]);
        }
        return tmps[nums.length];
    }
}

// 한번 10 + 4에서 다음 10 + 5가 더 크다는 연산이 가능하다.
//nums = [1,10,3,4,5]
//tmp = [0,1, , , , ]
//1// 1 , 0 + 10
//tmp = [0,1,10]
//2// 10, 1 + 3
//tmp = [0,1,10,10]
//3// 10, 10 + 4
//tmp = [0,1,10,10,14]
//4// 14, 10 + 5
//tmp = [0,1,10,10,14,15]