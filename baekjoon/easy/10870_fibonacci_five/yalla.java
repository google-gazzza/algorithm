// 피보나치 5 - https://www.acmicpc.net/problem/10870
// 시간 240ms | 메모리 18192KB
public class Main {
	// 피보나치
	// n이 추어졌을때 n번째 피보나치 수를 구하시오
	public static void main(String[] args) {
		Scanner sc = new Scanner(System.in);
		int N = Integer.parseInt(sc.next());
		int result = solution(N);
		System.out.println(result);
	}

	private static int solution(int n) {
		if(n == 0 || n == 1) return n;
		return solution(n -1) + solution(n -2);
	}
}