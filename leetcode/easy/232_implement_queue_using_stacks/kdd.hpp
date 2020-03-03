// https://leetcode.com/problems/implement-queue-using-stacks/
// Runtime: 4 ms, faster than 53.55% of C++ online submissions for Implement Queue using Stacks.
// Memory Usage: 8.9 MB, less than 100.00% of C++ online submissions for Implement Queue using Stacks.

class MyQueue {
public:
    /** Initialize your data structure here. */
    MyQueue()
        : m_input()
        , m_output()
    {        
    }
    
    /** Push element x to the back of queue. */
    void push(int x) {
        m_input.push(x);
    }
    
    /** Removes the element from in front of queue and returns that element. */
    int pop() {
        auto result = peek();
        m_output.pop();
        return result;
    };
    
    /** Get the front element. */
    int peek() {
        if (m_output.size() == 0) {
            while (m_input.size() != 0) {
                m_output.push(m_input.top());
                m_input.pop();
            };
        }
        return m_output.top();
    }
    
    /** Returns whether the queue is empty. */
    bool empty() {
        return m_input.size() == 0 && m_output.size() == 0;   
    }
    
private:
    std::stack<int> m_input, m_output;
};

/**
 * Your MyQueue object will be instantiated and called as such:
 * MyQueue* obj = new MyQueue();
 * obj->push(x);
 * int param_2 = obj->pop();
 * int param_3 = obj->peek();
 * bool param_4 = obj->empty();
 */