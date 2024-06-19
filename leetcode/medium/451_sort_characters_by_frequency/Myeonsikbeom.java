class Solution {
    public String frequencySort(String s) {
        Map<String,Integer> repeatArr = new HashMap<>();

        char[] charArray = s.toCharArray();
        for(int i=0;i<s.length();i++){ //Map에 문자별로 총 갯수를 담는다.
            String str = s.substring(i,i+1);
            repeatArr.put(str,repeatArr.getOrDefault(str,0)+1);
        }
        //Map에 담긴 문자별로 총 갯수를 배열로 변환 후 갯수별로 내림차순한다,
        List<Map.Entry<String,Integer>> sortedList = repeatArr.entrySet()
                .stream()
                .collect(Collectors.toList())
                .stream()
                .sorted(new Comparator<Map.Entry<String,Integer>>() {
                    @Override
                    public int compare(Map.Entry<String,Integer> m1, Map.Entry<String,Integer> m2) {
                        return m2.getValue()-m1.getValue();
                    }
                })
                .collect(Collectors.toList())
                ;
        // System.out.println(sortedList);
        StringBuilder answer = new StringBuilder();
        for(Map.Entry<String,Integer> el : sortedList){ //List를 순회하면서 문자열을 합한다.
            answer.append(el.getKey().repeat(el.getValue()));
        }
        return answer.toString();
    }

}