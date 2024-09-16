/**
 https://leetcode.com/problems/design-an-ordered-stream
 runtime: 68ms
 memory: 45.38mb
 */
class OrderedStream {
    String[] arr = null;
    int ptr = 0;
    public OrderedStream(int n) {
        arr = new String[n];
    }

    public List<String> insert(int idKey, String value) {
        arr[idKey-1] = value;
        List<String> result = new ArrayList<String>();
        while(ptr<arr.length && arr[ptr] != null){
            result.add(arr[ptr++]);
        }

        return result;
    }
}

/**
 * Your OrderedStream object will be instantiated and called as such:
 * OrderedStream obj = new OrderedStream(n);
 * List<String> param_1 = obj.insert(idKey,value);
 */