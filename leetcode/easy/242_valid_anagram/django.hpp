/*
 * https://leetcode.com/problems/valid-anagram/
 * Runtime: 28 ms, faster than 22.19% of C++ online submissions for Valid Anagram.
Memory Usage: 9.7 MB, less than 14.93% of C++ online submissions for Valid Anagram.
*/

class Solution {
public:
    bool isAnagram(string s, string t) {
        vector<char> sv(s.begin(), s.end());
        vector<char> tv(t.begin(), t.end());

        sort(sv.begin(), sv.end());
        sort(tv.begin(), tv.end());

        if (sv.size() != tv.size())
        {
            return false;
        }

        for(auto i = 0; i < sv.size(); ++i)
        {
            if (sv[i] != tv[i])
            {
                return false;
            }
        }

        return true;

    }
};
