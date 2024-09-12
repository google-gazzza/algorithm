/**https://leetcode.com/problems/maximum-number-of-coins-you-can-get/ */
class Solution {
    /**효율적으로 푼 문제 */
    public int maxCoins(int[] piles) {
        int answer = 0;
        Arrays.sort(piles);
        for(int i = piles.length/3 ; i<piles.length;i+=2){
            answer += piles[i];
        }
        return answer;
    }
    /**내가 푼 문제 */
    public int maxCoin2(int[] piles) {

        PriorityQueue<Integer> pileQ = new PriorityQueue<>(Collections.reverseOrder());
        int answer = 0;
        int step = 1;
        int skip = 0;
        for(int pile : piles){
            pileQ.add(pile);
        }

        while(pileQ.size() > 0 && skip != pileQ.size()){

            if(step %3 == 1){//제일 가장 큰수를 잡고 버림
                pileQ.poll();
                step++;
            }else if(step %3 == 2){//그다음 큰 수를 잡고 answer++;
                Integer pile = pileQ.poll();
                //System.out.println(pile);
                answer += pile;
                step++;
            }else if(step %3 == 0){//끝까지 추적해서 제일 작은수를 잡고 버림;
                skip++;
                step++;
            }
        }
        return answer;

    }
}