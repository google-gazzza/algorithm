/*
2129-capitalize-the-title
leetcode/easy/2129. Capitalize the Title
URL: https://leetcode.com/problems/capitalize-the-title/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function capitalizeTitle(title: string): string {
  return title.split(' ')
    .map((word) => {
      if (word.length > 2) {
        return word[0].toUpperCase() + word.slice(1).toLowerCase();
      }
      return word.toLowerCase();
    })
    .join(' ');
}

let title = 'capiTalIze tHe titLe';
console.log(capitalizeTitle(title));
// Output: "Capitalize The Title"
// Explanation:
//   Since all the words have a length of at least 3, the first letter of each word is uppercase, and the remaining letters are lowercase.
//   Example 2:

title = 'First leTTeR of EACH Word';
console.log(capitalizeTitle(title));
// Output: "First Letter of Each Word"
// Explanation:
//   The word "of" has length 2, so it is all lowercase.
//   The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.
//   Example 3:

title = 'i lOve leetcode';
console.log(capitalizeTitle(title));
// Output: "i Love Leetcode"
// Explanation:
//   The word "i" has length 1, so it is lowercase.
//   The remaining words have a length of at least 3, so the first letter of each remaining word is uppercase, and the remaining letters are lowercase.
