/*
1268-search-suggestions-system
leetcode/medium/1268. Search Suggestions System
URL: https://leetcode.com/problems/search-suggestions-system/

NOTE: Description
NOTE: Constraints
  - 1 <= products.length <= 1000
  - 1 <= products[i].length <= 3000
  - 1 <= sum(products[i].length) <= 2 * 104
  - All the strings of products are unique.
  - products[i] consists of lowercase English letters.
  - 1 <= searchWord.length <= 1000
  - searchWord consists of lowercase English letters.

NOTE: Explanation
*/

function suggestedProducts(products: string[], searchWord: string): string[][] {
  products.sort((a, b) => a.localeCompare(b));

  const result: string[][] = [];

  for (let i = 0; i < searchWord.length; i += 1) {
    const prefix = searchWord.slice(0, i + 1);
    result.push(products.filter((product) => product.startsWith(prefix)).slice(0, 3));
  }

  return result;
}

// Example 1:
let products = ['mobile', 'mouse', 'moneypot', 'monitor', 'mousepad'];
let searchWord = 'mouse';
console.log(suggestedProducts(products, searchWord));
// Output: [
//   ["mobile","moneypot","monitor"],
//   ["mobile","moneypot","monitor"],
//   ["mouse","mousepad"],
//   ["mouse","mousepad"],
//   ["mouse","mousepad"]
// ]

products = ['havana'];
searchWord = 'havana';
console.log(suggestedProducts(products, searchWord));
// Output: [['havana'], ['havana'], ['havana'], ['havana'], ['havana'], ['havana']];

products = ['bags', 'baggage', 'banner', 'box', 'cloths'];
searchWord = 'bags';
console.log(suggestedProducts(products, searchWord));
// Output: [['baggage', 'bags', 'banner'], ['baggage', 'bags', 'banner'], ['baggage', 'bags'], ['bags']];