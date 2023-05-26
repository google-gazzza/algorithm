// [JS][7kyu] Isograms
// isograms
// https://www.codewars.com/kata/54ba84be607a92aa900000f1/train/javascript

const isIsogram = (str) => {
  const set = new Set();
  for (const s of str) {
    const ss = s.toLowerCase();
    if (set.has(ss) === true) {
      return false;
    }
    set.add(s);
  }

  return true;
};

isIsogram("Dermatoglyphics") === true;
isIsogram("isogram") === true;
isIsogram("aba") === false;
isIsogram("moOse") === false;
isIsogram("isIsogram") === false;
isIsogram("") === true;
