class Solution {
    /**
     처음 심사대는 비워있음. => 모든 심사관에게 심사 가능.
     한 심사대당 한명만 심사 가능.
     심사관 별 심사시간은 당연히 다름.
     lower bound(O), upper bound
     10억 => 절대 완전탐색X

     여기서 Lower bound는 어떻게 푸는것이 좋을까?
     Lower bound : 찾으려는 값 이상의 위치
     upper bound : 찾으려는 값이 초과된 위치

     그렇다면 중간은 => n

     */
    public long solution(int n, int[] times) {
        long answer = 0;
        long left = 1; //가장 최소 시간
        long right = 0; //가장 많이 걸리는 시간
        long max = 0;
        for(int time : times){
            max = Math.max((long)time,max);
        }
        right = (long)n*max;

        while(left<=right){
            long mid = (left+right) / 2;
            long passPeople = getPassPeople(mid,times);

            if(passPeople < n){
                left = mid+1;
            }else if(passPeople >= n){
                answer = mid;
                right = mid-1;
            }
        }
        return answer;
    }
    private long getPassPeople(long mid,int[] times){
        long count = 0;
        for(int time: times){
            count += mid / (long)time;
        }
        return count;
    }
}