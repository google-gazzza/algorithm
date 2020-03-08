// https://leetcode.com/problems/min-stack/submissions/
// Runtime: 6 ms, faster than 24.51% of Java online submissions for Min Stack.
// Memory Usage: 53.3 MB, less than 5.08% of Java online submissions for Min Stack.
class MinStack {
    int min;
    Stack<Integer> s;
    /** initialize your data structure here. */
    public MinStack() {
        min = Integer.MAX_VALUE;
        s = new Stack<Integer>();
    }

    public void push(int x) {
        if (x <= min) {
            s.push(min);
            min = x;
        }
        s.push(x);
    }

    public void pop() {
        if (min == s.pop()) min = s.pop();
    }

    public int top() {
        return s.peek();
    }

    public int getMin() {
        return min;
    }
}

/**
 * Your MinStack object will be instantiated and called as such:
 * MinStack obj = new MinStack();
 * obj.push(x);
 * obj.pop();
 * int param_3 = obj.top();
 * int param_4 = obj.getMin();
 */

