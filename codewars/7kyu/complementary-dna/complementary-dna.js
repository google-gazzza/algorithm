/*
complementary-dna

# codewars/7kyu/Complementary DNA
Difficulty: 7kyu
URL: https://www.codewars.com/kata/554e4a2f232cdd87d9000038/
Tags:

## Approach

### en

### kr

## Solution
### JavaScript

*/

function DNAStrand(dna) {
  return [...dna].map((e) => {
    switch (e) {
      case 'A':
        return 'T';
      case 'T':
        return 'A';
      case 'G':
        return 'C';
      case 'C':
        return 'G';
    }
  }).join('');
}

// test
console.log(DNAStrand("AAAA"), "TTTT", "String AAAA is");
console.log(DNAStrand("ATTGC"), "TAACG", "String ATTGC is");
console.log(DNAStrand("GTAT"), "CATA", "String GTAT is");
