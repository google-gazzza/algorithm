const sortAndStringFy = (x) => JSON.stringify(x.split('').sort());
const isAnagram = (s, t) => sortAndStringFy(s) === sortAndStringFy(t);

const s = "anagram";
const t = "nagaram";

isAnagram(s, t);
//?
