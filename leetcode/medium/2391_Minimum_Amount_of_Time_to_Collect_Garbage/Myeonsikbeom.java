/**
 https://leetcode.com/problems/minimum-amount-of-time-to-collect-garbage/
 runtime: 35ms
 memory: 61.32mb
 */
class Solution {
    public int getMinute(int lastindex,int[] travel){
        int result = 0;
        for(int i=0;i<lastindex;i++){
            result+=travel[i];
        }
        return result;
    }
    public int garbageCollection(String[] garbage, int[] travel) {
        int answer = 0;
        int MGarbCnt = 0,GGarbCnt=0,PGarbCnt=0;
        int MGarbLastIdx = 0,GGarbLastIdx=0,PGarbLastIdx=0;
        for(int i=0;i<garbage.length;i++){
            for(int j=0;j<garbage[i].length();j++){
                if(garbage[i].charAt(j) == 'G'){
                    GGarbCnt++;
                    GGarbLastIdx = i;
                }else if(garbage[i].charAt(j) == 'M'){
                    MGarbCnt++;
                    MGarbLastIdx = i;
                }else if(garbage[i].charAt(j) == 'P'){
                    PGarbCnt++;
                    PGarbLastIdx = i;
                }
            }
        }
        int mGarbtravelResult = getMinute(MGarbLastIdx,travel);
        int gGarbtravelResult = getMinute(GGarbLastIdx,travel);
        int pGarbtravelResult = getMinute(PGarbLastIdx,travel);

        return  MGarbCnt+GGarbCnt+PGarbCnt+mGarbtravelResult+gGarbtravelResult+pGarbtravelResult;
    }
}