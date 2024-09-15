/**
 https://leetcode.com/problems/all-paths-from-source-to-target/
 runtime: 10ms
 memory: 47.4mb
 */
class Solution {
    public List<List<Integer>> allPathsSourceTarget(int[][] graph) {
        List<List<Integer>> answer = new ArrayList<>();
        Queue<List<Integer>> q = new LinkedList<>();
        int dest = graph.length-1;
        q.add(Arrays.asList(0));

        while(!q.isEmpty()){
            List<Integer> arr = q.remove();
            Integer lastValue = arr.get(arr.size()-1);
            if(lastValue == dest){
                answer.add(arr);
            }
            for(Integer num : graph[lastValue]){
                List<Integer> newPath = new ArrayList<>(arr);
                newPath.add(num);
                q.add(newPath);
            }
        }
        return answer;
    }
}