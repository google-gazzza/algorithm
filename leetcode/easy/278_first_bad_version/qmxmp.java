//Runtime: 13 ms, faster than 35.37% of Java online submissions for First Bad Version.
//Memory Usage: 36.2 MB, less than 5.63% of Java online submissions for First Bad Version.

class N278_First_Bad_Version_Solution extends VersionControl {

	public int firstBadVersion(int n) {
		return findfirstBadVersionRecursivly(1, n);
	}

	private int findfirstBadVersionRecursivly(int s, int e) {
		int n = (int) ((long) ((long) s + (long) e) / 2l);
		if (e == s)
			return s;
		if (e - s == 1) {
			if (isBadVersion(e)) {
				if (isBadVersion(s)) {
					return s;
				} else
					return e;
			}
		}
		if (isBadVersion(n))
			return findfirstBadVersionRecursivly(s, n);
		else
			return findfirstBadVersionRecursivly(n, e);
	}

}