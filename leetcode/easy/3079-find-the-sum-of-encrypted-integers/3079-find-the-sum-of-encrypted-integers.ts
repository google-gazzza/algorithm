// 3079-find-the-sum-of-encrypted-integers
// URL: https://leetcode.com/problems/find-the-sum-of-encrypted-integers/description/


function sumOfEncryptedInt(nums: number[]): number {
    return nums.map((num) => num.toString().split(''))
      .map((numCharArr) => {
        const numTypeArr = numCharArr.map((numChar) => parseInt(numChar));
        const max = Math.max(...numTypeArr);
  
        return String(max).repeat(numTypeArr.length);
      })
      .reduce((acc, cur) => acc + parseInt(cur), 0);
  };
  