// https://leetcode.com/problems/group-anagrams/
// Runtime: 36 ms, faster than 91.20% of C++ online submissions for Group Anagrams.
// Memory Usage: 18.8 MB, less than 89.55% of C++ online submissions for Group Anagrams.

class Solution {
public:
    vector<vector<string>> groupAnagrams(vector<string>& strs) {
        std::unordered_map<std::string, std::vector<std::string>> map;
        for (auto& str : strs) {
            auto key = str;
            std::sort(key.begin(), key.end());
            if (map.find(key) == map.end()) {
                map.emplace(key, std::vector<std::string>{str});
            } 
            else {
                auto& vec = map[key];
                vec.emplace_back(str);
            }
        }
        
        std::vector<std::vector<std::string>> results;
        for (auto& m : map) {
            results.emplace_back(m.second);
        }
        
        return results;
    }
};