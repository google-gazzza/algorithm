// https://www.codewars.com/kata/554e4a2f232cdd87d9000038/train/javascript
// [JS][7kyu] Complementary DNA
// complementary-dna

const CONVERT_OBJ = {
  A: "T",
  T: "A",
  C: "G",
  G: "C",
};

function DNAStrand(dna) {
  return dna
    .split("")
    .map((item) => CONVERT_OBJ[item])
    .join("");
}

DNAStrand("AAAA") === "TTTT";
DNAStrand("ATTGC") === "TAACG";
DNAStrand("GTAT") === "CATA";
