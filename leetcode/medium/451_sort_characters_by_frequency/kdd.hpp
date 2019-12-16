// https://leetcode.com/problems/sort-characters-by-frequency/
// Runtime: 12 ms, faster than 94.75% of C++ online submissions for Sort Characters By Frequency.
// Memory Usage: 11 MB, less than 58.82% of C++ online submissions for Sort Characters By Frequency.

class Solution {
public:
    string frequencySort(string s) {
        std::array<uint16_t, 256> dic = {0,};
        for (auto& c : s) ++dic[c];
        std::priority_queue<std::pair<uint16_t, char>> pq;
        for (auto i = 0; i < dic.size(); ++i) {
            if (dic[i] != 0) pq.emplace(dic[i], i);
        }
        std::string result;
        while (!pq.empty()) {
            result.append(pq.top().first, pq.top().second);
            pq.pop();
        }        
        return result;
    }
};


// https://leetcode.com/problems/sort-characters-by-frequency/
// Runtime: 284 ms, faster than 5.49% of C++ online submissions for Sort Characters By Frequency.
// Memory Usage: 10.4 MB, less than 88.24% of C++ online submissions for Sort Characters By Frequency.

class Solution {
public:
    string frequencySort(string s) {
        std::unordered_map<char, int16_t> dic;
        for (auto& c : s) ++dic[c];
        std::sort(s.begin(), s.end(), [&dic](char l, char r) {
           return dic[l] > dic[r] || (dic[l] == dic[r]) && (l < r); 
        });
        return s;
    }
};