// [JS][7kyu] Two to One
// https://www.codewars.com/kata/5656b6906de340bd1b0000ac

function longest(s1, s2) {
  const strSet = new Set();
  for (const str of s1) {
    strSet.add(str);
  }
  for (const str of s2) {
    strSet.add(str);
  }
  return [...strSet].sort().join("");
}

longest("aretheyhere", "yestheyarehere") === "aehrsty";
longest("loopingisfunbutdangerous", "lessdangerousthancoding") ===
  "abcdefghilnoprstu";
longest("inmanylanguages", "theresapairoffunctions") === "acefghilmnoprstuy";
