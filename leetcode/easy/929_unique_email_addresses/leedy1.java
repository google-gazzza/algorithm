//https://leetcode.com/problems/unique-email-addresses/
//Runtime: 23 ms, faster than 36.62% of Java online submissions for Unique Email Addresses.
//Memory Usage: 47 MB, less than 5.06% of Java online submissions for Unique Email Addresses.

class Solution {
    public int numUniqueEmails(String[] emails) {
        HashSet set = new HashSet();
        for(int i = 0; i <emails.length; i++){
            String[] tempArr = emails[i].split("@");
            tempArr[0] = tempArr[0].split("\\+")[0].replace(".","");
            set.add(tempArr[0]+"@"+tempArr[1]);
        }
        return set.size();
    }
}
