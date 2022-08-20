/*
2259-remove-digit-from-number-to-maximize-result
leetcode/easy/2259. Remove Digit From Number to Maximize Result
URL: https://leetcode.com/problems/remove-digit-from-number-to-maximize-result/

NOTE: Description
NOTE: Constraints
NOTE: Explanation
NOTE: Reference
*/

function removeDigit(number: string, digit: string): string {
  const numberArray = number.split('');
  const candidates: string[] = [];

  for (let i = 0; i < numberArray.length; i += 1) {
    if (numberArray[i] === digit) {
      const cadidate = numberArray.slice(0, i).concat(numberArray.slice(i + 1));
      candidates.push(cadidate.join(''));
    }
  }
  candidates.sort((a, b) => b.localeCompare(a));

  return candidates[0];
}


let number = '123';
let digit = '3';
console.log(removeDigit(number, digit));
// Output: "12"

number = '1231';
digit = '1';
console.log(removeDigit(number, digit));
// Output: "231"
// Explanation: We can remove the first '1' to get "231" or remove the second '1' to get "123".
//   Since 231 > 123, we return "231".
//   Example 3:
//
number = '551';
digit = '5';
console.log(removeDigit(number, digit));
// Output: "51"
// Explanation: We can remove either the first or second '5' from "551".
//   Both result in the string "51".

number = '7795478535679443616467964135298543163376223791274561861738666981419251859535331546947347395531332878';
digit = '5';
const t = removeDigit(number, digit);
const expect = '779547853679443616467964135298543163376223791274561861738666981419251859535331546947347395531332878';
(t === expect);

// Output   "779547853567944361646796413529854316337622379127456186173866698141925185953533154694734739531332878"
// Expected "779547853679443616467964135298543163376223791274561861738666981419251859535331546947347395531332878"

number = '133235';
digit = '3';
console.log(removeDigit(number, digit));
// Output
// "13235"
// Expected
// "13325"
