/*
dna-to-rna-conversion

# codewars/8kyu/DNA to RNA Conversion
Difficulty: 8kyu
URL: https://www.codewars.com/kata/5556282156230d0e5e000089/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript
*/

function DNAtoRNA(dna) {
  return dna.replace(/T/g, 'U');
}

test('test DNA to RNA', () => {
  expect(DNAtoRNA("TTTT")).toEqual("UUUU");
  expect(DNAtoRNA("GCAT")).toEqual("GCAU");
  expect(DNAtoRNA("GACCGCCGCC")).toEqual("GACCGCCGCC");
});
