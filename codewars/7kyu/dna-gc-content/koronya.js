// [JS][7kyu] DNA GC-content
// dna-gc-content
// https://www.codewars.com/kata/5747a9bbe2fab9a0c400012f/train/javascript

const gcContent = (dna) => {
  const dnaLength = dna.length
  const gcCount = (dna.match(/[GC]/g) || []).length
  return dnaLength === 0 ? 0.0 : (gcCount / dnaLength) * 100
}

gcContent('G') === 100
gcContent('C') === 100
gcContent('A') === 0
gcContent('T') === 0
gcContent('AAA') === 0.0
gcContent('AAACCCGGGTTT') === 50

gcContent('') === 0.0
