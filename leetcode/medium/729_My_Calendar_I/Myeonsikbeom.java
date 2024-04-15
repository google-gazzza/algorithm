/**
 https://leetcode.com/problems/my-calendar-i/
 Runtime: 84ms
 Memory : 45.83 MB
 */
class MyCalendar {
    List<int[]> calendarList;
    public MyCalendar() {
        calendarList = new ArrayList<>();
    }

    public boolean book(int start, int end) {
        int[] calendarArr = new int [] {start,end};
        for(int[] e  : calendarList){
            if( (e[0] <= start  && e[1] > start) ||
                    (start <= e[0] && e[0] < end) ){
                return false;
            }
        }
        calendarList.add(calendarArr);
        return true;
    }
}

/**
 * Your MyCalendar object will be instantiated and called as such:
 * MyCalendar obj = new MyCalendar();
 * boolean param_1 = obj.book(start,end);
 */