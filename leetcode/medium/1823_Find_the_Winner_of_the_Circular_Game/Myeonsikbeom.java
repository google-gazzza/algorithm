class Solution {
    public int findTheWinner(int n, int k) {
        Queue<Integer> q = new LinkedList<>();
        for(int i=1;i<=n;i++){ //친구들을 큐에 넣는다.
            q.add(i);
        }
        int step = 1;
        while(q.size() != 1){// 유일한 친구 한사람이 남을때까지 큐를 반복시킨다.
            Integer p = q.poll();
            if(step == k){ //다음 k번째 친구가 도달할때 스탭을 초기화 시킨다.
                step = 1;
                continue;
            }
            q.add(p);//k번째친구가 아닐때는 다시 큐에 값을 넣고,Step 값을 더한다.
            step++;
        }
        return q.poll();

    }
}