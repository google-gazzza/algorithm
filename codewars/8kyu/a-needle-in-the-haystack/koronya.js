// [JS][8kyu] A Needle in the Haystack
// a-needle-in-the-haystack
// https://www.codewars.com/kata/56676e8fabd2d1ff3000000c/train/javascript

const findNeedle = (haystack) =>
  `found the needle at position ${haystack.indexOf("needle")}`;

findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]);
findNeedle([
  "3",
  "123124234",
  undefined,
  "needle",
  "world",
  "hay",
  2,
  "3",
  true,
  false,
]);
