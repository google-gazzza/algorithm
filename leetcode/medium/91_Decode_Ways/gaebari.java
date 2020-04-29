//https://leetcode.com/problems/decode-ways
//Runtime: 2 ms, faster than 62.73% of Java online submissions for Decode Ways.
//Memory Usage: 39.2 MB, less than 5.66% of Java online submissions for Decode Ways.
class Solution {
	public int numDecodings(String s) {
		if(s == null || s.length() == 0) {
			return 0;
		}
		int n = s.length();
		// 왜 int array 를 s.length + 1 해서 만드는 것일까? || 두자릿수를 비교하기 때문에 한자리가 더 필요하다.
		int[] dp = new int[n+1];
		// 경우의 수를 1씩 늘려주기 위해서 0에 1로 초기화 시켜준다. 0으로 초기화할기 경우의 수가 늘어나지 않는다.
		dp[0] = 1;
		// s 가 '0' 으로 시작하는 것을 방지하기 위해서 0을 검사한다. 두번째 이상부터는 for 문에서 검사할 수 있다.
		dp[1] = s.charAt(0) != '0' ? 1 : 0;
		// 초기화한 0, 1 다음부터 for 문을 시작한다.
		for(int i = 2; i <= n; i++) {
			// 한자릿수의 경우의 수와 두자릿수의 경우의 수를 모두 고려한다.
			int first = Integer.valueOf(s.substring(i-1, i));
			int second = Integer.valueOf(s.substring(i-2, i));
			// 한자릿수의 가능한 경우의 수가 들어왔을 경우 이전의 경우의 수에 이번 경우의 수를 추가한다.
			if( 1 <= first && first <= 9) {
				dp[i] += dp[i-1];
			}
			// 두자릿수의 가능한 경우의 수가 들어왔을 경우 두자릿수를 기준으로 이전 경우의 수를 추가한다. && 두자릿수 이므로 이전 경우의 수는 i-2이이다.
			if( 10 <= second && second <= 26) {
				dp[i] += dp[i-2];
			}
		}
		// 마지막 경우의 수를 모두 계산한 값을 반환한다.
		return dp[n];
	}
}
