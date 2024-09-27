// leetcode/easy/1346. Check If N and Its Double Exist
// 1346-check-if-n-and-its-double-exist
// URL: https://leetcode.com/problems/check-if-n-and-its-double-exist/description/

function checkIfExist(arr: number[]): boolean {
  const map = new Map();

  arr.forEach((num, index) => map.set(num, index));

  for (let i = 0; i < arr.length; i += 1) {
    const target = arr[i] * 2;
    if (map.has(target) && map.get(target) !== i) {
      return true;
    }
  }

  return false;
}

