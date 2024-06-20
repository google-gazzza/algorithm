class Solution {
    public int[] topKFrequent(int[] nums, int k) {
        Map<Integer,Integer> freqMap = new HashMap<>(); //정수별로 보여지는(?) 횟수를 저장하기 위한 Map
        int[] answer = new int[k];
        for(int num:nums){ //정수별로 보여지는(?) 횟수를 Count
            freqMap.put(num,freqMap.getOrDefault(num,0)+1);
        }
        //정수 배열 nums와 정수 k가 주어지면 가장 자주 사용되는 k개의 요소를 반환합니다. 어떤 순서로든 답변을 반환할 수 있습니다.
        //빈도순 정렬 => k갯수만큼 배열에 채워넣는다.
        //[1,1,1,2,3,3,3,3,3,3],1
        //[3]
        /** 자주 보여지는 횟수 내림차순으로 정렬하기 위해 우선순위 큐를 사용.
         Comparator를 구현한 익명클래스를 활용하여 Sorting
         */
        PriorityQueue<Map.Entry<Integer,Integer>> pq = new PriorityQueue<>(new Comparator<Map.Entry<Integer,Integer>>(){
            @Override
            public int compare(Map.Entry<Integer,Integer> m1, Map.Entry<Integer,Integer> m2) {
                return m2.getValue()-m1.getValue();
            }
        });
        //우선순위 큐에 Map데이터를 전부 넣는다.
        pq.addAll(freqMap.entrySet());
        int index = 0;

        //k개 만큼 큐에서 값을빼서 Answer배열에 넣는다.
        while(index < k){
            Map.Entry<Integer,Integer> p = pq.poll();

            answer[index++] = p.getKey();
        }
        return answer;
    }
}