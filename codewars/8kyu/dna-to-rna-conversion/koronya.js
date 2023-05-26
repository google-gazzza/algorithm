// [JS][8kyu] DNA to RNA Conversion
// dna-to-rna-conversion
// https://www.codewars.com/kata/5556282156230d0e5e000089/train/javascript
const DNAtoRNA = (dna) =>
  dna
    .split("")
    .map((item) => (item === "T" ? "U" : item))
    .join("");

DNAtoRNA("TTTT") === "UUUU";
DNAtoRNA("GCAT") === "GCAU";
DNAtoRNA("GACCGCCGCC") === "GACCGCCGCC";
