class Solution {
    public int[] solution(String[] wallpaper) {
        int[] answer = {50,50,0,0};
        for(int i=0;i<wallpaper.length;i++){
            int sharpLastIndex = wallpaper[i].lastIndexOf("#");
            int sharpFirstIndex = wallpaper[i].indexOf("#");
            if(sharpFirstIndex != -1){//x 축에 #이 있을때
                answer[0] = Math.min(i,answer[0]);
                answer[1] = Math.min(answer[1],sharpFirstIndex);
                answer[2] = Math.max(i,answer[2]);
                answer[3] = Math.max(sharpLastIndex,answer[3]);

            }
        }
        return new int[] {answer[0],answer[1],answer[2]+1,answer[3]+1};
    }
}