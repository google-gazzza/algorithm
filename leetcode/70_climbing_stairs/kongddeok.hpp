// https://leetcode.com/problems/climbing-stairs/
// Runtime: 0 ms, faster than 100.00% of C++ online submissions for Climbing Stairs.
// Memory Usage: 8.1 MB, less than 100.00% of C++ online submissions for Climbing Stairs.

class Solution {
public:
    constexpr Solution() 
        : m_array()
    {
        m_array[1] = 1;
        m_array[2] = 2;
        for (auto i = 3; i < 46; ++i) {
            m_array[i] = m_array[i - 1] + m_array[i - 2];
        }
    }
    
private:
    int m_array[100];    
    
public:
    int climbStairs(int n) {
        return m_array[n];
    }
};