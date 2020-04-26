// https://www.codewars.com/kata/551dc350bf4e526099000ae5/

const songDecoder = (str) => str.replace(/(WUB)+/g, ' ').trim();
// it's lambda expression version of best practice

console.log(songDecoder("AWUBBWUBC"), "A B C", "WUB should be replaced by 1 space");
console.log(songDecoder("AWUBWUBWUBBWUBWUBWUBC"), "A B C", "multiples WUB should be replaced by only 1 space");
console.log(songDecoder("WUBAWUBBWUBCWUB"), "A B C", "heading or trailing spaces should be removed");
