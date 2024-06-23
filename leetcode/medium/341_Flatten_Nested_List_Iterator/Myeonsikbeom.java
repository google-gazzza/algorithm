/**
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * public interface NestedInteger {
 *
 *     // @return true if this NestedInteger holds a single integer, rather than a nested list.
 *     public boolean isInteger();
 *
 *     // @return the single integer that this NestedInteger holds, if it holds a single integer
 *     // Return null if this NestedInteger holds a nested list
 *     public Integer getInteger();
 *
 *     // @return the nested list that this NestedInteger holds, if it holds a nested list
 *     // Return empty list if this NestedInteger holds a single integer
 *     public List<NestedInteger> getList();
 * }
 */
public class NestedIterator implements Iterator<Integer> {
    private Stack<NestedInteger> list;
    private int index;

    public void flatten(List<NestedInteger> nestedList) {

        for(int i = nestedList.size()-1;i>=0;i--){
            list.add(nestedList.get(i));
        }
    }
    public NestedIterator(List<NestedInteger> nestedList) {
        this.list = new Stack<>();
        this.index = 0;
        flatten(nestedList);
    }

    @Override
    public Integer next() {
        if(hasNext()){
            return list.pop().getInteger();
        }
        return null;
    }

    @Override
    public boolean hasNext() {
        while (!list.isEmpty())  {
            if (list.peek().isInteger()){
                return true;
            }
            else{
                flatten(list.pop().getList());
            }
        }
        return false;
    }
}

/**
 * Your NestedIterator object will be instantiated and called as such:
 * NestedIterator i = new NestedIterator(nestedList);
 * while (i.hasNext()) v[f()] = i.next();
 */