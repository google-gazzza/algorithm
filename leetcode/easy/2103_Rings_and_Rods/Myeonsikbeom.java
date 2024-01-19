class Solution {
    public int countPoints(String rings) {
        Map<String,Set<String>> ringMap = new HashMap<>();
        for(int i=0;i<rings.length();i+=2){
            String[] ringArr = rings.substring(i,i+2).split("");
            Set<String> ringSet = ringMap.getOrDefault(ringArr[1],new HashSet<>());
            ringSet.add(ringArr[0]);
            ringMap.put(ringArr[1],ringSet);
        }
        int answer = 0;

        Iterator<String> keys = ringMap.keySet().iterator();
        while (keys.hasNext()) {
            String key = keys.next();
            if(ringMap.get(key).size() == 3){
                answer++;
            }
        }

        return answer;
    }

}