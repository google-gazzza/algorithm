/*
https://school.programmers.co.kr/learn/courses/30/lessons/154538
*/
import java.util.*;
class Solution {
    public int solution(int x, int y, int n) {
        int answer=0;

        Queue<int[]> q = new LinkedList<>();
        HashSet<Integer> hs = new HashSet<>();
        q.add(new int[]{x,0});
        while(!q.isEmpty()){
            int[] nums = q.poll();
            int num = nums[0];
            int cnt = nums[1];
            if(num > y){
                continue;
            }
            if(num==y){
                return cnt;
            }else{
                cnt++;
                if(!hs.contains(num+n)){
                    q.add(new int[]{num+n,cnt});
                    hs.add(num+n);
                }
                if(!hs.contains(num*2)){
                    q.add(new int[]{num*2,cnt});
                    hs.add(num*2);
                }
                if(!hs.contains(num*3)){
                    q.add(new int[]{num*3,cnt});
                    hs.add(num*3);
                }
            }
        }
        return -1;
    }
}