/*
409-longest-palindrome
leetcode/easy/409. Longest Palindrome
Difficulty: easy
URL: https://leetcode.com/problems/longest-palindrome/
*/

function longestPalindrome(s: string): number {
  const countMap = new Map<string, number>();

  s.split('').forEach((e) => {
    if (countMap.has(e)) {
      countMap.set(e, countMap.get(e) + 1);
    } else {
      countMap.set(e, 1);
    }
  });

  let evenCount = 0;
  let maxOddCount = 0;

  for (const value of Array.from(countMap.values())) {
    if (value % 2 === 0) {
      evenCount += value;
    } else if (maxOddCount < value) {
      evenCount += Math.max(0, (maxOddCount - 1));
      maxOddCount = value;
    } else {
      evenCount += value - 1;
    }
  }

  return evenCount + maxOddCount;
}

// // Example 1:
// //
let s = 'abccccdd';
console.log(longestPalindrome(s));
// // Output: 7
// // Explanation:
// //   One longest palindrome that can be built is "dccaccd", whose length is 7.
// // Example 2:
// //
s = 'a';
console.log(longestPalindrome(s));
// // Output: 1
// // Example 3:
// //
s = 'bb';
console.log(longestPalindrome(s));
// // Output: 2
//
s = 'ccc';
console.log(longestPalindrome(s));

s = 'civilwartestingwhetherthatnaptionoranynartionsoconceivedandsodedicatedcanlongendureWeareqmetonagreatbattlefiemldoftzhatwarWehavecometodedicpateaportionofthatfieldasafinalrestingplaceforthosewhoheregavetheirlivesthatthatnationmightliveItisaltogetherfangandproperthatweshoulddothisButinalargersensewecannotdedicatewecannotconsecratewecannothallowthisgroundThebravelmenlivinganddeadwhostruggledherehaveconsecrateditfaraboveourpoorponwertoaddordetractTgheworldadswfilllittlenotlenorlongrememberwhatwesayherebutitcanneverforgetwhattheydidhereItisforusthelivingrathertobededicatedheretotheulnfinishedworkwhichtheywhofoughtherehavethusfarsonoblyadvancedItisratherforustobeherededicatedtothegreattdafskremainingbeforeusthatfromthesehonoreddeadwetakeincreaseddevotiontothatcauseforwhichtheygavethelastpfullmeasureofdevotionthatweherehighlyresolvethatthesedeadshallnothavediedinvainthatthisnationunsderGodshallhaveanewbirthoffreedomandthatgovernmentofthepeoplebythepeopleforthepeopleshallnotperishfromtheearth';
console.log(longestPalindrome(s));
