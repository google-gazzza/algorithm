/**
 https://leetcode.com/problems/find-the-original-array-of-prefix-xor/
 runtime:1ms
 memroy:57.9MB
 */
class Solution {
    public int[] findArray(int[] pref) {
        int[] answer = new int[pref.length];
        int prev = 0;
        for(int i=0;i<pref.length;i++){
            answer[i] = prev ^ pref[i];
            prev=pref[i];

        }
        return answer;
    }
}