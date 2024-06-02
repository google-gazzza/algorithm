// 3168-minimum-number-of-chairs-in-a-waiting-room
// URL: https://leetcode.com/problems/minimum-number-of-chairs-in-a-waiting-room/description/


function minimumChairs(s: string): number {
  let maxChairs = 0;
  let currentChairs = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      currentChairs++;
    } else {
      if (currentChairs > 0) {
        currentChairs -= 1;
      } else {
        maxChairs += 1;
      }
    }
  }

  return maxChairs;
};
