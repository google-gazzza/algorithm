/**
 Runtime:6ms
 Memory:43.25MB */
class Solution {
    public int equalSubstring(String s, String t, int maxCost) {
        char[] sChar = s.toCharArray();
        char[] tChar = t.toCharArray();
        int l = 0;
        int answer = 0;
        int cost = 0;
        for(int i=0;i<s.length();i++){
            cost += Math.abs(tChar[i]-sChar[i]);

            while(cost > maxCost){
                cost -= Math.abs(tChar[l]-sChar[l]);
                l++;
            }
            answer = Math.max(answer,i-l+1);
        }
        return answer;
    }
}