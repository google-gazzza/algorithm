/*
2325-decode-the-message
leetcode/easy/2325. Decode the Message
URL: https://leetcode.com/problems/decode-the-message/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function decodeMessage(key: string, message: string): string {
  const decodedKeyMap = new Map<string, number>();

  for (let i = 0; i < key.length; i += 1) {
    if (!decodedKeyMap.has(key[i]) && key[i] !== ' ') {
      decodedKeyMap.set(key[i], decodedKeyMap.size);
      if (decodedKeyMap.size > 25) {
        break;
      }
    }
  }

  return message.split('')
    .map((e) => {
      return decodedKeyMap.has(e) ? String.fromCharCode(decodedKeyMap.get(e) + 97) : e;
    }).join('');
}

let key = 'the quick brown fox jumps over the lazy dog';
let message = 'vkbs bs t suepuv';
console.log(decodeMessage(key, message));
// Output: "this is a secret"

key = 'eljuxhpwnyrdgtqkviszcfmabo';
message = 'zwx hnfx lqantp mnoeius ycgk vcnjrdb';
console.log(decodeMessage(key, message));
// Output: "the five boxing wizards jump quickly"
