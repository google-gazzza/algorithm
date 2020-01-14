// https://leetcode.com/problems/min-stack/
// Runtime: 4 ms, faster than 99.66% of Java online submissions for Min Stack.
// Memory Usage: 39.9 MB, less than 34.79% of Java online submissions for Min Stack.

class MinStack {
    List<Integer> values;
    List<Integer> mins;
    int length;
    /** initialize your data structure here. */
    public MinStack() {
        values = new ArrayList<Integer>();
        mins = new ArrayList<Integer>();
        length = 0;
    }
    
    public void push(int x) {
        int min = length > 0 ? Math.min(mins.get(length - 1), x) : x;
        if (length == values.size()) {
            values.add(x);
            mins.add(min);
        }
        else {
            values.set(length, x);
            mins.set(length, min);
        }
        length += 1;
    }
    
    public void pop() {
        if (length == 0) return;
        length -= 1;
    }
    
    public int top() {
        return values.get(length - 1);
    }
    
    public int getMin() {
        return mins.get(length - 1);
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