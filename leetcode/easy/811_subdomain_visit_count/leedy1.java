//https://leetcode.com/problems/subdomain-visit-count/submissions/
//Runtime: 21 ms, faster than 35.64% of Java online submissions for Subdomain Visit Count.
//Memory Usage: 46.1 MB, less than 6.06% of Java online submissions for Subdomain Visit Count.

class Solution {
    public List<String> subdomainVisits(String[] cpdomains) {
        List<String> result = new ArrayList<>();
        HashMap<String, Integer> map = new HashMap<>();
        
        for(int i = 0; i<cpdomains.length; i++) {
        	int visitCount = Integer.parseInt(cpdomains[i].split(" ")[0]);
        	String splitDomain = cpdomains[i].split(" ")[1];
        	map.put(splitDomain,map.getOrDefault(splitDomain, 0)+ visitCount);
        	for(char c : splitDomain.toCharArray()) {
        		if(c =='.') {
        			splitDomain = splitDomain.substring(splitDomain.indexOf(c)+1);
        			map.put(splitDomain, map.getOrDefault(splitDomain, 0)+visitCount);
        		}
        	}
        }
        for(String str :map.keySet()) {
        	result.add(map.get(str)+ " "+ str);
        }
        
        return result;
    }
}
