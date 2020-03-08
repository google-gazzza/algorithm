// https://www.acmicpc.net/problem/15596
// 시간 : 20 ms ,  자바 언어로 구현
// 메모리 : 386736 KB

public class Test {
    long sum(int[] a){
        long sumValue = 0;
        for (int i : a) sumValue += i;
        return sumValue;
    }
}
