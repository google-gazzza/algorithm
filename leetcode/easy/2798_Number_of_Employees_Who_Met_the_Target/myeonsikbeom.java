/*Runtime: 6 ms
Memory: 41.4 MB
 */
class Solution {
    public int numberOfEmployeesWhoMetTarget(int[] hours, int target) {
        return (int)Arrays.stream(hours).filter(hour->hour >= target).count();
    }
}