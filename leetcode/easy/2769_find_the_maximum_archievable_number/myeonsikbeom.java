/*
*
Runtime: 5ms, Beats: 35.07% of users with Java
Memory : 40.08MB, Beats: 78.84%of users with Java
* */
class Solution {
    public int theMaximumAchievableX(int num, int t) {
        int x = num+t;
        int start = num;
        int end = x;
        int step = 1;
        while(start<end){
            start += 1;
            end -= 1;
            if(start == end && step == t){
                break;
            }else if(start == end && step < t){
                start = num;
                end = x+1;
                x+=1;
                step = 1;
            }else if(start > end){
                start = num;
                end = x+1;
                x+=1;
                step = 1;
            }else{
                step++;
            }
        }

        return x;
    }
}