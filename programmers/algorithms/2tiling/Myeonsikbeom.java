class Solution {
    int[] array = new int[60000];
    public int getCount(int cnt){
        if(cnt == 0 || cnt == 1 || cnt == 2){
            return cnt;
        }
        if(array[cnt] > 0){
            return array[cnt];
        }
        array[cnt] = (getCount(cnt-2)+getCount(cnt-1))%1000000007;
        return array[cnt];
    }
    public int solution(int n) {
        array[0]=0;
        array[1]=1;
        array[2]=2;
        int answer = getCount(n);

        return answer;
    }
}