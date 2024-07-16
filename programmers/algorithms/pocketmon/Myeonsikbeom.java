import java.util.*;
class Solution {
    public int solution(int[] nums) {
        int answer = 0;

        Set<Integer> set = new HashSet<>();
        for(int num:nums){
            set.add(num);
        }
        int half = nums.length / 2; //폰캣몬을 가져올수있는 최대 수
        int setSize = set.size(); //폰캣몬 종류
        return  half <= setSize ? half:setSize; //폰캣몬의 종류가 가져올수있는 최대수보다 크면 주어진 폰캣몬의 절반만 가져가면 되고 그렇지 않을때면 모든 종류를 가져가면된다.
    }
}